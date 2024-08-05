import { body, param } from "express-validator";

const createUserValidator = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .notEmpty()
    .withMessage("Name is null"),
  body("user_name")
    .exists()
    .withMessage("User name is required")
    .notEmpty()
    .withMessage("User name is null"),
  body("password")
    .exists()
    .withMessage("User name is required")
    .notEmpty()
    .withMessage("User name is null"),
  body("role")
    .exists()
    .withMessage("Role is required")
    .notEmpty()
    .withMessage("Role is null"),
  body("language")
    .exists()
    .withMessage("Language is required")
    .notEmpty()
    .withMessage("Language is null"),
  body("timezone")
    .exists()
    .withMessage("Timezone is required")
    .notEmpty()
    .withMessage("Timezone is null"),
  body("theme")
    .exists()
    .withMessage("Theme is required")
    .notEmpty()
    .withMessage("Theme name is null"),
];

const updateUserValidator = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .notEmpty()
    .withMessage("Name is null"),
  body("user_name")
    .exists()
    .withMessage("User name is required")
    .notEmpty()
    .withMessage("User name is null"),
  body("password")
    .exists()
    .withMessage("User name is required")
    .notEmpty()
    .withMessage("User name is null"),
  body("role")
    .exists()
    .withMessage("Role is required")
    .notEmpty()
    .withMessage("Role is null"),
  body("language")
    .exists()
    .withMessage("Language is required")
    .notEmpty()
    .withMessage("Language is null"),
  body("timezone")
    .exists()
    .withMessage("Timezone is required")
    .notEmpty()
    .withMessage("Timezone is null"),
  body("theme")
    .exists()
    .withMessage("Theme is required")
    .notEmpty()
    .withMessage("Theme name is null"),
];

const detailUserValidator = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];

const deleteUserValidator = [
  param("id")
    .exists()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];

export {
  createUserValidator,
  updateUserValidator,
  detailUserValidator,
  deleteUserValidator,
};
