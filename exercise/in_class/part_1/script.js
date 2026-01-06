// Get references to HTML elements using their IDs
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskTable = document.getElementById("taskTable");

// This function runs when the form is submitted
taskForm.addEventListener("submit", function(event) {
    //prevent page from reloading
    event.preventDefault();
    
    // Get the value from the input field
    

    // Guard clause: do nothing if input is empty
    

    // Create a new table row

    // Create the task cell
    // Assign taskCell text to = taskText

    // Create the delete button cell
    // Set Textcontent of delete button to "Delete"
    const actionCell = document.createElement("td");


    // When the delete button is clicked, remove this row
    deleteButton.addEventListener("", function () {
        // add action 
    });

    // Build the row
    actionCell.appendChild(deleteButton);
    row.appendChild(taskCell);
    row.appendChild(actionCell);

    // Add the row to the table body

    // Clear the input field

});
