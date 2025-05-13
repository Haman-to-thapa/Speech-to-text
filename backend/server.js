import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/mongoDB.js';
import audioRoutes from './routes/audioRoutes.js'


dotenv.config();



const app = express()
connectDB()

const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json());

//Routes

app.unsubscribe('/api/audio',audioRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})