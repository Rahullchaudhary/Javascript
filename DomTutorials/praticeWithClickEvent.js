const allbutton=document.querySelectorAll(".my-buttons button");
// console.log(allbutton.length)
allbutton.forEach(button=>
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor="yellow";
        e.target.color="red";
    }))