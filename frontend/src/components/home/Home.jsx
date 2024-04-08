import React from 'react'
import Hero from '../hero/Hero'
import Servicios from '../services/Servicios'
import BannerSendText from '../banners/BannerSendText'
import Testimony from '../testimony/testimony'



export default function Home() {
  return (
    <>  
        <Hero />
        
        <Servicios />
        <BannerSendText />
        <Testimony/>
    </>
  )
}
