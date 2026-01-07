const express = require("express");
const app = express();
const PORT = 3000;

app.use(log) // global
app.use("/protected", auth) //only for specified path

// Home route
app.get("/", (req, res) => {
    res.send("Home Page");
});

// About route
app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/protected", auth, (req, res) => {
    res.send("You're in");
});

// Slug route
app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true; // mark user as admin
        next(); // proceed to the protected route
    } else {
        res.status(401).send("No Auth"); // block access
    }
}

function log(req,res,next){
    if (req.adadwd.length > 8 )
    next();
}



app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
