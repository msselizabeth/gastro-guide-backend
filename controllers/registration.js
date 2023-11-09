const { User } = require("../models/user");
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");

const registration = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });  
    if (user) {
        throw HttpError(409, "Email has already been use.");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({...req.body, password: hashPassword}); 
    res.status(201).json({      
            email: newUser.email,        
            name: newUser.userName,
    })
}

// const registrationEN = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email has already been use.");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);
//   const newUser = await User.create({ ...req.body, password: hashPassword });
//   res.status(201).json({
//     email: newUser.email,
//     name: newUser.userName,
//   });
// };

module.exports = {
    registration,
};