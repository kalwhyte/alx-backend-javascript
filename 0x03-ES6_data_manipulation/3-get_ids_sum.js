export default function getStudentIdsSum(students) {
  if (Array.isArray(students) === false) {
    return [];
  }
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
