const obj1={
    key1:"Value1",
    key2:"Value2"
}
const obj2=Object.create(obj1);//{}
obj2.key3="Value3";
console.log(obj2);