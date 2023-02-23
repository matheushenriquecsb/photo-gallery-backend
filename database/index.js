import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = () =>
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Database is working!");
  });
