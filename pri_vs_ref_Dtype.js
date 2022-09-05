// let num1=6;
// let num2=num1;
// console.log(num1);
// console.log(num2);

// num1++;
// console.log("After incresing num1:")
// console.log(num1);
// console.log(num2);

//reference type
//array
// let num1=['1','2'];
// let num2=num1;
// console.log(num1);
// console.log(num2);
// num1[2]='3';
// console.log(num1);
// console.log(num2);

//clone array
let arr1=[1,2,3];
// let arr2=[1,2,3];
arr1.push(4);
// console.log(arr1===arr2)

//clone array

//slice
// let arr2=arr1.slice(0);

//concat
// let arr2=[].concat(arr1).concat([5,6]);

// spread operator
let onemore=[5,6,7];
// let arr2=[...arr1,5,6,7];
let arr2=[...arr1,...onemore];

//we can print array like this
console.log(arr1);
console.log(arr2);
//to check array is same or not return true or false
console.log(arr1===arr2);
