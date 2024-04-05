
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#019267',
    secondaryColor: '#00C897',
    tertiaryColor: '#FFD365',
    fourthColor: '#FDFFA9',

    // Agrega más propiedades de tema si es necesario
  });

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
