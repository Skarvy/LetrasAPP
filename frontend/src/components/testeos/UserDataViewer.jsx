import React from 'react';
import { useUser } from '../context/UserProvider'; // Asegúrate de importar el hook useUser desde el archivo correcto

const UserDataViewer = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>Datos del Usuario</h2>
      <p>Nombre de usuario: {user.username}</p>
      <p>Token: {user.token}</p>
      <p>¿Está logueado?: {user.isLogged ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default UserDataViewer;
