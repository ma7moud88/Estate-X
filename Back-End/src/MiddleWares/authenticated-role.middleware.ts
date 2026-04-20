import { RequestHandler } from "express";
import { UserToken } from "../interfaces/user-token";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isAuthenticated: RequestHandler = (req, res, next) => {

    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }
    try {
        req.user = <UserToken>jwt.verify(token, process.env.SECRET_KEY!);
        next();
    } catch (error) {
        res.status(401).json({ message: "Not authenticated,please login" });
    }
};