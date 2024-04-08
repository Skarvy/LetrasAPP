
import { ThemeProvider,ThemeContext } from "./components/context/ThemeProvider"
import { useContext } from "react"

import { Box } from "@mui/material"
import ResponsiveAppBar from "./components/navbar/ResponsiveAppBar"
import Servicios from "./components/services/Servicios"
import Footer from "./components/footer/Footer"
import BannerSendText from "./components/banners/BannerSendText"
import Hero from "./components/hero/Hero"
import Testimony from "./components/testimony/Testimony"








function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <>  
      
      <ThemeProvider>

      <Box
      sx={{
        zIndex:-200,
        background: `linear-gradient(to bottom, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor}, ${theme.fourthColor})`,
        minHeight: '100vh', // Ajusta la altura como desees
      }}
    >
      
      <ResponsiveAppBar/>   
        
              <Hero/>        
              
              <Servicios/>
              
              
            
              <Testimony/>
           
              <BannerSendText/>
            
      
      <Footer/>
      </Box>
      </ThemeProvider>
    </>
  )
}

export default App
