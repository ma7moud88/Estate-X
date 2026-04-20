import  express  from "express";
import { registerAuth } from "./register/register.auth";
// import { loginAuth } from "./login/login.auth";
import { loginValidation } from "./login/validation";
import { logoutValidation } from "./logout/validation";
import { logoutAuth } from "./logout/logout.auth";
import { verifyEmailValidation } from "./verify-email/validation";
import { verifyEmailAuth } from "./verify-email/verify-email.auth";
import { forgotPasswordAuth } from "./forgot-password/forgot-password.auth";
import { resetPasswordAuth } from "./reset-password/reset-password.auth";
import { registerValidation } from "./register/validation";
import { loginAuthAb } from "./login/login.auth2";

const authRouter = express.Router();

authRouter.post("/register",registerValidation,registerAuth);

authRouter.get("/verify/:email/:token", verifyEmailValidation, verifyEmailAuth);

authRouter.post("/login", loginValidation,  loginAuthAb);

authRouter.get("/logout", logoutValidation,  logoutAuth);

authRouter.post("/forgot-password", forgotPasswordAuth);

authRouter.post("/reset-password/:token", resetPasswordAuth);






export { authRouter};