// AboutPage.js

import { useContext } from "react"
import { ThemeContext } from '../context/ThemeProvider';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import Footer from '../footer/Footer'
import { Box } from '@mui/material';

const AboutPage = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <>
    
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
      }}
    >
      <ResponsiveAppBar/>
      <Box>
      <h2>About Us</h2>
      <p>Welcome to our about page!</p>
      </Box>
      <Footer/>
    </Box>
    
    </>
  );
};

export default AboutPage;
