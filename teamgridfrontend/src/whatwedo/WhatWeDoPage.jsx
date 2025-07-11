import React from 'react'
import NavBar from './Navbar'
import OrbitBar from '../componets/OrbitBar'
import FrontendHeroSection from './FrontendHeroSection'
import Footer from '../componets/Footer'
import WhatWeOfferPage from './WhatWeOfferPage'
import { Box } from '@mui/material'
import OurTechStackSection from './OurTechStackSection'
import WhyPartnerWithUs from './WhyPartnerWithUs'
import EngagementElement from './EngagementElement'
import GotQuestions from './GotQuestions'
import NeedExpert from './NeedExpert'
import HowWeWork from './HowWeWork'
const WhatWeDoPage = () => {
    return (
        <div>
            <NavBar />
           <FrontendHeroSection/>
           {/* <Box sx={{ maxWidth: "100%",
         mx: "auto", px: { xs: 2, md: 4 }
          }}> */}
           <WhatWeOfferPage/>
           {/* </Box> */}
        <OurTechStackSection/>
        <WhyPartnerWithUs/>
        <HowWeWork/>
        <EngagementElement/>
        <GotQuestions/>
        <NeedExpert/>
           <Footer/>
        </div>
    )
}

export default WhatWeDoPage