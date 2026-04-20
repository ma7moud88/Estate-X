import { RequestHandler } from "express";
import { Land } from "../../../models/land.models";
import { IResponseGetAllLand } from "./type";


export const getAllLands: RequestHandler<{}, { data: IResponseGetAllLand } | { message: string }, {}>
    = async (req, res) => {
        const lands = await Land.find().sort({ createdAt: -1 });

        if (lands.length === 0) {
            return res.status(404).json({ message: "No lands found" });
        }

        const result: IResponseGetAllLand = lands.map((land) => ({
            description: land.description,
            location: land.location,
            area: land.area,
            price: land.price,
            landImages: land.landImages,
            status: land.status,
            type: land.type,
            about: land.about,
        }));

        res.status(200).json({ data: result });
    };