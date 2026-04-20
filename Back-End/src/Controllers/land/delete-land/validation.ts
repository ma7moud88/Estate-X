import { param } from "express-validator";

export const deleteLandValidation = [
  param("id")
    .isMongoId()
    .withMessage("Invalid land ID"),
];