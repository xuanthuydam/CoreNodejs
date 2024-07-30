import { Router } from "express";
import {
  getProduct,
  postProduct,
  //   deleteProduct,
  detailProduct,
  updateProduct,
} from "../controllers/productController.js";
import {
  detailProductValidator,
  postProductValidator,
} from "../validators/productValidator.js";

const router = Router();

router.get("/", getProduct);
router.post("/", postProductValidator, postProduct);
router.get("/:id", detailProductValidator, detailProduct);
router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;
