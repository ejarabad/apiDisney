const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validateToken = require("../middlewares/validateToken");

router.get("/login", validateToken, authController.login);
router.get("/register", authController.register);

module.exports = router;
