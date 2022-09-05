// function hello(){
//     console.log("Hello world");
// }

// javascript function ===>function + object

// console.log(hello.name);

// you can add your own properties
// hello.myownProperty="very unique value";
// console.log(hello.myownProperty)


//function provides more useful properties.
// hello.prototype.avc="acv";
// hello.prototype.sss="sdsd";
// hello.prototype.gkjj=function(){

// return "gfkjdflk";
// }
// console.log(hello.prototype.gkjj());



function createuser(firstname,lastname,email,age,address){
    const user=Object.create(createuser.prototype);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;

}
createuser.prototype.about=function(){
    return `${this.firstname} is ${this.age} years old`;
}
createuser.prototype.is18=function(){
             return this.age>=18;
         }


         
const user1=createuser("Rahul","Chaudhary","rahul8882002@gmail.com","21","surjupur");
const user2=createuser("Ritik","Chaudhary","rahul8882002@gmail.com","7","surjupur");
const user3=createuser("Rohan","Chaudhary","rahul8882002@gmail.com","21","surjupur");
//  console.log(user1.about());
//  console.log(user2.is18());
//  console.log(user3.is18());



//more about prototype

let numbers=[1,2,3,4];
// let numbers=new Array(1,2,3,4);
// console.log(Array.prototype);
console.log(numbers);
// console.log(Object.getPrototypeOf(numbers)) 

function hello(){
    console.log("hello");
}
console.log(hello.prototype);
hello.prototype=[];
console.log(hello.prototype);
hello.prototype.push('1');