// Create a function getListStudentIds that returns an array of ids from a list of object.

export default function getListStudentIds(students) {
  if (Array.isArray(students) === false) {
    return [];
  }
  return students.map((student) => student.id);
}
