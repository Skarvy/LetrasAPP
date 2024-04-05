import express from 'express';
import { createPost, getAllPosts,getPostById } from '../controllers/postController.js';


const router = express.Router();

// Ruta para crear un nuevo post
router.post('/posts', createPost);

// Ruta para obtener todos los posts
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);

// Otros endpoints de la API para actualizar, eliminar, obtener un solo post, etc.

export default router;
