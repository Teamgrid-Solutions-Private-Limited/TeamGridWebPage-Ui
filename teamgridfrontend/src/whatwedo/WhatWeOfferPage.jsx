import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code"; // replace with actual icons

const offerings = [
  {
    title: "Design-to-Code Conversion",
    desc: "Pixel-perfect UI from Figma, Sketch, or PSD files.",
    highlight: true,
  },
  {
    title: "Responsive Web Design",
    desc: "Optimized layouts for mobile, tablet, and desktop.",
  },
  {
    title: "React Component Development",
    desc: "Reusable components using modern frameworks.",
  },
  {
    title: "API-Driven Integration Service",
    desc: "Seamless UI integration with RESTful or headless APIs.",
  },
  {
    title: "Performance Optimisation",
    desc: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    desc: "Consistent rendering across Chrome, Safari, Firefox.",
  },
];

const WhatWeOfferSection = () => {
  const theme = useTheme();

  return (
  <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    px: 6,
    py: 10,
    gap: 6,
    alignItems: "flex-start", // keep top aligned
    flexWrap: "nowrap",       // prevent wrapping below
  }}
>
  {/* LEFT BOX */}
  <Box
    sx={{
      width: "588px",
      minHeight: "360px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        What We Offer
      </Typography>
      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        Pixel-Perfect Front-End Development, Aligned with Your Designs and Deadlines
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        We help web and digital agencies deliver high-quality user interfaces that are responsive, accessible, and fast. Whether you're building a simple landing page or a complex web app, our front-end developers work as an extension of your team to bring your vision to life.
      </Typography>
    </Box>

    <Button
      variant="contained"
      sx={{
        width: "fit-content",
        px: 4,
        py: 1.5,
        borderRadius: "999px",
        textTransform: "none",
        fontWeight: 600,
        backgroundColor: "#003087",
        "&:hover": {
          backgroundColor: "#00246B",
        },
      }}
    >
      Explore Services →
    </Button>
  </Box>

  {/* RIGHT SCROLLABLE OFFERINGS */}
  <Box
    sx={{
      flexGrow: 1,
      maxHeight: "360px", // match left box height or adjust
      overflowY: "auto",
      pr: 1, // scroll gutter space
    }}
  >
    <Grid container spacing={2} sx={{ width: "max-content" }}>
      {offerings.map((item, index) => (
        <Grid item key={index}>
          <Card
            sx={{
              width: "282px",
              minHeight: "242px",
              bgcolor: item.highlight ? "#003087" : "#F5F7FA",
              color: item.highlight ? "#fff" : "#000",
              borderRadius: 3,
              boxShadow: "none",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
              },
            }}
          >
            <CardContent>
              <CodeIcon
                sx={{
                  mb: 1,
                  fontSize: "28px",
                  color: item.highlight ? "#fff" : "#003087",
                }}
              />
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography variant="body2">{item.desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>

  );
};

export default WhatWeOfferSection;
