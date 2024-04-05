import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      component="footer"
      sx={{
      
        backgroundColor: 'inherit',
        color: theme.footerText,       
        padding: '40px 0',
        marginBottom: '0'
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Información de la Empresa
            </Typography>
            <Typography variant="body2" gutterBottom>
              Nombre de la Empresa es una empresa líder en...
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Útiles
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>Inicio</Link>
              <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>Servicios</Link>
              <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>Nosotros</Link>
              <Link href="#" color="inherit" sx={{ marginRight: '10px' }}>Contacto</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box display="flex" alignItems="center">
              <Facebook sx={{ fontSize: 30, marginRight: 2 }} />
              <Twitter sx={{ fontSize: 30, marginRight: 2 }} />
              <Instagram sx={{ fontSize: 30 }} />
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
