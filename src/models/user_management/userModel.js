import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const userSchema = new Schema(
  {
    user_name: { type: String, required: true, unique: true },
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

userSchema.statics.findByUserName = function (userName) {
  return this.findOne({ user_name: userName });
};

userSchema.plugin(mongoosePaginate);

const User = model("User", userSchema);

export default User;
