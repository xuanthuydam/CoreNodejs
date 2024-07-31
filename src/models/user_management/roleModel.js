import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    role_name: { type: String, required: true },
  },
  { timestamps: true }
);

const Role = model("Roles", roleSchema);

export default Role;
