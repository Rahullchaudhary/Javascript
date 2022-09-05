// console.log("hello world")
// const ss=document.querySelector("#one");
// const ss=document.querySelectorAll(" .my-buttons,button");
// console.log(ss);
// ss.addEventListener("click",function(){
//     console.log("you clicked me")
// })

const allbutton=document.querySelectorAll("button");
// for(let button of allbutton){
//     button.addEventListener("click",function(){
//         // console.log(this);
//         // console.dir(this);
//         console.log(this.textContent)
//     })
// }
// for(let i=0;i<allbutton.length;i++){
//     allbutton[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }

allbutton.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this);
    })
})