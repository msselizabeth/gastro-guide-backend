import { Request, Response, NextFunction } from "express";
import Continent from "../../models/continent.js";
import { HttpError } from "../../utils/HttpError.js";
import { AllowedLanguages } from "../../types/lang.js";

export const getContinents = async (req: Request, res: Response) => {
  const lang = req.query.lang as AllowedLanguages;
  if (!lang) {
    throw HttpError(400, "Invalid language parameter");
  }
  const continents = await Continent.find({});
  const result = continents.map(
    ({
      continentName,
      backImage,
      slug,
      planetIcon,
      _id,
      continentIcon,
      shortDescription
    }) => {
      
      return {
        id: _id,
        slug,
        continentName: continentName[lang],
        planetIcon,
        backImage,
        continentIcon,
        shortDescription: shortDescription[lang],
      };
    }
  );
  res.json(result);
};
