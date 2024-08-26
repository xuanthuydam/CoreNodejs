import { Schema, model } from "mongoose";

const statusServiceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
});

const StatusService = model("StatusService", statusServiceSchema);

export default StatusService;
