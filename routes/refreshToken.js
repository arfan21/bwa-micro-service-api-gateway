const express = require("express");
const router = express.Router();
const refreshTokenController = require("./controllers/refresh-token");

router.post("/", refreshTokenController.refreshToken);

module.exports = router;