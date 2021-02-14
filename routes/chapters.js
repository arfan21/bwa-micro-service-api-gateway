const express = require("express");
const router = express.Router();
const chaptersController = require("./controllers/chapters");

router.post("/", chaptersController.create);
router.get("/", chaptersController.getAll);
router.get("/:id", chaptersController.get);
router.put("/:id", chaptersController.update);
router.delete("/:id", chaptersController.deleteChapters);

module.exports = router;
