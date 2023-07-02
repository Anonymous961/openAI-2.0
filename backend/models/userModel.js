const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (name, email, password) {
  if (!name || !email || !password) {
    throw Error("all fields are required");
  }

  if (!validator.isEmail(email)) {
    throw Error("not a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password must contain 1 small, 1 cap letter, atleast 1 number and a symbol"
    );
  }
  const exist = await findOne({ email });
  if (exist) {
    throw Error(`A user with ${email} already exists`);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });
  return user;
};
module.exports = mongoose.model("User", userSchema);
