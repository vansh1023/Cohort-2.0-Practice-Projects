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