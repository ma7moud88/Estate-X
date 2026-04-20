import { RequestHandler } from "express";
import { IParamsUpdateLand, IRequestUpdateLand } from "./types";
import { Land } from "../../../models/land.models";
import { ApiResponse } from "../../../interfaces/Api-Response";


export const updateLand: RequestHandler<IParamsUpdateLand, ApiResponse<IRequestUpdateLand>, IRequestUpdateLand>
    = async (req, res) => {
        const { id } = req.params;

        const updatedLand = await Land.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!updatedLand) {
            res.status(404).json({ message: "Land not found" });
            return;
        }

        res.status(200).json({ message: "Land updated successfully", data: updatedLand });
    }