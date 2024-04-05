import Post from '../models/Post.js';

// Controlador para crear un nuevo post
export const createPost = async (req, res) => {
  const { title, summary, content, image } = req.body;

  try {
    const newPost = await Post.create({ title, summary, content, image });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error al crear el post:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para obtener todos los posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Otros controladores para actualizar, eliminar, obtener un solo post, etc.
