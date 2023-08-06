const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const continentsRouter = require("./routes/api/continents");
const countryOfContinentRouter = require("./routes/api/countries");
const recipesListRouter = require("./routes/api/recipes");
const imagesRouter = require("./routes/api/images");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/continents", continentsRouter);
app.use("/api/countries", countryOfContinentRouter);
app.use("/api/recipes", recipesListRouter);


app.use("/api/images", imagesRouter);




app.use((req, res) => {
    res.status(404).json({
        message: "Not found",
    })
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({
        message,
    })
})


module.exports = app;
// app.listen(3003, () => { console.log("server running") });
