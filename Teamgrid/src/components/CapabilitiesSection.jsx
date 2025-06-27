import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import react from "../assets/react-2.png";
import wordpress from "../assets/W.png";
import shopify from "../assets/shopify.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma-icon.png";
import nodsjs from "../assets/nodejs-3.png";
import postgresql from "../assets/postgresql.png";
import woo from "../assets/WooCommerce_logo 2.png";
import mongodb from "../assets/mongodb.png";

const capabilities = [
  {
    name: "ReactJS",
    desc: "Build fast, interactive UIs with component-based architecture.",
    icon: react,
  },
  {
    name: "WordPress",
    desc: "Flexible CMS for custom websites and content-rich platforms.",
    icon: wordpress,
  },
  {
    name: "WooCommerce",
    desc: "Power your online store with WordPress integration.",
    icon: woo,
  },
  {
    name: "Node.js",
    desc: "Build fast, scalable servers with non-blocking architecture.",
    icon: nodsjs,
  },
  {
    name: "PostgreSQL",
    desc: "Reliable, powerful open-source relational database.",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    desc: "Flexible NoSQL database for modern applications.",
    icon: mongodb,
  },
  {
    name: "Figma",
    desc: "Collaborative UI/UX design and prototyping platform.",
    icon: figma,
  },
  {
    name: "Postman",
    desc: "Simplify API development, testing, and collaboration.",
    icon: postman,
  },
  {
    name: "Shopify",
    desc: "Simplify API development, testing, and collaboration.",
    icon: shopify,
  },
];

const CapabilitiesSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 12 },
        py: { xs: 6, md: 10 },
        bgcolor: "#0c3b74",
        color: "white",
        maxWidth: "1700px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
          mb: 6,
        }}
      >
        <Box
          sx={{
            m: { xs: "0 auto", md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            fontSize={{ xs: "28px", sm: "32px", md: "40px" }}
            fontWeight="bold"
          >
            Our Capabilities
          </Typography>
          <Typography variant="subtitle1" fontSize={{ xs: "14px", sm: "16px" }}>
            Modern Technologies & Collaborative Tools
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{
            m: { xs: "0 auto", md: 0 },
            px: { xs: 3, sm: 4 },
            py: 1.5,
            borderRadius: "50px",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px" },
            alignSelf: { xs: "flex-start", sm: "center" }, 
            whiteSpace: "nowrap",
          }}
        >
          Get a Quote →
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="space-between">
        {capabilities.map((cap, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ m: { xs: "0 auto", md: 0 } }}
          >
            <Card
              sx={{
                bgcolor: "transparent",
                color: "white",
                height: "100%",
                borderRadius: "24px",
                width: "100%",
                maxWidth: { xs: 320, sm: 360, md: 370, lg: 390 },
                border: "1px solid rgb(7, 82, 161)",
                m: "0 auto",
                "&:hover": {
                  bgcolor: "#003272",
                  border: "1px solid #003272",
                  cursor: "pointer",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row", 
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    bgcolor: "#1B5093",
                    p: 1,
                    borderRadius: 4,
                  }}
                >
                  <Box
                    component="img"
                    src={cap.icon}
                    alt={cap.name}
                    sx={{
                      width: { xs: 30, md: 40 },
                      height: { xs: 30, md: 40 },
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="h6">{cap.name}</Typography>
                  <Typography
                    color="#E3EFFF"
                    sx={{ fontSize: { xs: "12px", md: "13px" } }}
                  >
                    {cap.desc}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CapabilitiesSection;
