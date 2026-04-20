import { Request, RequestHandler, Response } from "express";
import { IRequestForgotPassword } from "./types";
import { User } from "../../../models/user.model";
import dotenv from "dotenv";
import { jwtService } from "../../../Services/jwt.service";
import { emailService } from "../../../Services/email.service";

dotenv.config();


export const forgotPasswordAuth: RequestHandler<{},{},IRequestForgotPassword>
 = async (req:Request, res:Response) => {
    
    const {email} = req.body;
    
    const user = await User.findOne({email});

    if(!user) return res.status(400).json({message:"User does not exist, please register"});

    const token = jwtService.createToken({
        id:user._id.toString(),
        email:user.email
    },
    {expiresIn:"10m"}
    );

    const resetPasswordLink = `http://localhost:4000/api/auth/reset-password/${token}`;

    await emailService.sendEmail({
        to:user.email,
        subject:"Reset password",
        html: `
      <h3>Reset your password</h3>
      <p>Click the link below:</p>
      <a href="${resetPasswordLink}">Reset Password</a>
      <p>This link expires in 15 minutes</p>
    `}
    );

    res.status(200).json({message:"Email sent successfully"});

    }
 