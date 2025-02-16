const Joi = require("joi");
const { Schema, model } = require("mongoose");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true,
    },
    password: {
      type: String,
      minlenght: 6,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    portrait: {
      cuisine: {
        type: Array,
        default: [],
      },
      categories: {
        type: Array,
        default: [],
      },
      cookingMethods: {
        type: Array,
        default: [],
      },
      allergies: {
        type: Array,
        default: [],
      },
    },
    favorites: [String],
    verificationCode: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);


const registerSchema = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
})

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
    registerSchema,
    loginSchema
}

const User = model("user", userSchema);

module.exports = {
    User,
    schemas
}