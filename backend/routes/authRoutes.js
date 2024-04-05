import express from 'express';
import { login, createUser } from '../controllers/authController.js';

const router = express.Router();

// Ruta para el inicio de sesión
router.post('/login', login);

// Ruta para crear un nuevo usuario
router.post('/signup', createUser);

export default router;
