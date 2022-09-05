// event object
// const firstbutton=document.querySelector("#one");
// firstbutton.addEventListener("click",function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element per event  listener add hoga 
//js engine -->line by line execute karta hai
// browser----->js engine +extra features
// browser----> js engine + webApi

// jab browser ko pta chla ki user ne event perform kar diya jo hum listen kar rahe hai
// browser(extra features)---> 2 work
// /1.call back function wo js engine ko dega ...
// 2. call back function ke saat wo jo event hua uski information bhi dega
// ye info hame ek object ke form mai k=milegi aur us object ko hum receive karege yaha

const allbutton=document.querySelectorAll("button");
for(let button of allbutton){
    button.addEventListener("click",(e)=>{
        // console.log(this);
        // console.dir(this);
        console.log(e.currentTarget)
    })
}