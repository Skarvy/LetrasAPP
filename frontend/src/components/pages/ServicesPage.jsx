import React, { useRef, useState ,useContext} from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import Footer from '../footer/Footer';

const ServicesPage = () => {
  const {theme} = useContext(ThemeContext)
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const videoRefs = useRef([]);
  const navigate = useNavigate();

  const playVideo = (index) => {
    setPlayingVideoIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].focus();
      videoRefs.current[index].play();
    }
  };

  const pauseVideo = () => {
    setPlayingVideoIndex(null);
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        videoRef.pause();
      }
    });
  };

  const services = [
    {
      title: 'Redacción de Textos',
      description: 'Creación de contenido escrito para libros, blogs, publicidad y más. Ofrecemos servicios de redacción de artículos, blogs, contenidos para redes sociales y mucho más.',
      video: 'video/escrituraPC.mp4',
    },
    {
      title: 'Corrección de Estilo',
      description: 'Revisión y mejora del estilo de escritura para garantizar coherencia y fluidez. Nuestro equipo se encarga de mejorar la estructura y el estilo de tu contenido para que tenga un impacto positivo en tus lectores.',
      video: 'video/profuni.mp4',
    },
    {
      title: 'Corrección Ortotipográfica',
      description: 'Corrección de errores de ortografía, tipografía y puntuación en los textos. Te ayudamos a corregir cualquier tipo de error en tus documentos para que luzcan profesionales y bien elaborados.',
      video: 'video/letras.mp4',
    },
    {
      title: 'Corrección Morfosintáctica',
      description: 'Revisión de la estructura gramatical y sintáctica de los textos. Nuestros correctores profesionales se aseguran de que la gramática y la sintaxis de tus textos sean impecables.',
      video: 'video/correcion.mp4',
    },
    {
      title: 'Textos Académicos e Investigación',
      description: 'Elaboración y edición de textos académicos, tesis, tesinas, ponencias, etc. Ofrecemos servicios de redacción, revisión y edición para trabajos académicos en todas las áreas del conocimiento.',
      video: 'video/hero2.mp4',
    },
  ];

  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
      }}
    >
      <Box>
        <ResponsiveAppBar />
        <Grid p={3} container spacing={4} justifyContent="center" alignItems="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                onMouseEnter={() => playVideo(index)}
                onMouseLeave={pauseVideo}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparencia al 80%
                }}
              >
                <CardMedia
                  component="video"
                  src={service.video}
                  autoPlay={index === playingVideoIndex}
                  loop
                  muted
                  style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                  ref={(el) => (videoRefs.current[index] = el)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" fontWeight={"bold"}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                    {service.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button variant="outlined" onClick={() => navigate('/contacto')} color='inherit'> + INFO</Button>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </Box>
    </Box>
  );
  
  
};

export default ServicesPage;
