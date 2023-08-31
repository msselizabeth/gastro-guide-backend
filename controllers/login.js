const { User } = require("../models/user");
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
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

module.exports = login;
