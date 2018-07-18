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

//Run app and console log notif
app.listen(PORT, () => console.log(`Application Running on  port ${PORT}`));