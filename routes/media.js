const express = require("express");
const router = express.Router();
const mediaController = require("./controllers/media");

router.post("/", mediaController.create);
router.get("/", mediaController.getAll);
router.delete("/:id", mediaController.deleteMedia);

module.exports = router;