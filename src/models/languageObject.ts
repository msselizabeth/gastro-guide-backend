import mongoose, { Schema, Document } from "mongoose";

export interface Lang extends Document {
  en: string;
  uk: string;
}

export const LangSchema = new Schema<Lang>({
  en: { type: String },
  uk: { type: String },
});

