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