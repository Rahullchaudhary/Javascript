// promise
   const bucket=['coffee','chips','vegetables','rice'];
   const friedRice=new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables')&bucket.includes("salt")&bucket.includes("rice")){
        resolve({value:"Fried Rice"});
    }
    else{
        reject("Couldn't do it");
    }
   })
   //produce

   //consume
   //how to consume

   friedRice.then((myfriedRice)=>{console.log(myfriedRice);}).catch((error)=>{console.log(error);})