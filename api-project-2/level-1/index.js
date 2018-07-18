//App Config
const PORT = 3000;

//Load package dependency
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send({
        name: "API Project 2",
        version: "1.0.0",
        author: "John Doe"
    });
});

app.get("/todos", (req, res) => {
    res.send("Get all todo list");
});

app.get("/todos/:id", (req, res) => {
    res.send("Get one todo");
});

app.post("/todos", (req, res) => {
    res.send("Save one todo");
});

app.delete("/todos", (req, res) => {
    res.send("Remove all todo list");
});

app.delete("/todos/:id", (req, res) => {
    res.send("Remove one todo");
});

app.put("/todos/:id", (req, res) => {
    res.send("Update one todo");
});
//Run app and console log notif
app.listen(PORT, () => console.log(`Application Running on  port ${PORT}`));