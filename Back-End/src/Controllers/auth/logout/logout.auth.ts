import { RequestHandler } from "express";


export const logoutAuth: RequestHandler = (req, res) => {
    
    console.log(req.cookies);
    res.clearCookie("token");

    res.status(200).json({ message: "Logout process completed successfully" });
};