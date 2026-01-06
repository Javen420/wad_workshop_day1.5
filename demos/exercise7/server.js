const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/workshopDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const Student = mongoose.model("Student", studentSchema);

// Get all students
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// Add student
app.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});

// Delete student
app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

// Update student
app.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
