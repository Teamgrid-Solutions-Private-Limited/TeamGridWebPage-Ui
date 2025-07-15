import React from "react";
import { Box, Typography, Button } from "@mui/material";
import leftImg from "../assets/Mask group.svg"; // Your SVG-masked image

const WhoWeHelpSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, md: 6 ,lg:15,xl:10},
        py: { xs: 6, md: 12 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: {sm:10,md:15,lg:20,xl:27},
      }}
    >
      {/* Left Side - SVG Masked Image */}
      <Box
        component="img"
        src={leftImg}
        alt="Who We Help Visual"
        sx={{
          width: { xs: "100%", md: "597px" },
          height: { xs: "auto", md: "850.09px" },
          opacity: 1,
          objectFit: "contain",
        }}
      />


      {/* Right Side - Text Content */}
      <Box
        sx={{
          width: { xs: "100%", md: "467px" },
          height: { xs: "auto", md: "630px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
                 gap: {sm:1,md:2,lg:3,xl:4},

          opacity: 1,
        }}
      >

        <Typography variant="h4" fontWeight={700} gutterBottom>
          Who We Help
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          A Trusted Partner for Growing Teams
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          We partner with growing teams — from startups to digital agencies — who need flexible, dependable talent to move faster and stay focused. Whether you're short on capacity or scaling up delivery, we help you fill the gaps without adding overhead.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Our clients typically come to us when they’re ready to scale but don’t want to manage the complexities of in-house hiring or the risks of unreliable freelancers. With Teamgrid, they get access to experienced professionals — developers, designers, AI specialists, or remote staff — who integrate seamlessly into their workflow and contribute from day one.
        </Typography>

        <Typography variant="body1" color="text.secondary" paragraph>
          Whether you’re launching a new product, clearing a project backlog, or simply need extra hands to keep things running smoothly, we’re here to help you deliver.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: "30px",
            px: 4,
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Explore Services ➜
        </Button>
      </Box>
    </Box>
  );
};

export default WhoWeHelpSection;
