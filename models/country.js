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
      type: imageSchema,
      default: {},
    },
    tablet: {
      type: imageSchema,
      default: {},
    },
    desktop: {
      type: imageSchema,
      default: {},
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