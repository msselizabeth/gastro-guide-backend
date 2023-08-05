const { controllerWrapper } = require("../helpers");
const { Continent } = require("../models/continent");

const getContinents = async (req, res, next) => {
    console.log(req.params);

        const result = await Continent.find();
        res.json(result);

    
}

module.exports = {
    getContinents: controllerWrapper(getContinents),
}