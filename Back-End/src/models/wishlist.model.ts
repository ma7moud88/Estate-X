import mongoose from "mongoose";

interface IWishlist {
    _id: string;
    userId: string;
    landId: string;
    createdAt: Date;
}


export const wishlistSchema = new mongoose.Schema<IWishlist>({
    userId: {
        type: String,
        ref: "User",
        required: true,
    },
    landId: {
        type: String,
        ref: "Land",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


wishlistSchema.index({ userId: 1, landId: 1 }, { unique: true });


export const Wishlist = mongoose.model<IWishlist>("Wishlist", wishlistSchema);