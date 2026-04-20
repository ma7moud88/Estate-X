import { param } from "express-validator";

export const getLandByIdValidation = [
    param("id")
        .isMongoId()
        .withMessage("Invalid land ID"),
];