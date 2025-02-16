import mongoose, { Schema, Document, Types } from 'mongoose';
import { LangSchema } from './languageObject.js';
import { Lang } from './languageObject.js';

interface Ingredient extends Document {
    name: Lang,
    image: string,
    energy: string,
    proteins: number,
    fats: number,
    carbohydrates: number,
    water: number,
    sugars: number,
}

const ingreientSchema = new Schema<Ingredient>({
    name: LangSchema,
    image: {
        type: String,
        required: true,
    },
    energy: {
        type: String,
        required: true,
    },
    proteins: {
        type: Number,
        required: true,
    },
    fats: {
        type: Number,
        required: true,
    },
    carbohydrates: {
        type: Number,
        required: true,
    },
    water: {
        type: Number,
        required: true,
    },
    sugars: {
        type: Number,
        required: true,
    },
}, { versionKey: false, timestamps: true })

export default mongoose.model<Ingredient>('Ingredient', ingreientSchema);