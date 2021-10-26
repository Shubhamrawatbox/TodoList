const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filteroption=document.querySelector('.filter-todo')


// Event listner
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deletecheck)





// function

function addTodo(event) {
    event.preventDefault();
    // create div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // create new list
    const newTodo = document.createElement('li')
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('newTodo')
    todoDiv.appendChild(newTodo)

    // check button
    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add('check-button')
    todoDiv.appendChild(checkButton)
    // delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteButton.classList.add('delete-button')
    todoDiv.appendChild(deleteButton)

    todoList.appendChild(todoDiv)
    // clearinput value
    todoInput.value = '';
}






// Delete Items
function deletecheck(e) {
    const item = e.target;
    // delete todo
    if (item.classList[0] === 'delete-button') {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }
    // Checklist items
    if (item.classList[0] === 'check-button') {
        const todo = item.parentElement;
        todo.classList.add('complete')
    }
}




