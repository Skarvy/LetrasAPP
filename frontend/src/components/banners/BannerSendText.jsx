import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BannerSendText = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        backgroundImage: `url('img/banner.jpg')`, // Ruta de la imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: theme.bannerTextColor,
        padding: '0 20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        ¿Necesitas ayuda con la redacción de un texto?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Envía tu texto y nosotros te ayudaremos a corregirlo y mejorar su estilo.
      </Typography>
      <Button onClick={()=>{navigate("/contacto")}} variant="contained" color="primary">
        Enviar Texto
      </Button>
    </Box>
  );
};

export default BannerSendText;
