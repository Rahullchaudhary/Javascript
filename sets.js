//sets(it is iterable)
//store data
//sets also have its own methods
//no indexed based access
//order is not guaranteed
// ..unique items only (no duplicate allowed)

//syntax
const numbers=new Set( );
const names=["professor",'berlin','stockhome','riyo','tokyo','helsinki','denver'];
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(names)
//to check weather a number is present or not
// console.log(numbers.has(1));



// for(let number of numbers){
// console.log(number);
// }


//if you want unique elements than you can use set


// to get set length

let length=0;
for(let i of numbers){
    length++;
}
console.log(length);