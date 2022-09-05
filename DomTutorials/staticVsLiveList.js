// queryselectorAll hame static list degi
// getElementbySomething hame live list degi


// const ul=document.querySelector(".todo-list");
// const listitem=ul.getElementsByTagName("li");
// const sixli=document.createElement("li");
// sixli.textContent="item 6";
// // const ul=document.querySelector(".todo-list");
// ul.append(sixli);
// console.log(listitem);


// how to get the dimensions of elements

const sectionTODO=document.querySelector(".ToDo-section")
const info=sectionTODO.getBoundingClientRect().width ;
console.log(info)