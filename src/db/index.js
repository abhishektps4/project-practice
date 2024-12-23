import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected || DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection FAILED", error);
        process.exit(1); // Exits the process with failure code 1 if the connection fails
    }
};

export default connectDB;
