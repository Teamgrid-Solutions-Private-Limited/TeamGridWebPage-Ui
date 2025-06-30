/* eslint-disable no-unused-vars */
// App.jsx
import React from "react";
import { Typography, Button, Box } from "@mui/material";
import TopNavBar from "./TopNavBar";
import OrbitBar from "./OrbitBar";
import womanLaptop from '../assets/Rectangle 41.png';
import teamDiscussion from '../assets/Rectangle 40.png';
import groupWork from '../assets/Rectangle 45.png';
import manWorking from '../assets/Rectangle 46.png';
import WhatWeDoSection from "./WhatWeDoSection";
import WhyTeamgrid from "./WhyTeamgrid";
import OurCapabilities from "./OurCapabilities";
import LetsBuildTogether from "./LetsBuildTogether";
import Footer from "./Footer";
import ClientTestimonials from "./ClientTestimonials";
import WhoWeHelp from "./WhoWeHelp";
function TeamGridHomePage() {
  const imageData = [
    { src: womanLaptop, alt: "Woman with laptop", bg: "#FEE2E2" },
    { src: teamDiscussion, alt: "Team discussion", bg: "#F3E8FF" },
    { src: groupWork, alt: "Group work", bg: "#ECFDF5" },
    { src: manWorking, alt: "Man working", bg: "#FEF9C3" },
  ];

  return (
    <Box>
      <TopNavBar />
      <OrbitBar />
      {/* <Box sx={{ height: { xs: '100vh', md: '110vh' } }} /> */}
      <Box sx={{ maxWidth: "100%",
         mx: "auto", px: { xs: 2, md: 4 }
          }}>

        <WhoWeHelp />
        <WhatWeDoSection />
        <WhyTeamgrid />
      </Box>

      <OurCapabilities />
      <ClientTestimonials />
      <LetsBuildTogether />
      <Footer />
    </Box>
  );
}

export default TeamGridHomePage;
