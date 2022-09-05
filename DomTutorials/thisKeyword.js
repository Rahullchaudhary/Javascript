// this keyword
const btn=document.querySelector(".btn-headline");

// btn.addEventListener("click",function(){
//     console.log("Fuck you");
//     console.log("value of this");
//     console.log(this)
// / in this case the value of this is selected btn
// });

  
btn.addEventListener("click",()=>{
    console.log("Fuck you");
    console.log("value of this");
    console.log(this)
    // in this case the value of this is window
}); 