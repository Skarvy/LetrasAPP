import React from 'react';
import { useContext } from "react"
import { ThemeContext } from '../context/ThemeProvider';
import { Container, Grid, TextField, Button,Box,Typography} from '@mui/material';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import Footer from '../footer/Footer';

const ContactPage = () => {
  const {theme} = useContext(ThemeContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <>
       <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
      }}
    >
    <ResponsiveAppBar/>
    <Container sx={{ marginTop: 4 }} maxWidth="sm">
    <Typography variant="h4" component="h2" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body1" paragraph>
            ¡Estamos encantados de escucharte! Por favor, completa el formulario a continuación para contactarnos.
          </Typography>
      <form sx={{ width: '100%', mt: 2 }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              id="mensaje"
              label="Mensaje"
              name="mensaje"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </form>
    </Container>
    <Footer/>
    </Box>
    </>
  );
};

export default ContactPage;
