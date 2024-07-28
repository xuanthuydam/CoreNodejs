// import Product from "../models/product.model.js";

const getProduct = async (req, res) => {
  try {
    // const product = await Product.find({});
    res.status(200).json([]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const postProduct = async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

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
//     const updatedProduct = await Product.findById(id);

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

export { getProduct };
// /export { getProduct, postProduct, detailProduct, updateProduct, deleteProduct };
