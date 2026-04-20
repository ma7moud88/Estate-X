import { RequestHandler } from "express";
import { Wishlist } from "../../../models/wishlist.model";

export const getUserWishlist: RequestHandler
    = async (req, res) => {
        const userId = req.user?.id;

        const wishlist = await Wishlist.find({ userId })
            .populate("landId")
            .sort({ createdAt: -1 });

        res.status(200).json({
            data: wishlist,
        });
    };