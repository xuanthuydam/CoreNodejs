import { Router } from "express";
import {
  createRole,
  getAllRole,
} from "../../controllers/user_management/roleControler.js";
import { authenticateJWT, authorizeRole } from "../../middleware/jwt/auth.js";

const router = Router();

router.post("/create-role/", createRole);
router.get(
  "/get-all-role/",
  authenticateJWT,
  authorizeRole(["66aa521341083f5120f79660"]),
  getAllRole
);

export default router;
