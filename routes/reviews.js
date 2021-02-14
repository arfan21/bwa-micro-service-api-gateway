const express = require("express");
const router = express.Router();
const reviewsController = require("./controllers/reviews");

router.post("/", reviewsController.create);
router.put("/:id", reviewsController.update);
router.delete("/:id", reviewsController.deleteReviews);

module.exports = router;
