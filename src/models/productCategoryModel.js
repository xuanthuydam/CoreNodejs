import { Schema, model } from "mongoose";

const productCategorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const ProductCategory = model("ProductCategory", productCategorySchema);

export default ProductCategory;
