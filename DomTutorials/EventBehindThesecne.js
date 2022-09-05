console.log("script start");
const allbuttons=document.querySelectorAll(".my-buttons button");
allbuttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num=0;
        for(let i=0;i<=100000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    })
})
console.log("script end")