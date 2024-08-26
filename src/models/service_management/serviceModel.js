import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: Boolean, required: true },
    service_number: { type: String, required: true },
    allow_settle: { type: Boolean, required: true },
    available_balance: { type: Number, required: false },
    freeze_balance: { type: Number, required: false },
    undefined_order_alance: { type: Number, required: false },
    status_service: {
      type: Schema.Types.ObjectId,
      ref: "StatusService",
      required: true,
    },
    currency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
  { timestamps: true }
);

const Service = model("service", serviceSchema);

export default Service;
