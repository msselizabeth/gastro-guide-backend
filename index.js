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
const authRouter = require("./routes/api/auth");
const commentRouter = require("./routes/api/comment");
const userRouter = require("./routes/api/userRequests");
dotenv.config();

const app = express();

app.use(cors());
// app.use(express.json());
app.use("/api/uk/continents", continentsRouterUA);
app.use("/api/en/continents", continentsRouterEN);
app.use("/api/uk/countries", countriesRouterUA);
app.use("/api/en/countries", countriesRouterEN);
app.use("/api/uk/recipes", recipesRouterUA);
app.use("/api/en/recipes", recipesRouterEN);
app.use("/api/uk/products", productsRouterUA);
app.use("/api/en/products", productsRouterEN);
app.use("/api/auth", authRouter);
app.use("/api/comments", commentRouter);
app.use("/api/user", userRouter);


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

