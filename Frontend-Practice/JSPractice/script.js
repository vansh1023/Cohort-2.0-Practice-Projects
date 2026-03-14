// level 1

// for (let i=0 ; i<10; i++){
//     console.log(i);
// }






// for (let i=2 ; i<21; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }






// for (let i=10 ; i>0; i--){
//     console.log(i);
// }






// let num = Number(prompt("Enter number"));

// if(num > 0) console.log("Positive");
// else console.log("Negative");








// for(let i=1; i<11; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }








// let count = 0;
// for(let i=1; i<16; i++){
//     if(i>8){
//         count++;
//     }
// }

// console.log(count);






// const pass = "vansh353";

// const userpass = prompt("Enter pass");

// if(userpass === null){
//     console.log("You cancelled it");
// }
// else {
//     let userpass2 = userpass.trim();
//     if(userpass2 === ""){
//         console.log("Empty");
//     }
//     else{
//         if(userpass2 === pass){
//             console.log("Password matched");
//         }
//         else {
//             console.log("Password not matched");
//         }
//     }
// }





// Level 2

// let attempts = 0;
// let flag = false;
// let pass = "vanshbhai";

// let password = prompt("Enter Password");
// attempts++;
// if(password === pass){
//     flag = true;
// }

// while(password !== pass){
//     if(attempts === 3){
//         console.log("Account Locked");
//         break;
//     }
//     password = prompt("Enter Password");
//     attempts++;
//     if(password === pass){
//         flag = true;
//     }
// }

// if(flag === true){
//     console.log("Account oppened");
// }







// let count = 0;
// let word = prompt("Enter words");

// if(word === null){
//     console.log("you cancelled it");
// }


// while(word !== "stop" && word !== null){
//     if(word === "yes"){
//         count++;
//     }
//     word = prompt("Enter words");
// }

// console.log(count);






// for(let i=1; i<51; i++){
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }





// let sum = 0;
// for(let i=1; i<31; i++){
//     if(i % 2 !== 0){
//         sum += i;
//     }
// }
// console.log(sum);





// let num = prompt("Enter number");
// num = Number(num);
// while(num % 2 !== 0){
//     num = Number(prompt("Enter number"));
// }





// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let start, end;

// if(num1 < num2){
//     start = num1;
//     end = num2;
// }
// else {
//     start = num2;
//     end = num1;
// }

// for(let i=start; i<=end; i++){
//     console.log(i);
// }



// let count = 0;

// for(let i=1; i<21; i++){
//     if(count === 3) break;
//     if(i % 2 !== 0){
//         console.log(i);
//         count++;
//     }
// }






// let balance = 1000;
// let attempts = 0;


// while(balance > 0 && attempts < 3){
//     let withdrawal = Number(prompt("Enter amount to be withdrawal"));

//     if(withdrawal === 0){
//         console.error("Please enter amount");
//         break;
//     }

//     if(balance >= withdrawal){
//         balance -= withdrawal;
//         attempts++;
//         console.log(`${withdrawal} withdraw successfully`);
//     }
//     else {
//         console.log("Balance is less than Withdrawal amount");
//         break;
//     }
// }

















// Functions And Arrays

// Level 1


// function SayHello(){
//     console.log("Hello Javascript");
// }
// SayHello();




// function add(a,b){
//     return a+b;
// }
// let sum = add(5,20);
// console.log(sum);




// function greet(name = "aryan"){
//     console.log(`Hi ${name}`);
// }
// greet();




// function add(...val){
//     let sum = 0;
//     val.forEach((value) => {
//         sum += value;
//     })
//     console.log(sum);
// }
// add(5,5,5,5,5,4,8,6,4,5,12,3,454,54,54);





// function add(...val){
//     let sum = val.reduce((acc, value) => {
//         return acc + value;
//     }, 0)
//     console.log(sum);
// }
// add(5,5,5,5,5,4,8,6,4,5,12,3,454,54,54);




// (function(){
//     console.log("I run instantly");
// })();



// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();



// const person = {
//     name: "xyz",
//     age: 100,
//     city: "abc",
// };
// for(let key in person){
//     console.log(person[key]);
// }



// setTimeout(() => {
//     console.log("Time's up")
// }, 2000);






// level 2

// function outer(inner,[c,d]){
//     inner(c,d);
// }

// outer((a, b) => {
//     console.log(a+b);
// },[1,2]);




// function demo({name, age}){
//     console.log(name, age);
// }
// demo({
//     name: "abc",
//     age: 100,
// });



// let arr = [1,2,3,4,5];
// let newarr = arr.map((val) => {
//     return val * val;
// })
// console.log(newarr);


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newarr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(newarr);




// let salary = [1000, 2000, 3000];
// let totalSalary = salary.reduce((acc, val) => {
//     return acc + val;
// }, 0);
// console.log(totalSalary);


// let names = ["abc", "kckldns", "nkfgdfg", "kdfgsfd", "kjds", "kjdhjdhfsh", "kjdhkjsdfsfsfsjk", "kjeg"];
// let newarr1 = names.some((val) => {
//     return val.length > 3;
// });
// console.log(newarr1);
// let newarr2 = names.every((val) => {
//     return val.length > 3;
// });
// console.log(newarr2);







// DOM

// Random Color Generator

// let btn = document.querySelector('#btn');
// let rcg = document.querySelector('#rcg');

// btn.addEventListener('click', () => {
//     let a = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let c = Math.floor(Math.random()*256);

//     rcg.style.backgroundColor = `rgb(${a},${b},${c})`;
// });



// Random card GEnerator

// let btn = document.querySelector('button');
// let main = document.querySelector('main');
// let arr = ["Hello", "Namaste", "Bonjour", "Hola", "Salaam", "Ciao","Hey!", "Hi there!", "What's up?", "Howdy!", "Yo!","Good Morning", "Good Afternoon", "Good Evening", "Greetings", "Welcome"];


// btn.addEventListener('mousemove', () => {
//     var div = document.createElement('div');

//     var x = Math.random()*80;
//     var y = Math.random()*80;
//     var z = Math.random()*360;
//     var a = Math.floor(Math.random()*256);
//     var b = Math.floor(Math.random()*256);
//     var c = Math.floor(Math.random()*256);


//     div.style.height = '10rem';
//     div.style.width = '10rem';
//     div.style.position = 'absolute';

//     div.style.top = `${x}%`;
//     div.style.left = `${y}%`;
//     div.style.rotate = `${z}deg`;
//     div.style.backgroundColor = `rgb(${a},${b},${c})`;

//     main.appendChild(div);
// });


// btn.addEventListener('mousemove', () => {
//     var h1 = document.createElement('h1');

//     var i = Math.floor(Math.random()*arr.length);
//     var x = Math.random()*80;
//     var y = Math.random()*80;
//     var scl = Math.random()*4;
//     var z = Math.random()*360;
//     var a = Math.floor(Math.random()*256);
//     var b = Math.floor(Math.random()*256);
//     var c = Math.floor(Math.random()*256);

//     h1.style.position = 'absolute';

//     h1.innerHTML = arr[i];

//     h1.style.top = `${x}%`;
//     h1.style.left = `${y}%`;
//     h1.style.scale = scl;
//     h1.style.rotate = `${z}deg`
//     h1.style.color = `rgb(${a},${b},${c})`;

//     main.appendChild(h1);
// });






// let btn = document.querySelector('button');
// let inner = document.querySelector('.inner');
// let h2 = document.querySelector('h2');
// let grow = 0;

// btn.addEventListener('click', () => {

//     let num = 50 + Math.floor(Math.random()*50);
//     console.log(num);

//     let int = setInterval(() => {
//         grow++;
//         inner.style.width = `${grow}%`;
//         h2.innerHTML = `${grow}%`;
//         btn.style.pointerEvents = 'none';
//     }, num);

//     setInterval(() => {
//         clearInterval(int);
//         btn.innerHTML = 'Downloaded';
//         btn.style.backgroundColor = 'rgba(135, 173, 135, 0.73)';
//     }, num*100);
// }); 





// OOPS

// const user = {
//     name: "abc",
//     email: "xyz@gmail.com",
//     login: function(){
//         console.log("logged in")
//     }
// }

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     login(){
//         console.log(`${this.name} logged in`);
//     }
// }

// let user1 = new User("abc", "xyz@gmail.com");



// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return (`${this.brand} - ${this.speed}`);
//     }
// }

// let car1 = new Car("Audi", 200);
// let car2 = new Car("BMW", 180);
// let car3 = new Car("Maruti Suzuki", 100);
// let car4 = new Car("Honda", 120);
// let car5 = new Car("Hyundai", 150);


// const user = {
//     name: "abc"
// }
// function print(){
//     console.log(this.name);
// }

// print.call(user);















// Async JS

// function abcd(fn){
//     fn(function(fn3){
//         fn3(function(){
//             console.log("hey");
//         });
//     });
// }



// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4();
//     });
// });



// function afterDelay(time, fn){
//     setTimeout(()=>{
//         fn();
//     },time);
// }

// afterDelay(2000, function(){
//     console.log("Callback executed");
// });




// function getUser(username, fn){
//     console.log("Waiting for user data...");
//     setTimeout(() => {
//         console.log("User ka data nikal gya");
//         fn({id:1, username})
//     }, 1000);
// }

// function getUserPosts(id, fn){
//     console.log("Searching for posts...");
//     setTimeout(() => {
//         fn(["hello", "hi", "good day", "kya haal chal"]);
//     }, 2000);
// }

// getUser("vansh", function({id, username}){
//     setTimeout(() => {
//         console.log(`chalo ab ${username} ki posts search karte hai`);
//     }, 1000);
//     getUserPosts(id, function(allPosts){
//         console.log(`Ye rhi ${username} ki posts - ${allPosts}`);
//     });
// })



// function loginUser(username, fn){
//     console.log("Waiting for user login...");
//     setTimeout(() => {
//         console.log(`${username} logged in successfully`);
//         fn({id:1, username});
//     }, 1000);
// }

// function fetchPermissions(id, fn){
//     setTimeout(() => {
//         fn(["hi", "hello", "allow permission"]);
//     }, 1000);
// }

// function loadDashboard(permissions, fn){
//     setTimeout(() => {
//         fn("dashboard loaded");
//     }, 1000);
// }

// loginUser("vansh", function(id, username){
//     fetchPermissions(id, function(permissions){
//         loadDashboard(permissions, function(msg){
//             console.log(msg);
//         })
//     })
// })








// Waether app logic

// async function getWeather(city){
//     try {
//         let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

//         let raw = await fetch(url);
//         if(!raw.ok){
//             throw new Error("Something went wrong");
            
//         }
//         let data = await raw.json();
//         let currtemp = Math.round((data.main.temp - 273.15)*100)/100;
//         console.log(`${currtemp}°C`);

//     } catch (err) {
//         console.log(err.message);
//     }
// }

// getWeather("Muzaffarnagar");




// Emails simulator

// const users = [
//     "abc@gmail.com",
//     "xyz@gmail.com",
//     "pqr@gmail.com",
//     "lmn@gmail.com",
//     "def@gmail.com"
// ];

// function sendEmail(email){
//     return new Promise((resolve, reject) => {
//         let time = Math.floor(Math.random()*5);
//         setTimeout(() => {
//             let probability = Math.floor(Math.random()*2);
//             if(probability === 0) resolve("Email send successfully");
//             else reject("Email not send, Please try again after some time");
//         }, time*1000);
//     })
// };


// async function setEmails(userlist){
//     let allresponses = userlist.map((email) => {
//         return sendEmail(email)
//             .then((data) => {
//                 return data;
//             })
//             .catch((err) => {
//                 return err;
//             })
//     });
//     let ans = await Promise.all(allresponses);
//     console.log(ans);
// }

// setEmails(users); 


// Js Questions Practice

// let fullName = "Vansh Chaudhary";
// let hobby =  "Learning new things";

// console.log(`My name is ${fullName} and my hobby is ${hobby}`);

// let ans = 45*2-10;
// console.log(ans); 

// let date = new Date();
// let year = date.getFullYear();
// console.log(year);

// let firstName = "vansh";
// let lastName = "chaudhary";
// console.log(`My full name is ${firstName} ${lastName}`);

// let i = 1;
// let sum = 0;
// while(i<=10){
//     sum += i;
//     i++;
// }
// console.log(sum);


// let name = "Javascript";
// for(let char of name){
//     console.log(char);
// }


// let sum = 0;
// for(let i=1; i<=20; i++){
//     if(i%2 == 0) continue;
//     sum += i;
// }
// console.log(sum);



// let i = 5;
// do{
//     console.log(i);
//     i--;
// } while(i>0);


// for(let i=1; i<=3; i++){
//     let row = "";
//     for(let j=1; j<=3; j++){
//         row += "* ";
//     }
//     console.log(row);
// }


// let arr = [1,2,3,4,5];
// let i = 0; 
// let j = arr.length-1;
// let temp;
// while(i<j){
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);


// let arr = ["KGF", "Baahubali", "Simba", "Suryavanshi", "Pushpa"];
// console.log(arr.join("-"));

// let arr = [1,2,3,4,5];
// console.log(arr.indexOf(5))
// let newArr = arr.slice(0,3);
// console.log(newArr);

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let newArr = arr1.concat(arr2);
// console.log(newArr)

// let arr1 = [1,2,3,4,5];
// let arr2 = [...arr1];
// console.log(arr1 === arr2);

// function EvenOrOdd(num){
//     if(num % 2 === 0){
//         return "Even number";
//     }
//     else{
//         return "Odd number";
//     }
// }
// let ans = EvenOrOdd(50);
// console.log(ans)


// function add([val1, ...arr]){
//     let sum = 0;
//     arr.forEach(elem => {
//         sum += elem;
//     });
//     console.log(sum);
// }

// add([1,2,3,4]);


// function fact(n){
//     if(n === 1){
//         return 1;
//     }
//     return n * fact(n-1);
// }
// console.log(fact(5));


// function largeElem(arr){
//     let large = -Infinity;
//     arr.forEach(elem => {
//         if(elem > large){
//             large = elem;
//         }
//     });
//     return large;
// }

// console.log(largeElem([1,8,5,9,7,2,3,4,6]));


// function check(n){
//     let isPrime = true;
//     for(let i=2; i<n; i++){
//         if(n%i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log("prime hai")
//     }
//     else{
//         console.log("Prime nhi hai")
//     }
// }

// check(9);


// const obj = {
//     name: "abc",
//     rollno: 123
// }
// console.log(obj["name"])


// let n = 1;
// for(let i=1; i<=10; i++){
//     let row = "";
//     n++;
//     for(let j=1; j<=n; j++){
//         if(j === 1 || j === n || i === 10){
//             row += ("* ");
//         }
//         else{
//             row += ("  ");
//         }
//     }
//     console.log(row);
// }







// to do 

// let todos = [];

// function addTask(task) {
//   todos.push(task);
//   console.log("Task Added!");
// }

// function listTasks() {
//   console.log("Your Tasks:");
//   for (let i = 0; i < todos.length; i++) {
//     console.log(i + 1 + ". " + todos[i]);
//   }
// }

// function deleteTask(index) {
//   if (index >= 0 && index < todos.length) {
// todos.splice(index, 1);
//     console.log("Task Deleted!");
//   } else {
//     console.log("Invalid Index");
//   }
// }

// function totalTasks() {
//   console.log("Total Tasks:", todos.length);
// }



// addTask("Learn JS");
// addTask("Practice DSA");
// listTasks();

// deleteTask(0);
// listTasks();

// totalTasks();








// Number guessing game 


// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// function guessNumber(userGuess) {
//   attempts++;

//   if (userGuess > randomNumber) {
//     console.log("Too High!");
//   } else if (userGuess < randomNumber) {
//     console.log("Too Low!");
//   } else {
//     console.log("Correct! 🎉");
//     console.log("Attempts:", attempts);
//   }
// }


// guessNumber(50);
// guessNumber(25);
// guessNumber(75);




// Password Generator

// function generatePassword(length) {

//   const lower = "abcdefghijklmnopqrstuvwxyz";
//   const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numbers = "0123456789";
//   const symbols = "!@#$%^&*()";

//   const allChars = lower + upper + numbers + symbols;

//   let password = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allChars.length);
//     password += allChars[randomIndex];
//   }

//   return password;
// }

// const password = generatePassword(12);

// console.log("Generated Password:", password);



// Debounce function



// function debounce(func, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// function search(query) {
//   console.log("Searching for:", query);
// }

// const debouncedSearch = debounce(search, 1000);

// debouncedSearch("JavaScript");
// debouncedSearch("JavaScript Debounce");
// debouncedSearch("JavaScript Debounce Example");





// Array Flatten Program

// function flattenArray(arr) {
//   let result = [];

//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   });

//   return result;
// }

// const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

// console.log(flattenArray(nestedArray));




// Character Frequency Counter



// function charFrequency(str) {
//   const map = {};

//   for (let char of str) {
//     if (map[char]) {
//       map[char]++;
//     } else {
//       map[char] = 1;
//     }
//   }

//   return map;
// }

// console.log(charFrequency("javascript"));




// Throttle function



// function throttle(func, limit) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = Date.now();

//     if (now - lastCall >= limit) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }

// function logMessage() {
//   console.log("Function executed at:", new Date().toLocaleTimeString());
// }

// const throttledLog = throttle(logMessage, 2000);

// setInterval(throttledLog, 500);





// Deep clone function 



// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(item => deepClone(item));
//   }

//   const cloned = {};

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       cloned[key] = deepClone(obj[key]);
//     }
//   }

//   return cloned;
// }

// const original = {
//   name: "Vansh",
//   skills: ["JavaScript", "React"],
//   address: { city: "Roorkee", state: "Uttarakhand" }
// };

// const copied = deepClone(original);

// console.log(copied);