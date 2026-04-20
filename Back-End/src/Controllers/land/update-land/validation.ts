import { body, param } from "express-validator";

export const updateLandValidation = [

  param("id")
    .isMongoId()
    .withMessage("Invalid land ID"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("location")
    .optional()
    .isString()
    .withMessage("Location must be a string"),

  body("area")
    .optional()
    .isNumeric()
    .withMessage("Area must be a number"),

  body("price")
    .optional()
    .isNumeric()
    .withMessage("Price must be a number"),

  body("status")
    .optional()
    .isString()
    .withMessage("Status must be a string"),

  body("type")
    .optional()
    .isString()
    .withMessage("Type must be a string"),

  body("about")
    .optional()
    .isString()
    .withMessage("About must be a string"),

  body("landImages")
    .optional()
    .isArray()
    .withMessage("landImages must be an array"),
];