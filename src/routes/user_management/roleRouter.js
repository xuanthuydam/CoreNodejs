import { Router } from "express";
import {
  createRole,
  deleteRole,
  getAllRole,
  getRoleById,
  updateRole,
} from "../../controllers/user_management/roleControler.js";
import {
  authenticateJWT,
  authorizeRole,
} from "../../middleware/jwt/authMiddleware.js";

const router = Router();

router.post("/create-role/", createRole);
router.put(
  "/update-role/:id",
  // updateUserValidator,
  // handleValidationErrors,
  updateRole
);
router.get(
  "/get-all-role/",
  // authorizeRole(["66aa521341083f5120f79660"]),
  getAllRole
);

router.get(
  "/get-detail-role/:id",
  // detailUserValidator,
  // handleValidationErrors,
  getRoleById
);

router.delete("/delete-role/:id", deleteRole);

export default router;
