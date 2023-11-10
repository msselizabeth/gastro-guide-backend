const { HttpError } = require("../helpers");
const { User } = require("../models/user");
const { registrationMail } = require("../nodemailer");

const resentVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401, "Email not found")
    }
    if (user.verify) {
         throw HttpError(401, "Email has already verified");
    }
    const emailMessage = {
      to: email,
      html: `<a target="_blank" href="https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/verify/${verificationCode}">Click to verify email</a>`,
    };

    registrationMail(emailMessage).catch(console.error);

    res.status(201).json({
         message: "Verify email send"
     });
};

module.exports = {
    resentVerifyEmail,
}
