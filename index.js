const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const continentsRouterUA = require("./routes/api/continents");
const continentsRouterEN = require("./routes/api/continentsEN");
const countriesRouterUA = require("./routes/api/countries");
const countriesRouterEN = require("./routes/api/countriesEN");
const recipesRouterUA = require("./routes/api/recipes");
const recipesRouterEN = require("./routes/api/recipesEN");
const productsRouterUA = require("./routes/api/products");
const productsRouterEN = require("./routes/api/productsEN");
const authRouterUA = require("./routes/api/auth");
const authRouterEN = require("./routes/api/authEN");
const commentRouter = require("./routes/api/comment");
dotenv.config();

const app = express();

app.use(cors());
// app.use(express.json());
app.use("/api/ua/continents", continentsRouterUA);
app.use("/api/en/continents", continentsRouterEN);
app.use("/api/ua/countries", countriesRouterUA);
app.use("/api/en/countries", countriesRouterEN);
app.use("/api/ua/recipes", recipesRouterUA);
app.use("/api/en/recipes", recipesRouterEN);
app.use("/api/ua/products", productsRouterUA);
app.use("/api/en/products", productsRouterEN);
app.use("/api/ua/auth", authRouterUA);
app.use("/api/en/auth", authRouterEN);
app.use("/api/comments", commentRouter);


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

