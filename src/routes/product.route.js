import { Router } from "express";
import {
  //   deleteProduct,
  //   detailProduct,
  getProduct,
  //   postProduct,
  //   updateProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProduct);
// router.post("/", postProduct);
// router.get("/:id", detailProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

export default router;