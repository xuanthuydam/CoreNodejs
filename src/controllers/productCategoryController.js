import ProductDTO from "../dtos/product/productResponse.js";
import ProductCategory from "../models/productCategoryModel.js";
import Product from "../models/productModel.js";

const getAllProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const products = await Product.find({
      product_category: categoryId,
    }).populate("product_category", "name");

    const result = products.map((product) => new ProductDTO(product));

    res.status(200).json(result);
  } catch (error) {}
};

const postProductCategory = async (req, res) => {
  try {
    const product = await ProductCategory.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const detailProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body; // Assuming the updated data is sent in the request body

//     const updatedProduct = await Product.findByIdAndUpdate(id, updateData);

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({ message: "delete success" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export { postProductCategory, getAllProductByCategory };
// /export { getProduct, postProduct, , , deleteProduct };