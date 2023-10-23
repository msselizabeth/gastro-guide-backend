const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const continentsRouter = require("./routes/api/continents");
const continentsRouterEN = require("./routes/api/continentsEN");
const countriesRouter = require("./routes/api/countries");
const countriesRouterEN = require("./routes/api/countriesEN");
const recipesRouter = require("./routes/api/recipes");
const productsRouter = require("./routes/api/products");
const authRouter = require("./routes/api/auth");

dotenv.config();

const app = express();

app.use(cors());
// app.use(express.json());

app.use("/api/ua/continents", continentsRouter);
app.use("/api/en/continents", continentsRouterEN);
app.use("/api/ua/countries", countriesRouter);
app.use("/api/en/countries", countriesRouterEN);
app.use("/api/recipes", recipesRouter);
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);





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

