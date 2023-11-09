const { User } = require("../models/user");
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const loginUA = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
     if (!user) {
       throw HttpError(401, "Email or password invalid");
     }
     const passwordCompare = await bcrypt.compare(password, user.password);
     if (!passwordCompare) {
       throw HttpError(401, "Email or password invalid");
     }
    
     const payload = {
        id: user._id,
      }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
    
    res.json({ message: "Login success", token});
};

const loginEN = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  res.json({ message: "Login success" });
};

module.exports = {
  loginEN,
  loginUA
};
