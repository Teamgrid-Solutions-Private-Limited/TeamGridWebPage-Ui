import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import CodeIcon from "@mui/icons-material/Code"; // Dummy icons

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
    desc: "Consistent rendering on Chrome, Safari, Firefox, etc.",
  },
];

const techStack = [
  "ReactJS",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Material UI",
  "Bootstrap",
  "Redux",
];

const WhatWeOfferAndTechStack = () => {
  return (
    <Box sx={{ px: 6, py: 10, background: "#fff", color: "#000" }}>
      {/* What We Offer Section */}
      <Grid container spacing={6} mb={10}>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" fontWeight={700} mb={2}>
            What We Offer
          </Typography>
          <Typography variant="body1" color={grey[700]} mb={3}>
            Pixel-Perfect Front-End Development, Aligned with Your Designs and Deadlines
          </Typography>
          <Typography variant="body2" color={grey[600]} mb={3}>
            We help web and digital agencies deliver high-quality user interfaces that are responsive, accessible, and fast.
          </Typography>
          <Button variant="contained" sx={{ borderRadius: 8 }}>
            Explore Services →
          </Button>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {offerings.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: item.highlight ? blue[900] : "#f8f9fa",
                    border: item.highlight ? "2px solid #30ECAD" : "none",
                    color: item.highlight ? "#fff" : "#000",
                    borderRadius: 4,
                  }}
                >
                  <CardContent>
                    <CodeIcon sx={{ mb: 1 }} />
                    <Typography variant="subtitle1" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Our Tech Stack Section */}
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundImage: `url(https://via.placeholder.com/400x400)`,
              backgroundSize: "cover",
              borderRadius: "20px",
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              p: 3,
              minHeight: 320,
              color: "#fff",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#ccc",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              We use <span style={{ color: "#30ECAD" }}>modern, scalable</span> front-end technologies
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Our Tech Stack
          </Typography>
          <Typography variant="body2" mb={3} color={grey[600]}>
            We use modern, scalable front-end technologies to build fast, responsive, and modular interfaces.
          </Typography>

          <Grid container spacing={2}>
            {techStack.map((tech, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <Box
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    textAlign: "center",
                    fontWeight: 600,
                    backgroundColor: "#fafafa",
                  }}
                >
                  {tech}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatWeOfferAndTechStack;
