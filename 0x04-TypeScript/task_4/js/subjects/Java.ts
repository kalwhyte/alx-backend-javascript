namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class Java extends Subject {
		getTeacher: any;
		getRequirements(): string {
			return 'Here is the list of requirements for Java';
		}

		getAvailableTeacher(): string {
			const teacher = this.getTeacher();
			if (teacher?.experienceTeachingJava) {
				return `Available Teacher: ${teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}
