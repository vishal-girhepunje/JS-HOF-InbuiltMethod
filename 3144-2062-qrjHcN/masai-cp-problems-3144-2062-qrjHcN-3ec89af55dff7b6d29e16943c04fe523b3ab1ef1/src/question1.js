//Problem 1 Combining Arrays*********************************

// You have two arrays **`fruits`** and **`vegetables`**. Your task is to create a new array **`groceries`** by combining both arrays using the spread operator .

function combiningArrays(fruits, vegetables) {
  // Create the 'groceries' array by combining 'fruits' and 'vegetables'
   return [...fruits, ...vegetables];
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables));



//Problem 2 *******************************************
function restObjects(person) {
  // return person details with out the person name
  const { name, ...rest } = person; 
  return rest;
}

const person = { name: "John", age: 30, address: "123 Main St" };

let personDetails=restObjects(person);

 console.log(personDetails); //{ age: 30, address: "123 Main St" }

//Problem 3 Merging Objects*********************************************

// You have two objects **`student`** and **`course`**. Your task is to create a new object **`studentWithCourse`** by merging the properties of both objects using the spread operator destructuring .

function mergingObjects(student, course) {
  return { ...student, ...course };
}
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

 console.log(mergingObjects(student, course)) // { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }

//Problem 4    default parameter in function- ***************************

function defaultFunction(parameter1="default", parameter2="default") {
  return { parameter1, parameter2 }; 
}

 let obj1=defaultFunction(); //{ parameter1: 'default', parameter2: 'default' }
 let obj2=defaultFunction("one"); //{ parameter1: 'one', parameter2: 'default' }
 let obj3=defaultFunction("one", "two"); //{ parameter1: 'one', parameter2: 'two' }

 console.log(obj1,obj2,obj3);
//  console.log(obj1,obj2,obj3);
//Problem 5 object shorthand-Employee Information*********************************************

// You are given an array of employee objects, each containing information about an employee. Your task is to utilize destructuring to extract and manipulate the data based on specific requirements .
// You are given an array of employee objects, each containing information about an employee. Your task is to utilize destructuring to extract and manipulate the data based on specific requirements .

// **Employee Data:**

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// part-1
function employeeInformation(employees) {
  const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
  return { secondEmployeeName, secondEmployeeDepartment }; 
}

console.log(employeeInformation(employees))// { secondEmployeeName: 'Jane Smith',secondEmployeeDepartment: 'Finance' }

//Problem 6
// reduce method   **************************************************

const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];

function UniqueString(strings) {
  return strings.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1; 
    return acc;
  }, {});
}

 console.log(UniqueString(strings));
//Problem 7

// filter method ******************************************

const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];

function findImage(filePaths) {
  return filePaths.filter((path) => path.endsWith(".png") || path.endsWith(".jpg")); 
}
console.log(findImage(filePaths)); 

//Problem 8 map method ***********************************************
const strings1 = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];
function swapStrings(strings) {
   return strings.map((str) => {
    if (str.length <= 1) return str; 
    const first = str[0]; 
    const last = str[str.length - 1]; 
    const middle = str.slice(1, -1); 
    return `${last}${middle}${first}`; 
  });
}
 console.log(swapStrings(strings1));

//Problem 9 foreach method ********************************************************
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];

function countWords(arr) {
  sentences.forEach((sentence, index) => {
    const wordsCount = sentence.split(" ").length; 
    console.log(`sentence ${index + 1} contains ${wordsCount} words.`); 
  });
}

countWords(sentences)

//Problem 10

const numbers = [89, 233, 377, 21, 34, 55, 610, 987, 1597, 144, 7, 13];

function sortNumbers(arr) {return numbers.sort((a, b) => a - b); }

console.log(sortNumbers(numbers));

//don't remove below export statement part
export {
  combiningArrays,
  restObjects,
  mergingObjects,
  defaultFunction,
  employeeInformation,
  UniqueString,
  findImage,
  swapStrings,
  countWords,
  sortNumbers,
};
