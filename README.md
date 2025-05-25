# To-Do List Application

A simple, interactive to-do list web application built with vanilla HTML, CSS, and JavaScript. This application allows users to manage their tasks with full CRUD (Create, Read, Update, Delete) operations and task reordering capabilities.

## Features

- ✅ Add new tasks
- 🗑️ Remove existing tasks
- ⬆️ Move tasks up in the list
- ⬇️ Move tasks down in the list
- ⌨️ Keyboard support (Enter key to add tasks)
- 🎨 Clean, responsive interface

## File Structure

```
├── index.html      # Main HTML structure
├── script.js       # JavaScript functionality
└── style.css       # Styling and layout
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start managing your tasks!

## Usage

### Adding Tasks
- Type your task in the input field
- Click the "Add" button or press Enter
- The task will appear at the bottom of your list

### Managing Tasks
- **Move Up**: Click the "Up" button to move a task higher in the list
- **Move Down**: Click the "Down" button to move a task lower in the list
- **Remove**: Click the "Remove" button to delete a task permanently

### Initial Setup
The application comes with three placeholder tasks:
- placeholder 1
- placeholder 2  
- placeholder 3

These can be removed or modified as needed.

## Technical Details

### HTML Structure (`index.html`)
- **Container**: `#listContainer` holds all task items
- **Task Items**: Each task is wrapped in a `.list-item` div containing:
  - Up/Down movement buttons
  - Task content in a `<ul><li>` structure
  - Remove button
- **Input Section**: Text input field and Add button for new tasks

### JavaScript Functionality (`script.js`)

#### Core Data Structure
```javascript
let todo = ["placeholder 1", "placeholder 2", "placeholder 3"];
```

#### Key Functions

| Function | Purpose | Parameters |
|----------|---------|------------|
| `add(val)` | Adds a new task to the list | `val` - string value of the task |
| `remove(index)` | Removes a task at specified index | `index` - position of task to remove |
| `shiftUp(index)` | Moves task up one position | `index` - current position of task |
| `shiftDown(index)` | Moves task down one position | `index` - current position of task |
| `updateDisplay()` | Refreshes the UI to match data array | None |
| `setupButtonListeners(item, index)` | Attaches event handlers to buttons | `item` - DOM element, `index` - array position |

#### Event Handling
- **Add Button**: Adds new tasks when clicked
- **Enter Key**: Submits new tasks when pressed in input field
- **Dynamic Buttons**: Each task's buttons are dynamically bound to their respective array index

### CSS Styling (`style.css`)
- **Flexbox Layout**: Tasks are displayed in a horizontal flex layout
- **Spacing**: 8px gap between elements for clean appearance
- **Alignment**: All elements vertically centered

## Code Architecture

### Design Patterns
- **Separation of Concerns**: HTML structure, CSS styling, and JavaScript logic are kept separate
- **Event-Driven Architecture**: User interactions trigger specific functions
- **Dynamic DOM Manipulation**: UI updates automatically reflect data changes

### Key Technical Decisions

1. **Array-Based Storage**: Tasks are stored in a simple JavaScript array for easy manipulation
2. **Index-Based Operations**: All operations use array indices for precise task targeting  
3. **DOM Synchronization**: The `updateDisplay()` function ensures UI always matches data state
4. **Dynamic Element Creation**: New task elements are created as needed rather than pre-allocated

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Task Editing
- Add double-click to edit functionality
- Implement inline editing with input fields


## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ using vanilla JavaScript*