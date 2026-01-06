const express = require("express");
const app = express();

const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set("view engine", "ejs");

// In-memory task storage
let tasks = [];
let nextId = 1; 

// Show the to-do list

// Add a task
app.post("/add-task", (req, res) => {
    const taskText = req.body.task;

    if (taskText !== "") {
        tasks.push({
            id: nextId,
            text: taskText
        });
        nextId++;
    }

    res.redirect("/");
});

// Delete a task


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
