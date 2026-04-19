import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const ConnectDB = () => {
  mongoose.connect(process.env.URL_DB!).then((conn) => {
    console.log(`Database Connected ${conn.connection.host}`);
  });
};
