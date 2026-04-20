import {  RequestHandler } from "express";
import { User } from "../models/user.model";

export const checkNationalID: RequestHandler = async (
  req ,
  res ,
  next
) => {

  const tokenUser = req.user;

  if (!tokenUser) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = await User.findById(tokenUser.id);

  if (!user || !user.nationalIDImage) {
    return res.status(403).json({message: "You must upload your national ID image first",});
  }

  next();
};