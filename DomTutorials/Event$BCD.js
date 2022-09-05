const grandparent=document.querySelector(".grandparent");
// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");


// child.addEventListener("click",(e)=>{
//     console.log("capturing  child !!")
// },true)
// parent.addEventListener("click",(e)=>{
//     console.log("capturing  parent !!")
// },true)
// grandparent.addEventListener("click",(e)=>{
//     console.log("capturing grandparent !!")
// },true)
// document.body.addEventListener("click",(e)=>{
//     console.log("capturing  body !!")
// },true)


// // event bubbling or event propagation
// child.addEventListener("click",(e)=>{
//     console.log("bubble !! child !!")
// })
// parent.addEventListener("click",(e)=>{
//     console.log("bubble !! parent !!")
// })
// grandparent.addEventListener("click",(e)=>{
//     console.log("bubble !! grandparent !!")
// })
// document.body.addEventListener("click",(e)=>{
//     console.log("bubble !! body !!")
// })


// event delegation!!!

grandparent.addEventListener("click",(e)=>{
    console.log(e)
})

