import React from "react";
import { Box, Typography, Button } from "@mui/material";
import tShapeImage from "../../assets/Mask group (4).png"; // Your single masked image

const Who = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 6,
      }}
    >
      {/* Left Side Image */}
      <Box
        component="img"
        src={tShapeImage}
        alt="Who we help"
        sx={{
          width: { xs: "100%", md: "597px" },
          height: "850.09px",
          display: { xs: "none", md: "block" },
        }}
      />

      {/* Right Text Content */}
      <Box flex={1} sx={{mx:"45px"}}>
        <Typography
          mb={1}
          sx={{ fontSize: "56px", fontWeight: 500, color: "#140E13" }}
        >
          Who We Help
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontWeight: 400, color: "#000000" }}
          mb={3}
        >
          A Trusted Partner for Growing Teams
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 400, color: "#000000" }}
          mb={3}
        >
          We partner with growing teams — from startups to digital agencies —
          who need flexible, dependable talent to move faster and stay focused.
          Whether you're short on capacity or scaling up delivery, we help you
          fill the gaps without adding overhead.
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 400, color: "#000000" }}
          mb={3}
        >
          Our clients typically come to us when they're ready to scale but don’t
          want to manage the complexities of in-house hiring or the risks of
          unreliable freelancers. With Teamgrid, they get access to experienced
          professionals — developers, designers, AI specialists, or remote staff
          — who integrate seamlessly into their workflow and contribute from day
          one.
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 400, color: "#000000" }}
          mb={4}
        >
          Whether you're launching a new product, clearing a project backlog, or
          simply need extra hands to keep things running smoothly, we’re here to
          help you deliver.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#05408E",
            borderRadius: "39px",
            fontSize: "18px",
            fontWeight: 400,
            width: "246px",
            height: "59px",
          }}
          endIcon={<span>&#8594;</span>}
        >
          Explore Services
        </Button>
      </Box>
    </Box>
  );
};

export default Who;
