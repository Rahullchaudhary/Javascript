// cloning using objects

const obj={
    key1:"Value1",
    key2:"value2"
}

//cloning 
// const obj2={...obj};
const obj2=Object.assign({},obj)
obj.key3="Value3";
console.log(obj);
console.log(obj2);