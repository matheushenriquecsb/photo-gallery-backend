import { UploadModel } from "../models/uploadModels.js";

export const uploadPhoto = async (req, res) => {
  const photo = req.file.filename;

  try {
    const uploadPhoto = await UploadModel.create({ photo });
    return res.status(201).send(uploadPhoto);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const getPhotos = async (req, res) => {
  const allPhotos = await UploadModel.find().sort({ createdAt: "descending" });
  res.send(allPhotos);
};
