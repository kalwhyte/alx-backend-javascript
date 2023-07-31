export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) === false) {
    return [];
  }
  const studentsByCity = students.filter(
    (student) => student.location === city,
  );
  const studentIds = studentsByCity.map((student) => student.id);
  const updatedStudents = studentsByCity.map((student) => {
    const grade = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id,
    );
    if (grade.length === 0) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: grade[0].grade };
  });
  const otherStudents = students.filter(
    (student) => studentIds.indexOf(student.id) === -1,
  );
  return [...updatedStudents, ...otherStudents];
}
