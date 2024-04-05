import React from 'react'
import Hero from '../hero/Hero'
import Servicios from '../services/Servicios'
import BannerSendText from '../banners/BannerSendText'



export default function Home() {
  return (
    <>  
        <Hero />
        
        <Servicios />
        <BannerSendText />
    </>
  )
}
