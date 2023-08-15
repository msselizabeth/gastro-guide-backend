const { Schema, model } = require("mongoose");


const featureSchema = new Schema({
  text: String,
});

const imageSchema = new Schema({
  filejpg: String,
  filewebp: String,
});

const countrySchema = new Schema({
    countryName: String,
    capitalCountry: String,
    images: {
    mobile: {
      filejpg: String,
      filewebp: String,
    },
    tablet: {
      filejpg: String,
      filewebp: String,
    },
    desktop: {
      filejpg: String,
      filewebp: String,
    },
    },
    imageAlt: String,
    featuresCountryTitle: String,
    featuresCountry: [featureSchema],
    owner: {
        type: Schema.Types.ObjectId,  
        ref: 'continent',                   
    },

});

const Country = model("countries", countrySchema);

module.exports = {
    Country,
};