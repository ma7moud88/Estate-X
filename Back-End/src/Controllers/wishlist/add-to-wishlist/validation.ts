import { body } from "express-validator";

export const addToWishlistValidation = [
  body("landId")
    .notEmpty()
    .withMessage("landId is required")
    .isMongoId()
    .withMessage("Invalid land ID"),
];