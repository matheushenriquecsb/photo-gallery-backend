import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UploadModel = mongoose.model("Upload", uploadSchema);
