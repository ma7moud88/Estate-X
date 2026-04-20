import { RequestHandler } from "express";
import { IParamsDeleteLand } from "./types";
import { Land } from "../../../models/land.models";



export const deleteLand: RequestHandler<IParamsDeleteLand, { message: string }>
    = async (req, res) => {
        const { id } = req.params

        // const land= await Land.findById(id)

        const land = await Land.findByIdAndDelete(id)

        if (!land) {
            return res.status(404).json({ message: "Land not found" })
        }
        res.status(200).json({ message: "Land deleted successfully" })

    }