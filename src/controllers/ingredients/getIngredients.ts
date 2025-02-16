import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../utils/HttpError.js";
import { AllowedLanguages } from "../../types/lang.js";
import Ingredient from "../../models/ingredient.js";


export const getIngredients = async (req: Request, res: Response) => {
    const lang = req.query.lang as AllowedLanguages;
    if (!lang) {
      throw HttpError(400, "Invalid language parameter");
    }
    const ingredients = await Ingredient.find({})
    res.json(ingredients)
}