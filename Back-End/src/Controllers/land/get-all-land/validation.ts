
import { query } from "express-validator";

export const getAllLandsValidation = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("page must be a number greater than 0"),

  query("limit")
    .optional()
    .isInt({ min: 1 })
    .withMessage("limit must be a number greater than 0"),

  query("minPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("minPrice must be a positive number"),

  query("maxPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("maxPrice must be a positive number"),

  query("location")
    .optional()
    .isString()
    .withMessage("location must be string"),

  query("type")
    .optional()
    .isIn(["building", "Industrial "]) 
    .withMessage("invalid type"),
];