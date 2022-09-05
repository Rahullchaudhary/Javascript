//callback, callback hell, pyramid of doom 
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
//callback hell
// setTimeout(()=>{
//     heading1.textContent="One";
//     heading1.style.color="violet";
//     setTimeout(()=>{
//         heading2.textContent="Two";
//     heading2.style.color="purple";
//     setTimeout(()=>{
//         heading3.textContent="Three";
//     heading3.style.color="blue";
//     setTimeout(()=>{
//         heading4.textContent="Four";
//     heading4.style.color="green";
//     setTimeout(()=>{
//         heading5.textContent="Five";
//     heading5.style.color="red";
//     setTimeout(()=>{
//         heading6.textContent="Six";
//     heading6.style.color="yellow";
//     setTimeout(()=>{
//         heading7.textContent="Seven";
//     heading7.style.color="brown";
    
//     },1000);
//     },1000);
//     },1000);
//     },1000);
//     },1000);
//     },1000);
// },1000)


function changeText(element,text,color,time,onSuccessCallBack,onFailureCallBack){
    setTimeout(()=>{
        if(element){
            element.textContent=text;
        element.style.color=color;
        if(onSuccessCallBack){
            onSuccessCallBack();   
        }
        }
        else{
            if(onFailureCallBack){
                onFailureCallBack()
            }
        }
    },time);
}
// pyramid of doom
changeText(heading1,"One","violet",1000,()=>{
    changeText(heading2,"Two","purple",2000,()=>{
        changeText(heading3,"Three","blue",1000,()=>{
            changeText(heading4,"Four","gray",1000,()=>{
                changeText(heading5,"Five","green",2000,()=>{
                    changeText(heading6,"Six","pink",1000,()=>{
                        changeText(heading7,"Seven","red",1000,()=>{
                            changeText(heading8,"Eight","#efd944",1000,()=>{
                                changeText(heading9,"Nine","#456300",1000,()=>{
                                    changeText(heading10,"Ten","#efef00",1000,()=>{
                                        console.log("Hello World");
                                    },()=>{console.log("Heading10 does not exist!!")})
                                },()=>{console.log("Heading9 does not exist!!")})
                            },()=>{console.log("Heading8 does not exist!!")})
                        },()=>{console.log("Heading7 does not exist!!")})
                    },()=>{console.log("Heading6 does not exist!!")})
                },()=>{console.log("Heading5 does not exist!!")})
            },()=>{console.log("Heading4 does not exist!!")})
        },()=>{console.log("Heading3 does not exist!!")})
    },()=>{console.log("Heading2 does not exist!!")})
},()=>{console.log("Heading1 does not exist!!")})