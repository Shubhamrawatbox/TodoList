const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filteroption = document.querySelector('.filter-todo')


// Event listner
document.addEventListener('DOMContentLoaded', getTodos)
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
    saveLocalTodos(todoInput.value);
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
        removeTodo(todo)

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


// save todo list

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}



// get todos
function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        // console.log(todo);
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        // create new list
        const newTodo = document.createElement('li')
        newTodo.innerHTML = todo;

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
    })
}


// localStorage.clear()


// remove from loacl storage


function removeTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerHTML
    todos.splice(todos.indexOf(todoIndex),1)
    localStorage.setItem("todos",JSON.stringify(todos))
}