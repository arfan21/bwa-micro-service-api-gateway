const express = require("express");
const router = express.Router();
const mentorsController = require("./controllers/mentors");

router.post("/", mentorsController.create);
router.get("/", mentorsController.getAll);
router.get("/:id", mentorsController.get);
router.put("/:id", mentorsController.update);
router.delete("/:id", mentorsController.deleteMentor);

module.exports = router;
