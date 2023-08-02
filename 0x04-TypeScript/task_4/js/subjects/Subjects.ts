namespace Subjects {
  export class Subject {
    private _teacher?: Teacher;

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }

    protected get teacher(): Teacher | undefined {
      return this._teacher;
    }
  }
}
