const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/todoApp")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

// Show tasks
app.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.render("index", { tasks });
});

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
app.post("/delete-task", async (req, res) => {
    const taskId = req.body.id;
    await Task.findByIdAndDelete(taskId);
    res.redirect("/");
});

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
