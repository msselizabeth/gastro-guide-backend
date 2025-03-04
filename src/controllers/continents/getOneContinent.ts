import { Request, Response, NextFunction } from "express";
import Continent from "../../models/continent.js";
import { HttpError } from "../../utils/HttpError.js";
import { AllowedLanguages } from "../../types/lang.js";
import { Types } from "mongoose";
import { Lang } from "../../models/languageObject.js";

interface IngredientOfContinent {
  _id: Types.ObjectId;
  name: Lang;
  image: string;
}
export const getOneContinent = async (req: Request, res: Response) => {
  const lang = req.query.lang as AllowedLanguages;
  if (!lang) {
    throw HttpError(400, "Invalid language parameter");
  }
  const { slug } = req.params;
  const continent = await Continent.findOne({slug}).populate(
    "ingredients",
    "name image"
  );
  if (!continent) {
    throw HttpError(404, "Continent not found");
  }

  const ingredients = (
    continent.ingredients as unknown as IngredientOfContinent[]
  ).map(({ _id, name, image }) => ({
    id: _id.toString(),
    name: name?.[lang],
    image,
  }));

  const features = continent.features.map(
    ({ featureName, featureDescription, featureImage }) => {
      return {
        featureName: featureName[lang],
        featureDescription: featureDescription[lang],
        featureImage,
      };
    }
  )

  const result = {
    continentName: continent.continentName[lang],
    heroImage: continent.heroImage,
    continentIcon: continent.continentIcon,
    ingredients,
    features,
  };

  res.json(result);
};
