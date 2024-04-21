# JS-HOF-inbuiltMethod

## Submission Instructions [Please note]

## Maximum Marks - 11

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Installation

```
npm install --engine-strict
```

## Test

```
npm test
```

## Test (Watch mode)

```
npm test -- --watchAll
```

## file structure

most of your work would happen in the `src` directory.

```
✅ Submit the problem [1 mark]

### Test cases for question1.js
----------------------------------------------

✅ function combiningArrays must return correct groceries array [1 marks]
✅ function restObjects must return correct personDetails object [1 mark]
✅ function mergingObjects must return correct studentWithCourse [1 marks]
✅ function defaultFunction must return correct response according to the parameter [1 marks]
✅ function employeeInformation Extract name and department of the second employee [1 marks]
✅ Object with the count of each unique string in the array [1 marks]
✅ write a function that returns a new array containing only the file paths that have a .png or .jpg extension [1 marks]
✅ write a function that returns a new array where each string has its first and last letters swapped [1 marks]
✅  write a function that logs the number of words in each sentence to the console [1 marks]
✅ sort the number array of numbers [1 marks]

```

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive. Please try to follow as it is you can check using a running test case otherwise, you will lose marks for a particular part</span>._

# question1.js

<h2 style="color:#215dc8">
 Problem statement.1
</h2> 
define a `combiningArrays` function that takes input as 
    - fruits array
    - vegetables array

- Create the 'groceries' array by combining 'fruits' and 'vegetables'

- Your task is to create a new array **`groceries`** by combining both arrays using the spread operator is compulsory

- `combiningArrays` return `groceries` array

```javascript
const fruits = ["mango", "grape", "papaya"];
const vegetables = ["tomato", "cucumber", "onion"];

console.log(combiningArrays(fruits, vegetables)); // [ "mango", "grape", "papaya", "tomato", "cucumber", "onion" ]
```

<h2 style="color:#215dc8">
 Problem statement.2
</h2>

define a `restObjects` function that takes input as - person object with properties 1. name 2. age 3. address

- Create the `'personDetails'` object by removing the `name` from 'person' object

- Your task is to return a new object **`personDetails`** by removing the `name` key from **`person`** object using the `rest` operator is compulsory

- `restObjects` return `rest` object

```javascript
const person = { name: "John", age: 30, address: "123 Main St" };

console.log(restObjects(person)); //{ age: 30, address: "123 Main St" }
```

<h2 style="color:#215dc8">
 Problem statement.3
</h2>

define a `mergingObjects` function that takes input as - student object - course

- Create the 'studentWithCourse' object by merging 'student' and 'course'

- You have two objects **`student`** and **`course`**. Your task is to create a new object **`studentWithCourse`** by merging the properties of both objects using the spread operator is compulsory

- `mergingObjects` return `studentWithCourse` object

```javascript
const student = { name: "Aman", age: 25 };
const course = { courseName: "Math", teacher: "Mr. Bhat" };

console.log(mergingObjects(student, course)); // { name: 'Aman', age: 25, courseName: 'Math', teacher: 'Mr. Bhat' }
```

<h2 style="color:#215dc8">
 Problem statement.4
</h2>

define a `defaultFunction` function that takes parameters with default value `"default"` as - parameter1 - parameter2

- Create a object with keys `parameter1` and `parameter2` if the function parameters gets any value the the keys are populated with the corresponding value else the value should be `default`.

```javascript
let obj1 = defaultFunction(); //{ parameter1: 'default', parameter2: 'default' }
let obj2 = defaultFunction("one"); //{ parameter1: 'one', parameter2: 'default' }
```

<h2 style="color:#215dc8">
 Problem statement.5
</h2>

- You are given an array of employee objects, each containing information about an employee.

- Your task is to utilize destructuring to extract and manipulate the data based on specific requirements.

- define an `employeeInformation` function that takes input as

  - employees

- Extract the **`name`** and **`department`** of the second employee in the array and assign them to variables `secondEmployeeName` and `secondEmployeeDepartment`.

- `employeeInformation` return object with secondEmployeeName and secondEmployeeDepartment

```javascript
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); // { secondEmployeeName: 'Jane Smith',secondEmployeeDepartment: 'Finance' }
```

<h1 style="color:#215dc8">
 Use right Higher Order Functions to get the outputs
</h1>

<h2 style="color:#215dc8">
 Problem statement.6
</h2>

#### UniqueString

- input

```javascript
const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
```

- output

```javascript
{ apple: 3, banana: 2, orange: 1, pear: 1 }

```

- provided a function` UniqueString` that takes an array of strings as input and returns an object with the count of each unique string in the array, using .reduce() array method.

<h2 style="color:#215dc8">
 Problem statement.7
</h2> 
#### findImage
- input

```javascript
const filePaths = [
  "/images/logo.png",
  "/images/avatar.jpg",
  "/assets/file.pdf",
  "/assets/img/background.png",
  "/downloads/document.pdf",
  "main/index.html",
  "main/index.css",
];
```

- output

```javascript
["/images/logo.png", "/images/avatar.jpg", "/assets/img/background.png"];
```

- Given an array of strings representing file paths, write a function that returns a new array containing only the file paths that have a `.png` or `.jpg` extension, using .filter()
- as in the output `.pdf` file is not there.

<h2 style="color:#215dc8">
 Problem statement.8
</h2>

#### swapStrings

- input

```javascript
const strings = const strings = [
  "This",
  "array",
  "of",
  "strings",
  "should",
  "be",
  "swapped",
  "by",
  "the",
  "function",
];
```

- output

```javascript
[
  "shiT",
  "yrraa",
  "fo",
  "strings",
  "dhouls",
  "eb",
  "dwappes",
  "yb",
  "eht",
  "nunctiof",
];
```

- Given an array of strings, write a function that returns a new array where each string has its first and last letters swapped using .map().

<h2 style="color:#215dc8">
 Problem statement.9
</h2>

#### countWords

- input

```javascript
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];
```

- output

```javascript
output should look like this.
"sentence 1 contains 9 words."
```

- Given an array of strings representing sentences, write a function that logs `(console.log())` the number of words in each sentence to the console using .forEach()
- for each sentence print a message `"sentence 1 contains 9 words."` in console.
- here in the message `1` is index(one base(starts from one)) of the sentence and `9` is the number of words it contains.both the value should be changed as per the sentence.

<h2 style="color:#215dc8">
 Problem statement.10
</h2>

#### sortNumbers

- input

```javascript
const numbers = [89, 233, 377, 21, 34, 55, 610, 987, 1597, 144, 7, 13];
```

- output

```javascript
[7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
```

- Given an array of unsorted numbers, write a function `sortNumbers` that sort the numbers in ascending order using .sort() method.

#### The Problem is tested on CP

<img src="https://i.imgur.com/2DMt1Gw.png" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
