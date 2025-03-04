import mongoose, { Schema, Document } from "mongoose";
import { LangSchema } from "./languageObject.js";
import { Lang } from "./languageObject.js";

interface Feature {
  featureImage: string;
  featureName: Lang;
  featureDescription: Lang;
}

interface ShortDescription {
  en: string[];
  uk: string[];
}

interface Continent extends Document {
  continentName: Lang;
  heroImage: string;
  planetIcon: string;
  continentIcon: string;
  backImage: string;
  ingredients: Schema.Types.ObjectId[];
  features: Feature[];
  shortDescription: ShortDescription;
  slug: string;
}

const featureContinentSchema = new Schema({
  featureImage: {
    type: String,
  },
  featureName: LangSchema,
  featureDescription: LangSchema,
});

const continentSchema = new Schema(
  {
    continentName: LangSchema,
    heroImage: {
      type: String,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    planetIcon: {
      type: String,
    },
    continentIcon: {
      type: String,
    },
    backImage: {
      type: String,
    },
    ingredients: {
      type: [Schema.Types.ObjectId],
      ref: "Ingredient",
    },
    features: [featureContinentSchema],
    shortDescription: {
      en: [String],
      uk: [String],
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model<Continent>("Continent", continentSchema);
