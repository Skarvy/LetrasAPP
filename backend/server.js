import path from 'path'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectToMongoDB from './db/connectToMongoDB.js';

import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js';

dotenv.config();
const __dirname=path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

connectToMongoDB(); // Llama a la función para conectar a MongoDB

app.use('/api/', postRoutes);
app.use('/auth/', authRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
app.listen(PORT, () => {
    console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
