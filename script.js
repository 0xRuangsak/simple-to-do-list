const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const refreshButton = document.getElementById('refreshButton');

let to_do = [];

function add(val) {
    to_do.push(val);
}
function remove(val) {
    const index = to_do.indexOf(val);
    to_do.splice(index, 1);
}
function shiftUp(val) {
    const index = to_do.indexOf(val);
    if ((index > 0) && (index < to_do.length)) {
        [to_do[index],to_do[index - 1]] = [to_do[index - 1], to_do[index]];
    }
}
function shiftDown(val) {
    const index = to_do.indexOf(val);
    if ((index >= 0) && (index < to_do.length - 1)) {
        [to_do[index],to_do[index + 1]] = [to_do[index + 1], to_do[index]];
    }
}

function updateDisplay() {

}