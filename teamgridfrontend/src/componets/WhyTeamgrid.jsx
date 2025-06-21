import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import teamgridImage from "../assets/Rectangle 51.png"; // replace with your image path

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
    desc: "NDA-backed, process-driven, and fully aligned with your brand.",
  },
  {
    title: "Seamless Collaboration",
    desc: "Slack, Trello, GitHub, or your tools — we work your way.",
  },
];

const WhyTeamgrid = () => {
  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 3}, bgcolor: "white" }}>
      <Grid container spacing={4}>
        {/* Left: Heading + Image */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{textAlign:'left', ml: 4}}>
            Why Teamgrid
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3, textAlign: 'left', ml: 4 }}>
            Flexible Talent. Reliable Delivery. Scalable Results.
          </Typography>
          <Box
            component="img"
            src={teamgridImage}
            alt="Teamgrid"
            sx={{
              width: "90%",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              mx: 7,
              mr: 4,
            }}
          />
        </Grid>

        {/* Right: Button + Bullet Points */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 3,
            }}
          >
            <Button
              variant="outlined"
              endIcon={<span style={{ fontSize: "18px" }}>→</span>}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 500,
                mb: 6,
              }}
            >
              Explore Services
            </Button>
          </Box>

          {points.map((item, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", mb: 2 ,mt:6, ml: 4 }}>
              <CheckCircleIcon sx={{ color: "#28C76F", mt: "3px", mr: 2 }} />
              <Box>
                <Typography fontWeight="bold" color="#05408E" fontSize="16px">
                  {item.title}
                </Typography>
                <Typography fontSize="14px" color="#140E13">
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyTeamgrid;
