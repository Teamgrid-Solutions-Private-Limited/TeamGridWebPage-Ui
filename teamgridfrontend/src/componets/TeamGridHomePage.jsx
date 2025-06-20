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
      <Box sx={{ height: { xs: '100vh', md: '90vh' } }} />
      {/* <Box sx={{ position: 'relative', zIndex: 100 }}></Box> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          px: { xs: 2, md: 8.5 },
          py: { xs: 6, md: 10 },
          bgcolor: "#fff",
        }}
      >
        {/* Left Text Content */}
        <Box sx={{ flex: 1, pr: { md: 9 }, mb: { xs: 4, md: 0 }, mt: { xs: 0, md: 27 } }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Who We Help
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            A Trusted Partner for Growing Teams
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            We work with agencies, startups, and businesses of all sizes — helping them extend their capacity, speed up delivery, and stay focused on what matters most.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#003F9F",
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#002c70",
              },
            }}
          >
            Explore Services →
          </Button>
        </Box>

        {/* Right Image Grid */}
        {/* Right Image Grid */}
        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            position: "relative",
          }}
        >
          {imageData.map((img, index) => {
            // Add vertical offset to first column items
            const isLeftCol = index % 2 === 0;
            const offset = isLeftCol ? "30px" : "0px";

            return (
              <Box
                key={index}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  backgroundColor: img.bg,
                  // aspectRatio: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                  transform: `translateY(${offset})`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "110%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            );
          })}
        </Box>

      </Box>
      <WhatWeDoSection />
      <WhyTeamgrid />
      <OurCapabilities />
    </Box>
  );
}

export default TeamGridHomePage;
