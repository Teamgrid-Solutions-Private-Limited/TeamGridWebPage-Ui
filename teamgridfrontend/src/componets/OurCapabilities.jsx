import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import reactImg from "../assets/Group 16.png";
import node from "../assets/Group 20.png";
import postman from "../assets/Group 24.png";
import wordpress from "../assets/Group 17.png";
import wocom from "../assets/Group 18.png";
import PostgreSQL from "../assets/Group 20.png";
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
      width: "100%",
      bgcolor: "#0B3C7B", 
      color: "white", 
      py: { xs: 6, md: 8 },
      position: "relative", 
      overflow: "hidden", 
      zIndex: 1
    }}>
      {/* Container with same padding as navbar */}
      <Box sx={{ 
        maxWidth: "xl",
        mx: "auto",
        px: { xs: 2, sm: 4, md: 3, lg: 11 } // Match navbar padding
      }}>
        {/* Top Heading Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            mb: { xs: 4, md: 6 },
            gap: { xs: 2, md: 0 }
          }}
        >
          <Box>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              gutterBottom
              sx={{
                fontFamily: 'PayPal Open',
                fontSize: { xs: '28px', md: '40px' },
                lineHeight: '100%'
              }}
            >
              Our Capabilities
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                opacity: 0.85,
                fontFamily: 'PayPal Open',
                fontSize: { xs: '16px', md: '18px' }
              }}
            >
              Modern Technologies & Collaborative Tools
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#1E90FF",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: 'PayPal Open',
              fontSize: '16px',
              '&:hover': {
                bgcolor: '#0077CC'
              }
            }}
          >
            Get a Quote →
          </Button>
        </Box>

        <Grid 
          container 
          spacing={{ xs: 2, md: 3 }} 
          sx={{ 
            width: "100%",
            justifyContent: "center"
          }}
        >
          {capabilities.map((cap, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: { xs: '100%', sm: '384px' },
                  height: { xs: 'auto', sm: '90px' },
                  minHeight: '90px',
                  fontFamily: "PayPal Open",
                  bgcolor: "#0B3C7B",
                  borderRadius: "24px",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: "19px",
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
                    width: 55,
                    height: 55,
                    borderRadius: "12px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />

                {/* Right: Title + Description */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="white"
                    textAlign="left"
                    sx={{
                      fontSize: { xs: '16px', sm: '18px' },
                      lineHeight: 1.2,
                      mb: 0.5,
                    }}
                  >
                    {cap.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "PayPal Open",
                      fontWeight: 400,
                      fontSize: { xs: '13px', sm: '14px' },
                      lineHeight: "21px",
                      color: "rgba(255,255,255,0.8)",
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