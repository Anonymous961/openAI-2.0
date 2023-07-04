const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const Token = require("../models/token");
const { sendEmail } = require("../utils/sendEmail");
const crypto = require("crypto");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    // console.log(user._id);
    const token = createToken(user._id);
    const token1 = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE_URL}user/${user._id}/verify/${token1.token}`;
    await sendEmail(
      user.email,
      "Verify Email",
      `Dear ${user.name},\n\n I hope you're doing well. Thanks for showing you interest in OpenAI 2.0. I highly appreciate your enthusiasm.\n\n Here is your verfication link:- ` +
        url +
        "\n\n  Thank you for using OpenAI 2.0. I appreciate your cooperation in completing the verification process.\n\n\nBest regards,\nAnil Kumar Behera\nOpenAI 2.0"
    );

    res.status(200).json({
      message: "An email sent to your account please verify",
      username: user.name,
      email,
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

const verifyUser = async (req, res) => {
  // console.log("hello");
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(400).json({ message: "not a user" });
    }
    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) {
      return res.status(400).json({ message: "no token found." });
    }

    await User.findOneAndUpdate({ _id: user._id }, { verified: true });
    await token.deleteOne();
    // res.redirect(process.env.FRONT_URL+'')
    res
      .status(200)
      .json({ message: "Email verified successfully. Now you can login." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    if (!user.verified) {
      let token = await Token.findOne({ userId: user._id });
      if (!token) {
        const token1 = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
        console.log("no token");
        const url = `${process.env.BASE_URL}user/${user._id}/verify/${token1.token}`;
        await sendEmail(user.email, "Verify Email", url);
      }
      return res
        .status(401)
        .json({ message: "An email sent to your account please verify." });
    }

    const token = createToken(user._id);
    res.status(200).json({ username: user.name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser, verifyUser };
