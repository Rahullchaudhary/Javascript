const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");
const heading8=document.querySelector(".heading8");
const heading9=document.querySelector(".heading9");
const heading10=document.querySelector(".heading10");


function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
            element.style.color=color;
            resolve();
            }
            else{
            reject('element not found'); 
            }
        },time);
    })
    
}
// const returnPromise=changeText(heading1,'One','violet',2000)
// returnPromise.then(()=>{
//     return changeText(heading2,"Two",'blue',1000)
// })
// .then(()=>{
//     changeText(heading3,'Three','purple',2000)
// })

changeText(heading1,'One','violet',2000)
.then(()=>changeText(heading2,"Two",'purple',1000))
.then(()=>changeText(heading3,'Three','blue',1000))
.then(()=>changeText(heading4,"Four",'green',1000))
.then(()=>changeText(heading5,"Five",'orange',1000))
.then(()=>changeText(heading6,"Six",'red',1000))
.then(()=>changeText(heading7,'Seven','gray',1000))
.then(()=>changeText(heading8,"Eight",'yellow',1000))
.then(()=>changeText(heading9,"Nine",'brown',1000))
.then(()=>changeText(heading10,"Ten",'red',1000))
.catch((error)=>{alert(error);})