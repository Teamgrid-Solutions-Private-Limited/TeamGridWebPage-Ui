import React, { useState } from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import collage from "../../assets/mask2.png";

const infoCards = [
  {
    title: "Right Talent, Matched Your Needs",
    description:
      "We align expertise with your business objectives and workflows.",
    bg: "#FFF7C7",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Work the way you prefer — retainers, hourly, or fixed-cost projects.",
    bg: "#EAEAFF",
  },
  {
    title: "Trustworthy and Confidential",
    description:
      "NDA-backed, process-driven, and fully aligned with your brand.",
    bg: "#FFEFFC",
  },
  {
    title: "Optional Project Oversight",
    description:
      "Aligned with your brand and processes to help you scale confidently.",
    bg: "#ECF9FF",
  },
  {
    title: "Global Team Access",
    description: "Leverage top global talent for any time zone.",
    bg: "#E0FFF1",
  },
  {
    title: "Faster Time-to-Start",
    description: "Start delivering value within days, not weeks.",
    bg: "#FFF3DD",
  },
  {
    title: "Scalable Delivery Models",
    description: "Adapt your team size as your needs evolve.",
    bg: "#F0F7FF",
  },
  {
    title: "Performance Monitoring",
    description: "Built-in visibility and insights on deliverables.",
    bg: "#FFE8F1",
  },
];

const Why = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 4 >= infoCards.length ? 0 : prev + 4));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 4 < 0 ? infoCards.length - 4 : prev - 4));
  };

  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 8,
      }}
    >
      {/* Left: T-shaped image */}
      <Box
        component="img"
        src={collage}
        alt="Teamgrid Collage"
        sx={{
          width: { xs: "100%", md: 557 },
          height: { xs: "auto", md: 841 },
          objectFit: "contain",
        }}
      />

      {/* Right: Text & Carousel */}
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography sx={{fontSize:"56px" , color:"#140E13" , fontWeight:500}} mb={1} alignSelf="flex-start">
          Why Teamgrid
        </Typography>
        <Typography
          sz={{fontSize:"18px" , fontWeight:400 , color:"#000000"}}
          mb={2}
          alignSelf="flex-start"
        >
          Flexible Talent. Reliable Delivery. Scalable Results.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 3, mb:2 }}>
          <IconButton onClick={handlePrev} sx={{ border: "1px solid #ccc" }}>
            <ArrowBack />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ border: "1px solid #ccc" }}>
            <ArrowForward />
          </IconButton>
        </Box>

        {/* Cards Grid aligned to right */}
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Grid container spacing={3} sx={{ width: "calc(384px * 2 + 24px)" }}>
            {[...infoCards.slice(index, index + 4)].map((card, idx) => (
              <Grid item xs={6} key={idx}>
                <Box
                  sx={{
                    backgroundColor: card.bg,
                    borderRadius: 3,
                    px: 3,
                    py: 2.5,
                    height: "218px",
                    width: "384px",
                  }}
                >
                  <Typography fontWeight={500} mb={1} fontSize="20px" color="#05408E">
                    {card.title}
                  </Typography>
                  <Typography fontSize="16px" color="#140E13" fontWeight={400}>
                    {card.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Carousel Controls */}
        {/* Button at top */}
        <Box sx={{ alignSelf: "flex-start", mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              backgroundColor: "#05408E",
              height:"59px",
              width:"246px",
              borderRadius:"39px",
              mt:"20px"
            }}
          >
            Explore Services →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Why;
