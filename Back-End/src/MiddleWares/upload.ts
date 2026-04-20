import multer from "multer";

export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === "nationalIDImage") {
      callback(null, "src/public/upload-ids");
    } else if (file.fieldname === "landImages") {
      callback(null, "src/public/upload-lands");
    } else {
      callback(null, "public");
    }
  },

  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    const uniqueName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${ext}`;

    callback(null, uniqueName);
  },
});