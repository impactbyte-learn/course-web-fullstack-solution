require("dotenv").config()

const PORT = process.env.PORT || 3000

const express = require("express")
const logger = require("morgan")
const bodyParser = require('body-parser');

const employees = require("./api/employees")
const index = require("./api")

const app = express()

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", index)
app.use("/employees", employees)



app.listen(PORT, () => console.log(`Application Running on  port ${PORT}`));