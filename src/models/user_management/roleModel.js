import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const roleSchema = new Schema({
  role_name: { type: String, required: true },
  description: { type: String, required: false },
});

roleSchema.plugin(mongoosePaginate);

const Role = model("Role", roleSchema);

export default Role;
