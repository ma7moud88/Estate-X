import mongoose, { Types } from "mongoose";



 interface ILand {
    _id: Types.ObjectId;
    description: string;
    location: string;
    area: number;
    price: number;
    landImages: string[];
    status:Status;
    type: Type;
    about?: string | null;
    owner: Types.ObjectId;
    createdAt: Date;
}

enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

enum Type {
    BUILDING = "building",
    INDUSTRIAL = "Industrial",
}

export const landSchema = new mongoose.Schema<ILand>({
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    landImages: {
        type: [String],
        required: true,
    },
    about:{
        type: String,
        default:null
    },
    status: {
        type: String,
        enum: [Status.ACTIVE, Status.INACTIVE],
        default: Status.ACTIVE,
    },
    type: {
        type: String,
        required: true,
        enum: [Type.BUILDING, Type.INDUSTRIAL],
        default: Type.BUILDING,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Land = mongoose.model<ILand>("Land", landSchema);