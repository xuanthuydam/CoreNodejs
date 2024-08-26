import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const customerSchema = new Schema(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

customerSchema.plugin(mongoosePaginate);

const Customer = model("Customer", customerSchema);

export default Customer;
