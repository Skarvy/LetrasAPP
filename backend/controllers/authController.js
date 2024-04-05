import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// Controlador para el inicio de sesión
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Busca al usuario en la base de datos por su nombre de usuario
    const user = await User.findOne({ username });

    // Si el usuario no existe, devuelve un mensaje de error
    if (!user) {
      return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
    }

    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const match = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden, devuelve un mensaje de error
    if (!match) {
      return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
    }

    // Genera un token JWT para el usuario
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Devuelve el token JWT en la respuesta
    res.json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para la creación de un nuevo usuario
export const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ username });

    // Si el usuario ya existe, devuelve un mensaje de error
    if (existingUser) {
      return res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
    }

    // Hashea la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario en la base de datos
    const newUser = await User.create({ username, password: hashedPassword });

    // Devuelve una respuesta con el nuevo usuario creado
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
