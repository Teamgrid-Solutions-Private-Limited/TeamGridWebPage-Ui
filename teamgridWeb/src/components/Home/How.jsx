import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import rightarrow from "../../assets/rightt.png";
import rightdownward from "../../assets/rightdown.png";
import leftarrow from "../../assets/left.png";
import leftdownward from "../../assets/leftdown.png";

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
    number: "03",
    title: "Development",
    description:
      "We build responsive, pixel-perfect interfaces using React and modern CSS with clean, scalable code.",
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

const arrowIcons = [
  rightarrow,
  rightdownward,
  leftarrow,
  leftdownward,
  rightarrow,
];

const How = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F9FF", // light blue bg
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        borderRadius: "40px",
        width: "100%",
        maxWidth: "1280px",
        mx: "auto",
      }}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { xs: 28, md: 48 },
          mb: 1,
          textAlign: "center",
          color: "#000",
        }}
      >
        How We Work
      </Typography>
      <Typography
        sx={{
          mb: 6,
          color: "#000",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        Our front-end development process is built to deliver speed, <br />
        quality, and collaboration.
      </Typography>

      <Grid
        container
        spacing={4}
        rowSpacing={8}
        sx={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {index === 2 && <Grid item xs={12} />}

            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                ...(index === 2 && { ml: { md: 10 } }),
                ...(index === 3 && { ml: { md: -2 } }),
                ...(index === 4 && { ml: { md: -14 } }),
                ...(index === 5 && { ml: { md: -3 } }),
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "384px",
                  mx: { xs: "auto", md: "0" },
                }}
              >
                {/* Step Number */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20px",
                    left: "-20px",
                    width: "80px",
                    height: "80px",
                    borderRadius: "24px",
                    backgroundColor: "#003BA4", // deep blue
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  {step.number}
                </Box>

                {/* Card */}
                <Card
                  sx={{
                    backgroundColor: "#DFF2FF", // light card
                    borderRadius: "24px",
                    width: "100%",
                    height: "100%",
                    px: 3,
                    py: 2,
                    boxShadow: "none",
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      fontWeight={600}
                      fontSize="16px"
                      mb={1}
                      ml={5}
                      color="#003BA4"
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      fontWeight={400}
                      color="#000"
                      ml={5}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Arrows */}
            {index < steps.length - 1 && (
              <Grid
                item
                xs={12}
                md={0.6}
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "flex",
                    xl: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  ...(index === 3 && {
                    position: "relative",
                    top: "-180px",
                    ml: 3,
                  }),
                }}
              >
                <Box
                  component="img"
                  src={arrowIcons[index % arrowIcons.length]}
                  alt={`arrow-${index}`}
                  sx={{ width: "54px", height: "auto" }}
                />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default How;
