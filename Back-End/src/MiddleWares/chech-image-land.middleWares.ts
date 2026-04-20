import  { RequestHandler } from "express";

export const checkMinLandImages: RequestHandler = (req, res, next) => {
  if (!Array.isArray(req.files)) {
    return res.status(400).json({
      message: "Invalid files format",
    });
  }

  if (req.files.length < 3) {
    return res.status(400).json({
      message: "You must upload exactly 3 images",
    });
  }

  next();
};