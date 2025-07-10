import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import leftarrow from "../../assets/left.png";
import rightarrow from "../../assets/right.png";
import rightdownward from "../../assets/rightdownward.png";
import leftdownward from "../../assets/leftdownward.png";

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
    number: "03",
    title: "Development",
    description:
      "We build responsive, pixel-perfect interfaces using React and modern CSS with clean, scalable code.",
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

const HowWeWork = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0B3C7B",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        color: "#fff",
        borderRadius: "40px",
        width: "100%",
        maxWidth: { md: "100%", lg: "1260px", xl: "1285px" }, // responsive max width
        height: "auto",
        mx: "auto", // center horizontally
      }}
    >
      <Typography
        fontWeight={500}
        sx={{
          fontSize: { xs: 28, md: 56 },
          mb: 1,
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        How We Work
      </Typography>
      <Typography
        sx={{
          mb: 6,
          color: "#B2D2FC",
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
                  height: "auto",
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
                    backgroundColor: "#30ECAD",
                    color: "#089767",
                    fontWeight: 300,
                    fontSize: "40px",
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
                    backgroundColor: "#005DD5",
                    color: "#fff",
                    borderRadius: "24px",
                    width: "100%",
                    height: "100%",
                    px: 3,
                    py: 2,
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Typography fontWeight={500} fontSize="20px" mb={1} ml={5}>
                      {step.title}
                    </Typography>
                    <Typography
                      fontSize="16px"
                      fontWeight={400}
                      sx={{ color: "#B2D2FC", ml: 5 }}
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            {/* Arrows – Hidden on xs & sm */}
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
                  sx={{
                    width: "54px",
                    height: "auto",
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
