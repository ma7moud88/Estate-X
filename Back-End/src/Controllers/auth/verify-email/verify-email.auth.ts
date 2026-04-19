import { User } from "../../../models/user.model";
import jwt from "jsonwebtoken"; 
import { IParamsVerifyEmail } from "./types";
import { RequestHandler } from "express";
import dotenv from "dotenv";
dotenv.config();

export const verifyEmailAuth: RequestHandler<IParamsVerifyEmail,{},{}>
  = async (req, res) => {

    const { email, token } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User not exists" });
      return;
    }
    jwt.verify(token, process.env.SECRET_KEY!);
    if (user.isEmailVerified) {
      res.status(400).json({ message: "email already verified" });
      return;
    }
    user.isEmailVerified = true;
    await user.save();
    res.json({ message: "email verified successfully" });
  };