import express from 'express'
import upload from '../middlewares/multer.js'
import { uploadAudio } from '../controller/audioController.js'


const router = express.Router()


router.post('/upload', upload, uploadAudio)


export default router;