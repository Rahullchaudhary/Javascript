//loops

// const navItems=document.getElementsByClassName("nav-item");//html collection
// console.log(navItems);
// console.log(Array.isArray( navItems[0]));


// const navItems1=document.querySelectorAll(".nav-item");
// console.log(navItems1[2])//nodelist

// we can not use forEach method to iterate through HTMLCollection

// let navItems=document.getElementsByTagName("a");
// console.log(navItems);

// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navitem=navItems[i];
//     navitem.style.backgroundColor="#fff";
//     navitem.style.color='green';
//     navitem.style.fontWeight="bold";
// }

// for(let navitem of navItems){
//     navitem.style.backgroundColor="#fff";
//    navitem.style.color='green';
//    navitem.style.fontWeight="bold";
// // }
// navItems = Array.from(navItems);
// navItems.forEach((navitem)=>{
//     navitem.style.backgroundColor="#fff";
//    navitem.style.color='green';
//    navitem.style.fontWeight="bold";
// })



 //nodelist

 const navItems=document.querySelectorAll("a");

//  console.log(navItems)

//  for(let i=0;i<navItems.length;i++){
//         // console.log(navItems[i]);
//         const navitem=navItems[i];
//         navitem.style.backgroundColor="#fff";
//         navitem.style.color='green';
//         navitem.style.fontWeight="bold";
//     }


// for(let navitem of navItems){
//         navitem.style.backgroundColor="#fff";
//        navitem.style.color='green';
//        navitem.style.fontWeight="bold";
//     }
    


// navItems.forEach((navitem)=>{
//     navitem.style.backgroundColor="#fff";
//    navitem.style.color='green';
//    navitem.style.fontWeight="bold";
// })