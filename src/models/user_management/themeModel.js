import { Schema, model } from "mongoose";

const themeSchema = new Schema({
  theme_name: { type: String, required: true },
});

const Theme = model("Theme", themeSchema);

export default Theme;
