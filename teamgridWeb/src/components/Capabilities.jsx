import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import reactImg from "../assets/react.png";
import node from "../assets/node.png";
import postman from "../assets/postman.png";
import wordpress from "../assets/wordpress.png";
import wocom from "../assets/woo.png";
import PostgreSQL from "../assets/postgres.png";
import mongodb from "../assets/mongo.png";
import figma from "../assets/figma.png";
import shopify from "../assets/shopify.png";

const capabilities = [
  {
    title: "ReactJS",
    description:
      "Build fast, interactive UIs with component-based architecture.",
    icon: reactImg,
  },
  {
    title: "WordPress",
    description: "Flexible CMS for custom websites and content-rich platforms.",
    icon: wordpress,
  },
  {
    title: "WooCommerce",
    description: "Power your online store with WordPress integration.",
    icon: wocom,
  },
  {
    title: "Shopify",
    description:
      "Launch beautiful, high-converting e-commerce stores with ease.",
    icon: shopify,
  },
  {
    title: "Node.js",
    description: "Build fast, scalable servers with non-blocking architecture.",
    icon: node,
  },
  {
    title: "PostgreSQL",
    description: "Reliable, powerful open-source relational database.",
    icon: PostgreSQL,
  },
  {
    title: "MongoDB",
    description: "Flexible NoSQL database for modern applications.",
    icon: mongodb,
  },
  {
    title: "Figma",
    description: "Collaborative UI/UX design and prototyping platform.",
    icon: figma,
  },
  {
    title: "Postman",
    description: "Simplify API development, testing, and collaboration.",
    icon: postman,
  },
];

const Capabilities = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0B3C7B",
        color: "white",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 2 },
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          mx: 2,
          px: {
            xs: 2, // Smallest padding on mobile
            sm: 4,
            md: 8,
            lg: 7,
            xl: 10, // More padding on wide screens
          },
          ml: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: "0px", // Applies for 1200px+
            xl: "30px", // Applies for 1536px+
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            mb: { xs: 3, sm: 4, md: 4 },
            width: "100%",
          }}
        >
          <Box sx={{ mb: { xs: 3, md: 0 }, width: { xs: "100%", md: "auto" } }}>
            <Typography
              fontWeight="500"
              gutterBottom
              sx={{
                fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "56px" },
                lineHeight: { xs: 1.2, sm: 1.3 },
                color: "#FAFAFA",
              }}
            >
              Our Capabilities
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                opacity: 0.85,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: "400",
                color: "#FAFAFA",
                lineHeight: { xs: 1.4, sm: 1.5 },
              }}
            >
              Modern Technologies & Collaborative Tools
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#0070FF",
              height: { xs: "48px", sm: "56px" },
              width: { xs: "100%", sm: "204px" },
              maxWidth: "204px",
              borderRadius: "999px",
              px: { xs: 3, sm: 4 },
              py: 1,
              mr: { xs: 0, sm: -2 },
              textTransform: "none",
              fontWeight: "400",
              color: "white",
              fontSize: { xs: "14px", sm: "16px" },
              "&:hover": {
                bgcolor: "#0056CC",
              },
            }}
          >
            Get a Quote →
          </Button>
        </Box>

        <Grid container spacing={{ xs: 1.5, sm: 2, md: 5 }}>
          {capabilities.map((cap, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: { xs: "auto", sm: "124px" },
                  minHeight: { xs: "100px", sm: "124px" },
                  width: { xs: "100%", sm: "84px", md: "400px" }, // xs full width
                  bgcolor: "#0B3C7B",
                  borderRadius: { xs: "16px", sm: "24px" },
                  p: { xs: 2, sm: "20px", lg: "15px" },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // change this line
                  alignItems: { xs: "flex-start", sm: "center" }, // adjust for column layout
                  gap: { xs: 1.5, sm: 2.5 },
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={cap.icon}
                  alt={cap.title}
                  sx={{
                    width: { xs: 28, sm: 56, md: 64 },
                    height: { xs: 28, sm: 56, md: 64 },
                    borderRadius: { xs: "8px", sm: "12px" },
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />

                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0, // Prevents text overflow
                    pt: { xs: 0, sm: "10px" },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="white"
                    sx={{
                      lineHeight: 1.2,
                      mb: { xs: 0.5, sm: 0.5 },
                      fontSize: { xs: "10px", sm: "18px", md: "20px" },
                    }}
                  >
                    {cap.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#E3EFFF",
                      fontSize: { xs: "8px", sm: "13px", md: "14px" },
                      fontWeight: "400",
                      lineHeight: { xs: "18px", sm: "20px", md: "21px" },
                      fontFamily: "PayPalOpen, Sans-serif",
                      display: { xs: "none", sm: "block" }, // Hide description on mobile for cleaner look
                      overflow: "hidden",
                      textOverflow: "ellipsis",
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

export default Capabilities;
