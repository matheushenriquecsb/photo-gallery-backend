import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./database/index.js";
import UploadRoute from "./routes/uploadRoute.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(UploadRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running!!");
  connectDb();
});
