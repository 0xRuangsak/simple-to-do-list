// Initialize the to-do list array
let todo = ["placeholder 1", "placeholder 2", "placeholder 3"];

// Function to add a new task
function add(val) {
    todo.push(val);
    updateDisplay();
}

// Function to remove a task
function remove(index) {
    todo.splice(index, 1);
    updateDisplay();
}

// Function to move a task up
function shiftUp(index) {
    if (index > 0 && index < todo.length) {
        [todo[index], todo[index - 1]] = [todo[index - 1], todo[index]];
        updateDisplay();
    }
}

// Function to shift a task down
function shiftDown(index) {
    if (index >= 0 && index < todo.length - 1) {
        [todo[index], todo[index + 1]] = [todo[index + 1], todo[index]];
        updateDisplay();
    }
}

// Function to update the display
function updateDisplay() {
    const listItems = document.querySelectorAll(".list-item");
    
    // Hide all list items initially
    listItems.forEach(item => {
        item.style.display = "none";
    });
    
    // Show and update list items based on todo array
    for (let i = 0; i < todo.length; i++) {
        if (i < listItems.length) {
            listItems[i].style.display = "flex";
            listItems[i].querySelector("li").textContent = todo[i];
        } else {
            // Create new item if needed
            const newItem = document.createElement("div");
            newItem.className = "list-item";
            newItem.innerHTML = `
                <button class="upButton">Up</button>
                <button class="downButton">Down</button>
                <ul><li>${todo[i]}</li></ul>
                <button class="removeButton">Remove</button>
            `;
            document.getElementById("listContainer").appendChild(newItem);
            
            // Set up event listeners for the new buttons
            setupButtonListeners(newItem, i);
        }
    }
}

// Function to set up button listeners for a list item
function setupButtonListeners(item, index) {
    const upButton = item.querySelector(".upButton");
    const downButton = item.querySelector(".downButton");
    const removeButton = item.querySelector(".removeButton");
    
    upButton.onclick = function() {
        shiftUp(index);
    };
    
    downButton.onclick = function() {
        shiftDown(index);
    };
    
    removeButton.onclick = function() {
        remove(index);
    };
}

// Function to handle adding a new task
function addNewTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== "") {
        add(taskInput.value.trim());
        taskInput.value = "";
    }
}

// Initialize the page when it loads
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    
    // Set up the Add button
    addButton.addEventListener("click", addNewTask);
    
    // Add Enter key support for the input field
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addNewTask();
        }
    });
    
    // Set up initial button listeners for existing items
    const listItems = document.querySelectorAll(".list-item");
    listItems.forEach((item, index) => {
        setupButtonListeners(item, index);
    });
    
    // Show the initial list
    updateDisplay();
});