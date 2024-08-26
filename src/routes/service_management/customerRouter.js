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
import {
  createCustomer,
  deleteCustomer,
  getAllCustomes,
  getCustomerById,
  updateCustomer,
} from "../../controllers/service_management/customerControler.js";
import {
  createCustomerValidator,
  deleteCustomerValidator,
  detailCustomerValidator,
  updateCustomerValidator,
} from "../../validators/service_management/customerValidator.js";

const router = Router();

router.get("/get-all-customer/", getAllCustomes);
router.get(
  "/get-detail-customer/:id",
  detailCustomerValidator,
  handleValidationErrors,
  getCustomerById
);
router.post(
  "/create-customer/",
  createCustomerValidator,
  handleValidationErrors,
  createCustomer
);
router.put(
  "/update-customer/:id",
  updateCustomerValidator,
  handleValidationErrors,
  updateCustomer
);
router.delete(
  "/delete-customer/:id",
  deleteCustomerValidator,
  handleValidationErrors,
  deleteCustomer
);

export default router;
