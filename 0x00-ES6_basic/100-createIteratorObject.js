/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default function createIteratorObject(report) {
  const employeeList = report.allEmployees;
  const departments = Object.keys(employeeList);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex >= departments.length) {
        return { done: true };
      }
      const currentDepartment = departments[currentDepartmentIndex];
      const currentEmployees = employeeList[currentDepartment];

      if (currentEmployeeIndex >= currentEmployees.length) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next;
      }

      const currentEmployee = currentEmployees[currentEmployeeIndex];
      currentEmployeeIndex += 1;

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
