/* eslint-disable no-underscore-dangle */
export default function HolbertonCourse(name, length, students) {
  if (typeof name !== 'string') {
    throw TypeError('Name must be a string');
  }
  if (typeof length !== 'number') {
    throw TypeError('Length must be a number');
  }
  if (!Array.isArray(students)) {
    throw TypeError('Students must be an array of strings');
  }
  if (students.some((student) => typeof student !== 'string')) {
    throw TypeError('Students must be an array of strings');
  }

  this._name = name;
  this._length = length;
  this._students = students;
}
