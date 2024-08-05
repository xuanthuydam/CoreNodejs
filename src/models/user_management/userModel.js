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
    active: { type: Boolean, default: false },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    language: {
      type: Schema.Types.ObjectId,
      ref: "Language",
      required: true,
    },
    timezone: {
      type: Schema.Types.ObjectId,
      ref: "Timezone",
      required: true,
    },
    theme: {
      type: Schema.Types.ObjectId,
      ref: "Theme",
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
