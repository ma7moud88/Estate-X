import {  RequestHandler } from "express";
import {  IParamsResetPassword, IRequestResetPassword } from "./types";
import { User } from "../../../models/user.model";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();



export const resetPasswordAuth: RequestHandler<IParamsResetPassword,{},IRequestResetPassword> 
= async (req, res) => {
    const token = req.params.token as string;
    const {password} = req.body;
    
    if (!token || !password) {
        return res.status(400).json({ message: "Invalid token or password" });
    }

   try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY!)  as {
    id: string;
    email: string;
    };; 
    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });

   }
   catch{
        res.status(400).json({ message: "Invalid token or password" });
   }
};