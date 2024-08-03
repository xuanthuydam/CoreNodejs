import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/user_management/userControler.js";
import {
  createUserValidator,
  deleteUserValidator,
  detailUserValidator,
  updateUserValidator,
} from "../../validators/user_management/userValidator.js";
import handleValidationErrors from "../../middleware/validator/validationMiddleware.js";

const router = Router();

router.get("/get-all-user/", getAllUsers);
router.get(
  "/get-detail-user/:id",
  detailUserValidator,
  handleValidationErrors,
  getUserById
);
router.post(
  "/create-user/",
  createUserValidator,
  handleValidationErrors,
  createUser
);
router.put(
  "/update-user/:id",
  updateUserValidator,
  handleValidationErrors,
  updateUser
);
router.delete(
  "/delete-user/:id",
  deleteUserValidator,
  handleValidationErrors,
  deleteUser
);

export default router;
