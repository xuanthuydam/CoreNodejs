import { Router } from "express";
import {
  createRole,
  deleteRole,
  getAllRole,
} from "../../controllers/user_management/roleControler.js";
import {
  authenticateJWT,
  authorizeRole,
} from "../../middleware/jwt/authMiddleware.js";

const router = Router();

router.post("/create-role/", createRole);
router.get(
  "/get-all-role/",
  authenticateJWT,
  authorizeRole(["66aa521341083f5120f79660"]),
  getAllRole
);

router.delete("/delete-role/:id", deleteRole);

export default router;
