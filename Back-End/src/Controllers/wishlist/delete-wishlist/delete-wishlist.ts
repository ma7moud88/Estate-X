import { RequestHandler } from "express";
import { Wishlist } from "../../../models/wishlist.model";
import { IParamsDeleteWishlist } from "./types";

export const removeFromWishlist: RequestHandler<IParamsDeleteWishlist>
    = async (req, res) => {
        const userId = req.user?.id;
        const { landId } = req.params;

        const deleted = await Wishlist.findOneAndDelete({
            userId,
            landId,
        });

        if (!deleted) {
            return res.status(404).json({
                message: "Item not found in wishlist",
            });
        }

        res.status(200).json({
            message: "Removed from wishlist successfully",
        });
    };