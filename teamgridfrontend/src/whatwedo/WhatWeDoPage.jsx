import React from 'react'
import NavBar from './Navbar'
import OrbitBar from '../componets/OrbitBar'
import FrontendHeroSection from './FrontendHeroSection'
import Footer from '../componets/Footer'
import WhatWeOfferAndTechStack from './WhatWeOfferAndTechStack'
import WhatWeOfferPage from './WhatWeOfferPage'
const WhatWeDoPage = () => {
    return (
        <div>
            <NavBar />
           <FrontendHeroSection/>
           <WhatWeOfferPage/>
           {/* <WhatWeOfferAndTechStack/> */}
           {/* <Footer/> */}
        </div>
    )
}

export default WhatWeDoPage