const express = require("express");
const router = express.Router();
const usersController = require("./controllers/users");
const verifyToken = require("../middleware/verifyToken")

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.post("/logout", verifyToken, usersController.logout);
router.put("/", verifyToken, usersController.update);
router.get("/", verifyToken, usersController.getUser);

module.exports = router;