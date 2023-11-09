const { Comment } = require("../models/comment");
const { HttpError } = require("../helpers");

const getComments = async (req, res) => {
    const {recipeId} = req.params;

    const comments = await Comment.find({ recipe: recipeId }).populate(
      "author",
      "userName email createdAt"
    );

    res.status(200).json(comments);
};

module.exports = {
    getComments,
}