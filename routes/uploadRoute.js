import express from "express";
import { getPhotos, uploadPhoto } from "../controllers/uploadController.js";
import uploadMiddleware from "../middlewares/multerMiddlewares.js";
const router = express.Router();

router.get("/api/get", getPhotos);

router.post("/api/save", uploadMiddleware.single("photo"), uploadPhoto);

export default router;
