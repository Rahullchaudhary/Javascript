function friedRice(){
    const bucket=['coffee','chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes('vegetables')&bucket.includes("salt")&bucket.includes("rice")){
            resolve("Fried Rice");
        }
        else{
            reject("Couldn't do it");
        }
       })
}

friedRice().then((myfriedRice)=>{console.log(myfriedRice);}).catch((error)=>{console.log(error);})