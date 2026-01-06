const express = require("express");
//import mongoose "const mongoose = require("mongoose");"
//import Task "const Task = require("./models/Task");"

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect("") // add connection
    .then(() => console.log("")) // add success message 
    .catch(err => console.error(err));

// Show tasks


// Add task
app.post("/add-task", async (req, res) => {
    const taskText = req.body.task;

    if (taskText !== "") {
        await Task.create({
            text: taskText,
            completed: false
        });
    }

    res.redirect("/");
});

// Delete task


// Toggle completion
app.post("/toggle-task", async (req, res) => {
    const taskId = req.body.id;
    const task = await Task.findById(taskId);

    task.completed = !task.completed;
    await task.save();

    res.redirect("/");
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
