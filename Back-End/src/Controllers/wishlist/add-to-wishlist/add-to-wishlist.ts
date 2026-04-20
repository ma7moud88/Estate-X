import { RequestHandler } from "express";
import { Wishlist } from "../../../models/wishlist.model";
import { IRequestWishlist } from "./types";

export const addToWishlist: RequestHandler<{},{message: string},IRequestWishlist> = async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    res.status(400).json({ message: "User not found" });
    return;
  }

  const { landId } = req.body;

  const exists = await Wishlist.findOne({ userId, landId });

  if (exists) {
    res.status(400).json({ message: "Already in wishlist" });
    return;
  }

   await Wishlist.create({
    userId,
    landId,
  });

  res.status(201).json({ message: "Added to wishlist successfully"});
};