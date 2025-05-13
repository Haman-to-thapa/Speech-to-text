import mongoose from "mongoose";

const audioSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  transcription: {
    type: String,
    default: "",
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

export const AudioModel = mongoose.model("AudioModel",audioSchema)
