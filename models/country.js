const { Schema, model } = require("mongoose");

const countrySchema = new Schema({
    countryName: String,
    image: String,
    owner: {
        type: Schema.Types.ObjectId,  
        ref: 'continent',                   
    },
    continent: String,
});

const Country = model("countries", countrySchema);

module.exports = {
    Country,
};