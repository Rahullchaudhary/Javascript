// console.log("Script start !!");
// // const id=setInterval(()=>{
// //     let total=0;
// //     for(let i=1;i<10000000;i++){
// //         total+=i;
// //     }
// //     console.log(total);
// //     console.log(Math.random());
// // },1000);
// console.log("Script end");
const body=document.body;
const button=document.querySelector("button");
const intervalid=setInterval(()=>{
    const red=Math.floor(Math.random()*126);
    const green=Math.floor(Math.random()*126);
    const blue=Math.floor(Math.random()*126);
    const rgb=`rgb(${red},${green},${blue})`;
    body.style.background=rgb;
    // console.log(rgbcolor)
},1000)
button.addEventListener("click",()=>{
    clearInterval(intervalid);
    button.textContent=body.style.background;
});
