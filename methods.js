// // methods => function inside object

// // const person={
// //     firstname:"Rahul",
// //     age:20,
// //     about:function(){
// //         console.log(`persone name is ${this.firstname} and age is ${this.age}`);
// //     }
// // }
// // person.about();


// //this keyword
// // function personInfo(){
// //     console.log(`persone name is ${this.firstname} and age is ${this.age}`);
// // }
// // const person={
// //     firstname:"Rahul",
// //     age:20,
// //     about:personInfo
// // }
// // const person2={
// //     firstname:"Ritik",
// //     age:3,
// //     about:personInfo
// // }
// // const person3={
// //     firstname:"shanvi",
// //     age:5,
// //     about:personInfo
// // }
// // person.about();
// // person2.about();
// // person3.about();
// // console.log(this)  it prints js global window object
// // console.log(window) window and this are same

// // "use strict";
// function myFunc(){
//     "use strict"
//     console.log(this);
// }
// // myFunc();
// // personInfo();


// // call method
// function hello(){
//     console.log("Hello world");
// }
// // hello.call()
// // call,apply,bind


// function about(hobby,sweet){
//     console.log(this.firstname,this.age,hobby,sweet)
// }
// const user1={
// firstname:"Rahul",
// age:4,
// }
// const user2={
//     firstname:"ruby",
//     age:3875,
    
//     }
// // about.call(user1,"cricket","ghewar")


// //apply

// // about.apply(user1,["cricket","ghhewar"])


// //bind

// //it returns a function
// const fun=about.bind(user1,"cricket","ghewar");
// // fun();



// // don't do this mistake

// // const users={
// //     firstname:"Rahul",
// //     age:8,
// //     about:function(){
// //         console.log(this.firstname,this.age);
// //     }
// // }
// // const myfunc1=users.about.bind(users);
// // myfunc1();


// //arrow function


// // const users={
// //         firstname:"Rahul",
// //          age:8,
// //          about:()=>{
// //              console.log(this.firstname,this.age);
// //          }
// //      }

// //      users.about(users);

// const users={
//     firstname:"Rahul",
//      age:8,
//      about(){
//          console.log(this.firstname,this.age);
//      }
//  }

// //  users.about();


// function createuser(firstname,lastname,email,age,address){
//     const user={};
//     user.firstname=firstname;
//     user.lastname=lastname;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//         return `${this.firstname} is ${this.age} years old`
//     };
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }
// const user1=createuser("Rahul","Chaudhary","rahul8882002@gmail.com","21","surjupur");
// console.log(user1);
// const use=user1.is18();
// console.log(use);
// console.log(user1.about());




//improved version

const userMethod={
    about:function(){
        return `${this.firstname} is ${this.age} years old`
    },
    is18:function(){
        return this.age>=18;
    }
}
function createuser(firstname,lastname,email,age,address){
    const user=Object.create(userMethod);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}
const user1=createuser("Rahul","Chaudhary","rahul8882002@gmail.com","21","surjupur");
const user2=createuser("Ritik","Chaudhary","rahul8882002@gmail.com","21","surjupur");
const user3=createuser("Rohan","Chaudhary","rahul8882002@gmail.com","21","surjupur");
console.log(user1.about());
console.log(user2.about());
console.log(user3.is18());
