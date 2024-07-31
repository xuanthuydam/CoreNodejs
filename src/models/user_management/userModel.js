import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, default: null },
    phone: { type: String, default: null },
    andress: { type: String, default: null },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
