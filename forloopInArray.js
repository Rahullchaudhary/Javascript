// let num=[1,2,3,4];
// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

//use const for creating arrays
const fruits=["apple",'mango','pineapple'];
// fruits=['pineapple','grapes']; error uncaught typeError
 fruits.push("banana");
// console.log(fruits)

//it is better to use const to creat array
// let i=0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }


// for of loop in array

//it prints array elements

// for(fruit of fruits){
//     console.log(fruit)
// }

// for in loop in array
//it prints index and elements both

// for(let index in fruits){
//     console.log(index)
//     console.log(fruits[index])

// }

// array destructuring
// let f1=fruits[0];
// let f2=fruits[1];
// console.log(f1);
// console.log(f2);


// let [f1,f2]=fruits;
// let [f1,,f2,...myarr]=fruits;
// let [f1,f2,...myarr]=fruits;
// //let  myarr=fruits.slice(1);
// console.log(f1);
// console.log(f2);
// console.log(myarr)
 