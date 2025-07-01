import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import reactImg from "../assets/Group 16.png";
import node from "../assets/Group 20.png";
import postman from "../assets/Group 24.png";
import wordpress from "../assets/Group 17.png";
import wocom from "../assets/Group 18.png";
import PostgreSQL from "../assets/Group 21 (1).png";
import mongodb from "../assets/Group 22.png";
import figma from "../assets/Group 23.png";
import shopify from "../assets/Group 19.png";

const capabilities = [
  {
    title: "ReactJS",
    description: "Build fast, interactive UIs with component-based architecture.",
    icon: reactImg // replace with actual paths
  },
  {
    title: "WordPress",
    description: "Flexible CMS for custom websites and content-rich platforms.",
    icon: wordpress
  },
  {
    title: "WooCommerce",
    description: "Power your online store with WordPress integration.",
    icon: wocom
  },
  {
    title: "Shopify",
    description: "Launch beautiful, high-converting e-commerce stores with ease.",
    icon: shopify
    , // replace with actual paths
  },
  {
    title: "Node.js",
    description: "Build fast, scalable servers with non-blocking architecture.",
    icon: node
    , // replace with actual paths
  },
  {
    title: "PostgreSQL",
    description: "Reliable, powerful open-source relational database.",
    icon: PostgreSQL
    // replace with actual paths
  },
  {
    title: "MongoDB",
    description: "Flexible NoSQL database for modern applications.",
    icon: mongodb
    , // replace with actual paths
  },
  {
    title: "Figma",
    description: "Collaborative UI/UX design and prototyping platform.",
    icon: figma
    // replace with actual paths
  },
  {
    title: "Postman",
    description: "Simplify API development, testing, and collaboration.",
    icon: postman
    // replace with actual paths
  },
];
const OurCapabilities = () => {
  return (
    <Box sx={{
      width: "100vw", // Full viewport width
      maxWidth: "100%", // Prevent horizontal scrollbar
      bgcolor: "#0B3C7B",
      color: "white",
      py: { xs: 6, md: 8 },
      px:{xs:3,md:10,lg:14},
      position: "relative",
      overflow: "hidden",
      zIndex: 1
    }}>
      {/* Container with same padding as navbar */}
      <Box sx={{
        maxWidth: "100%",
        // mx: "auto",
        // px: { xs: 2, sm: 6, md: 2, lg: 10} // Match navbar padding
      }}>
        {/* Top Heading Row */}
        <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: { xs: "flex-start", md: "center" },
    mb: { xs: 4, md: 6 },
    gap: 3, // Add some spacing between text and button
  }}
>
  <Box sx={{ flex: 1 }}>
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: { xs: '32px', sm: '44px', md: '56px' },
        lineHeight: '110%',
        color: '#FAFAFA',
        mb: {md:1},
        ml:{md:1}
      }}
    >
      Our Capabilities
    </Typography>

    <Typography
      sx={{
        fontWeight: 400,
        fontSize: { xs: '16px', sm: '17px', md: '18px' },
        lineHeight: '150%',
        opacity: 0.85,
        color: '#FAFAFA',
        maxWidth: '100%',
        ml:{md:2}
      }}
    >
      Modern Technologies & Collaborative Tools
    </Typography>
  </Box>

  <Button
    variant="contained"
    sx={{
      minWidth: '180px',
      height: '56px',
      bgcolor: "#1E90FF",
      color: '#FFFFFF',
      borderRadius: "999px",
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '150%',
      textTransform: "none",
      alignSelf: { xs: "flex-start", md: "center" },
      mt: { xs: 3, md: 0 },
      "&:hover": {
        bgcolor: '#0077CC'
      }
    }}
  >
    Get a Quote →
  </Button>
</Box>


        <Grid
          container
          rowSpacing={{ xs: 3, sm: 3 }}
          columnSpacing={{ xs: 2, sm: 4, md: 8 ,lg:8.5}}
          // mx={{lg:1,xs:0}}
          pl={{md:1,lg:1}}
          sx={{
            width: "100%",
            justifyContent: "flex-start"
          }}
        >
          {capabilities.map((cap, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              // lg={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: { xs: '100%', sm: '384px', lg: '384px' },
                  height: { xs: 'auto', sm: '124px' },
                  minHeight: '90px',
                  fontWeight: 500,
                  bgcolor: "#0B3C7B",
                  borderRadius: "24px",
                  p: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid #0E4B99",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#003272",
                    transform: "scale(1.03)",
                  },
                }}
              >
                {/* Left: Icon */}
                <Box
                  component="img"
                  src={cap.icon}
                  alt={cap.title}
                  sx={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "1px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />

                {/* Right: Title + Description */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#E3EFFF',
                      textAlign: 'left',
                      mb: 0.5,
                    }}
                  >
                    {cap.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '21px',
                      letterSpacing: '0%',
                      color: '#E3EFFF',
                    }}
                  >
                    {cap.description}
                  </Typography>

                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurCapabilities;