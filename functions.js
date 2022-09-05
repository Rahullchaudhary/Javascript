//function declaration

function HappyBirthday(){
    console.log("Happy birthday to you....");
}
// HappyBirthday();
function sum1( a, b){
    console.log(a+b);
}
// sum1(1,3);
// sum1(6,null);

function findTarget(arr,tar){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===tar){
            return i;
        }
    }
    return -1;
}
// console.log(findTarget([1,2,3,4,5],4));


//function expression

const sum=function(a,b){
    console.log(a+b);
}
// sum(1,2);


//arrow function 

const sum2=(a,b)=>{
    console.log(a+b);
}
// sum2(2,3)


const isEven=number=>number%2===0;
// console.log(isEven(12));


//function inside function

// const app=()=>{
    
//     const myFun=()=>{
//         console.log("inside myfun");
//     }
//     console.log("Inside app");
//     myFun();
// }
// app();
// myfun()


//lexical scope
// const myvar="Hello";
function app(){
    //const myvar="Hello";
    const myFun=()=>{
        console.log("inside myfun",myvar);
    }
    const fun=function(){
        console.log("hello inside fun");
    }
    console.log("Inside app");
    myFun();
    fun();
    console.log(myvar);
}
//  app();


//block and function scope


// let and const are block scope

{
    // const myvar="Hello";
    // let myvar="Hello";
    //console.log(myvar);
}
// const myvar="Hello";  // error
// let myvar="Hello";   //error


//var is function scope


{
    // const myvar="Hello";
    // let myvar="Hello";
    var myvar="Hello";

}
// console.log(myvar);


/// default parameter
function Ans(a,b=0){
    return a+b;
}
// console.log(Ans(1));

//rest parameter

 function addNumbers(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `,c);
 }
// addNumbers(1,2,3,4,5,6)
function addAll(...a){
    let total =0;
    for(let num of a){
        total+=num;
    }
    return total;
}
// console.log(addAll(1,2,3,4))


// parmeter destructuring

//used in 
//object 
// /react

const person={
    firstname:"Rahul",
    gender:"male",
}
// function print(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }
// print(person);


function print({firstname,gender}){
    console.log(firstname);
    console.log(gender);
}
// print(person);




// call back function
function dom(){
    console.log("Inside dom")
}

function dim(a){
    // console.log(a);
    a();
    console.log("and dim")
}
// dim(dom);


//function returning function

function myFun(){
    function hello(){
        return "hello world";
    }
    return hello;
}
const ans=myFun();
// ans();
console.log(ans());