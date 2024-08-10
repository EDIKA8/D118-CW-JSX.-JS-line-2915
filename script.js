// const friend = {
//     name: "Dato",
//     age: 17,
//     favoriteColor: "blue",
// }

// const me = {
//     name: "Soso",
//     age: 15,
//     favoriteColor: "green",
// };

// console.log(friend.name); 
// console.log(me.favoriteColor); 

// me.name = "Soso";

// me.favoriteColor = "green";

// console.log(me.name); 
// console.log(me.favoriteColor); 

// let car = {
//     name: "Bmw",
//     model: "E46",
//     weight: 1450,
//     start: function() {
//         console.log("Starting the car...");
//     },
//     brake: function(seconds) {
//         console.log("The car will brake in " + seconds + " seconds.");
//     }
// };

// car.start = function() {
//     console.log("Hello world");
// };

// car.start(3); 

// car.brake(5);

// let car = {
//     name: "Bmw",
//     model: "E46",
//     weight: 1450,
//     start: function(startingg) {
//         console.log("car is starting");
//     },

//     break: function(seconds) {
//         console.log("car will break in" + second + "second")
//         for (let i = seconds; i > 0; i--) {
//             console.log(i + " second");
//         };
//     }

// };

// function displayObject() {
//     let name = document.getElementById("nameInput").value;

//     let obj = {
//         name: name,
//     };

//     document.getElementById("result").innerText = "You Get: " + obj.name;
// }



// const me = {
//     name: "Soso",
//     age: 15,
//     city: "Gurjaani"
// };

// me.age = 15;

// console.log(me.name);

// const person = {
//     name: "Luka",
//     age: 17,
//     city: "Kutaisi",
//     greet: function() {
//         console.log("Hello, my name is " + this.name + "!");
//     }
// };

// person.greet(); // გამოიტანს გამარჯობა ჩემი სახელი არის ლუკა


// const person1 = {
//     name: "Soso",
//     age: 15,
//     city: "Gurjaani"
// };

// const person2 = {
//     name: "Luka",
//     age: 17,
//     city: "Kutaisi"
// };

// console.log(person1 === person2); // გამოიტანს false


// const school = {
//     name: "GOA School",
//     students: [
//         { name: "Soso", age: 15 },
//         { name: "Daniel", age: 15 },
//         { name: "Mate", age: 15 }
//     ]
// };

// console.log(school)


// document.getElementById("userForm").addEventListener("submit", function(event) { // სარეგისტრაციო ფორმა
// event.preventDefault(); 
    

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
    
 
//     if (username.length >= 5 && password.length >= 8) {

//         const userObject = {
//             username: username,
//             password: password
//         };

//         console.log(userObject);
        
//         document.getElementById("userForm").reset();
//     } else {
//         alert("Username must be at least 5 characters long and password must be at least 8 characters long.");
//     }
// }); // ...


// function StudentID(name, lastName, score) { // კონსტრუქტორი.
//     this.name = name;
//     this.lastName = lastName;
//     this.score = score;
// }


// const student1 = new StudentID("Soso", "Valishvuli", 90);
// console.log("Student 1:", student1.name, student1.lastName, "-", "Score:", student1.score);

// const student2 = new StudentID("Daniel", "Abramiani", 88);
// console.log("Student 2:", student2.name, student2.lastName, "-", "Score:", student2.score);

// const student3 = new StudentID("Mate", "Rekhviashvili", 78);
// console.log("Student 3:", student3.name, student3.lastName, "-", "Score:", student3.score);

// const student4 = new StudentID("Giorgi", "Qimeridze", 85);
// console.log("Student 4:", student4.name, student4.lastName, "-", "Score:", student4.score);

// const student5 = new StudentID("Luka", "Zazashvili", 90);
// console.log("Student 5:", student5.name, student5.lastName, "-", "Score:", student5.score);


// function Person(name, lastname, age) { // Person namelastnameage:
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
    
//     this.person = function() {
//         console.log("Name: " + this.name);
//         console.log("Lastname: " + this.lastname);
//         console.log("Age: " + this.age);
//     };
// }

// const person = new Person("Soso", "Valishvili", 15);

// console.log(person);

// document.getElementById('registrationForm').addEventListener('submit', function(event) { // სარეგისტრაციო ფორმა 2.
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const passwordMatchError = document.getElementById('passwordMatchError');

//     if (password !== confirmPassword) {
//         passwordMatchError.textContent = "პაროლი რომელიც თქვენ ჩაწერეთ არ ემთხვევა ზემოთ მოცემულ პაროლს.";
//         event.preventDefault();
//     } else {
//         passwordMatchError.textContent = "";
//         alert("ანგარიში წარმატებით შეიქმნა„!");
//     }
// }); //...

// setTimeout(code)
// setTimeout(code, delay)

// setTimeout(functionRef)
// setTimeout(functionRef, delay)
// setTimeout(functionRef, delay, param1)
// setTimeout(functionRef, delay, param1, param2)
// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)


// function digitalClock() {
//     setInterval(() => {
//         const now = new Date();
//         const hours = String(now.getHours()).padStart(2, '0');
//         const minutes = String(now.getMinutes()).padStart(2, '0');
//         const seconds = String(now.getSeconds()).padStart(2, '0');
//         console.log(`${hours}:${minutes}:${seconds}`);
//     }, 1000);
// }

//  digitalClock();



// function calculateCircleArea(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }

//  console.log(calculateCircleArea(5)); 



// function toKebabCase(str) {
//     return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).replace(/^-/, '');
// }

//  console.log(toKebabCase("helloWorld"))



// function countdownTimer(targetDate) {
//     setInterval(() => {
//         const now = new Date();
//         const difference = Math.floor((targetDate - now) / 1000);
//         const days = Math.floor(difference / (60 * 60 * 24));
//         const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
//         const minutes = Math.floor((difference % (60 * 60)) / 60);
//         const seconds = difference % 60;
//         console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`);
//     }, 1000);
// }


//  countdownTimer(new Date(Date.now() + 10000)); 



// function fibonacciSequence(numTerms) {
//     const sequence = [0, 1];
//     for (let i = 2; i < numTerms; i++) {
//         sequence[i] = sequence[i - 1] + sequence[i - 2];
//     }
//     return sequence;
// }

//  console.log(fibonacciSequence(10));



// function getDayOfWeek(date) {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysOfWeek[date.getDay()];
// }

//  console.log(getDayOfWeek(new Date())); 


 
// function currentDateFormats() {
//     const now = new Date();
//     const ddmmYYYY = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
//     const mmddYYYY = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
//     const yyyyMMdd = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
//     return { ddmmYYYY, mmddYYYY, yyyyMMdd };
// }


//  console.log(currentDateFormats());



// function isLeapYear(date) {
//     const year = date.getFullYear();
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// console.log(isLeapYear(new Date(2024, 1, 29))); 



// function differenceInDays(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000; 
//     return Math.round(Math.abs((date1 - date2) / oneDay));
// }


//  const startDate = new Date(2024, 0, 1);
//  const endDate = new Date(2024, 0, 10);
//  console.log(differenceInDays(startDate, endDate)); 



// function calculateAge(birthDate) {
//     const now = new Date();
//     const diff = now - birthDate;
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }


//  console.log(calculateAge(new Date(1990, 0, 1)));

// setTimeout(function() {
//     console.log("wait 3 more seconds for you get hello GOA")
// },2000);

// setTimeout(function() {
//     console.log("hello GOA")
// }, 5000);

// setTimeout(function() {
//     console.log("and you get 100pts")
// }, 5700);

// let counter = 99;

// setTimeout(function() {
//     counter++;
//     console.log(counter);
// },7000); // ++ გამოიტანს 121, -- გამოიტანს 119.


// let counter = 0;  //davaleba 1

//   function incrementCounter() {
//     counter++;
//     document.getElementById('counterText').textContent = 'Counter: ' + counter;

//     let backgroundColors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#99ffff'];
//     let randomIndex = Math.floor(Math.random() * backgroundColors.length);
//     document.getElementById('counterDiv').style.backgroundColor = backgroundColors[randomIndex];

//     let textColors = ['#ffffff', '#000000', '#ff00ff', '#00ffff', '#ff6600'];
//     randomIndex = Math.floor(Math.random() * textColors.length);
//     document.getElementById('counterText').style.color = textColors[randomIndex];
//   }


// function changeImage() {  //davaleba 2.
//   var currentSrc = document.getElementById('image').src;
//   if (currentSrc.endsWith('image1.jpg')) {
//     document.getElementById('image').src = 'images/image2.jpg';
//   } else {
//     document.getElementById('image').src = 'images/image1.jpg';
//   }
// }


// function generateRandomNumbers() {  //davaleba 3.
//   var numbers = [];
//   while (numbers.length < 5) {
//     var randomNumber = Math.floor(Math.random() * 10) + 1;
//     if (!numbers.includes(randomNumber)) {
//       numbers.push(randomNumber);
//     }
//   }

//   document.getElementById('para1').innerText = 'Random Number: ' + numbers[0];
//   document.getElementById('para2').innerText = 'Random Number: ' + numbers[1];
//   document.getElementById('para3').innerText = 'Random Number: ' + numbers[2];
//   document.getElementById('para4').innerText = 'Random Number: ' + numbers[3];
//   document.getElementById('para5').innerText = 'Random Number: ' + numbers[4];
// }

// function changeURL() {  //davaleba 4.
//   var link = document.getElementById('link');
//   var newURL = 'https://www.youtube.com/@Goal_Oriented_Academy__GOA';
//   link.href = newURL;

//   var container = document.querySelector('.container');
//   container.style.backgroundColor = '#ff6347';
// }

// let tasks = []; //to do list

// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const task = taskInput.value.trim();
//     if (task !== "") {
//         tasks.push(task);
//         displayTasks();
//         taskInput.value = "";
//     }
// }

// function editTask(index) {
//     const newTask = prompt("Enter the new task:");
//     if (newTask !== null && newTask.trim() !== "") {
//         tasks[index] = newTask.trim();
//         displayTasks();
//     }
// }

// function deleteTask(index) {
//     tasks.splice(index, 1);
//     displayTasks();
// }

// function displayTasks() {
//     const taskList = document.getElementById("taskList");
//     taskList.innerHTML = "";
//     tasks.forEach((task, index) => {
//         const li = document.createElement("li");
//         li.textContent = task;
//         const modifyBtn = createButton("Edit", () => editTask(index));
//         const deleteBtn = createButton("Delete", () => deleteTask(index));
//         li.appendChild(modifyBtn);
//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     });
// }

// function createButton(text, onClick) {
//     const button = document.createElement("button");
//     button.textContent = text;
//     button.addEventListener("click", onClick);
//     return button;
// }

// displayTasks();


// // String methods
// let str = "   Hello, Goa!   ";
// console.log(str.toUpperCase()); 
// console.log(str.trim()); 
// console.log(str.charAt(7)); 
// console.log(str.indexOf("goa")); 
// console.log(str.split(", ")); 
// console.log(str.substring(3, 8)); 
// console.log(str.startsWith("Hello")); 
// console.log(str.endsWith("goa!"));
// console.log(str.replace("goa", "academy")); 


// // Array methods
// let arr1 = [1, 2, 3];
// arr1.push(4);
// console.log(arr1); 
// arr1.pop();
// console.log(arr1); 
// let arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2)); 
// console.log(arr1.join(" - ")); 
// console.log(arr1.slice(1, 2)); 
// console.log(arr1.indexOf(2)); 
// arr1.forEach(function(item) {
//     console.log(item);
// });


// // Object methods
// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj)); 
// console.log(Object.values(obj)); 
// console.log(Object.entries(obj)); 
// let newObj = Object.assign({}, obj, { d: 4 });
// console.log(newObj); 
// console.log(obj.hasOwnProperty('a'));


// // Math methods
// console.log(Math.abs(-5));
// console.log(Math.max(2, 5, 10)); 
// console.log(Math.min(2, 5, 10)); 
// console.log(Math.round(3.7)); 
// console.log(Math.floor(3.7));
// console.log(Math.ceil(3.2)); 
// console.log(Math.random()); 


// const container = document.getElementById("container"); // Move with Arrow Keys
// const block = document.getElementById("block");

// let left = 0;
// let topPos = 0;
// const step = 5;

// function moveBlock(direction) {
//     switch (direction) {
//         case "ArrowUp":
//             topPos = Math.max(topPos - step, 0);
//             break;
//         case "ArrowDown":
//             topPos = Math.min(topPos + step, container.clientHeight - block.clientHeight);
//             break;
//         case "ArrowLeft":
//             left = Math.max(left - step, 0);
//             break;
//         case "ArrowRight":
//             left = Math.min(left + step, container.clientWidth - block.clientWidth);
//             break;
//     }
//     block.style.left = left + "px";
//     block.style.top = topPos + "px";
// }

// document.addEventListener("keydown", function(event) {
//     const key = event.key;
//     if (key.startsWith("Arrow")) {
//         event.preventDefault();
//         moveBlock(key);
//     }
// });


// document.addEventListener("DOMContentLoaded", () => { //Remove event listener
//     let counter = 0;
//     const maxValue = 10;

//     const incrementCounter = () => {
//         counter++;
//         document.getElementById("counterValue").textContent = counter;

//         if (counter === maxValue) {
//             document.getElementById("incrementButton").removeEventListener("click", incrementCounter);
//             alert("შენ მიაღწიე ლიმიტს, მოვლენის მსმენელი წაიშალა!");
//         }
//     };

//     document.getElementById("incrementButton").addEventListener("click", incrementCounter);
// });


// function myFunction() { //variables
//     let localVar = "I am a local";
//     console.log(localVar);
// }


// myFunction();

// let globalVar = "I am a global";

// function myFunction() {
//     console.log(globalVar);  
// }

// myFunction();
// console.log(globalVar);  


                 //HW FOR DAY 80
    
//     const people = [ // 1
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 }
//   ];
  
//   const names = people.map(person => person.name);
//   console.log(names);


//   function isPrime(num) { // 2
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
//   }
  
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeStatus = numbers.map(num => isPrime(num));
//   console.log(primeStatus); 
  
  

//   const students = [ // 3
//     { name: 'Alice', grade: 70 },
//     { name: 'Bob', grade: 55 },
//     { name: 'Charlie', grade: 85 }
//   ];
  
//   const passedStudents = students.filter(student => student.grade > 60);
//   console.log(passedStudents); 


  
//   const files = ['image1.jpg', 'document.pdf', 'image2.jpg', 'script.js']; // 4

// const jpgFiles = files.filter(fileName => fileName.endsWith('.jpg'));
// console.log(jpgFiles);

  

// function customMap(arr, callback) { // 5
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       mappedArray.push(callback(arr[i], i, arr));
//     }
//     return mappedArray;
//   }
  
//   const originalArray = [1, 2, 3];
//   const doubledArray = customMap(originalArray, num => num * 2);
//   console.log(doubledArray); 



    // const ages = [32, 33, 16, 40]; // filter

    // document.getElementById("demo").innerHTML = ages.filter(checkAdult);
               
    // function checkAdult(age) {
    
    //   return age >= 18;
    // }

    
    // const fruits = new Map([ //map create
    //   ["apples", 500],
    //   ["bananas", 300],
    //   ["oranges", 200]
    // ]);
    
    // document.getElementById("demo").innerHTML = fruits.get("apples");



                       // DAY 82 CW - DICTIONARY 

  

                      //DAY 83 HW

// function sumArrayElements(arr) { //1
//     let sum = 0;
//     arr.forEach(num => {
//         sum += num;
//     });
//     return sum;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayElements(numbers)); 



// function logArrayElements(arr) { //2
//     arr.forEach((element, index) => {
//         console.log(`Element at index ${index}: ${element}`);
//     });
// }

// const strings = ["apple", "banana", "orange"];
// logArrayElements(strings);



// function productOfArrayElements(arr) { //3
//     return arr.reduce((product, num) => {
//         return product * num;
//     }, 1);
// }

// const numbers = [2, 3, 4];
// console.log(productOfArrayElements(numbers));



// function mergeArrayOfArrays(arr) { //4
//     return arr.reduce((merged, currentArray) => {
//         return merged.concat(currentArray);
//     }, []);
// }

// const arrayOfArrays = [
//     [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }],
//     [{ id: 3, name: 'Bob' }]
// ];

// console.log(mergeArrayOfArrays(arrayOfArrays));



// function customForEach(arr, callback) { //5
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// const numbers = [1, 2, 3];
// customForEach(numbers, (num, index) => {
//     console.log(`Element at index ${index}: ${num}`);
// });



// function customReduce(arr, callback, initialValue) { //6
//     let accumulator = initialValue === undefined ? arr[0] : initialValue;
//     const startIndex = initialValue === undefined ? 1 : 0;

//     for (let i = startIndex; i < arr.length; i++) {
//         accumulator = callback(accumulator, arr[i], i, arr);
//     }

//     return accumulator;
// }

// const numbers = [1, 2, 3, 4];
// const sum = customReduce(numbers, (acc, num) => acc + num, 0);
// console.log(sum); 



// function countWordFrequencies(arr) { //7
//     return arr
//         .flatMap(sentence => sentence.split(' '))
//         .reduce((wordCounts, word) => {
//             wordCounts[word] = (wordCounts[word] || 0) + 1;
//             return wordCounts;
//         }, {});
// }

// const sentences = ["Hello world", "This is a world of hello"];
// console.log(countWordFrequencies(sentences));



    // D87 HW

              // EVERY:
//Check if every number in an array is positive
// function allNumbersPositive(numbers) {
//     for (let number of numbers) {
//         if (number <= 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(allNumbersPositive(numbers));  
// //

// //Verify if every string in an array is non-empty
// function allStringsNonEmpty(strings) {
//     for (let string of strings) {
//         if (string === "") {
//             return false;
//         }
//     }
//     return true;
// }

// const strings = ["hello", "world", "javascript"];
// console.log(allStringsNonEmpty(strings));  
// //

// //Confirm if every boolean in an array is true
// function allBooleansTrue(booleans) {
//     for (let boolean of booleans) {
//         if (!boolean) {
//             return false;
//         }
//     }
//     return true;
// }

// const booleans = [true, true, true];
// console.log(allBooleansTrue(booleans)); 
// //

// //Check if every number in an array is even
// function allNumbersEven(numbers) {
//     for (let number of numbers) {
//         if (number % 2 !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const numbersEven = [2, 4, 6, 8];
// console.log(allNumbersEven(numbersEven));  
// //

//            // SOME

// //Check if some grades in an array are above a passing level
// function hasPassingGrades(grades, passingGrade) {
//     for (let grade of grades) {
//         if (grade > passingGrade) {
//             return true;
//         }
//     }
//     return false;
// }

// const grades = [55, 60, 70, 80];
// const passingGrade = 65;
// console.log(hasPassingGrades(grades, passingGrade));  
// //

// //Verify if some user objects in an array have the role of 'admin'
// function containsAdminUsers(users) {
//     for (let user of users) {
//         if (user.role === 'admin') {
//             return true;
//         }
//     }
//     return false;
// }

// const users = [
//     {name: "Alice", role: "user"},
//     {name: "Bob", role: "admin"},
//     {name: "Charlie", role: "user"}
// ];
// console.log(containsAdminUsers(users)); 
// //

// //Confirm if some objects in a list have an overdue property set to true
// function hasOverdueItems(items) {
//     for (let item of items) {
//         if (item.overdue === true) {
//             return true;
//         }
//     }
//     return false;
// }

// const items = [
//     {name: "Book1", overdue: false},
//     {name: "Book2", overdue: true},
//     {name: "Book3", overdue: false}
// ];
// console.log(hasOverdueItems(items));  
// //

// //Check if some numbers in an array are prime numbers
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// }

// function includesPrimeNumbers(numbers) {
//     for (let number of numbers) {
//         if (isPrime(number)) {
//             return true;
//         }
//     }
//     return false;
// }

// const numbers = [4, 6, 8, 9, 11];
// console.log(includesPrimeNumbers(numbers));  
// //



//                //Find

// //Identify the first negative number in an array
// function findFirstNegativeNumber(numbers) {
//     for (let number of numbers) {
//         if (number < 0) {
//             return number;
//         }
//     }
//     return null;  

// const numbers = [4, 2, -3, 5, -1];
// console.log(findFirstNegativeNumber(numbers));
// //

// //Return the first user object in an array with a specific ID
// function findUserById(users, id) {
//     for (let user of users) {
//         if (user.id === id) {
//             return user;
//         }
//     }
//     return null;  
// }

// const users = [
//     {id: 1, name: "Alice"},
//     {id: 2, name: "Bob"},
//     {id: 3, name: "Charlie"}
// ];
// console.log(findUserById(users, 2));  
// //

// //Locate the first task object in an array that has complete property set to incomplete
// function findFirstIncompleteTask(tasks) {
//     for (let task of tasks) {
//         if (task.complete === false) {
//             return task;
//         }
//     }
//     return null; 
// }

// const tasks = [
//     {id: 1, task: "Do laundry", complete: true},
//     {id: 2, task: "Clean room", complete: false},
//     {id: 3, task: "Buy groceries", complete: false}
// ];
// console.log(findFirstIncompleteTask(tasks));  
// //

// //Search for the first product in an array with a specific name
// function findProductByName(products, name) {
//     for (let product of products) {
//         if (product.name === name) {
//             return product;
//         }
//     }
//     return null;  
// }

// const products = [
//     {id: 1, name: "Laptop"},
//     {id: 2, name: "Phone"},
//     {id: 3, name: "Tablet"}
// ];
// console.log(findProductByName(products, "Phone")); 
// //

//                //FindIndex

// //Determine the index of the first prime number in an array of integers
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// }

// function findIndexOfFirstPrimeNumber(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (isPrime(numbers[i])) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const numbers = [4, 6, 8, 9, 11];
// console.log(findIndexOfFirstPrimeNumber(numbers));  
// //

// //Retrieve the index of the user object in an array with the role of 'admin'
// function findIndexOfUserWithAdminRole(users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].role === 'admin') {
//             return i;
//         }
//     }
//     return -1;  
// }

// const users = [
//     {id: 1, name: "Alice", role: "user"},
//     {id: 2, name: "Bob", role: "admin"},
//     {id: 3, name: "Charlie", role: "user"}
// ];
// console.log(findIndexOfUserWithAdminRole(users));  
// //

// // Identify the index of the first item in a list with an overdue property set to true
// function findIndexOfFirstOverdueItem(items) {
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].overdue === true) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const items = [
//     {name: "Book1", overdue: false},
//     {name: "Book2", overdue: true},
//     {name: "Book3", overdue: false}
// ];
// console.log(findIndexOfFirstOverdueItem(items));  
// //

// //Search for the index of the first product object in an array with an inStock property set to false
// function findIndexOfProductOutOfStock(products) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].inStock === false) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const products = [
//     {id: 1, name: "Laptop", inStock: true},
//     {id: 2, name: "Phone", inStock: false},
//     {id: 3, name: "Tablet", inStock: true}
// ];
// console.log(findIndexOfProductOutOfStock(products));  
// //


//                            //IndexOF

// // Find the index of the first occurrence of a specific character in a string
// function indexOfFirstOccurrenceOfCharacter(string, char) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const str = "hello world";
// const char = 'o';
// console.log(indexOfFirstOccurrenceOfCharacter(str, char));  
// //

// //Determine the index of the first occurrence of a specific number in an array
// function indexOfFirstOccurrenceOfNumber(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === target) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const numbers = [1, 2, 3, 4, 5, 3];
// const targetNumber = 3;
// console.log(indexOfFirstOccurrenceOfNumber(numbers, targetNumber));  
// //

// // Find the index of the first occurrence of a specific substring in a string
// function indexOfFirstOccurrenceOfSubstring(string, substring) {
//     for (let i = 0; i <= string.length - substring.length; i++) {
//         if (string.slice(i, i + substring.length) === substring) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const mainString = "hello world";
// const subString = "world";
// console.log(indexOfFirstOccurrenceOfSubstring(mainString, subString));  
// //

// //Determine the index of the first occurrence of a specific element in an array of objects based on a particular property value
// function indexOfFirstOccurrenceInArrayOfObjects(objects, property, value) {
//     for (let i = 0; i < objects.length; i++) {
//         if (objects[i][property] === value) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const products = [
//     {id: 1, name: "Laptop", inStock: true},
//     {id: 2, name: "Phone", inStock: false},
//     {id: 3, name: "Tablet", inStock: true}
// ];
// const propertyName = "name";
// const propertyValue = "Phone";
// console.log(indexOfFirstOccurrenceInArrayOfObjects(products, propertyName, propertyValue));  
// //


//                  //LastIndexOF

// //Find the last index of a specific character in a given sentence
// function lastIndexOfCharacter(sentence, char) {
//     for (let i = sentence.length - 1; i >= 0; i--) {
//         if (sentence[i] === char) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const sentence = "hello world";
// const char = 'o';
// console.log(lastIndexOfCharacter(sentence, char));  
// //

// // Determine the last index of a prime number in an array of integer
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// }

// function lastIndexOfPrimeNumber(numbers) {
//     for (let i = numbers.length - 1; i >= 0; i--) {
//         if (isPrime(numbers[i])) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const numbers = [4, 6, 8, 9, 11, 13, 6];
// console.log(lastIndexOfPrimeNumber(numbers));  
// //

// //Find the last index of a specific word in an array of strings.
// function lastIndexOfWord(strings, word) {
//     for (let i = strings.length - 1; i >= 0; i--) {
//         if (strings[i] === word) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const strings = ["apple", "banana", "cherry", "apple", "date"];
// const word = "apple";
// console.log(lastIndexOfWord(strings, word));  
// //

// //Determine the last index of an active user object in an array based on an isActive property
// function lastIndexOfActiveUser(users) {
//     for (let i = users.length - 1; i >= 0; i--) {
//         if (users[i].isActive) {
//             return i;
//         }
//     }
//     return -1;  
// }

// const users = [
//     {id: 1, name: "Alice", isActive: false},
//     {id: 2, name: "Bob", isActive: true},
//     {id: 3, name: "Charlie", isActive: false},
//     {id: 4, name: "David", isActive: true}
// ];
// console.log(lastIndexOfActiveUser(users));  
// //

         // DAY 89 HW
       
         //Function Tasks
        
 //1
// function sumArray(numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// }
// //

// //2
// function longestWord(words) {
//     let longest = '';
//     for (const word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }
// //

// //3
// function countProperties(obj) {
//     let count = 0;
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             count++;
//         }
//     }
//     return count;
// }
// //

// //4
// function getObjectKeys(obj) {
//     let keys = [];
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             keys.push(key);
//         }
//     }
//     return keys;
// }
// //

// //5
// function varScopeExample() {
//     if (true) {
//         var x = 10; 
//     }
//     console.log(x); 
// }

// function letScopeExample() {
//     if (true) {
//         let y = 20; 
//     }
//     console.log(y);
// }

// function constScopeExample() {
//     if (true) {
//         const z = 30; 
//         z = 40; 
//     }
//     console.log(z); 
// }
// //

// //6
// hoistedFunction(); 
// function hoistedFunction() {
//     console.log("Hello, world!");
// }

// console.log(hoistedVar); 
// var hoistedVar = 10;
// //


//                //Arrow Function Tasks
// //1
// const square = (num) => num * num;
// //

// //2
// const filterEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);
// //

// //3
// const sumElements = (numbers) => numbers.reduce((sum, num) => sum + num, 0);
// //

// //4
// const generateFibonacci = (length) => {
//     if (length < 2) return Array(length).fill(1);
//     const fib = [1, 1];
//     while (fib.length < length) {
//         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     }
//     return fib;
// };
// //

// //5
// const isPalindrome = (str) => {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// };
// //

// //6
// document.querySelector('#toggleButton').addEventListener('click', () => {
//     const element = document.querySelector('#elementToToggle');
//     if (element.style.display === 'none') {
//         element.style.display = 'block';
//     } else {
//         element.style.display = 'none';
//     }
// });
// //



             //D91 HW
          
          //Assign
// const person = { //1
//     name: 'Soso Valishvili',
//     age: 15
// };

// const employee = Object.assign({}, person, { position: 'Developer' });

// console.log(employee); 
// //


// const obj1 = { a: 1, b: 2 }; //2
// const obj2 = { b: 3, c: 4 };


// const mergedObject = Object.assign({}, obj1, obj2);

// console.log(mergedObject); 
// //


// const target = {}; //3
// const source1 = { a: 1 };
// const source2 = { b: 2 };
// const source3 = { c: 3 };

// Object.assign(target, source1, source2, source3);

// console.log(target); 
// //


// const original = { a: 1, b: 2, c: 3 }; //4

// const clone = Object.assign({}, original);

// console.log(clone); 
// //


// const targetObj = { a: 1, b: 2 }; //5
// const sourceObj = { b: 3, c: 4 };

// Object.assign(targetObj, sourceObj);

// console.log(targetObj); 
// //


// const arrayOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }]; //6

// const mergedArrayObject = Object.assign({}, ...arrayOfObjects);

// console.log(mergedArrayObject); 
// //


// const existingObject = { a: 1, b: 2 }; //7
// const newValues = { b: 3, c: 4 };

// Object.assign(existingObject, newValues);

// console.log(existingObject); 
// //


// function extend(obj1, obj2) { //8
//     return Object.assign({}, obj1, obj2);
// }

// const objA = { x: 1, y: 2 };
// const objB = { y: 3, z: 4 };

// const extendedObject = extend(objA, objB);
// console.log(extendedObject);
// //


// function manualAssign(target, ...sources) { //9
//     sources.forEach(source => {
//         for (let key in source) {
//             if (source.hasOwnProperty(key)) {
//                 target[key] = source[key];
//             }
//         }
//     });
//     return target;
// }

// const targetObj2 = {};
// const sourceObj1 = { a: 1 };
// const sourceObj2 = { b: 2 };

// manualAssign(targetObj2, sourceObj1, sourceObj2);
// console.log(targetObj2); 
// //


// function manualAssign2(target, ...sources) { //10
//     for (const source of sources) {
//         for (const key of Object.keys(source)) {
//             target[key] = source[key];
//         }
//     }
//     return target;
// }

// const targetObj3 = {};
// const sourceObjA = { x: 1 };
// const sourceObjB = { y: 2 };

// manualAssign2(targetObj3, sourceObjA, sourceObjB);
// console.log(targetObj3);
// //


//            //Rest
// const numbers = [1, 2, 3, 4, 5]; //1

// const [first, second, ...rest] = numbers;

// console.log(first); 
// console.log(second); 
// console.log(rest); 
// //


// function collectArgs(...args) { //2
//     console.log(args); 
// }

// collectArgs(1, 'a', true, null); 
// //


// function sum(...numbers) { //3
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3)); 
// console.log(sum(4, 5, 6, 7)); 
// //


// function logArguments(...args) { //4
//     console.log(args);
// }

// function forwardArguments(...args) {
//     logArguments(...args);
// }

// forwardArguments('hello', 42, true); 
// //


// const person = { name: 'Soso', age: 15, city: 'Gurjaani' }; //5

// const { name, age, ...rest } = person;

// console.log(name); 
// console.log(age); 
// console.log(rest); 
// //


//           //Spread
// const array1 = [1, 2, 3]; //1
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const combinedArray = [...array1, ...array2, ...array3];

// console.log(combinedArray); 
// //


// const obj1 = { a: 1, b: 2 }; //2
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };

// const mergedObject = { ...obj1, ...obj2, ...obj3 };

// console.log(mergedObject);
// //


// const initialArray = [1, 2, 3]; //3

// const modifiedArray = [...initialArray, 4, 5];

// console.log(modifiedArray); 

// const modifiedArray2 = [0, ...initialArray.slice(1)];

// console.log(modifiedArray2); 
// //


// const originalArray = [1, 2, 3, 4, 5]; //4

// const copiedArray = [...originalArray];

// console.log(copiedArray);
// console.log(copiedArray === originalArray); 
// //


// const str = "goa"; //5

// const charArray = [...str];

// console.log(charArray); 
// //


//          //Destrucding
// const array = [1, 2, 3]; //1

// const [first, second, third] = array;

// console.log(first); 
// console.log(second); 
// console.log(third); 
// //


// const person = { //2
//     name: 'Soso',
//     age: 15,
//     city: 'Gurjaani'
// };

// const { name, age, city } = person;

// console.log(name); 
// console.log(age); 
// console.log(city); 
// //


// const person = { //3
//     name: 'Soso',
//     age: 15
// };

// const { name: personName, age: personAge } = person;

// console.log(personName); 
// console.log(personAge); 
// //


// const array = [1, 2, 3, 4, 5]; //4

// const [first, , third, , fifth] = array;

// console.log(first); 
// console.log(third);
// console.log(fifth); 
// //


// const people = [ //5
//     { name: 'Soso', age: 15 },
//     { name: 'Data', age: 16 },
//     { name: 'Luka', age: 18 }
// ];

// for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
// }
// //


// const array = [1, 2, 3, 4, 5]; //6

// const [first, second, ...rest] = array;

// console.log(first); 
// console.log(second);
// console.log(rest);
// //


// const array = [1, 2, 3, 4, 5]; //7

// const [first, , , , last] = array;

// console.log(first); 
// console.log(last);
// //


// const people = [ //8
//     { name: 'Soso', age: 15 },
//     { name: 'Data', age: 16 },
//     { name: 'Luka', age: 18 }
// ];

// function filterByAge(minAge) {
//     return people.filter(({ age }) => age >= minAge);
// }

// const result = filterByAge(30);
// console.log(result); 
// //


// const mixedArray = [1, { name: 'Soso' }, 3, { name: 'Data' }] //9

// const [first, { name: firstName }, third, { name: secondName }] = mixedArray;

// console.log(first); 
// console.log(firstName); 
// console.log(third); 
// console.log(secondName); 
// //


// function manualDestructuring(obj) { //10
//     const values = [];
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             values.push(obj[key]);
//         }
//     }
//     return values;
// }

// const sampleObject = { a: 1, b: 2, c: 3 };
// const result = manualDestructuring(sampleObject);
// console.log(result);
// //
  

      //D92 HW
// class Person { 
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const person1 = new Person('Soso', 15, 'Male'); 

// class Person { 
//     constructor(name, age, gender) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   }
  
// console.log(person1.name); 
// console.log(person1.age);  
// console.log(person1.gender);

// person1.greet(); 


// const person2 = new Person('Data', 16, 'Male');
// person2.name = 'Data';
// person2.age = 16;
// console.log(person2.name);
// console.log(person2.age);   


// const person3 = new Person('Soso', 15, 'Male');
// const person4 = new Person('Data', 16, 'Male');

// console.log(person3);
// console.log(person4);


// class Person {
//     constructor(name, age, gender) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//     }
  
//     getName() {
//       return this.name;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   }
  

//   class Person {
//     constructor(name, age, gender) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//     }
  
//     get isAdult() {
//       return this.age >= 18;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   }
  
//   const person5 = new Person('Soso', 15, 'Male');
//   console.log(person5.isAdult); 
  

//   class Person {
//     #privateProperty;
  
//     constructor(name, age, gender) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//       this.#privateProperty = 'This is private';
//     }
  
//     getPrivateProperty() {
//       return this.#privateProperty;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   }
  
//   const person6 = new Person('Soso', 15, 'Male');
//   console.log(person6.getPrivateProperty());
//   console.log(person6.#privateProperty); 
  

// DAY 94 HW

// const promise1 = new Promise((resolve, reject) => { //1
//   resolve("Hello, World!");
// });

// promise1.then(result => {
//   console.log(result);
// });
// //

// const promise2 = new Promise((resolve, reject) => { //2
//   setTimeout(() => {
//     resolve("Resolved after 2 seconds");
//   }, 2000);
// });

// promise2.then(result => {
//   console.log(result);
// });
// //

// const promise3 = new Promise((resolve, reject) => { //3
//   resolve("First");
// });

// promise3
//   .then(result => {
//     return result + " -> Second";
//   })
//   .then(result => {
//     console.log(result);
//   });
//   //

//   const promise4 = new Promise((resolve, reject) => { //4
//     resolve("Stage 1");
//   });
  
//   promise4
//     .then(result => {
//       console.log(result);
//       return "Stage 2";
//     })
//     .then(result => {
//       console.log(result);
//       return "Stage 3";
//     })
//     .then(result => {
//       console.log(result);
//     });
//   //

//   const promise5 = new Promise((resolve, reject) => { //5
//     setTimeout(() => {
//       reject(new Error("Rejected after 1 second"));
//     }, 1000);
//   });
  
//   promise5.catch(error => {
//     console.log(error.message);
//   });
//   //

//   function printMessages() { //6
//     setTimeout(() => {
//       console.log("One");
//       setTimeout(() => {
//         console.log("Two");
//         setTimeout(() => {
//           console.log("Three");
//         }, 3000);
//       }, 2000);
//     }, 1000);
//   }
  
//   printMessages();
//   //

//   const delayedMessage = (message, delay) => { //7
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(message);
//       }, delay);
//     });
//   };
  
//   delayedMessage("First Message", 1000)
//     .then(result => {
//       console.log(result);
//       return delayedMessage("Second Message", 2000);
//     })
//     .then(result => {
//       console.log(result);
//       return delayedMessage("Third Message", 3000);
//     })
//     .then(result => {
//       console.log(result);
//     });
//   //

//   const promise8 = new Promise((resolve, reject) => { //8
//     const success = true; 
//     if (success) {
//       resolve("Success!");
//     } else {
//       reject(new Error("Specific error message"));
//     }
//   });
  
//   promise8
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.log(error.message);
//     });
//   //

//   const promise9 = new Promise((resolve, reject) => { //9
//     resolve("Resolved message");
//   });
  
//   promise9.then(result => {
//     console.log(result);
//   });
//   //

//   const promise10 = new Promise((resolve, reject) => { //10
//     resolve(1);
//   });
  
//   promise10
//     .then(result => {
//       return result * 2; 
//     })
//     .then(result => {
//       return result + 3; 
//     })
//     .then(result => {
//       return result - 1; 
//     })
//     .then(result => {
//       console.log(result); 
//     });
//   //


// D95 HW

// const url = "https://fakestoreapi.com/products";

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


//   // Client                    Server
//   // |                         |
//   // | 1. Send Request         |
//   // |------------------------>|
//   // |                         |
//   // |       2. Process        |
//   // |        Request          |
//   // |                         |
//   // | 3. Send Response        |
//   // |<------------------------|
//   // |                         |
//   // | 4. Receive Response     |
//   // |                         |


// // ახალი Promise ობიექტის შექმნა
// let promise = new Promise((resolve, reject) => {
//   // აქ შეგიძლიათ განათავსოთ ასინქრონული ოპერაცია, როგორიცაა API მოთხოვნა
//   let success = true; // ეს მაგალითისთვის

//   if (success) {
//     // თუ ოპერაცია წარმატებით დასრულდა, გამოიძახეთ resolve ფუნქცია
//     resolve("ოპერაცია წარმატებით დასრულდა!");
//   } else {
//     // თუ ოპერაცია არ წარმატებით დასრულდა, გამოიძახეთ reject ფუნქცია
//     reject("ოპერაცია ვერ შესრულდა.");
//   }
// });


// // Promise-ს შედეგების დამუშავება
// promise
//   .then(result => {
//     // თუ Promise შესრულებულია, ეს კოდი შესრულდება
//     console.log(result); // "ოპერაცია წარმატებით დასრულდა!"
//   })
//   .catch(error => {
//     // თუ Promise უარყოფილია, ეს კოდი შესრულდება
//     console.error(error); // "ოპერაცია ვერ შესრულდა."
//   })
//   .finally(() => {
//     // ეს კოდი შესრულდება ნებისმიერ შემთხვევაში
//     console.log("ოპერაციის დასასრული");
//   });


//   let promise = new Promise((resolve, reject) => { // ვქმნით ახალ Promise ობიექტს
//     // ასინქრონული ოპერაცია, როგორიცაა API მოთხოვნა ან ტაიმერი
//     let success = true; // ეს არის ნიმუში. წარმოიდგინეთ, რომ ასინქრონული ოპერაცია დასრულდა წარმატებით
  
//     if (success) {
//       resolve("ოპერაცია წარმატებით დასრულდა!"); // თუ ოპერაცია წარმატებით დასრულდა, გამოიძახეთ resolve ფუნქცია
//     } else {
//       reject("ოპერაცია ვერ შესრულდა."); // თუ ოპერაცია ვერ შესრულდა, გამოიძახეთ reject ფუნქცია
//     }
//   });
  

//   promise
//   .then(result => { // .then() მეთოდი იძახებს ფუნქციას, თუ Promise შესრულებულია (fulfilled)
//     console.log(result); // ბეჭდავს შედეგს: "ოპერაცია წარმატებით დასრულდა!"
//   })
//   .catch(error => { // .catch() მეთოდი იძახებს ფუნქციას, თუ Promise უარყოფილია (rejected)
//     console.error(error); // ბეჭდავს შეცდომას: "ოპერაცია ვერ შესრულდა."
//   })
//   .finally(() => { // .finally() მეთოდი იძახებს ფუნქციას, მიუხედავად იმისა, შესრულებულია თუ უარყოფილია Promise
//     console.log("ოპერაციის დასასრული"); // ბეჭდავს: "ოპერაციის დასასრული"
//   });
  


   //DAY 96 HW

   //3
  
//    const task1 = new Promise((resolve) => { //1
//     setTimeout(() => {
//         resolve("Task 1 complete");
//     }, 2000);
// });

// task1.then((message) => {
//     console.log(message);
// });
// //

// const task2 = new Promise((_, reject) => { //2
//   reject(new Error("Task 2 failed"));
// });

// task2.catch((error) => {
//   console.error(error.message);
// });
// //

// const task3 = Promise.resolve(5); //3

// task3
//     .then((number) => number * 2)
//     .then((doubled) => {
//         console.log(doubled);
//     });
// //

// function task4() { //4
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("First");
//       }, 2000);
//   }).then((message) => {
//       console.log(message);
//       return new Promise((resolve) => {
//           setTimeout(() => {
//               console.log("Second");
//               resolve();
//           }, 1000);
//       });
//   });
// }

// task4();
// //

// function task5() { //5
//   return new Promise((_, reject) => {
//       setTimeout(() => {
//           reject(new Error("Task 3 failed"));
//       }, 2000);
//   }).catch((error) => {
//       console.error(error.message);
//   });
// }

// task5();
// //

// function task6() { //6
//   const delay = Math.floor(Math.random() * 5000) + 1000;
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("Task 1 complete");
//       }, delay);
//   });
// }

// task6().then((message) => {
//   console.log(message);
// });
// //

// function task7() { //7
//   const delay1 = Math.floor(Math.random() * 3000) + 1000;
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve("First");
//       }, delay1);
//   }).then((message) => {
//       console.log(message);
//       const delay2 = Math.floor(Math.random() * 3000) + 1000;
//       return new Promise((resolve) => {
//           setTimeout(() => {
//               console.log("Second");
//               resolve();
//           }, delay2);
//       });
//   });
// }

// task7();
// //

// function task8() { //8
//   const delay = Math.floor(Math.random() * 4000) + 1000;
//   return new Promise((_, reject) => {
//       setTimeout(() => {
//           reject(new Error("Task 3 failed"));
//       }, delay);
//   }).catch((error) => {
//       console.error(error.message);
//   });
// }

// task8();
// //

// function task9() { //9
//   const delay = Math.floor(Math.random() * 5000) + 1000;
//   const randomNumber = Math.random();
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           if (randomNumber > 0.5) {
//               resolve("Task 1 complete");
//           } else {
//               resolve("Task 1 was quick");
//           }
//       }, delay);
//   });
// }

// task9().then((message) => {
//   console.log(message);
// });
// //

// function task10() { //10
//   const delay = Math.floor(Math.random() * 4000) + 1000;
//   const randomNumber = Math.random();
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if (randomNumber < 0.3) {
//               reject(new Error("Task 3 failed"));
//           } else {
//               resolve("Task 3 complete");
//           }
//       }, delay);
//   }).catch((error) => {
//       console.error(error.message);
//   });
// }

// task10().then((message) => {
//   console.log(message);
// });
// //


//   //4
//   const promise11_1 = new Promise((resolve) => { //11
//     setTimeout(() => resolve("Promise 1"), 1000);
// });
// const promise11_2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 2"), 2000);
// });
// const promise11_3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 3"), 3000);
// });

// Promise.all([promise11_1, promise11_2, promise11_3])
//     .then((messages) => {
//         console.log(messages);
//     });
// //


// const randomDelay = () => Math.floor(Math.random() * 5000) + 1000; //12

// const promise12_1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 1"), randomDelay());
// });
// const promise12_2 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 2"), randomDelay());
// });
// const promise12_3 = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise 3"), randomDelay());
// });

// Promise.all([promise12_1, promise12_2, promise12_3])
//     .then((messages) => {
//         console.log(messages);
//     });
// //

// const promise13_1 = new Promise((resolve) => { //13
//   setTimeout(() => resolve("Promise 1"), 1000);
// });
// const promise13_2 = new Promise((_, reject) => {
//   setTimeout(() => reject(new Error("Promise failed")), 2000);
// });
// const promise13_3 = new Promise((resolve) => {
//   setTimeout(() => resolve("Promise 3"), 3000);
// });

// Promise.all([promise13_1, promise13_2, promise13_3])
//   .then((messages) => {
//       console.log(messages);
//   })
//   .catch((error) => {
//       console.error(error.message);
//   });
// //

// const randomCondition = () => Math.random() > 0.5; //14

// const promise14_1 = new Promise((resolve, reject) => {
//     setTimeout(() => randomCondition() ? resolve("Promise 1") : reject(new Error("Promise 1 failed")), 1000);
// });
// const promise14_2 = new Promise((resolve, reject) => {
//     setTimeout(() => randomCondition() ? resolve("Promise 2") : reject(new Error("Promise 2 failed")), 2000);
// });
// const promise14_3 = new Promise((resolve, reject) => {
//     setTimeout(() => randomCondition() ? resolve("Promise 3") : reject(new Error("Promise 3 failed")), 3000);
// });

// Promise.all([promise14_1, promise14_2, promise14_3])
//     .then((messages) => {
//         console.log(messages);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });
// //

// const randomNumber = () => Math.floor(Math.random() * 10) + 1; //15

// const promise15_1 = new Promise((resolve) => {
//     setTimeout(() => resolve(randomNumber()), randomDelay());
// });
// const promise15_2 = new Promise((resolve) => {
//     setTimeout(() => resolve(randomNumber()), randomDelay());
// });
// const promise15_3 = new Promise((resolve) => {
//     setTimeout(() => resolve(randomNumber()), randomDelay());
// });

// Promise.all([promise15_1, promise15_2, promise15_3])
//     .then((numbers) => {
//         const sum = numbers.reduce((acc, num) => acc + num, 0);
//         console.log(sum);
//     });
// //

// const promise16_1 = new Promise((resolve) => { //16
//   setTimeout(() => resolve("Promise 1"), 1000);
// });
// const promise16_2 = new Promise((resolve) => {
//   setTimeout(() => resolve("Promise 2"), 2000);
// });
// const promise16_3 = new Promise((resolve) => {
//   setTimeout(() => resolve("Promise 3"), 3000);
// });

// Promise.race([promise16_1, promise16_2, promise16_3])
//   .then((message) => {
//       console.log(message);
//   });
// //

// const promise17_1 = new Promise((resolve) => { //18
//   setTimeout(() => resolve("Promise 1"), randomDelay());
// });
// const promise17_2 = new Promise((resolve) => {
//   setTimeout(() => resolve("Promise 2"), randomDelay());
// });
// const promise17_3 = new Promise((resolve) => {
//   setTimeout(() => resolve("Promise 3"), randomDelay());
// });

// Promise.race([promise17_1, promise17_2, promise17_3])
//   .then((message) => {
//       console.log(message);
//   });
// //

// const promise19_1 = new Promise((resolve) => { //19
//   setTimeout(() => resolve("Promise 1"), 1000);
// });
// const promise19_2 = new Promise((_, reject) => {
//   setTimeout(() => reject(new Error("Promise failed")), 2000);
// });
// const promise19_3 = new Promise((resolve) => {
//   setTimeout(() => resolve("Promise 3"), 3000);
// });

// Promise.race([promise19_1, promise19_2, promise19_3])
//   .then((message) => {
//       console.log(message);
//   })
//   .catch((error) => {
//       console.error(error.message);
//   });
// //

// const conditionPromise = () => { //20
//   const delay = randomDelay();
//   return new Promise((resolve) => {
//       if (Math.random() > 0.5) {
//           resolve("Instant resolve");
//       } else {
//           setTimeout(() => resolve("Delayed resolve"), delay);
//       }
//   });
// };

// const promise20_1 = conditionPromise();
// const promise20_2 = conditionPromise();
// const promise20_3 = conditionPromise();

// Promise.race([promise20_1, promise20_2, promise20_3])
//   .then((message) => {
//       console.log(message);
//   });
// //


//  //5
//  function fetchDataAndLog() {
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);
//       })
//       .catch(error => {
//           console.error('Error:', error);
//       });
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//       const apiDataDiv = document.getElementById('api-data');
//       apiDataDiv.innerHTML = JSON.stringify(data, null, 2);
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//       const apiDataList = document.getElementById('api-data-list');
//       data.forEach(item => {
//           const listItem = document.createElement('li');
//           listItem.textContent = `Title: ${item.title}, Description: ${item.body}`;
//           apiDataList.appendChild(listItem);
//       });
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//       const apiDropdown = document.getElementById('api-dropdown');
//       data.forEach(user => {
//           const option = document.createElement('option');
//           option.value = user.id;
//           option.textContent = user.name;
//           apiDropdown.appendChild(option);
//       });
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(data => {
//       const apiImagesDiv = document.getElementById('api-images');
//       data.slice(0, 10).forEach(photo => {  
//           const imgElement = document.createElement('img');
//           imgElement.src = photo.thumbnailUrl;
//           imgElement.alt = photo.title;
//           apiImagesDiv.appendChild(imgElement);
//       });
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });


// DAY 98 HW

// fetch('https://jsonplaceholder.typicode.com/posts/1') //1
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //2
//   .then(response => response.json())
//   .then(data => console.log(data));
// //

// fetch('https://invalidurl.typicode.com/posts/1') //3
//   .then(response => response.json())
//   .catch(error => console.error('Fetch error:', error));
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //4
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Fetch error:', error))
//   .finally(() => console.log('Fetch request completed'));
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //5
//   .then(response => response.json())
//   .then(data => {
//     document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//   });
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //6
//   .then(response => response.json())
//   .then(data => {
//     console.log('Title:', data.title);
//     return data;
//   })
//   .then(data => {
//     console.log('Body:', data.body);
//   });
// //

// fetch('https://via.placeholder.com/150') //7
//   .then(response => response.blob())
//   .then(imageBlob => {
//     const imageObjectURL = URL.createObjectURL(imageBlob);
//     const img = document.createElement('img');
//     img.src = imageObjectURL;
//     document.body.appendChild(img);
//   });
// //

// setTimeout(() => { //8
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then(response => response.json())
//       .then(data => console.log(data));
//   }, 3000); // 3 seconds delay
// //  

// fetch('https://jsonplaceholder.typicode.com/posts/1') //9
//   .then(response => {
//     setTimeout(() => {
//       response.json().then(data => console.log(data));
//     }, 3000); // 3 seconds delay
//   });
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //10
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     return new Promise(resolve => setTimeout(resolve, 3000)); // 3 წამის დაგვიანება
//   })
//   .then(() => fetch('https://jsonplaceholder.typicode.com/posts/2'))
//   .then(response => response.json())
//   .then(data => console.log(data));
// //

// fetch('https://invalidurl.typicode.com/posts/1') //11
//   .then(response => response.json())
//   .catch(error => {
//     setTimeout(() => {
//       console.error('Fetch error:', error);
//     }, 3000); 
//   });
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //12
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Fetch error:', error))
//   .finally(() => {
//     setTimeout(() => {
//       console.log('Fetch request completed');
//     }, 3000); 
//   });
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //13
//   .then(response => response.json())
//   .then(data => {
//     setTimeout(() => {
//       alert(JSON.stringify(data));
//     }, 3000); 
//   });
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //14
//   .then(response => response.json())
//   .then(data => {
//     setTimeout(() => {
//       if (data.userId === 1) {
//         document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//       }
//     }, 3000);
//   });
// //

// fetch('https://jsonplaceholder.typicode.com/posts/1') //15
//   .then(response => response.json())
//   .then(data => {
//     setTimeout(() => {
//       if (data.userId === 1) {
//         document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//       }
//     }, 3000); 
//   });
// //



// D101 HW
//Function Declarations and Arrow Functions
// function sum(a, b) { //1
//     return a + b;
// }
// //

// function reverseString(str) { //2
//     return str.split('').reverse().join('');
// }
// //

// function isEven(num) { //3
//     return num % 2 === 0;
// }
// //

// const getLength = arr => arr.length; //4
// //

// const calculateArea = (width, height) => width * height; //5
// //

// function doubleArray(arr) { //6
//     return arr.map(num => num * 2);
// }
// //

// function toUpperCase(str) { //7
//     return str.toUpperCase();
// }
// //

// const filterOdds = arr => arr.filter(num => num % 2 === 0); //8
// //

// function factorial(n) { //9
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// //

// const countVowels = str => { //10
//     const vowels = 'aeiouAEIOU';
//     return str.split('').filter(char => vowels.includes(char)).length;
// }
// //

// //Template Literals
// const name = "Soso"; //1
// const greeting = `Hello, my name is ${name}.`;
// //

// const multilineString = `This is one.
// This is two.
// This is three.`;
// //

// const a = 5; //3
// const b = 10;
// const sumExpression = `The sum of ${a} and ${b} is ${a + b}.`;
// //

// const day = 6; //4
// const month = "July";
// const year = 2024;
// const formattedDate = `Today's date is ${day} ${month}, ${year}.`;
// //

// const isMember = true; //6
// const accessMessage = `You ${isMember ? 'have' : 'do not have'} access to the member area.`;
// //

// const street = "Kotekhi"; //7
// const city = "Gurjaani";
// const zip = "1500";
// const address = `${street}, ${city}, ${zip}`;
// //

// const content = "Welcome to my website!"; //8
// const htmlStructure = `<div>
//   <h1>${content}</h1>
// </div>`;
// //

// const items = ['Item 1', 'Item 2', 'Item 3']; //9
// const list = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
// //

// function getUserName() { //10
//     return "Bob";
// }
// const welcomeMessage = `Hello, ${getUserName()}! Welcome to our site.`;
// //

// //Short Conditionals
// const isActive = true; //1
// isActive && console.log('The variable is true.');
// //

// const value = null; //2
// const defaultValue = value || 'Default value';
// //

// const age = 15; //3
// const canVote = age >= 18 ? 'Yes' : 'No';
// //

// const user = { name: 'Soso' }; //4
// user && console.log(`Hello, ${user.name}!`);
// //

// const a = null; //5
// const b = undefined;
// const c = 'First truthy value';
// const firstTruthy = a || b || c;
// //

// const number = -5; //6
// const message = number >= 0 ? 'Positive number' : 'Negative number';
// console.log(message);
// //

// const condition = true; //7
// condition && document.getElementById('myElement').classList.add('active');


// const obj = { name: 'Soso' }; //8
// const name = obj.name || 'Default Name';
// const age = obj.age || 15;
// //

// const str = 'Hello'; //9
// const strLength = str.length > 5 ? 'Long' : 'Short';
// //

// const isAdmin = true; //10
// const isLoggedIn = true;
// isAdmin && isLoggedIn && console.log('Access granted.');
// //

// //Array Method map()
// const numbers = [1, 2, 3, 4]; //1
// const doubled = numbers.map(num => num * 2);
// //

// const strings = ['hello', 'world'];//2
// const uppercased = strings.map(str => str.toUpperCase());
// //

// const users = [{ name: 'Soso' }, { name: 'Data' }]; //3
// const names = users.map(user => user.name);
// //

// const nums = [1, 2, 3, 4]; //4
// const incremented = nums.map(num => num + 5);
// //

// const numbers = [1, 4, 9, 16];//5
// const roots = numbers.map(num => Math.sqrt(num));
// //

// const dates = [new Date(2019, 1, 1), new Date(2020, 1, 1)]; //6
// const formattedDates = dates.map(date => date.toDateString());
// //

// const words = ['hello', 'world']; //7
// const lengths = words.map(word => word.length);
// //

// const items = ['item1', 'item2']; //8
// const prepended = items.map(item => `prefix_${item}`);
// //

// const numbers = [1, 2, 3, 4]; //9
// const isEven = numbers.map(num => num % 2 === 0);
// //

// const phrases = ['hello world', 'goodbye world']; //10
// const replaced = phrases.map(str => str.replace('world', 'everyone'));
// //

// //Object Tricks
// const name = 'Soso'; //1
// const age = 15;
// const person = { name, age };
// //

// const person = { name: 'Soso', age: 15 }; //2
// const { name, age } = person;
// //

// const obj1 = { a: 1, b: 2 }; //3
// const obj2 = { c: 3, d: 4 };
// const mergedObj = { ...obj1, ...obj2 };
// //

// let obj = { a: 1, b: 2 };//4
// [obj.a, obj.b] = [obj.b, obj.a];


// function printPerson({ name, age }) { //5
//     console.log(`Name: ${name}, Age: ${age}`);
// }

// const person = { name: 'Alice', age: 25 };
// printPerson(person);
// //

// const original = { a: 1, b: 2 }; //6
// const copy = { ...original };
// //

// const original = { a: 1, b: 2 }; //7
// const updated = { ...original, c: 3 };
// //

// const person = { name: 'Soso' }; //8
// const { name, age = 15 } = person;
// // 

// const propName = 'dynamicProp'; //9
// const obj = { [propName]: 'value' };
// //

// function display({ name, age }) { //10
//     console.log(`Name: ${name}, Age: ${age}`);
// }

// const person = { name: 'Alice', age: 25 };
// display(person);
// //

// //Promises + Async/Await Syntax
// const promise = new Promise(resolve => setTimeout(resolve, 2000)); //1
// promise.then(() => console.log('Resolved after 2 seconds'));
// //

// async function waitForPromise() {//2
//     const result = await promise;
//     console.log('Promise resolved:', result);
// }

// waitForPromise();
// //

// const errorPromise = new Promise((_, reject) => reject(new Error('Something went wrong'))); //3
// errorPromise.catch(error => console.log('Caught error:', error));
// //

// async function handlePromise() { //4
//     try {
//         const result = await errorPromise;
//     } catch (error) {
//         console.log('Error caught:', error);
//     }
// }

// handlePromise();
// //

// promise //5
//     .then(() => {
//         return new Promise(resolve => setTimeout(resolve, 1000));
//     })
//     .then(() => console.log('Second promise resolved'))
//     .catch(error => console.log('Error:', error));
// //

// async function waitForAll() { //6
//     const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
//     const results = await Promise.all(promises);
//     console.log('All promises resolved:', results);
// }

// waitForAll();
// //

// const transformPromise = Promise.resolve(5); //7
// transformPromise
//     .then(value => value * 2)
//     .then(transformedValue => console.log('Transformed value:', transformedValue));
// //

// async function fetchData() { //8
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     console.log('Fetched data:', data);
// }

// fetchData();
// //

// const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'One'));//9
// const promise2 = new Promise(resolve => setTimeout(resolve, 500, 'Two'));
// const promise3 = new Promise(resolve => setTimeout(resolve, 1500, 'Three'));

// Promise.race([promise1, promise2, promise3]).then(result => console.log('First resolved:', result));
// //

// async function retryPromise(promiseFn, retries) { //10
//     let attempt = 0;
//     while (attempt < retries) {
//         try {
//             const result = await promiseFn();
//             return result;
//         } catch (error) {
//             attempt++;
//             if (attempt === retries) {
//                 throw error;
//             }
//         }
//     }
// }

// const unreliablePromise = () => new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Success') : reject('Failure'));

// retryPromise(unreliablePromise, 3)
//     .then(result => console.log('Promise succeeded:', result))
//     .catch(error => console.log('Promise failed after 3 retries:', error));
// //


// D104 HW
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('მოგესალმებით ჩემს Node.js ვებგვერდზე!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`სერვერი გაშვებულია პორტზე ${PORT}`);
// });

// const path = require('path');

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.use(express.static('public'));


// D114 HW
// import React, { useState } from 'react';

// function Contact() {
//   const password = 'swordfish';
//   const [authorized, setAuthorized] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const enteredPassword = e.target.querySelector(
//       'input[type="password"]').value;
//     const auth = enteredPassword === password;
//     setAuthorized(auth);
//   }

//   const login = (
//     <form action="#" onSubmit={handleSubmit}>
//       <input type="password" placeholder="Password" />
//       <input type="submit" />
//     </form>
//   );

//   const contactInfo = (
//     <ul>
//       <li>client@example.com</li>
//       <li>555.555.5555</li>
//     </ul>
//   );

//   return (
//     <div id="authorization">
//       <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
//       {authorized ? contactInfo : login}
//     </div>
//   );
// }

// export default Contact;
// 
 
// // D117 HW
// import React, { useState } from 'react'; 

// function App() {
//   const [showParagraph, setShowParagraph] = useState(false);

//   const toggleParagraph = () => {
//     setShowParagraph(!showParagraph);
//   };

//   return (
//     <div>
//       <button onClick={toggleParagraph}>
//         {showParagraph ? 'Hide Paragraph' : 'Show Paragraph'}
//       </button>
//       {showParagraph && (
//         <p>This is a paragraph that can be toggled on and off.</p>
//       )}
//     </div>
//   );
// }

// export default App;
//

//D118 CW
import React, { useState, useEffect } from 'react';

function Counter() { //simple counter with hooks
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;


