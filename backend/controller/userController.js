const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.sign(name, email, password);
    console.log(user._id);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { signupUser };
