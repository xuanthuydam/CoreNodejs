import { body, param } from "express-validator";

export const postProductValidator = [
  body("name")
    .isString()
    .withMessage("Name is string")
    .exists()
    .withMessage("Name is required")
    .notEmpty()
    .withMessage("Name is null"),
  //   body("quantity").withMessage("Price must be a number greater than 0"),
  //   body("description")
  //     .optional()
  //     .isString()
  //     .withMessage("Description must be a string"),
];

export const detailProductValidator = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];
