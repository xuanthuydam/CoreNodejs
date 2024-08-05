import { Schema, model } from "mongoose";

const themeSchema = new Schema({
  theme_name: { type: String, required: true },
  description: { type: String, required: false },
});

const Theme = model("Theme", themeSchema);

export default Theme;
