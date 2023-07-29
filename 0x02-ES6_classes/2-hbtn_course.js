/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long for the course.
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Get the course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Set course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * @param {any}
   * @param {*} length
   */
  get length() {
    return this._length;
  }

  /**
   * set the length of the course.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * get the names.
   * @param {*} isArray
   */
  get students() {
    return this._students;
  }

  /**
   * set the student array.
   * @param {*} isArray
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
