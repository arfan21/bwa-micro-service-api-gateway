const express = require("express");
const router = express.Router();
const coursesController = require("./controllers/courses");
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, coursesController.create);
router.get("/", coursesController.getAll);
router.get("/:id", coursesController.get);
router.put("/:id", verifyToken, coursesController.update);
router.delete("/:id", verifyToken, coursesController.deleteCourses);

module.exports = router;
