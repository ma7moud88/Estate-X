import mongoose, { Types } from "mongoose";



 interface ILand {
    _id: Types.ObjectId;
    description: string;
    location: string;
    area: number;
    price: number;
    image: string[];
    status:Status;
    type: Type;
    about?: string | null;
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
    image: {
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Land = mongoose.model<ILand>("Land", landSchema);