import React from "react";
import { Box, Typography, Button } from "@mui/material";
import leftImg from "../assets/Mask group.svg"; // Your SVG-masked image

const WhoWeHelpSection = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, sm: 4, md: 6, lg: 10, xl: 10 },
        py: { xs: 4, sm: 2, md: 10},
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 4, sm: 8, md: 10, lg: 20, xl: 27 },
        mb: 4
      }}
    >
      {/* Left Side - SVG Masked Image */}
      <Box
        component="img"
        src={leftImg}
        alt="Who We Help Visual"
        sx={{
          width: { xs: "100%", sm: "100%", md: "700px", lg: "100%", xl: "597px" },
          height: { xs: "auto", sm: "auto", md: "750px", lg: "100%", xl: "850.09px" },
          opacity: 1,
          objectFit: "contain",
          mb: { xs: 3, md: 0 },
          alignSelf: { xs: "center", md: "flex-start" },
        }}
      />

      {/* Right Side - Text Content */}
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "420px", lg: "467px" },
          height: { xs: "auto", md: "auto", lg: "630px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: { xs: 2, sm: 3, md: 1, lg: 5 },
          opacity: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "359px" },
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, sm: 2 },
            opacity: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: `"PayPal Open", sans-serif`,
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: "110%",
              letterSpacing: "0%",
              m: 0,
              p: 0,
              color: "#140E13"
            }}
          >
            Who We Help
          </Typography>
          <Typography
            sx={{
              fontFamily: `"PayPal Open", sans-serif`,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
              m: 0,
              p: 0,
            }}
          >
            A Trusted Partner for Growing Teams
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "100%", lg: "90%", xl: "467px" },
            height: { xs: "auto", md: "auto" },
            opacity: 1,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: `"PayPal Open", sans-serif`,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
            }}
            paragraph
          >
            We partner with growing teams — from startups to digital agencies — who need flexible, dependable talent to move faster and stay focused. Whether you're short on capacity or scaling up delivery, we help you fill the gaps without adding overhead.
          </Typography>

          <Typography
            sx={{
              fontFamily: `"PayPal Open", sans-serif`,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
            }}
            paragraph
          >
            Our clients typically come to us when they’re ready to scale but don’t want to manage the complexities of in-house hiring or the risks of unreliable freelancers. With Teamgrid, they get access to experienced professionals — developers, designers, AI specialists, or remote staff — who integrate seamlessly into their workflow and contribute from day one.
          </Typography>

          <Typography
            sx={{
              fontFamily: `"PayPal Open", sans-serif`,
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
            }}
            paragraph
          >
            Whether you’re launching a new product, clearing a project backlog, or simply need extra hands to keep things running smoothly, we’re here to help you deliver.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#05408E",
            borderRadius: "39px",
            px: { xs: "20px", sm: "32px", md: "40px" },
            py: { xs: "10px", sm: "14px", md: "16px" },
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
            textTransform: "none",
            color: "#ffffff",
            width: { xs: "100%", sm: "246px" },
            height: { xs: "auto", sm: "59px" },
            gap: "10px",
            opacity: 1,
            "&:hover": {
              backgroundColor: "#043b7f", // slightly darker for hover
            },
          }}
        >
          Explore Services ➜
        </Button>

      </Box>
    </Box>
  );
};

export default WhoWeHelpSection;
