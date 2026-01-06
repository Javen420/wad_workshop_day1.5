// Get references to HTML elements using their IDs
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskTable = document.getElementById("taskTable");

// This function runs when the form is submitted
taskForm.addEventListener("submit", function(event) {
    //prevent page from reloading
    event.preventDefault();
    
    // Get the value from the input field
    const taskText = taskInput.value;

    // Guard clause: do nothing if input is empty
    if (taskText === "") {
        return;
    }

    // Create a new table row
    const row = document.createElement("tr");

    // Create the task cell
    const taskCell = document.createElement("td");
    taskCell.textContent = taskText;

    // Create the delete button cell
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // When the delete button is clicked, remove this row
    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    // Build the row
    actionCell.appendChild(deleteButton);
    row.appendChild(taskCell);
    row.appendChild(actionCell);

    // Add the row to the table body
    taskTable.appendChild(row);

    // Clear the input field
    taskInput.value = "";
});
