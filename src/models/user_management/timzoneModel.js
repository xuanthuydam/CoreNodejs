import { Schema, model } from "mongoose";

const timezoneSchema = new Schema({
  timezone_name: { type: String, required: true },
  Off_set_utc: { type: String, required: true },
});

const Timezone = model("Timezone", timezoneSchema);

export default Timezone;
