import express from 'express';
import connectDB from './db.js';
import apiRouter from './api.js';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
