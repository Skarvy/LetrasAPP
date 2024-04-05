import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import { Typography, Box,Button } from '@mui/material';
import ResponsiveAppBar from '../../navbar/ResponsiveAppBar'
import Footer from '../../footer/Footer'


const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useContext(ThemeContext);
  

  useEffect(() => {

    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener el post');
        }
        const data = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Typography>Cargando...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!post) {
    return <Typography>No se encontró el post</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
        padding: '20px', // Añade espacio alrededor del contenido
      }}
    >
      <ResponsiveAppBar/>
      <img src={post.image} alt="Post" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
      <Typography variant="h3" gutterBottom>{post.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>{post.summary}</Typography>
      <Typography variant="body1">{post.content}</Typography>
      <Button><Link to={"/blog"}>Volver atras </Link></Button>
      <Footer/>
    </Box>
  );
};

export default PostDetails;
