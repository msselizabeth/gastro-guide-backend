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
    type: Object,
    mobile: {
      type: Object,
      filejpg: String,
      filewebp: String,
    },
        tablet: {
        type: Object,
      filejpg: String,
      filewebp: String,
    },
    desktop: {
        type: Object,
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