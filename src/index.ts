import express from "express";
import {  Request, Response, NextFunction } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { HttpErrorType } from "./utils/HttpError.js";
dotenv.config();

import continentsRouter from "./routes/api/continents.js"
import ingredientsRouter from "./routes/api/ingredients.js"
// const continentsRouterUK = require("./routes/api/continentsUK");
// const continentsRouterEN = require("./routes/api/continentsEN");

// const countriesRouterUA = require("./routes/api/countries");
// const countriesRouterEN = require("./routes/api/countriesEN");
// const recipesRouterUA = require("./routes/api/recipes");
// const recipesRouterEN = require("./routes/api/recipesEN");
// const productsRouterUA = require("./routes/api/products");
// const productsRouterEN = require("./routes/api/productsEN");
// const authRouter = require("./routes/api/auth");
// const commentRouter = require("./routes/api/comment");
// const userRouter = require("./routes/api/userRequests");
// const adminRouter = require("./routes/api/admin");

export const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/continents", continentsRouter);
app.use("/api/ingredients", ingredientsRouter);

// app.use("/api/en/continents", continentsRouterEN);

// app.use("/api/uk/countries", countriesRouterUA);
// app.use("/api/en/countries", countriesRouterEN);
// app.use("/api/uk/recipes", recipesRouterUA);
// app.use("/api/en/recipes", recipesRouterEN);
// app.use("/api/uk/products", productsRouterUA);
// app.use("/api/en/products", productsRouterEN);
// app.use("/api/auth", authRouter);
// app.use("/api/comments", commentRouter);
// app.use("/api/user", userRouter);
// app.use("/api/admin", adminRouter);
app.get("/", async (r: Request, res: Response) => {
  res.json({mes: "Hello GG"})
})


app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Route Not found",
  });
});

app.use((err: Error | HttpErrorType, req: Request, res: Response, next: NextFunction) => {
  const status = "status" in err ? err.status : 500;
  const message = err.message || "Server Error";
  res.status(status).json({
    message,
  });
});

