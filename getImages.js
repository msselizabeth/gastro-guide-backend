const path = require('path');
const { controllerWrapper } = require("./helpers");

const getImages = async (req, res) => {
    const filename = req.params.filename;
    console.log(filename);
  const imagePath = path.join(__dirname, 'images', filename);

  res.sendFile(imagePath);
};

module.exports = {
    getImages: controllerWrapper(getImages),
}