const express = require("express");
const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// About route
app.get("/about", (req, res) => {
    res.send("About Page");
});

// Slug route
app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
