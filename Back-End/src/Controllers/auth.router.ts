import  express  from "express";
import { registerAuth } from "./auth/register/register.auth";
import { loginAuth } from "./auth/login/login.auth";
import { loginValidation } from "./auth/login/validation";
import { logoutValidation } from "./auth/logout/validation";
import { logoutAuth } from "./auth/logout/logout.auth";
import { verifyEmailValidation } from "./auth/verify-email/validation";
import { verifyEmailAuth } from "./auth/verify-email/verify-email.auth";

const authRouter = express.Router();

authRouter.post("/register", registerAuth);

authRouter.get("/verify/:email/:token", verifyEmailValidation, verifyEmailAuth);

authRouter.post("/login", loginValidation,  loginAuth);

authRouter.get("/logout", logoutValidation,  logoutAuth);






export { authRouter};