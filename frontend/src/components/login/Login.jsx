// Login.jsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserProvider'; // Asegúrate de importar useUser desde el proveedor de contexto

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser(); // Usa useUser para obtener el contexto del usuario

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        // Actualiza el estado del usuario utilizando setUser del contexto
        setUser({
          username: formData.username,
          token: data.token,
          isLogged: true
        });
        // Login correcto, redirigir al usuario
        navigate('/');
      } else {
        throw new Error(data.error || 'Error en el login');
      }
    } catch (error) {
      setError(error.message || 'Error en el login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '300px',
        }}
      >
        <TextField
          type="text"
          name="username"
          label="Usuario"
          variant="outlined"
          margin="normal"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <TextField
          type="password"
          name="password"
          label="Contraseña"
          variant="outlined"
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
