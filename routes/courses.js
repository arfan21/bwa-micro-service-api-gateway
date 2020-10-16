const express = require("express");
const router = express.Router();
const coursesController = require("./controllers/courses");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

router.post("/", verifyToken, verifyAdmin, coursesController.create);
router.get("/", coursesController.getAll);
router.get("/:id", coursesController.get);
router.put("/:id", verifyToken, verifyAdmin, coursesController.update);
router.delete(
    "/:id",
    verifyToken,
    verifyAdmin,
    coursesController.deleteCourses
);

module.exports = router;
