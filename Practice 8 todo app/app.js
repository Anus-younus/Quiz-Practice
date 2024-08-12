const todoEle = document.querySelector('.todos')
const todoInputEle = document.querySelector('.todo-input')
const newTodoInput = document.querySelector('.save-todo-input')
const parentTodo = document.querySelector('#show')
const newParentTodo = document.querySelector('#hidden')
const todos = []

function add() {
  let newTodo = todoInputEle.value
  todos.push(newTodo)
  printAllTodos()
  todoInputEle.value = ""
}

function printAllTodos() {
  todoEle.innerHTML = ""
  for (let i = 0; i < todos.length; i++) {
    todoEle.innerHTML += `
           <div>
            <p>${todos[i]}</p>
            <button onclick="edit(${i})">Edit</button><button onclick="deleted(${i})">Delete</button>
            </div>
     `
  }
}

function deleted(index) {
  todos.splice(index, 1)
  printAllTodos()
}

let newIndex;

function edit(index) {
    toggleTodoInput()
    newIndex = index
    newTodoInput.value = todos[newIndex]
}
console.log(newTodoInput);


function saveTodo() {
  toggleTodoInput()
  let newValue = newTodoInput.value
  todos.splice(newIndex, 1, newValue)
  printAllTodos()
}


let isEditing = false;
function toggleTodoInput() {
  if (isEditing) {
    parentTodo.className = "hidden"
    newParentTodo.className = 'show'
  }
  else {
    parentTodo.className = "show"
    newParentTodo.className = 'hidden'
  }
  isEditing = !isEditing
}