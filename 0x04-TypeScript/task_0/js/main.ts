interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentlist: Student[] = [
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
    location: 'Paris'
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
  },
];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentlist.forEach((student) => {
  const row = document.createElement('tr');
  const firstName = document.createElement('td');
  const lastName = document.createElement('td');

  firstName.textContent = student.firstName;
  lastName.textContent = student.lastName;

  row.appendChild(firstName);
  row.appendChild(lastName);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);