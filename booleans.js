// booleans and comparison operator

// booleans
let num="4";
let num1=4;
// console.log(num>=num1);

// == vs ===
// console.log(num==num1)//true
// console.log(num===num1)//false

//!= vs !==
// console.log(num!=num1);true
// console.log(num!==num1);

// if else condition
// let age=19;
// if(age>=18){
//     console.log("User can play game");
// }
// else{
//     console.log("User can not play game");
// }

// truthy and falsy values

// falsy values
// false
// null
// ""
// undefined
// 0


//truthy values
// "avc"
// 1,-1;

// let name;
// if(name){
//     console.log(name);
// }else{
//     console.log("name is kind a empty:")
// }


// let age=8;
// let drink;
// if(age>=5){
//     drink="coffee";
// }
// else{
//     drink="milk";
// }
// console.log(drink)

// ternary operator or conditional ooperator

// let age=4;
// let drink=age>=5 ?"coffee":"milk";
// console.log(drink)

// 
let n=19;
// user input
let m=+prompt("Guess a number:");
// console.log(typeof(m));
if(n==m){
    console.log("right");
}else{
    if(n>m){
        console.log("too low");
    }
    else{
        console.log("high");
    }
}