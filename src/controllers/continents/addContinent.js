const { HttpError } = require("../helpers");
const {
  ContinentUK,
  ContinentEN,
  validateContinent,
} = require("../models/continent");

//controllers for creating continent
const addContinentUK = async (req, res) => {
  const { image, icon, productsPhotos, featuresPhotos } = req.files;
  const { products, features } = req.body;

  if (image) req.body.image = image[0].location;
  if (icon) req.body.icon = icon[0].location;

  if (products) {
    req.body.products = JSON.parse(products).map((product, index) => ({
      ...product,
      photo: productsPhotos[index].location,
    }));
  }

  if (features) {
    req.body.features = JSON.parse(features).map((feature, index) => ({
      ...feature,
      photo: featuresPhotos[index].location,
    }));
  }

  const { error } = validateContinent(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const newContinent = await ContinentUK.create({ ...req.body });

  res.status(201).json({
    message: "Continent uploaded",
    newContinent,
  });
};
const addContinentEN = async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const { name, description } = req.body;

  if (!name || !description || !req.files.image || !req.files.icon) {
    return res
      .status(400)
      .json({ message: "Name, description, image, and icon are required" });
  }

  const productsList = req.files.productsPhotos.map((file, index) => ({
    productName: req.body[`productName${index}`],
    description: req.body[`description${index}`],
    photo: file.location,
  }));

  const featuresList = req.files.featuresPhotos.map((file, index) => ({
    text: req.body[`text${index}`],
    photo: file.location,
  }));

  const continent = new ContinentEN({
    name: name,
    description: description,
    image: req.files.image[0].location,
    icon: req.files.icon[0].location,
    features: featuresList,
    products: productsList,
  });

  await continent.save();
  res.status(200).json({ message: "Continent uploaded", continent });
};

// controllers for creating continent's features item
const addFeatureUK = async (req, res) => {
  const { continentId } = req.params;
  const { text } = req.body;

  if (!req.file) throw HttpError(400, "Picture for feature is required");

  if (isEmptyString(text))
    throw HttpError(
      400,
      "Text for feature is required and cannot be empty or whitespace"
    );

  const continent = await ContinentUK.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const existFeatureDescription = continent.features.some(
    (feature) => feature.text === text
  );
  if (existFeatureDescription)
    throw HttpError(400, "This text is already in use");

  const existImage = continent.features.some(
    (feature) => feature.photo === req.file.location
  );

  if (existImage) throw HttpError(400, "This picture is already in use");

  const updatedContinent = await ContinentUK.findByIdAndUpdate(
    continentId,
    {
      $push: {
        features: {
          photo: req.file.location,
          text,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Feature added successfully", updatedContinent });
};
const addFeatureEN = async (req, res) => {
  const { continentId } = req.params;
  const { text } = req.body;

  if (!req.file) throw HttpError(400, "Picture for feature is required");

  if (isEmptyString(text))
    throw HttpError(
      400,
      "Text for feature is required and cannot be empty or whitespace"
    );

  const continent = await ContinentEN.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const existFeatureDescription = continent.features.some(
    (feature) => feature.text === text
  );
  if (existFeatureDescription)
    throw HttpError(400, "This text is already in use");

  const existImage = continent.features.some(
    (feature) => feature.photo === req.file.location
  );

  if (existImage) throw HttpError(400, "This picture is already in use");

  const updatedContinent = await ContinentEN.findByIdAndUpdate(
    continentId,
    {
      $push: {
        features: {
          photo: req.file.location,
          text,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Feature added successfully", updatedContinent });
};

// controller for creating continent's product item
const addProductUK = async (req, res) => {
  const { continentId } = req.params;
  const { description, productName } = req.body;

  if (!req.file) throw HttpError(400, "Product photo is required");

  if (isEmptyString(description))
    throw HttpError(
      400,
      "Description is required and cannot be empty or whitespace"
    );
  if (isEmptyString(productName))
    throw HttpError(
      400,
      "Product name is required and cannot be empty or whitespace"
    );

  const continent = await ContinentUK.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const existProduct = continent.products.some(
    (product) => product.productName === productName
  );
  if (existProduct) throw HttpError(400, "Product aslready exists");

  const existProductDescription = continent.products.some(
    (product) => product.description === description
  );
  if (existProductDescription)
    throw HttpError(400, "This description is already in use");

  const existImage = continent.products.some(
    (product) => product.photo === req.file.location
  );
  if (existImage) throw HttpError(400, "This picture is already in use");

  const updatedContinent = await ContinentUK.findByIdAndUpdate(
    continentId,
    {
      $push: {
        products: {
          productName,
          photo: req.file.location,
          description,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Product added successfully", updatedContinent });
};
const addProductEN = async (req, res) => {
  const { continentId } = req.params;
  const { description, productName } = req.body;

  if (!req.file) throw HttpError(400, "Product photo is required");

  if (isEmptyString(description))
    throw HttpError(
      400,
      "Description is required and cannot be empty or whitespace"
    );
  if (isEmptyString(productName))
    throw HttpError(
      400,
      "Product name is required and cannot be empty or whitespace"
    );

  const continent = await ContinentEN.findById(continentId);
  if (!continent) throw HttpError(404, "Continent not found");

  const existProduct = continent.products.some(
    (product) => product.productName === productName
  );
  if (existProduct) throw HttpError(400, "Product aslready exists");

  const existProductDescription = continent.products.some(
    (product) => product.description === description
  );
  if (existProductDescription)
    throw HttpError(400, "This description is already in use");

  const existImage = continent.products.some(
    (product) => product.photo === req.file.location
  );
  if (existImage) throw HttpError(400, "This picture is already in use");

  const updatedContinent = await ContinentEN.findByIdAndUpdate(
    continentId,
    {
      $push: {
        products: {
          productName,
          photo: req.file.location,
          description,
        },
      },
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Product added successfully", updatedContinent });
};

module.exports = {
  addContinentUK,
  addContinentEN,
  addFeatureEN,
  addFeatureUK,
  addProductUK,
  addProductEN,
};
