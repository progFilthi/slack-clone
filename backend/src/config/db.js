import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDb connected successfully", conn.connection.host);
  } catch (error) {
    console.error(`Error connecting to the mongoDB database ...`);
    process.exit(1); //1 means error & 0 means success
  }
};
