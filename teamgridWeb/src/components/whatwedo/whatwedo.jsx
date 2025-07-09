import react from 'react'
import Hero from './Hero'
import WhatWeOffer from './Whatweoffer'
import OurTechStack from './OurTechStack'
import WhyPartnerWithUs from './WhyPartnerWithUs'
import HowWeWork from './HowWeWork'
import EngagementModels from './EngagementModels '
import FaqSection from './FaqSection'
import Need from './Need'
import Footer from "../Footer.jsx"

export default function Whatwedo(){

    return(
        <>
        <Hero/>
        <WhatWeOffer/>
        <OurTechStack/>
        <WhyPartnerWithUs/>
        <HowWeWork/>
        <EngagementModels/>
        <FaqSection/>
        <Need/>
        <Footer/>
        </>
    )
}