import { body, param } from "express-validator";

const createCustomerValidator = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .notEmpty()
    .withMessage("Name is null"),
  body("code")
    .exists()
    .withMessage("Code is required")
    .notEmpty()
    .withMessage("Code is null"),
];

const updateCustomerValidator = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .notEmpty()
    .withMessage("Name is null"),
  body("code")
    .exists()
    .withMessage("Code is required")
    .notEmpty()
    .withMessage("Code is null"),
];

const detailCustomerValidator = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];

const deleteCustomerValidator = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];

export {
  createCustomerValidator,
  updateCustomerValidator,
  detailCustomerValidator,
  deleteCustomerValidator,
};
