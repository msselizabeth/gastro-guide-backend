const { HttpError, isEmptyString } = require("../../helpers");
const { ContinentUK, ContinentEN } = require("../../models/continent");

//controllers for deleting continent
const deleteContinentUK = async (req, res) => {
  const { continentId } = req.params;
  const deletedContinnet = await ContinentUK.findByIdAndDelete(continentId);
  if (!deletedContinnet) throw HttpError(404, "Continent not found");
  res.json({ message: "Continet deleted successfully" });
};
const deleteContinentEN = async (req, res) => {
  const { continentId } = req.params;
  const deletedContinnet = await ContinentEN.findByIdAndDelete(continentId);
  if (!deletedContinnet) throw HttpError(404, "Continent not found");
  res.json({ message: "Continet deleted successfully" });
};
//controllers for deleting continent's product item
const deleteProductUK = async (req, res) => {
  const { continentId, productId } = req.params;

  const continent = await ContinentUK.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const product = continent.products.id(productId);
  if (!product) throw HttpError(404, "Product not found");

  const updatedContinent = await ContinentUK.findByIdAndUpdate(
    continentId,
    {
      $pull: {
        products: {
          productName: product.productName,
          photo: product.photo,
          description: product.description,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Product deleted successfully", updatedContinent });
};
const deleteProductEN = async (req, res) => {
  const { continentId, productId } = req.params;

  const continent = await ContinentEN.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const product = continent.products.id(productId);
  if (!product) throw HttpError(404, "Product not found");

  const updatedContinent = await ContinentUK.findByIdAndUpdate(
    continentId,
    {
      $pull: {
        products: {
          productName: product.productName,
          photo: product.photo,
          description: product.description,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Product deleted successfully", updatedContinent });
};

//controllers for deleting continent's feature item
const deleteFeatureUK = async (req, res) => {
  const { continentId, featureId } = req.params;

  const continent = await ContinentUK.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const feature = continent.features.id(featureId);
  if (!feature) throw HttpError(404, "Feature not found");

  const updatedContinent = await ContinentUK.findByIdAndUpdate(
    continentId,
    {
      $pull: {
        features: {
          photo: feature.photo,
          text: feature.text,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Feature deleted successfully", updatedContinent });
};
const deleteFeatureEN = async (req, res) => {
  const { continentId, featureId } = req.params;

  const continent = await ContinentEN.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const feature = continent.features.id(featureId);
  if (!feature) throw HttpError(404, "Feature not found");

  const updatedContinent = await ContinentEN.findByIdAndUpdate(
    continentId,
    {
      $pull: {
        features: {
          photo: feature.photo,
          text: feature.text,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Feature deleted successfully", updatedContinent });
};

module.exports = {
  deleteFeatureUK,
  deleteFeatureEN,
  deleteProductEN,
  deleteProductUK,
  deleteContinentUK,
  deleteContinentEN,
};
