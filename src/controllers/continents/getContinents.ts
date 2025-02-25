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
      heroImage,
      planetIcon,
      _id,
      continentIcon,
      ingredients,
      features,
      shortDescription
    }) => {
      
      return {
        id: _id,
        continentName: continentName[lang],
        // heroImage,
        planetIcon,
        backImage,
        continentIcon,
        // ingredients,
        // features: features.map(({ featureName, featureDescription, featureImage }) => {
        //   return {
        //     featureName: featureName[lang],
        //     featureDescription: featureDescription[lang],
        //     featureImage
        //   }
        // }),
        shortDescription: shortDescription[lang],
      };
    }
  );
  res.json(result);
};
