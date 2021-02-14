const express = require("express");
const router = express.Router();
const lessonsController = require("./controllers/lessons");

router.post("/", lessonsController.create);
router.get("/", lessonsController.getAll);
router.get("/:id", lessonsController.get);
router.put("/:id", lessonsController.update);
router.delete("/:id", lessonsController.deleteLesson);

module.exports = router;
