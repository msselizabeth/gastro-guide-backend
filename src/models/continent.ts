import mongoose, { Schema, Document } from 'mongoose';
import { LangSchema } from './languageObject.js';
import { Lang } from './languageObject.js';
// const Joi = require('joi');
interface Feature {
    featureImage: string;
    featureName: Lang;
    featureDescription: Lang;
}

interface ShortDescription {
    en: string[],
    uk: string[]
}

interface Continent extends Document {
    continentName: Lang,
    heroImage: string,
    planetIcon: string,
    continentIcon: string,
    backImage: string,
    ingredients: Schema.Types.ObjectId[],
    features: Feature[],
    shortDescription: ShortDescription,
}

const featureContinentSchema = new Schema({
    featureImage: {
        type: String,
    },
    featureName: LangSchema,
    featureDescription: LangSchema
})

const continentSchema = new Schema({
    continentName: LangSchema, 
    heroImage: {
        type: String,
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
        ref: 'Ingredient'
    },
    features: [featureContinentSchema],
    shortDescription: {
        en: [String],
        uk: [String]
    }
}, { versionKey: false, timestamps: true });

export default mongoose.model<Continent>('Continent', continentSchema);

// const validateContinent = (continent) => {
//     const schema = Joi.object({
//         name: Joi.string().trim().required().min(1),
//         description: Joi.string().trim().required().min(1),
//         image: Joi.string().required(),
//         icon: Joi.string().required(),
//         products: Joi.array().items(Joi.object({
//             productName: Joi.string().required(),
//             photo: Joi.string().required(),
//             description: Joi.string().required(),
//         })),
//         features: Joi.array().items(Joi.object({
//             photo: Joi.string().required(),
//             text: Joi.string().required(),
//         })),
//     });

//     return schema.validate(continent);
// };

// const validateContinentPatch = (continent) => {
//     const schema = Joi.object({
//         name: Joi.string().trim().required().min(1),
//         description: Joi.string().trim().required().min(1),
//         image: Joi.string(),
//         icon: Joi.string(),
//         products: Joi.array().items(Joi.object({
//             productName: Joi.string().trim().required().min(1),
//             photo: Joi.string(),
//             description: Joi.string().trim().required().min(1),
//         })),
//         features: Joi.array().items(Joi.object({
//             photo: Joi.string(),
//             text: Joi.string().trim().required().min(1),
//         })),
//     }).min(1); 

//     return schema.validate(continent);
// };



