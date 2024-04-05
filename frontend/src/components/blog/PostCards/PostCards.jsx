import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { ThemeContext } from '../../context/ThemeProvider';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const PostCards = () => {
  const [posts, setPosts] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
      }}
    >
      <Grid p={2} container spacing={2}>
        {posts.map(post => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            {/* Wrap the Card with a Link */}
            <Link to={`/blog/${post._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card style={{ position: 'relative', height: '500px' }}>
                {/* Contenedor de la imagen de fondo */}
                <div
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    height: '70%', // Altura de la imagen de fondo
                    borderRadius: '4px', // Bordes redondeados opcionales
                  }}
                >
                  {/* Contenedor de texto con fondo traslúcido */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0, // Situar el contenido en la parte inferior
                      left: 0,
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.4)', // Transparencia al 50%
                      padding: '10px', // Espaciado interno
                      borderBottomLeftRadius: '4px', // Bordes redondeados opcionales
                      borderBottomRightRadius: '4px', // Bordes redondeados opcionales
                    }}
                  >
                    <Typography variant="h6" style={{ marginBottom: '8px' }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2">{post.summary}</Typography>
                  </Box>
                </div>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostCards;
