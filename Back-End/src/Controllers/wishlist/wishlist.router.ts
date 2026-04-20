import express from "express";
import { addToWishlist } from "./add-to-wishlist/add-to-wishlist";
import { addToWishlistValidation } from "./add-to-wishlist/validation";
import { isAuthenticated } from "../../MiddleWares/authenticated-role.middleware";
import { getUserWishlist } from "./get-wishlist/get-user-wishlist";

const wishlistRouter = express.Router();

wishlistRouter.post("/add-to-wishlist",
    isAuthenticated,
    addToWishlistValidation,
    addToWishlist);


wishlistRouter.get("/get-user-wishlist",
    isAuthenticated,
    getUserWishlist);





export { wishlistRouter };