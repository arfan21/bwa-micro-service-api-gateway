const express = require("express");
const router = express.Router();
const orderPaymentControllers = require("./controllers/order-payment")

router.get("/", orderPaymentControllers.getOrders)

module.exports = router;
