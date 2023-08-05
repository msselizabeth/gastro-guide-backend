const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


const continentsRouter = require("./routes/api/continents");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/continents", continentsRouter);




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
