import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, default: null },
    product_category: {
      type: Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
