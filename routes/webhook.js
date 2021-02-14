const express = require("express");
const router = express.Router();
const webhookController = require("./controllers/webhooks");

router.post('/', webhookController.webhook);

module.exports = router;