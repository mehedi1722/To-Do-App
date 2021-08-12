// ----------Selectors --------
const todoInput = document.getElementById("todoInput");
const AddBtn = document.getElementById("AddBtn");
const toDoList = document.getElementById("toDoList");

// ----------Event listener ---------
AddBtn.addEventListener('click', Todo);

// ----------Functionalities ----------
function Todo (event) {
    event.preventDefault();
    let todoInputValue = todoInput.value;
    
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