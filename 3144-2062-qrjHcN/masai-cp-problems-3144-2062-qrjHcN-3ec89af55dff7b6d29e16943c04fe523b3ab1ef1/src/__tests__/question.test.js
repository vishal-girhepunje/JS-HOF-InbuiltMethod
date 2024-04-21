import {
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
} from "../question1";

global.score = 1;

///*********************************************************Test cases for question1.js */

describe("question1", () => {
  test("function combiningArrays must return correct groceries array", () => {
    const fruits = ["f1", "f2", "f3", "f4"];
    const vegetables = ["v1", "v2"];
    const groceries = combiningArrays(fruits, vegetables);
    expect();

    expect(typeof groceries).toBe("object");
    expect(groceries.length).toBe(6);
    expect(groceries[3]).toBe("f4");
    expect(groceries[4]).toBe("v1");

    const fruits1 = ["apple", "banana", "orange", "grapes", "strawberry"];
    const vegetables1 = ["carrot", "broccoli", "spinach", "tomato", "cucumber"];
    const groceries1 = combiningArrays(fruits1, vegetables1);
    expect();

    expect(typeof groceries1).toBe("object");
    expect(groceries1.length).toBe(10);
    expect(groceries1[2]).toBe("orange");
    expect(groceries1[5]).toBe("carrot");

    global.score += 1;
  }); //1

  test("function restObjects must return correct personDetails object", () => {
    const person = {
      name: "Emily Smith",
      age: 28,
      address: "456 Elm Ave",
    };
    const personDetails = restObjects(person);
    expect();

    expect(typeof personDetails).toBe("object");
    expect(personDetails.name).toBeUndefined();
    expect(personDetails.age).toBe(28);
    expect(personDetails.address).toBe("456 Elm Ave");

    global.score += 1;
  }); //1

  test("function mergingObjects must return correct studentWithCourse ", () => {
    const student = { name: "Bob", age: 22 };
    const course = { courseName: "Science", teacher: "Ms. Johnson" };

    const newStudent = mergingObjects(student, course);

    expect(typeof newStudent).toBe("object");
    expect(newStudent.name).toBe("Bob");
    expect(newStudent.age).toBe(22);
    expect(newStudent.courseName).toBe("Science");
    expect(newStudent.teacher).toBe("Ms. Johnson");

    global.score += 1;
  }); //1
  test("function defaultFunction must return correct response according to the parameter ", () => {
    let obj1 = defaultFunction();
    let obj2 = defaultFunction("one");
    let obj3 = defaultFunction("one", "two");

    expect(typeof obj1).toBe("object");
    expect(obj1.parameter1).toBe("default");
    expect(obj1.parameter2).toBe("default");

    expect(typeof obj2).toBe("object");
    expect(obj2.parameter1).toBe("one");
    expect(obj2.parameter2).toBe("default");

    expect(typeof obj3).toBe("object");
    expect(obj3.parameter1).toBe("one");
    expect(obj3.parameter2).toBe("two");

    global.score += 1;
  }); //1

  test("function employeeInformation Extract name and department of the second employee", () => {
    const employees = [
      {
        name: "Michael Brown",
        age: 25,
        department: "Marketing",
        salary: 55000,
      },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
      {
        name: "Johnn",
        age: 39,
        department: "placements",
        salary: 6200,
      },
    ];

    const ans = employeeInformation(employees);
    expect(ans.secondEmployeeName).toBe("Emma Wilson");
    expect(ans.secondEmployeeDepartment).toBe("Sales");

    global.score += 1;
  }); //1

  test("Object with the count of each unique string in the array", () => {
    const strings = [
      "apple",
      "banana",
      "apple",
      "orange",
      "banana",
      "pear",
      "apple",
    ];
    const strings1 = ["apple", "banana", "apple", "banana", "apple"];

    let ans = { apple: 3, banana: 2, orange: 1, pear: 1 };
    let ans1 = { apple: 3, banana: 2 };

    expect(UniqueString(strings)).toMatchObject(ans);
    expect(UniqueString(strings1)).toMatchObject(ans1);
    global.score += 1;
  });

  test("write a function that returns a new array containing only the file paths that have a .png or .jpg extension,", function () {
    const filePaths = [
      "/images/pic1.jpg",
      "/images/pic2.png",
      "/assets/img/background.jpg",
      "/assets/img/logo.png",
      "/downloads/document.pdf",
      "/downloads/image.png",
      "/downloads/image.jpg",
    ];

    let ans = [
      "/images/pic1.jpg",
      "/images/pic2.png",
      "/assets/img/background.jpg",
      "/assets/img/logo.png",
      "/downloads/image.png",
      "/downloads/image.jpg",
    ];

    expect(findImage(filePaths)).toMatchObject(ans);
    global.score += 1;
  });

  test("write a function that returns a new array where each string has its first and last letters swapped", function () {
    const strings = [
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

    let ans = [
      "oellH",
      "dorlw",
      "shit",
      "si",
      "na",
      "example",
      "yrraa",
      "fo",
      "strings",
    ];

    expect(swapStrings(strings)).toMatchObject(ans);
    global.score += 1;
  });
  test(" write a function that logs the number of words in each sentence to the console", function () {
    const sentences = [
      "The quick brown fox jumps over the lazy dog.",
      "She sells seashells by the seashore.",
      "I have a dream that one day this nation will rise up.",
      "To be or not to be, that is the question.",
      "In the beginning, God created the heavens and the earth.",
    ];

    const logSpy = jest.spyOn(global.console, "log");

    countWords(sentences);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(5);

    expect(logSpy).toHaveBeenCalledWith("sentence 1 contains 9 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 2 contains 6 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 3 contains 12 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 4 contains 10 words.");
    expect(logSpy).toHaveBeenCalledWith("sentence 5 contains 10 words.");
    // expect(logSpy.mock.calls).toContainEqual(['some other message']);

    logSpy.mockRestore();

    global.score += 1;
  });

  test("sort the number array of numbers", function () {
    const numbers = [89, 233, 377, 21, 34, 55, 610, 987, 1597, 144, 7, 13];
    // [
    //     7,  13,  21,   34,
    //     55,  89, 144,  233,
    //    377, 610, 987, 1597
    //  ]

    let o2 = sortNumbers(numbers);
    expect(typeof o2).toBe("object");

    expect(o2[0]).toBe(7);
    expect(o2[1]).toBe(13);
    expect(o2[2]).toBe(21);
    expect(o2[3]).toBe(34);
    expect(o2[9]).toBe(610);
    expect(o2[10]).toBe(987);
    expect(o2[11]).toBe(1597);

    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
