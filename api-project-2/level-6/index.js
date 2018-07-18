//App Config
const PORT = 3000;

//Load package dependency
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

let todo_list = []

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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
    res.send({ data: todo_list });
});

app.get("/todos/search", (req, res) => {
    result = todo_list.filter(todo => {
        let match = false;
        for (let key in req.query) {
            if (typeof todo[key] !== "string") {
                todo[key] = JSON.stringify(todo[key])
            }
            match = (todo[key].includes(req.query[key]))
        }
        return match
    })
    res.send(result)
});

app.get("/todos/:id", (req, res) => {
    let todo = todo_list[req.params.id]
    if (todo) {
        res.send({ data: todo });
    } else {
        res.send({ message: "data not found" })
    }
});

app.post("/todos", (req, res) => {
    todo_list.push(req.body)
    res.send({
        message: "insert data success",
        data: req.body
    });
});

app.delete("/todos", (req, res) => {
    todo_list = []
    res.send({ message: "remove all data success" })
});

app.delete("/todos/:id", (req, res) => {
    todo = todo_list[req.params.id]
    if (todo) {
        todo_list.splice(req.params.id, 1)
        res.send({
            message: "delete data success",
            data: todo
        })
    } else {
        res.send({ message: "data not found" })
    }
});

app.put("/todos/:id", (req, res) => {
    todo = todo_list[req.params.id]
    req.body.done = JSON.parse(req.body.done)

    if (todo) {
        todo_list[req.params.id] = req.body
        res.send({
            message: "update data success",
            data: todo_list[req.params.id]
        })
    } else {
        res.send({ message: "data not found" })
    }
});

//Run app and console log notif
app.listen(PORT, () => console.log(`Application Running on  port ${PORT}`))