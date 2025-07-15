import React from "react";
import { Box, Typography, Button } from "@mui/material";
import leftImg from "../assets/Mask group.svg"; // Your SVG-masked image

const WhoWeHelpSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, sm: 3, md: 6, lg: 15, xl: 10 },
        py: { xs: 4, sm: 6, md: 12 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 4, sm: 6, md: 10, lg: 20, xl: 27 },
      }}
    >
      {/* Left Side - SVG Masked Image */}
      <Box
        component="img"
        src={leftImg}
        alt="Who We Help Visual"
        sx={{
          width: { xs: "100%", sm: "90%", md: "350px", lg: "480px", xl: "597px" },
          height: { xs: "auto", sm: "auto", md: "500px", lg: "700px", xl: "850.09px" },
          opacity: 1,
          objectFit: "contain",
          mb: { xs: 3, md: 0 },
          alignSelf: { xs: "center", md: "flex-start" },
        }}
      />

      {/* Right Side - Text Content */}
      <Box
        sx={{
          width: { xs: "100%", sm: "95%", md: "400px", lg: "420px", xl: "467px" },
          height: { xs: "auto", md: "auto", lg: "630px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: { xs: 3, sm: 4, md: 5, lg: 6 },
          opacity: 1,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: "2rem", sm: "2.2rem", md: "2.4rem", lg: "2.5rem" } }}
        >
          Who We Help
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" } }}
        >
          A Trusted Partner for Growing Teams
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" } }}
        >
          We partner with growing teams — from startups to digital agencies — who need flexible, dependable talent to move faster and stay focused. Whether you're short on capacity or scaling up delivery, we help you fill the gaps without adding overhead.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" } }}
        >
          Our clients typically come to us when they’re ready to scale but don’t want to manage the complexities of in-house hiring or the risks of unreliable freelancers. With Teamgrid, they get access to experienced professionals — developers, designers, AI specialists, or remote staff — who integrate seamlessly into their workflow and contribute from day one.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" } }}
        >
          Whether you’re launching a new product, clearing a project backlog, or simply need extra hands to keep things running smoothly, we’re here to help you deliver.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: "30px",
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.2 },
            textTransform: "none",
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.1rem" },
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Explore Services ➜
        </Button>
      </Box>
    </Box>
  );
};

export default WhoWeHelpSection;
