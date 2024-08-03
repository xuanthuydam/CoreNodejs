import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    role_name: { type: String, required: true },
  },
  { timestamps: true }
);

const Role = model("Role", roleSchema);

export default Role;
