import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import teamgridImage from "../assets/Rectangle 51.png";
import tickimg from "../assets/ci_check-all.png"
const points = [
  {
    title: "Right Talent, Matched Your Needs",
    desc: "We align expertise with your business objectives and workflows.",
  },
  {
    title: "Flexible Engagement Models",
    desc: "Work the way you prefer — retainers, sprints, or fixed-cost projects.",
  },
  {
    title: "Trustworthy and Confidential",
    desc: "NDA-backed, process-driven, and fully aligned with your brand.",
  },
  {
    title: "Optional Project Oversight",
    desc: "Expert oversight to ensure project alignment and progress.",
  },
  {
    title: "Seamless Collaboration",
    desc: "Slack, Trello, GitHub, or your tools — we work your way.",
  },
];

const WhyTeamgrid = () => {
  return (
    <Box sx={{ maxWidth: "1440px", mx: "auto", px: { xs: 2, sm: 4, md: 9.5 }, mb: 4 }}>
      {/* Header Row - Title and Button */}
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        mb: { xs: 4, md: 0 }, // Reduced bottom margin
        position: "relative"
      }}>
        {/* Title - stays at the top */}
        <Typography
          sx={{
            fontFamily: 'PayPal Open',
            fontWeight: 500,
            fontSize: { xs: '32px', md: '56px' },
            lineHeight: '100%',
            letterSpacing: 0,
            color: '#140E13',
            textAlign: { xs: 'center', md: 'left' },
            mb: { xs: 1, md: 2 },
            alignSelf: 'flex-start'
          }}
        >
          Why Teamgrid
        </Typography>

        {/* Button Container - positioned absolutely */}
        <Box sx={{
          position: { md: 'absolute' },
          right: 0,
          top: { md: '26px' },
          mt: { xs: 2, md: 0 },
          mb: { md: 4 } // Add margin bottom only for desktop
        }}>
          <Button
            variant="outlined"
            endIcon={<span style={{ fontSize: "18px" }}>→</span>}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 500,
              borderColor: "#05408E",
              color: "#05408E",
              "&:hover": {
                borderColor: "#003F9F",
                color: "#003F9F",
              },
            }}
          >
            Explore Services
          </Button>
        </Box>
      </Box>

      {/* Subtitle - stays in normal flow */}
      <Typography
        sx={{
          fontFamily: 'PayPal Open',
          fontWeight: 400,
          fontSize: { xs: '16px', md: '18px' },
          letterSpacing: 0,
          color: '#000000',
          textAlign: { xs: 'center', md: 'left' },
          mb: { xs: 3, md: 4 },
          mt: { md: 0 }, // Ensure no top margin on desktop
          ml:{md:1}
        }}
      >
        Flexible Talent. Reliable Delivery. Scalable Results.
      </Typography>

      <Grid container spacing={{ xs: 6, md: 16 }} alignItems="center" ml={1}>
        {/* Left: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={teamgridImage}
            alt="Teamgrid"
            sx={{
              width: { xs: '100%', md: '690px' },
              height: { xs: 'auto', md: '522px' },
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Right: Bullet Points */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              width: { xs: '100%', md: '100%' },
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              mt: { md: 3 } // Add margin top only for bullet points container
            }}
          >
            {points.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between", // optional for spacing
                  minHeight: 80, // give height for alignment to make sense
                }}
              >
                {/* Icon */}
                <Box
                  component="img"
                  src={tickimg}
                  sx={{
                    width: 24,
                    height: 24,
                    mt: "4px",
                    mr: 3,
                    flexShrink: 0,
                  }}
                />

                {/* Texts aligned to bottom */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end", // aligns content at bottom
                    flex: 1, // fills remaining space
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'PayPal Open',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '120%',
                      color: '#05408E',
                      maxWidth: '410px',
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'PayPal Open',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: '#140E13',
                      maxWidth: '410px',
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyTeamgrid;