import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const services = [
  {
    title: "Design-to-Code Conversion",
    description: "Pixel-perfect UI from Figma, Sketch, or PSD files.",
    selected: true,
  },
  {
    title: "Responsive Web Design",
    description: "Optimized layouts for mobile, tablet, and desktop.",
  },
  {
    title: "React Component Development",
    description: "Reusable, scalable, and testable UI components.",
  },
  {
    title: "API-Driven Integration Service",
    description: "Seamless UI integration with RESTful or headless APIs.",
  },
  {
    title: "Performance Optimisation",
    description: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Consistent performance across Chrome, Safari, Firefox.",
  },
];

const WhatWeOffer = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Group services into columns of 2 items each
  const columns = [];
  for (let i = 0; i < services.length; i += 2) {
    columns.push(services.slice(i, i + 2));
  }

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 8, md: 12 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1, maxWidth: "480px", ml: 5 , mt:6 }}>
        <Typography sx={{ fontSize: "56px", fontWeight: "500", mb: 2 , color:"#140E13" }}>
          What We Offer
        </Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "500", mb: 2 }}>
          Pixel-Perfect Front-End Development, Aligned with Your Designs and
          Deadlines
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
            lineHeight: "150%",
            mb: 4,
          }}
        >
          We help web and digital agencies deliver high-quality user interfaces
          that are responsive, accessible, and fast. Whether you're building a
          simple landing page or a complex web app, our front-end developers
          work as an extension of your team to bring your vision to life.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            backgroundColor: "#05408E",
            borderRadius: "16px",
            textTransform: "none",
            height: "59px",
            width: "246px",
          }}
        >
          Explore Services
        </Button>
      </Box>

      {/* Right Section - Two Row Carousel */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 2,
            pb: 2,

            // Hide scrollbar cross-browser
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome/Safari/Edge
            },
          }}
        >
          {columns.map((col, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                flexShrink: 0,
              }}
            >
              {col.map((service, innerIdx) => (
                <Card
                  key={innerIdx}
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: service.selected ? "#05408E" : "#F9FAFB",
                    color: service.selected ? "#fff" : "#000",
                    height: "242px",
                    width: "282px",
                    p: 2,
                    boxShadow: service.selected ? 6 : 1,
                    transition: "0.3s",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: service.selected
                          ? "rgba(255,255,255,0.2)"
                          : "#E5EAF0",
                        borderRadius: "12px",
                        mb: 2,
                      }}
                    />
                    <Typography fontWeight={600} fontSize="16px" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      sx={{
                        color: service.selected ? "#DDE9FF" : "#6B7280",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ))}
        </Box>

        {/* Arrows */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
          }}
        >
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#F3F4F6",
              color: "#374151",
              boxShadow: 1,
            }}
          >
            <ArrowBack fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#F3F4F6",
              color: "#374151",
              boxShadow: 1,
            }}
          >
            <ArrowForward fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeOffer;
