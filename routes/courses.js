const express = require("express");
const router = express.Router();
const coursesController = require("./controllers/courses");
const verifyToken = require("../middleware/verifyToken");
const permission = require("../middleware/permission");

//public routes
router.get("/", coursesController.getAll);
router.get("/:id", coursesController.get);

//private routes
router.post("/", verifyToken, permission("admin"), coursesController.create);
router.put("/:id", verifyToken, permission("admin"), coursesController.update);
router.delete(
    "/:id",
    verifyToken,
    permission("admin"),
    coursesController.deleteCourses
);

module.exports = router;
