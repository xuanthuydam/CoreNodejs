import { Router } from "express";
import {
  getProduct,
  postProduct,
  //   deleteProduct,
  detailProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = Router();

router.get("/", getProduct);
router.post("/", postProduct);
router.get("/:id", detailProduct);
router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;
