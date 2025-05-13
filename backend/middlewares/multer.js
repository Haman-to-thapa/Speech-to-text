import multer from 'multer';
import path from 'path';
import fs from 'fs';

const dir = 'uploads/';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir); 
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname); // gets .mp3 or .mpeg
    const fileName = `${Date.now()}${fileExt}`;
    cb(null, fileName);
  },
});



const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "audio/mpeg" && file.mimetype !== "audio/mp3") {
    req.fileValidationError = "File type must be audio/mp3 or audio/mpeg";

    return  cb(null, false);
  } else {
  cb(null, true)
     
  }
};


const upload = multer({
  storage,
  fileFilter
}).single('audio');


export default upload;