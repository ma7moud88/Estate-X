import { Request, RequestHandler, Response } from "express";
import { IRequestRegister } from "./types";
import { User } from "../../../models/user.model";
import bcrypt from "bcrypt";
import { jwtService } from "../../../Services/jwt.service";
import { emailService } from "../../../Services/email.service";


export const registerAuth:RequestHandler<{},{},IRequestRegister>
 = async (req:Request, res:Response) => {
    const {name,email,password,phone,nationalID} = req.body;
    
    const emailUser=await User.findOne({email});

    if(emailUser){
        return res.status(400).json({ message: "Email already exists, please login" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name , email , password: hashPassword , phone , nationalID});

    const saveUser = await user.save();

    const token =  jwtService.createToken({ id: saveUser._id.toString(), email: saveUser.email });

    await emailService.sendEmailVerificationLink(email, token);

    res.status(201).json({ message: "Registration process completed successfully" });

}