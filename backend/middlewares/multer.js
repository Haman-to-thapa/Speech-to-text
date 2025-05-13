import multer from "multer";


const storage = multer.diskStorage({
  filename: (req,file, cb) => {
    let fileExt = file.originalname.split("-").pop();

    const fileName = `${new Date().getTime()}.${fileExt}`;

    cb(null, fileName)
  },
})


