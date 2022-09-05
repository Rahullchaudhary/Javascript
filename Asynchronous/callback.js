function myfunk(callback){
    console.log("Hello inside function ");
    callback();
}
function myfunk1(){
    console.log("Hello inside function 1");
    
}

// myfunk(myfunk1);