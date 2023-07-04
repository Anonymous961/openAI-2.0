const express = require("express");
const {
  signupUser,
  loginUser,
  verifyUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.get("/:id/verify/:token", verifyUser);

module.exports = router;
