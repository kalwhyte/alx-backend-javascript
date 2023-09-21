const fs = require('fs');

/**
 * Counting students.
 * @param {string} path.
 */
const countStudents = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, whyte) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (whyte) {
        const fileLines = whyte.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines.shift().split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

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
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group
            .map((student) => student.firstname)
            .join(', ');
          console.log(
            `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
          );
        }
        resolve(true);
      }
    });
  });

module.exports = countStudents;
