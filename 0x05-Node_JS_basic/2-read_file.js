const fs = require('fs');

/**
 * count students
 * @param {string} path - path to file
 */
const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropNames.map((propName, idx) => [
      propName,
      studentPropValues[idx],
    ]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const nStudents = Object.values(studentGroups).reduce(
    (pre, cur) => (pre || []).length + cur.length,
  );
  console.log(`Number of students: ${nStudents}`);
  for (const [field, students] of Object.entries(studentGroups)) {
    const studentNames = students
      .map((student) => student.firstname)
      .join(', ');
    console.log(
      `Number of students in ${field}: ${students.length}. List: ${studentNames}`,
    );
  }
};

module.exports = countStudents;
