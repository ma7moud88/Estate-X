import { body } from "express-validator";

export const createLandValidation = [
  body("description")
    .notEmpty()
    .withMessage("Description is required"),

  body("location")
    .notEmpty()
    .withMessage("Location is required"),

  body("area")
    .notEmpty()
    .withMessage("Area is required")
    .isNumeric()
    .withMessage("Area must be a number"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number"),

  body("type")
    .notEmpty()
    .withMessage("Type is required")
    .isIn(["building", "industrial"])
    .withMessage("Invalid type"),

  body("about")
    .optional()
    .isString()
    .withMessage("About must be a string"),
];