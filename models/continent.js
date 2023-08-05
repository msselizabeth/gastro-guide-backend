const { Schema, model } = require("mongoose");

const continentSchema = new Schema({
    continentName: String,
});

const Continent = model("continents", continentSchema);

module.exports = {
    Continent,
};