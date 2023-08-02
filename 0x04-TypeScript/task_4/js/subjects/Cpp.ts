namespace Subjects {
  export interface Teacher {
    experienceTeachingReact: any;
    experienceTeacherC?: number;
  }

  export class Cpp extends Subject {
    getTeacher: any;
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher?.experienceTeacherC) {
        return 'Available Teacher: ${teacher.firstName}';
      } else {
        return 'No available teacher';
      }
    }
  }
}
