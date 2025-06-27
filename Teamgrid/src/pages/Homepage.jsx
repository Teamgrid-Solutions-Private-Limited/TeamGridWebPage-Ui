import React from 'react'
import Animated from '../components/Animated'
import WhoWeHelp from '../components/WhoWeHelp'
import WhatWeDo from '../components/WhatWeDo'
import WhyTeamgrid from '../components/WhyTeamgrid'
import CapabilitiesSection from '../components/CapabilitiesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import LetsTalk from '../components/Letstalk'
import FooterSection from '../components/FooterSection'

function Homepage() {
  return (
    <>
    <Animated/>
    <WhoWeHelp/>
    <WhatWeDo/>
    <WhyTeamgrid/>
    <CapabilitiesSection/>
    <TestimonialsSection/>
    <LetsTalk/>
    <FooterSection/>
    </>
  )
}

export default Homepage