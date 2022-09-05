//promise.resolve
// promise.chaning
// const pro=Promise.resolve(5);
// pro.then(value=>{console.log(value)});

// then()
// then method promise return kartha hai
function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise().then(value=>{
    console.log(value);
    value +="bar";
    return value;
})
.then(value=>{
    console.log(value);
    value+="bazz";
    return value;
})
.then(value=>{
    console.log(value);
})