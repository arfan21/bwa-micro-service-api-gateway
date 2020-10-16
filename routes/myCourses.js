const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
const myCoursesController = require("./controllers/my-courses");

router.post("/", verifyToken, myCoursesController.create);
router.get("/", verifyToken, myCoursesController.get);

module.exports = router;
