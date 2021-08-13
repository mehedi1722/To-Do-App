// ----------Selectors --------
const todoInput = document.getElementById("todoInput");
const AddBtn = document.getElementById("AddBtn");
const toDoList = document.getElementById("toDoList");

// ----------Event listener ---------
AddBtn.addEventListener('click', Todo);
toDoList.addEventListener('click', deleteCheck);

// ----------Functionalities ----------
function Todo (event) {
    event.preventDefault();
    let todoInputValue = todoInput.value;
    
    if(todoInputValue === ""){
        alert("Add your task Please")
    }else{
        // create to do div
        const Tododiv = document.createElement('div');
        Tododiv.classList.add("todoDiv")

        // create li 
        const li = document.createElement('li');
        li.innerText = todoInputValue;
        li.classList.add("task")
        Tododiv.appendChild(li)

        // create delete button 
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete_btn")
        Tododiv.appendChild(deleteBtn)

        // create complete button 
        const DoneBtn = document.createElement('button')
        DoneBtn.innerText = "Done";
        DoneBtn.classList.add("Complete_btn")
        Tododiv.appendChild(DoneBtn)

        toDoList.appendChild(Tododiv);
        todoInput.value = "";
    }
    

}

function deleteCheck(event) {
    let item = event.target;
    const todo = item.parentElement;

    // Delete button 
    if(item.classList[0] === "delete_btn"){
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
    }

    if(item.classList[0] === "Complete_btn"){
        todo.classList.add("completed_task")
    }
    
}