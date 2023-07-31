function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      if (grade) {
        return { ...student, grade: grade.grade };
        // eslint-disable-next-line no-else-return
      } else {
        return { ...student, grade: 'N/A' };
      }
    });
}

export default updateStudentGradeByCity;
