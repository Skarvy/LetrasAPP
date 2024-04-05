import React from 'react';
import { Grid, Box, Typography, Button, useMediaQuery, useTheme, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';

const servicios = [
  {
    imagen: 'img/desklaptop.jpg',
    title: 'Redacción de Textos',
    descripcion: 'Ofrecemos servicios de redacción de textos en diversos géneros, adaptados a tus necesidades específicas, ya sea para libros, blogs, publicidad u otros fines.',
  },
  {
    imagen: 'img/handBook.jpg',
    title: 'Corrección de Estilo',
    descripcion: 'Nuestro equipo especializado en corrección de estilo se encarga de mejorar la coherencia y la fluidez de tus textos, garantizando un estilo claro y efectivo.',
  },
  {
    imagen: 'img/girlReadingbook.jpg',
    title: 'Corrección Ortotipográfica',
    descripcion: 'Realizamos corrección ortotipográfica para garantizar la precisión y la corrección de la ortografía, tipografía y puntuación en tus textos.',
  },
  {
    imagen: 'img/openedBooks.jpg',
    title: 'Corrección Morfosintáctica',
    descripcion: 'Nuestro equipo experto en lingüística se encarga de revisar la estructura gramatical y sintáctica de tus textos, asegurando su coherencia y calidad.',
  },
  {
    imagen: 'img/learningOnline.jpg',
    title: 'Textos Académicos e Investigación',
    descripcion: 'Ofrecemos servicios de redacción y edición de textos académicos e investigativos, incluyendo tesis, tesinas, ponencias y otros documentos académicos.',
  },
];

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Servicios = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2}>
      {servicios.map((servicio, index) => (
        <Grid item xs={12} key={index}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              marginBottom: '20px',
              animation: `${slideInFromLeft} 0.5s ease-in-out`,
            }}
          >
            <Box sx={{ flex: 1, textAlign: 'center', padding: '0 20px' }}>
              <Typography gutterBottom variant="h5" component="h2" fontWeight="bold" color="black">
                {servicio.title}
              </Typography>
             
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button variant="outlined" onClick={() => navigate('/servicios')} color='inherit'> + INFO</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              image={servicio.imagen}
              alt={`Servicio ${index + 1}`}
              sx={{ height: 350, flex: 'none', animation: `${slideInFromRight} 0.5s ease-in-out` }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Servicios;
