const express = require("express");
const { signupUser } = require("../controller/userController");
const router = express.Router();

router.post("/signup", signupUser);

// router.post("/login");

module.exports = router;
