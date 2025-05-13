import { AudioModel } from "../models/audio.js";


const transcribeAudio = async (filepath) => {

  return `transcribed text for file at : ${filepath}`
}

export const uploadAudio = async (req, res) => {
  try {
    
if(!req.file){
  return res.status(400).json({
    error:"No audio file uploaded"
  });
}

const {fileName, path: filepath, mimetype} = req.file;
const transcription = await transcribeAudio(filepath)


const newAudio = await AudioModel.create({
  fileName,
  filepath,
  mimetype,
  transcription,
});

return res(200).json({
  message:"Audio uploaded", audio:newAudio
});

  } catch (error) {
    console.log(error)
    return res.status(500).json({error:"Internal server ERror"})
  }
}