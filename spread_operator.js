//spread operator
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// // const newarr1=[...arr1,...arr2,8,9];
// const newarr1=[..."rahul"];
// console.log(newarr1)

//spread operator in objects
const obj1={
    key1:"value1",
    key2:"value2",
    
}
const obj2={
    key3:"value3",
    key4:"value4",
   
}
const newobj1={...obj1,...obj2,key56:"hii"};  
console.log(newobj1);