import { Router } from "express";
import {
  postProductCategory,
  getAllProductByCategory,
} from "../controllers/productCategoryController.js";

const router = Router();

// router.get("/", getProduct);
router.post("/", postProductCategory);
router.get("/:categoryId", getAllProductByCategory);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;
