const express = require("express")
const router = express.Router()
const controller = require("./controller")

router.get("/search", controller.search)
router.get("/", controller.get)
router.get("/:emp_no", controller.getById)
router.post("/", controller.post)
router.put("/:emp_no", controller.put)
router.delete("/:emp_no", controller.deleteById)

module.exports = router
