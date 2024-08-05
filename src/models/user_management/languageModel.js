import { Schema, model } from "mongoose";

const languageSchema = new Schema({
  language_name: { type: String, required: true },
  code: { type: String, required: true },
});

const Language = model("Language", languageSchema);

export default Language;
