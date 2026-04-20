import { RequestHandler } from "express";
import { IParamsGetLandById } from "./types";
import { IResponseGetLanById } from "./types";
import { Land } from "../../../models/land.models";

export const getLandById: RequestHandler<IParamsGetLandById, { data: IResponseGetLanById } | { message: string }, {}>
    = async (req, res) => {

        const { id } = req.params;

        const land = await Land.findById(id);

        if (!land) {
            return res.status(404).json({ message: "Land not found" });
        }

        const result: IResponseGetLanById = {
            description: land.description,
            location: land.location,
            area: land.area,
            price: land.price,
            landImages: land.landImages,
            status: land.status,
            type: land.type,
            about: land.about,
        }

        res.status(200).json({ data: result });
    };