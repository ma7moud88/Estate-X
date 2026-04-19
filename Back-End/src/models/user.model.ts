import mongoose, { Types } from "mongoose";

export interface IUser  {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: Role;
  nationalID: string;
  nationalIDImage: string | null;
  createdAt: Date;
  isEmailVerified: boolean;
}

export enum Role {
  // BUYER = "buyer",
  // SELLER = "seller",
  AGENT = "agent",
  ADMIN = "admin",
}

export const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    // lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: [Role.AGENT, Role.ADMIN],
    default: Role.AGENT,
    // required: true,
  },
  nationalID: {
    type: String,
    unique: true,
    required: true,
  },
  nationalIDImage: {
    type: String,
    default:null
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.model<IUser>("User", userSchema);