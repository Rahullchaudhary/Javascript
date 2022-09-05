//objects

//objects reference type
//arrays are good but not sufficient for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person={name:"Rahul",Age:20,code:272190};

// const person={
//     name:"Rahul",
//     Age:20,
//     code:272190
// };
//  console.log(person);
// console.log(typeof(person));//object


//how to access data from objects

// console.log(person.name);
// console.log(person.Age);
// console.log(person["Age"]);

// how to add key value pair

// person.gender="male";
// console.log(person);
// person.gender="male";
// console.log(person);

//difference b/w dot and bracket notation

const person={
    name:"Rahul",
    Age:20,
    code:272190,
    "person hobbies":['guiter','cricket','reading']
};
// const key='email';
// person[key]="rahul.chaudhary_cs19@gla.ac.in";
// // console.log(person.person hobbies) cause error
// console.log(person["person hobbies"]);

// console.log(person)


//how to iterate objects

// for in loop
// 
// Object.keys

// for(let key in person){
//     console.log(key);
// } print keys

//print values


// for(let key in person){
//     console.log(person[key]);
// }

//print key value pair

// for(let key in person){
//     //  console.log(`${key} : ${person[key]}`);
//     console.log(key,":",person[key]);
//  }


//objects.keys

//console.log(Object.keys(person));
//it gives an array

// for(let key of Object.keys(person)){
//     console.log(key);
// }


//computed properties

const key1="hi";
const h="bye";
const value1="1";
const value2="2";
// const obj={
//     [key1]:value1,
//     [h]:value2
// }
const obj={};
obj[key1]=value1;
obj[h]=value2;
console.log(obj);