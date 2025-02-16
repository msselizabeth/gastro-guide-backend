const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const photoArray = new mongoose.Schema({
    url: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const stepSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true // делаем поле обязательным
    },
    image: {
        type: String,
        required: true // делаем поле необязательным
    }
});

const stepsRecipe = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
    },
    steps: {
        type: [stepSchema],
        required: true
    },
});


const Photo = mongoose.model('Photo', photoSchema);
const PhotoArray = mongoose.model('photo', photoArray);
const StepsRecipe = mongoose.model('test', stepsRecipe)
module.exports = {Photo, PhotoArray, StepsRecipe };