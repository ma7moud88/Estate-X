import express from "express";
import { createLand } from "./create-land/create-land";
import { createLandValidation } from "./create-land/validation";
import { isAuthenticated } from "../../MiddleWares/authenticated-role.middleware";
import { checkMinLandImages } from "../../MiddleWares/chech-image-land.middleWares";
import multer from "multer";
import { storage } from "../../MiddleWares/upload";
import { checkNationalID } from "../../MiddleWares/check-national-id.middleware";
import { getAllLands } from "./get-all-land/get-all.land";
import { getAllLandsValidation } from "./get-all-land/validation";
import { getLandByIdValidation } from "./get-by-id/validation";
import { getLandById } from "./get-by-id/get-by-id.land";
import { updateLandValidation } from "./update-land/validation";
import { updateLand } from "./update-land/update.land";
import { deleteLandValidation } from "./delete-land/validation";
import { deleteLand } from "./delete-land/delete-land";


const landRouter = express.Router();

landRouter.post("/create",
    isAuthenticated,
    checkNationalID,
    multer({ storage: storage }).array("landImages"),
    checkMinLandImages,
    createLandValidation,
    createLand);


landRouter.get("/get-all",
    isAuthenticated,
    getAllLandsValidation,
    getAllLands);


landRouter.get("/get-by-id/:id",
    isAuthenticated,
    getLandByIdValidation,
    getLandById);


landRouter.put("/update/:id",
    isAuthenticated,
    updateLandValidation,
    updateLand);


landRouter.delete("/delete/:id",
    isAuthenticated,
    deleteLandValidation,
    deleteLand);







export { landRouter };