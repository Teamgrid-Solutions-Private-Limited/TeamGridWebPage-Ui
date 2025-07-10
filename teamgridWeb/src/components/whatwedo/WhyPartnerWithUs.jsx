import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import people from "../../assets/teamm.svg";
import { darken } from "@mui/system";

// Sample icon placeholder (can be replaced with an image or SVG)
const IconBox = ({ bgColor }) => (
  <Box
    sx={{
      width: "40px",
      height: "40px",
      borderRadius: "12px",
      backgroundColor: bgColor || "#e0e0e0",
      mb: 2,
    }}
  />
);

const features = [
  {
    title: "Agency-Centric",
    description:
      "Specifically designed to support digital and creative agencies with reliable, scalable front-end development services.",
    bgColor: "#FFF6C7",
    teamColor: "#FDE658",
  },
  {
    title: "Speed & Flexibility",
    description:
      "Kickstart projects quickly and scale up or down as your client demands change — no overhead, just results.",
    bgColor: "#EAE8FF",
    teamColor: "#DADAFD",
  },
  {
    title: "UI-First Thinking",
    description:
      "Our developers prioritize design fidelity with responsive, pixel-perfect implementations that bring your mockups to life flawlessly.",
    bgColor: "#E7F9D9",
    teamColor: "#CDF5B3",
  },
  {
    title: "NDA-Compliant",
    description:
      "We work under strict non-disclosure agreements, ensuring full confidentiality while representing your brand seamlessly.",
    bgColor: "#FCE7FB",
    teamColor: "#FFDDF9",
  },
  {
    title: "Seamless Integration",
    description:
      "We collaborate smoothly with your in-house designers, backend developers, and project managers.",
    bgColor: "#DFF6FD",
    teamColor: "#CBEFFF",
  },
];

const WhyPartnerWithUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 }, // Top-bottom padding
        px: { xs: 2, sm: 3, md: 10 }, // Left-right padding (responsive)
        maxWidth: "1440px", // Max width on large screens
        mx: "auto", // Center horizontally
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          mb: 4,
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "48px" },
            fontweight: 500,
            color: "#140E13",
          }}
        >
          Why Partner With Us
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: "16px",
            textTransform: "none",
            color: "#140E13",
            fontweight: 400,
            width: "246px",
            height: "59px",
            px: 0,
            border: "1px solid #CACACA",
            mr: 3,
          }}
        >
          Explore Services
        </Button>
      </Box>
      <Grid container spacing={2.5}>
        {features.map((feature, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              sx={{
                borderRadius: "24px",
                backgroundColor: feature.bgColor,
                height: { lg: "242px", xl: "252px" },
                width: { lg: "405px", xl: "405px" },
              }}
            >
              <CardContent>
                {/* Slightly darker icon box */}
                <Box
                  sx={{
                    height: 64,
                    width: 64,
                    borderRadius: "14px",
                    backgroundColor: feature.teamColor, // darken by 10%
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <img
                    src={people}
                    alt="people"
                    style={{ height: "32px", width: "32px" }}
                  />
                </Box>

                <Typography
                  fontWeight="500"
                  fontSize="20px"
                  mb={1}
                  sx={{ color: "#05408E" }}
                >
                  {feature.title}
                </Typography>
                <Typography fontSize="16px" color="#140E13" fontWeight={400}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyPartnerWithUs;
