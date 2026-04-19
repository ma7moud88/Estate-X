import express from "express";
import dotenv from "dotenv";
// import { ConnectDB } from "./src/Configs/DB.ts";
import { ConnectDB } from "./src/Configs/DB";
import { authRouter } from "./src/Controllers/auth.router";
import cookieParser from "cookie-parser";  
const app = express();
dotenv.config();
ConnectDB();

app.use(express.static("public"));


app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRouter);


app.listen(4000, () => {
  console.log("Server is on port 4000....");
});
