import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { TextField, Button, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../../navbar/ResponsiveAppBar';
import Footer from '../../footer/Footer';
import { useUser } from '../../context/UserProvider';

const CreatePost = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useUser();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, summary, content, image }),
      });
      if (response.ok) {
        console.log('Post creado exitosamente');
        // Limpiar los campos después de la creación del post
        setTitle('');
        setSummary('');
        setContent('');
        setImage('');
      } else {
        console.error('Error al crear el post:', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  if (!user.isLogged) {
    navigate('/');
    return null;
  }

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
      }}
    >
      <ResponsiveAppBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 128px)', // Ajusta la altura restando el tamaño del AppBar y el Footer
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Resumen"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contenido"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={8} // Ajusta la cantidad de filas para proporcionar más espacio de escritura
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="URL de la imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Crear Post
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreatePost;
