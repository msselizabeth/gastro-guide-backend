const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    authorName: String,
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
