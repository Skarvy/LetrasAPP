import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import PostCards from './PostCards/PostCards';
import Footer from '../footer/Footer'
import { Box, Typography } from '@mui/material';

export default function Blog() {
  const {theme}=useContext(ThemeContext)
  return (
    <>
      <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
      }}
    >
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: `url('img/blog.jpg')`, // Ruta de la imagen de fondo
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0', // Ajusta el padding superior e inferior según sea necesario
          textAlign: 'center',
          height: '250px', // Altura del banner
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ><Typography 
      variant="h2" 
      sx={{ 
        fontSize: 'bold', 
        marginBottom: '20px', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Aquí se aplica la sombra negra
      }}
    >
      Bienvenido a nuestro blog
    </Typography>
    <Typography 
      variant="h5" 
      sx={{ 
        fontSize: '1.5rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // También aplicamos sombra a este elemento
      }}
    >
      Descubre artículos interesantes sobre diversos temas
    </Typography>
    
      </Box>
      <PostCards />
      <Footer/>
      </Box>
    </>
  );
}
