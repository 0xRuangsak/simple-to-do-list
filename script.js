const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const refreshButton = document.getElementById('refreshButton');

let todo = ["placeholder1","placeholder2","placeholder3"];

function add(val) {
    todo.push(val);
}
function remove(val) {
    const index = todo.indexOf(val);
    todo.splice(index, 1);
}
function shiftUp(val) {
    const index = todo.indexOf(val);
    if ((index > 0) && (index < todo.length)) {
        [todo[index],todo[index - 1]] = [todo[index - 1], todo[index]];
    }
}
function shiftDown(val) {
    const index = todo.indexOf(val);
    if ((index >= 0) && (index < todo.length - 1)) {
        [todo[index],todo[index + 1]] = [todo[index + 1], todo[index]];
    }
}

function updateDisplay() {
    const todoList = document.getElementById("ul");
    todoList.innerHTML = "";

    for (let i = 0; i < todo.length; i++) {
        const li = document.createElement("li");
        li.textContent = todo[i];
        li.dataset.index = i;
        todoList.appendChild(li);
    }
}