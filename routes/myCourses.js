const express = require("express");
const router = express.Router();
const myCoursesController = require("./controllers/my-courses");

router.post("/", myCoursesController.create);
router.get("/", myCoursesController.get);

module.exports = router;
