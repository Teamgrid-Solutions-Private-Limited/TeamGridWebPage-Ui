import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

// Sample images — replace with your real ones
import img1 from "../../assets/web1.jpg";
import img2 from "../../assets/mob2.png";
import img3 from "../../assets/team3.png";
import img4 from "../../assets/ai4.png";
import img5 from "../../assets/ui5.jpg";
import img6 from "../../assets/ecom6.png";

// Card content
const services = [
  {
    title: "Web",
    highlight: "Development",
    description:
      "Custom websites, front-end, back-end, full-stack, and CMS-powered builds.",
    img: img1,
  },
  {
    title: "Mobile App",
    highlight: "Development",
    description:
      "Cross-platform mobile applications tailored for performance and usability.",
    img: img2,
  },
  {
    title: "Remote",
    highlight: "Team Support",
    description:
      "Skilled professionals to support your operations, digital projects, and workflows.",
    img: img3,
  },
  {
    title: "AI/ML/",
    highlight: "GenAI",
    description:
      "Empower your products with intelligent automation and insights using AI, Machine Learning, and Generative AI solutions.",
    img: img4,
  },
  {
    title: "UI/UX",
    highlight: "Design",
    description:
      "We create intuitive interfaces that align with user needs and business goals.",
    img: img5,
  },
  {
    title: "E-commerce",
    highlight: "Solutions",
    description:
      "Storefronts, secure payments, and smooth shopping experiences across all devices.",
    img: img6,
  },
];

const What = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        textAlign="center"
        sx={{ fontSize: "56px", fontWeight: 500, color: "#140E13" }}
        mb={2}
      >
        What We Do
      </Typography>
      <Typography
        sx={{ fontSize: "16px", fontWeight: 400, color: "#000000" }}
        mb={6}
      >
        We build AI-powered web and mobile apps with innovative design and
        scalable development. Our team delivers seamless UI/UX and solutions to
        help your business grow smarter and faster.
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundImage: `url(${service.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "384px",
                height: "484px",
                borderRadius: "24px",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                px: 3,
                py: 4,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Linear gradient overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 4,
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 40.62%, rgba(0, 0, 0, 0.78) 88.09%)",
                }}
              />

              {/* Content */}
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography sx={{ mb: 0.5, fontSize: "40px", fontWeight: 500 }}>
                  <Box
                    component="span"
                    sx={{ fontSize: "40px", fontWeight: 500 }}
                    color="#30ECAD"
                  >
                    {service.title}
                  </Box>{" "}
                  {service.highlight}
                </Typography>
                <Typography
                  sx={{
                    mb: 2,
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#E0DFE0",
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    fontSize: "18px",
                    fontWeight: 400,
                  }}
                >
                  Know more &nbsp; →
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center">
        <Button variant="contained" sx={{ borderRadius: "39px" , backgroundColor :"#05408E" , width:"246px" , height:"59px" , fontSize:"18px" , fontWeight:400, color:"#FAFAFA"}}>
          Explore Services &nbsp; →
        </Button>
      </Box>
    </Box>
  );
};

export default What;
