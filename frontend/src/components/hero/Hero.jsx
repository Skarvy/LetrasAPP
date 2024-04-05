import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import {  useNavigate } from 'react-router-dom';


export default function Hero({ backgroundColor }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="video/hero2.mp4" type="video/mp4" />
        {/* Añade más formatos de video si es necesario */}
      </video>

      {/* Div con fondo negro semi-transparente */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Color negro con opacidad
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1, // Asegura que el contenido esté encima del video
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
          minHeight: '100vh',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  color: "white",                  
                  padding: "10px", // Espacio interior alrededor del texto
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                  Donde cada palabra importa
                </span>{" "}
                Expertos en dar forma a tus ideas
              </Typography>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button variant="contained" onClick={()=>navigate("/servicios")} sx={{ borderRadius: '20px', bgcolor: theme.secondaryColor }}>
                  Conocer más
                </Button>
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
