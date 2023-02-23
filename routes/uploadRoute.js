import express from "express";
const router = express.Router();
import { getPhotos, uploadPhoto } from "../controllers/uploadController.js";
import uploadMiddleware from "../middlewares/multerMiddlewares.js";

router.get("/api/get", getPhotos);

router.post("/api/save", uploadMiddleware.single("photo"), uploadPhoto);

export default router;
