const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: "recipes",
        required: true,
  },

},
    { versionKey: false, timestamps: true }
);

const Comment = model("comment", commentSchema);

module.exports = {
    Comment,
}
