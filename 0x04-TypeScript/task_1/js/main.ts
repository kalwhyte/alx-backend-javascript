// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
//yearsOfExperience(number) this attribute is optional
//location(string) this attribute should always be defined
//Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}

// Create instance of TeacherInterface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Define the Director Interface that extends the Teacher Interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create instance of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);


// Write a function printTeacher:
  // It accepts two arguments firstName and lastName
  // It returns the first letter of the firstName and the full lastName
  // Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Create instance of printTeacherFunction
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('John', 'Doe'));

// Write a Class named StudentClass:
  // The constructor accepts firstName(string) and lastName(string) arguments
  // The class has a method named workOnHomework that return the string Currently working
  // The class has a method named displayName. It returns the firstName of the student
  // The constructor of the class should be described through an Interface
  // The class should be described through an Interface
//Requirements:

  // You can reuse the Webpack configuration from the previous exercise to compile the code.
  // When running npm run build, no TypeScript error should be displayed.
  // Every variable should use TypeScript when possible.

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  constructor(firstName: string, lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentClass = new StudentClass('Alice', 'Smith');

console.log(student.workOnHomework());
console.log(student.displayName());