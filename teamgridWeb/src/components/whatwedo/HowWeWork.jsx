import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const steps = [
  {
    number: "01",
    title: "Discovery & Requirements",
    description:
      "We define goals, user types, and key screens to ensure alignment before design or development begins.",
  },
  {
    number: "02",
    title: "Design Handoff & Planning",
    description:
      "We review design files, clarify edge cases, and outline technical scope for smooth project execution.",
  },
  {
    number: "04",
    title: "API Integration",
    description:
      "We connect front-end with backend or CMS APIs to handle real-time data and error states reliably.",
  },
  {
    number: "05",
    title: "QA & Testing",
    description:
      "We test on all screen sizes, ensure WCAG compliance, and validate performance across major browsers.",
  },
  {
    number: "06",
    title: "Deployment or Handover",
    description:
      "We deliver clean, version-controlled code or coordinate handoff to backend teams for integration.",
  },
];

const HowWeWork = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003057",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        color: "#fff",
        borderRadius: "40px",
      }}
    >
      <Typography 
        variant="h4" 
        fontWeight={600} 
        sx={{ 
          fontSize: { xs: 28, md: 40 }, 
          mb: 1,
          textAlign: "center" 
        }}
      >
        How We Work
      </Typography>
      <Typography 
        sx={{ 
          mb: 6, 
          color: "#C5D7E5",
          textAlign: "center" 
        }}
      >
        Our front-end development process is built to deliver speed, quality, and collaboration.
      </Typography>

      <Grid 
        container 
        spacing={4} 
        sx={{
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={2.4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#C2F2DA",
                    color: "#003057",
                    fontWeight: 600,
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.number}
                </Box>
                <Card
                  sx={{
                    backgroundColor: "#0073FF",
                    color: "#fff",
                    borderRadius: "16px",
                    width: "100%",
                    minHeight: "160px",
                  }}
                >
                  <CardContent>
                    <Typography fontWeight={600} fontSize="16px" mb={1}>
                      {step.title}
                    </Typography>
                    <Typography fontSize="14px">{step.description}</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            
            {index < steps.length - 1 && (
              <Grid item xs={12} md={0.6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowForwardIcon 
                  sx={{ 
                    color: "#fff", 
                    fontSize: "40px",
                    display: { xs: "none", md: "block" } 
                  }} 
                />
                <ArrowDownwardIcon 
                  sx={{ 
                    color: "#fff", 
                    fontSize: "40px",
                    display: { xs: "block", md: "none" } 
                  }} 
                />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeWork;