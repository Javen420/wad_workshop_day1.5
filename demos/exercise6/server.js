const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// POST route
app.post("/add-item", (req, res) => {
    res.send(`Added item: ${req.body.name}`);
});

// PUT route
app.put("/update-item/:id", (req, res) => {
    res.send(`Updated item ${req.params.id} with name ${req.body.name}`);
});

// DELETE route
app.delete("/delete-item/:id", (req, res) => {
    res.send(`Deleted item ${req.params.id}`);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
