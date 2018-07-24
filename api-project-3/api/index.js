const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send({
        message: "API Project 3"
    })
})

module.exports = router