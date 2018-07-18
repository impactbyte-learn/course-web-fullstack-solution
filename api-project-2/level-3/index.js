//App Config
const PORT = 3000;

//Load package dependency
const express = require("express");

const app = express();

app.use('/todos', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
}, (req, res, next) => {
    console.log('Request Type:', req.method)
    req.prefixResponse = "User Request:"
    next()
})

app.get("/", (req, res) => {
    res.send({
        name: "API Project 2",
        version: "1.0.0",
        author: "John Doe"
    });
});

app.get("/todos", (req, res) => {
    res.send(`${req.prefixResponse} Get all todo list`);
});

app.get("/todos/:id", (req, res) => {
    res.send(`${req.prefixResponse} Get one todo with id ${req.params.id}`);
});

app.post("/todos", (req, res) => {
    res.send(`${req.prefixResponse} Save one todo `);
});

app.delete("/todos", (req, res) => {
    res.send(`${req.prefixResponse} Remove all todo list`);
});

app.delete("/todos/:id", (req, res) => {
    res.send(`${req.prefixResponse} Remove one todo with id ${req.params.id}`);
});

app.put("/todos/:id", (req, res) => {
    res.send(`${req.prefixResponse} Update one todo with id ${req.params.id}`);
});
//Run app and console log notif
app.listen(PORT, () => console.log(`Application Running on  port ${PORT}`));