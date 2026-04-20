import { body } from "express-validator";

export const registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number"),

  body("phone")
    .notEmpty()
    .withMessage("Phone is required")
    .isMobilePhone("ar-EG")
    .withMessage("Invalid Egyptian phone number"),

  body("nationalID")
    .notEmpty()
    .withMessage("National ID is required")
    .isLength({ min: 14, max: 14 })
    .withMessage("National ID must be exactly 14 digits")
    .isNumeric()
    .withMessage("National ID must contain only numbers"),
];