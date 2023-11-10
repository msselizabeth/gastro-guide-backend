const { User } = require("../models/user");
const { HttpError } = require("../helpers");
const bcrypt = require("bcrypt");
const { registrationMail } = require("../nodemailer");
const { nanoid } = require("nanoid");


const registration = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });  
    if (user) {
        throw HttpError(409, "Email has already been use.");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const verificationCode = nanoid();
    const emailMessage = {
      to: email,
      html: `<a target="_blank" href="https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/verify/${verificationCode}">Click to verify email</a>`,
    };
    const newUser = await User.create({ ...req.body, password: hashPassword, verificationCode }); 
   
    registrationMail(emailMessage).catch(console.error);
    res.status(201).json({      
            email: newUser.email,        
             name: newUser.userName,
            messages: "register succses"
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