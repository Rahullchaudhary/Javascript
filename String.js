// string indexing 
let name="Rahul";

//  R   a   h  u  l
//  0   1   2  3  4
// console.log(name[8]);

// length of string
// console.log(name.length);

//last index: length-1;

//methods

//trim

// let newName=name.trim();
// console.log(newName.length);

//toUpperCase()

// name=name.toUpperCase();
// console.log(name);

//toLowerCase()

// name=name.toLowerCase();
// console.log(name);

//slice start index,end index

// let newString=name.slice(2,6);
// console.log(newString);

// typeof operator

// data types(primitive data types)
//string
// Numbers
// booleans
// undefined
// null
// BigInt
// symbol


let age=22;
let firstName="Rahul";
// console.log(typeof(age));
// console.log(typeof(firstName));
// console.log(typeof("Rahul"));
// console.log(typeof(33));

// convert number to string

age=age+"";
// console.log(typeof age);

//convert  string to number
let myStr= +"34";
// console.log(typeof myStr);

age=Number(String(age));
// console.log(typeof(age));

// string concatenation

// let String="Chaudhary";
// let fullName=firstName+" "+String;
// console.log(fullName);

// templet string

let aboutme=`My name is ${firstName} and my age is ${age}`;

// console.log(aboutme);