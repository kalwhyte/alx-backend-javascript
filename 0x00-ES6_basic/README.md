# 0x00. ES6 Basics

`JavaScript` `ES6`

 ```By: Johann Kerbrat, Engineering Manager at Uber Works```
 ```Weight: 1```
 ```Project will start Jul 24, 2023 6:00 AM, must end by Jul 25, 2023 6:00 AM```
 ```Checker was released at Jul 24, 2023 12:00 PM```
 ```An auto review will be launched at the deadline```

## Concepts
**For this project, we expect you to look at these concepts:**

+ [Modern Javascript](https://intranet.alxswe.com/concepts/541)
+ [Software Linter](https://intranet.alxswe.com/concepts/542)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230724%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230724T123353Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=968860288ef69996ed367c36188663926298dabed46c7f9e887f364bc29aa7ea)

## Resources
**Read or watch:**

+ [ECMAScript 6 - ECMAScript 2015](https://intranet.alxswe.com/rltoken/NW1dFLFExQ12_hD8yvkV3A)
+ [Statements and declarations](https://intranet.alxswe.com/rltoken/sroRUsUvOZV28V99MHDenw)
+ [Arrow functions](https://intranet.alxswe.com/rltoken/N2WLylppCtkkX3YFFtyUHw)
+ [Default parameters](https://intranet.alxswe.com/rltoken/kbw9gMO6sdeOKAY23SYVgA)
+ [Rest parameter](https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ)
+ [Javascript ES6 — Iterables and Iterators](https://intranet.alxswe.com/rltoken/tLzISlMwgd4Ud2h0UfNomg)
This project contains tasks for learning the basics of ECMAScript 2015 (ES6).

## Learning Objectives
**At the end of this project, you are expected to be able to explain to anyone, without the help of Google:**

* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops

## Tasks

+ [x] 0. **Const or let?**
  + Modify:
    + function `taskFirst` to instantiate variables using `const`.
    + function `taskNext` to instantiate variables using `let`.

  ```js
  export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
  }

  export function getLast() {
    return ' is okay';
  }

  export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();

    return combination;
  }
  ```

+ [x] 1. **Block Scope**
  + Given what you’ve read about var and hoisting, modify the variables inside the function `taskBlock` so that the variables aren't overwritten inside the conditional block.

  ```js
  export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;

    if (trueOrFalse) {
      var task = true;
      var task2 = false;
    }

    return [task, task2];
  }
  ```

+ [x] 2. **Arrow functions**
  + Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)

  ```js
  export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = function add(newNeighborhood) {
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    };
  }
  ```

+ [x] 3. **Parameter defaults**
  + Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

  ```js
  export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
    if (expansion1989 === undefined) {
      expansion1989 = 89;
    }

    if (expansion2019 === undefined) {
      expansion2019 = 19;
    }
    return initialNumber + expansion1989 + expansion2019;
  }
  ```

+ [x] 4. **Rest parameter syntax for functions**
  + Modify the following function to return the number of arguments passed to it using the rest parameter syntax

  ```js
  export default function returnHowManyArguments() {

  }
  ```

+ [x] 5. **The wonders of spread syntax**
  + Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

  ```js
  export default function concatArrays(array1, array2, string) {
  }
  ```

+ [x] 6. **Take advantage of template literals**
  + Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

  ```js
  export default function getSanFranciscoDescription() {
    const year = 2017;
    const budget = {
      income: '$119,868',
      gdp: '$154.2 billion',
      capita: '$178,479',
    };

    return 'As of ' + year + ', it was the seventh-highest income county in the United States' \
          ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco' \
          ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
  }
  ```

+ [x] 7. **Object property value shorthand syntax**
  + Notice how the keys and the variable names are the same?

Modify the following function’s `budget` object to simply use the keyname instead.

  ```js
  export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      income: income,
      gdp: gdp,
      capita: capita,
    };

    return budget;
  }
  ```

+ [x] 8. **No need to create empty objects before adding in properties**
  + Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object
  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {};

    budget[`income-${getCurrentYear()}`] = income;
    budget[`gdp-${getCurrentYear()}`] = gdp;
    budget[`capita-${getCurrentYear()}`] = capita;

    return budget;
  }
  ```

+ [x] 9. **ES6 method properties**
  + Rewrite `getFullBudgetObject` to use ES6 method properties in the fullBudget `object`.

  ```js
  import getBudgetObject from './7-getBudgetObject.js';

  export default function getFullBudgetObject(income, gdp, capita) {
    const budget = getBudgetObject(income, gdp, capita);
    const fullBudget = {
      ...budget,
      getIncomeInDollars: function (income) {
        return `$${income}`;
      },
      getIncomeInEuros: function (income) {
        return `${income} euros`;
      },
    };

    return fullBudget;
  }
  ```

+ [x] 10. **For...of Loops**<
  + Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.

  ```js
  export default function appendToEachArrayValue(array, appendString) {
    for (var idx in array) {
      var value = array[idx];
      array[idx] = appendString + value;
    }

    return array;
  }
  ```

+ [x] 11. **Iterator**
  + Write a function named `createEmployeesObject` that will receive two arguments:
    + `departmentName` (String).
    + `employees` (Array of Strings).

    ```js
    export default function createEmployeesObject(departmentName, employees) {

    }
    ```
    The function should return an object with the following format:
    ```php
    {
      $departmentName: [
        $employees,
      ],
    }
    ```

+ [x] 12. **Let's create a report object**
  + Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.
    ```js
    export default function createReportObject(employeesList) {

    }
    ```
  + `createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.
  + `allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.
  + The method property receives employeesList and returns the number of departments.I would suggest suggest thinking back to the ES6 method property syntax.

  ```
    {
    allEmployees: {
        engineering: [
            'John Doe',
            'Guillaume Salva',
        ],
    },
    };
  ```

+ [x] 13. **Iterating through report objects**
  + Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

    ```js
    export default function createIteratorObject(report) {

    }
    ```

  + This function will return an iterator to go through every employee in every department.

+ [x] 14. **Iterate through object**<br/>[101-iterateThroughObject.js](101-iterateThroughObject.js) contains a script that meets the following requirements.
  + Write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.

    ```js
    export default function iterateThroughObject(reportWithIterator) {

    }
    ```

  + It should return every employee name in a string, separated by ` | `.