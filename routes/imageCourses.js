const express = require("express");
const router = express.Router();
const imageCoursesController = require("./controllers/image-courses");

router.post("/", imageCoursesController.create);
router.delete("/:id", imageCoursesController.deleteImageCourses);

module.exports = router;
