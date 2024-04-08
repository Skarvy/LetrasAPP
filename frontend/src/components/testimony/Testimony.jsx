import React from 'react';
import { Typography, Grid, Avatar, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion'; // Importa motion de framer-motion

const escritores = [
  {
    id: 1,
    nombre: 'J.K. Rowling',
    avatar: '/img/harry.jpg',
    cita: 'La imaginación es la única arma en la guerra contra la realidad.',
    info: 'Autora de Harry Potter'
  },
  {
    id: 2,
    nombre: 'Maya Angelou',
    avatar: '/img/maya.jpg',
    cita: 'La esperanza y el miedo no pueden ocupar el mismo lugar. Invíta a uno a quedarse.',
    info: 'Poeta y escritora'
  },
  {
    id: 3,
    nombre: 'Albert Camus',
    avatar: '/img/camus.jpg',
    cita: 'En medio del invierno, aprendí por fin que había en mí un verano invencible.',
    info: 'Escritor y filósofo'
  },
  {
    id: 4,
    nombre: 'Oscar Wilde',
    avatar: '/img/wilde.jpg',
    cita: 'La vida es demasiado importante como para tomársela en serio.',
    info: 'Autor y dramaturgo'
  }
];

const Escritor = ({ escritor }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}> {/* Aplica animación de entrada */}
      <Card sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 8 }}>
        <Avatar alt={escritor.nombre} src={escritor.avatar} sx={{ width: 120, height: 120, margin: 'auto', mb: 2 }} />
        <Typography variant="subtitle2" color="textSecondary" sx={{ color: '#000000', textAlign: 'center', marginTop: 2 }}>
          - {escritor.nombre}
        </Typography>
        <CardContent sx={{ position: 'relative' }}>
          <Typography variant="body1" gutterBottom sx={{ color: '#000000', textAlign: 'center' }}>
            "{escritor.cita}"
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" sx={{ color: '#000000', textAlign: 'center' }}>
            {escritor.info}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const Testimony = () => {
  return (
    <div style={{ flexGrow: 1, padding: 20 }}>
      <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}> {/* Aplica animación de entrada al título */}
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#ffffff', fontWeight: 'bold', textShadow: '2px 2px 3px black' }}>
          Testimonios
        </Typography>
      </motion.div>
      <Grid container spacing={3} justifyContent="center">
        {escritores.map(escritor => (
          <Grid item xs={12} sm={6} md={4} key={escritor.id}>
            <Escritor escritor={escritor} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Testimony;
