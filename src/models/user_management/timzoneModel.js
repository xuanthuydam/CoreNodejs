import { Schema, model } from "mongoose";

const timezoneSchema = new Schema({
  timezone_name: { type: String, required: true },
  offset: { type: String, required: true },
  description: { type: String, required: false },
});

const Timezone = model("Timezone", timezoneSchema);

export default Timezone;
