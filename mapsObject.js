//maps
// map is an iterable
// 
// store data in ordered fashion

// store key value pair(like objects)
// duplicat keys are not allowed like objects

// difference between maps and objects

// objects can only have string or symbol as key 

// in maps you can use anything as key like array , number,string


// objects literals
//keys always string or symbol
// const person ={
//     firstName:"Rahul",age:21,1:"one"
// }
// console.log(person.firstName)
// for(let key in person){
//     console.log(typeof key);
// }


// syntax

// const person=new Map();
// person.set('firstname',"Rahul");
// person.set('age',21);
// person.set(1,12);
// person.set(11,12);
// console.log(person.get('age'));
// console.log(person.get(1));
// console.log(person.keys());
// console.log(person)
// for(let key of person.keys()){
//     console.log(key,typeof key);
// }
// for(let key of person){
//     console.log(key,typeof key);
//     console.log( Array.isArray(key));
// // }


// for(let [key,value] of person){
//     console.log(key,value);
//     // console.log( Array.isArray(key));
// }

const person1={
    id:1,
    firstname:"Rahul"
}

const person2={
    id:2,
    firstname:"Rahu"
}

const extraInfo=new Map();
extraInfo.set(person1,{age:7,gender:"male"});
extraInfo.set(person2,{age:8,gender:"male"});
// console.log(extraInfo)

// console.log(person1.id);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
// const person=new Map([['firstname','rahul'],['age',4]])
// console.log(person)