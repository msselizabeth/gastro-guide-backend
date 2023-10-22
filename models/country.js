const { Schema, model } = require("mongoose");

const countrySchema = new Schema({
  _id: Schema.Types.ObjectId,
  countryName: {
    en: String,
    ua: String,
  },
  capitalCountry: {
    en: String,
    ua: String,
  },
  imageAlt: {
    en: String,
    ua: String,
  },
  featuresCountryTitle: String,
  featuresCountry: [
    {
      text: String,
    },
  ],
  history: [
    {
      text: String,
    },
  ],
  seasons: [
    {
      text: String,
    },
  ],
  owner: String,
  imageSmall: String,
  imageHero: String,
});

const Country = model("countries", countrySchema);

module.exports = {
    Country,
};