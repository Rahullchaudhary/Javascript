const todoform=document.querySelector(".form-todo")
// console.log(todoform)
const todoList=document.querySelector(".todo-list")
const todoInput=document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext=todoInput.value;
    const newli=document.createElement("li");
    const newLiInnerHtml=`
        <span class="text">${newtodotext} </span>
        <div class="todo-buttons">
            <button class="todo-btn done">
                Done
            </button>
            <button class="todo-btn remove">
                Remove
            </button>
        </div>
    `;
   newli.innerHTML= newLiInnerHtml;
   todoList.append(newli);
    todoInput.value="";
});
todoList.addEventListener("click",(e)=>{
    //check if user click on done button
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    };
    if(e.target.classList.contains("remove")){
        const targetedli=e.target.parentNode.parentNode;
        targetedli.remove();
    };
})