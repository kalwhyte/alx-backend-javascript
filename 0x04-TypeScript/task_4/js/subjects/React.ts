namespace Subjects {
  export interface Teacher {
    experienceTeacherReact?: number;
  }

  export class React extends Subject {
    getTeacher: any;
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher?.experienceTeachingReact) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
