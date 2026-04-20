import { RequestHandler } from "express";
import { IRequestCreateLand } from "./types";
import { Land } from "../../../models/land.models";


export const createLand:RequestHandler<{},{message: string},IRequestCreateLand>
 = async(req, res) => {
    const tokenUser = req.user as { id: string };
    
const files = req.files as Express.Multer.File[];

// console.log(files);

const images = files.map((file) => file.path);

await Land.create({
description: req.body.description,
location: req.body.location,
area: req.body.area,
price: req.body.price,
type: req.body.type,
about: req.body.about,
landImages: images,
owner: tokenUser.id,
});

return res.status(201).json({ message: "Land created successfully"});
}