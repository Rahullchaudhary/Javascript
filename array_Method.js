// important array method

// const num=[4,2,3,4];
// function firstEle(number,index){
//     console.log("index is ",index);
//     console.log("number is ",number*2);
// }
// firstEle(num[0],0);
// for(let i =0;i<num.length;i++){
//     firstEle(num[i],i);
// }

// num.forEach(firstEle)


// num.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number*2}`);
//         // console.log("number is ",number*2);
// })


const users=[{firstName:"Rahul",age:22},
{firstName:"Tokyo",age:23},
{firstName:"Riyo",age:24},
{firstName:"Denver",age:25}
];
// users.forEach(function(user)
// {
//     console.log(user.firstName);
// })


// map method

// const numbers=[1,2,3,4,5];
const square=function(number){
    return number*number;
}
// const num1=numbers.map(square);
// console.log(num1);

//it is always create a new array
//and return an array


// const num1=numbers.map(function(number){
//     return number*number;
// });
// // console.log(num1);

// const userName=users.map(user=>{
//     return user.firstName;
// })
// console.log(userName);


// filter method

// numbers1=[1,2,3,4,5,6,7];
// const isEven=function(number){
//     return number%2==0;
// }
// console.log(numbers1.filter(isEven));


// it is always create a new array
//and return an even or odd array



///reduce method


// aim=sum of all the numbers in array

// const sum=numbers1.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })
// console.log(sum);


// const usercart=[
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"laptop",price:52000},
//     {productId:3,productName:"tv",price:22000}
// ]
// const totalAmount=usercart.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue.price;
// },0)
// console.log(totalAmount); 


// sort method


//ascending order sort
// const arr=[2,4,1,54,6,3];
// arr.sort((a,b)=>a-b);
// console.log(arr);


//desecnding order sort

// const arr=[2,4,1,54,6,3];
// arr.sort((a,b)=>b-a);
// console.log(arr);

const product=[
    {productId:1,productName:"p1",price:"3000000"},
    {productId:2,productName:"p2",price:"4000"},
    {productId:3,productName:"p3",price:"500"},
    {productId:4,productName:"p4",price:"600"},
    {productId:5,productName:"p5",price:"700"}
]

// const lowTohigh=product.slice(0).sort((a,b)=>{
//     return a.price-b.price});
// console.log(lowTohigh);



// find method

const array=["Rahu","Tokyo",'Berlin',"Riyo",'Leswin'];


function isLength(string){
    return string.length===5;
}
// const tt=isLength("Denver");
// console.log(tt);

// const tt=array.find(isLength);
// console.log(tt);    


// const Users=[
//     {UserId:1,UserName:"Rahul"},
//     {UserId:2,UserName:"Rakesh"},
//     {UserId:3,UserName:"Raju"},
//     {UserId:4,UserName:"Ram"},
//     {UserId:5,UserName:"Ravi"},
// ];
// const ans=Users.find((user)=>user.UserId===3);
// console.log(ans)



///every method

// const number=[10,2,4,8,6];
// console.log(number.every((numbers)=>numbers%2===0));

//every method return true if every element of array satisfy the condition otherwise return false;


const usercart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"laptop",price:12000},
    {productId:3,productName:"tv",price:22000}
]

// console.log(usercart.every((cartitem)=>cartitem.price<30000));


///some method
// const numbers=[1,21,4,3,61];
// console.log(numbers.some((num)=>num%2==0))

// console.log(usercart.some((cartitem)=>cartitem.price>100000))


// fill method
// const myarr=new Array(10).fill(0);
// console.log(myarr);
// const arr=[1,2,3,4,5,6,7];
// arr.fill(0,2,5);
// console.log(arr);

//splice method
//start,delete,insert

const arr=[1,2,3,4,5,6];
// it also return deleted value
//delete
// console.log(arr.splice(1,2));
//insert
// console.log(arr.splice(1,0,10));
//delete and insert
// console.log(arr.splice(1,4,10,11,12,13));
// console.log(arr);

