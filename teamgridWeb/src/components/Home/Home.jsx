import React from 'react'
import HeroSection from "../HeroSection.jsx"
import Capabilities from "../Capabilities.jsx"
import TestimonialsSection from "../TestimonialsSection .jsx"
import LetsBuildTogether from '../LetsBuildTogether.jsx'
import Footer from '../Footer.jsx'
import Who from "./Who.jsx"
import What from './What.jsx'
import Why from './Why.jsx'
import How from './How.jsx'
export default function Home() {
  return (
    <>
    <HeroSection/>
    <Who/>
    <What/>
    <Why/>
    <How/>
    <Capabilities/>
    <TestimonialsSection/>
    <LetsBuildTogether/>
    <Footer/>
      
    </>
  )
}

