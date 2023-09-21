const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counting students.
 * @param {string} path.
 */
const countStudents = (path) =>
  new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(Error('Cannot load the database'));
    }
    if (path) {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const reportParts = [];
          const fileLines = data.toString('utf-8').trim().split('\n');
          const studentGroups = {};
          const dbFieldNames = fileLines.shift().split(',');
          const studentPropNames = dbFieldNames.slice(
            0,
            dbFieldNames.length - 1,
          );
          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValue = studentRecord.slice(
              0,
              studentRecord.length - 1,
            );
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            const studentEntries = studentPropNames.map((propName, idx) => [
              propName,
              studentPropValue[idx],
            ]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }

          const totalStudents = Object.values(studentGroups).reduce(
            (pre, cur) => (pre || []).length + cur.length,
          );
          reportParts.push(`Number of students: ${totalStudents}`);
          for (const [field, group] of Object.entries(studentGroups)) {
            const studentNames = group
              .map((student) => student.firstname)
              .join(', ');
            reportParts.push(
              `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
            );
          }
          resolve(reportParts.join('\n'));
        }
      });
    }
  });

const SERVER_ROUTE_HANDLER = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(
            err instanceof Error ? err.message : err.toString(),
          );
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 500;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const { routeHandler } of SERVER_ROUTE_HANDLER) {
    if (SERVER_ROUTE_HANDLER.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server running at http://${hostname}:${port}/\n`);
});

module.exports = app;
