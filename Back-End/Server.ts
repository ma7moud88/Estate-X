import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./src/Configs/DB";
import cookieParser from "cookie-parser";
import { authRouter } from "./src/Controllers/auth/auth.router";
import { landRouter } from "./src/Controllers/land/land.router";
import { wishlistRouter } from "./src/Controllers/wishlist/wishlist.router";
import cors from "cors";


dotenv.config();
const app = express();
ConnectDB();

// app.use(
//     cors({
//         origin: ["http://127.0.0.1:3000", "http://127.0.0.1:4000"],
//     })
// );




app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});


app.use(cookieParser());


app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/land", landRouter);

app.use("/api/wishlist", wishlistRouter);


app.listen(3000, () => {
  console.log("Server is on port 4000....");
});


