// import jwt, { SignOptions } from "jsonwebtoken";
import jwt, { SignOptions } from "jsonwebtoken";
import { UserToken } from "../interfaces/user-token";
import dotenv from "dotenv";

dotenv.config();
function createToken(
  payload: UserToken,
  options: SignOptions = { expiresIn: "1d" }
) {
  const token = jwt.sign(payload, process.env.SECRET_KEY!, options);
  return token;
}

export const jwtService = {
  createToken,
};