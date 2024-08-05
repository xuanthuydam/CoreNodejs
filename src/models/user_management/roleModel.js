import { Schema, model } from "mongoose";

const roleSchema = new Schema({
  role_name: { type: String, required: true },
  description: { type: String, required: false },
});

const Role = model("Role", roleSchema);

export default Role;
