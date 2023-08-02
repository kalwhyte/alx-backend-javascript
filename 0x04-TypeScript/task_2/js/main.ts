// Create the DirectorInterface interface with the 3 expected methods:
    // workFromHome() returning a string
    // getCoffeeBreak() returning a string
    // workDirectorTasks() returning a string

interface DirectorInterface {
  workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

// Create the TeacherInterface interface with the 3 expected methods:
	// workFromHome() returning a string
	// getCoffeeBreak() returning a string
	// workTeacherTasks() returning a string

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// Create a Director class that implements the DirectorInterface
  // workFromHome should return the string Working from home
	// getToWork should return the string Getting a coffee break
	// workDirectorTasks should return the string Getting to director tasks

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

// Create a Teacher class that implements the TeacherInterface
	// workFromHome should return the string Cannot work from home
	// getToWork should return the string Cannot have a break
	// workTeacherTasks should return the string Getting to work

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}

	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

// Create a createEmployee with the following requirements:
	// It can return either a Director or a Teacher instance
	// It accepts 1 arguments:
	// salary(either number or string)
	// if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

// Create a isDirector
	// It accepts employee as an argument
	// It will be used as a type predicate and if employee is a Director

function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

// Write a function executeWork
	// It accepts an employee argument
	// if the employee is a Director, it will call workDirectorTasks
	// if the employee is a Teacher, it will call workTeacherTasks

function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

// Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:
	// It takes todayClass as an argument
	// It will return the string Teaching Math if todayClass is Math
	// It will return the string Teaching History if todayClass is History

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else {
		return 'Teaching History';
	}
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass('Math'));
console.log(teachClass('History'));