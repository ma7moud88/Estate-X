import { Request, RequestHandler, Response } from "express";
import { User } from "../../../models/user.model";
import { jwtService } from "../../../Services/jwt.service";
import { IRequestLogin } from "./types";
import bcrypt from "bcrypt";

export const loginAuthAb: RequestHandler<{}, {}, IRequestLogin> =
async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User does not exist, please register",
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = jwtService.createToken({
    id: user._id.toString(),
    email: user.email,
  });

  res.cookie("token", token, { httpOnly: true });

  return res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      email: user.email,
    },
    token,
  });
};