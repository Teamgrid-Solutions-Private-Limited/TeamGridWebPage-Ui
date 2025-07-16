import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  ButtonBase,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import team from "../../assets/teamm.svg";

const services = [
  {
    title: "Design-to-Code Conversion",
    subtitle:
      "Pixel-Perfect Front-End Development, Aligned with Your Designs and Deadlines",
    description:
      "We help web and digital agencies deliver high-quality user interfaces that are responsive, accessible, and fast. Whether you're building a simple landing page or a complex web app, our front-end developers work as an extension of your team to bring your vision to life.",
    shortDescription: "Pixel-perfect UI from Figma, Sketch, or PSD files.",
  },
  {
    title: "Responsive Web Design",
    subtitle: "Seamless User Experience Across All Devices",
    description:
      "Our responsive web design ensures that your interfaces look and perform flawlessly across mobile, tablet, and desktop. We prioritize user experience while adapting to different screen sizes and resolutions.",
    shortDescription: "Optimized layouts for mobile, tablet, and desktop.",
  },
  {
    title: "React Component Development",
    subtitle: "Reusable, Scalable, and Maintainable UI Building Blocks",
    description:
      "We specialize in building modular and testable React components tailored to your design system. Our components are designed for reusability and performance, enabling fast and scalable development.",
    shortDescription: "Reusable, scalable, and testable UI components.",
  },
  {
    title: "API-Driven Integration Service",
    subtitle: "Dynamic UI Powered by Seamless API Integrations",
    description:
      "We bring your UI to life by integrating real-time data using REST or GraphQL APIs. From authentication to data dashboards, we build robust front-end logic that interacts smoothly with your backend.",
    shortDescription: "Seamless UI integration with RESTful or headless APIs.",
  },
  {
    title: "Performance Optimisation",
    subtitle: "Lightning-Fast Interfaces that Keep Users Engaged",
    description:
      "We fine-tune your front-end code to deliver blazing-fast performance. This includes lazy loading, asset optimization, code splitting, and Lighthouse audits to ensure your users never wait.",
    shortDescription: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    subtitle: "Consistent Experience Across All Major Browsers",
    description:
      "We test and optimize your UI to ensure it works flawlessly on Chrome, Safari, Firefox, and Edge. Every interaction, layout, and component is verified for consistency and smooth performance.",
    shortDescription: "Consistent performance across Chrome, Safari, Firefox.",
  },
];

const WhatWeOffer = () => {
  const scrollRef = useRef();
  const [selected, setSelected] = useState(services[0]);

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const columns = [];
  for (let i = 0; i < services.length; i += 2) {
    columns.push(services.slice(i, i + 2));
  }

  return (
     <Box
      sx={{
        maxWidth: '1440px',
        width: '100%',
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        pl: { xs: 2, sm: 3, md: 6, lg: 10 },
        pt: { xs: 4, sm: 6, md: 10 },
        gap: { xs: 4, md: 6 },
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        position: 'relative' // Added for positioning arrows
      }}
    >
 
      {/* Left Content */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "480px" },
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "56px" },
            fontWeight: 500,
            mb: 2,
            color: "#140E13",
          }}
        >
          What We Offer
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px" },
            fontWeight: "500",
            mb: 2,
            color: "#000",
          }}
        >
          {selected.subtitle}
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
          {selected.description}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#05408E",
            borderRadius: "18px",
            fontWeight: "400",
            color: "#FAFAFA",
            textTransform: "none",
            height: "59px",
            width: { xs: "100%", sm: "fit-content", md: "246px" },
          }}
          endIcon={<ArrowForwardIcon sx={{ width: "12px" }} />}
        >
          Explore Services
        </Button>
      </Box>

      {/* Right Carousel */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          position: "relative",
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            pb: 2,
            pr: { xs: 2, md: 0 },
            width: "100%",
            ml: { xs: 0, md: 4 },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {columns.map((col, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              {col.map((service, i) => {
                const isSelected = selected.title === service.title;
                return (
                  <ButtonBase
                    key={i}
                    onClick={() => setSelected(service)}
                    sx={{ borderRadius: "20px" }}
                  >
                    <Card
                      sx={{
                        borderRadius: "24px",
                        backgroundColor: isSelected ? "#05408E" : "#F3F3F6",
                        color: isSelected ? "#fff" : "#000",
                        height: "242px",
                        width: "292px",
                        p: 2,
                        border: "none", // ✅ Removes border
                        boxShadow: "none",
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: isSelected ? "#1976F2" : "#E5EAF0",
                            borderRadius: "12px",
                            mb: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={team}
                            alt="Icon"
                            sx={{
                              height: "32px",
                              width: "32px",
                              filter: isSelected
                                ? "brightness(0) invert(1)"
                                : "none",
                            }}
                          />
                        </Box>

                        <Typography
                          fontWeight={500}
                          fontSize="20px"
                          align="left"
                          sx={{ color: isSelected ? "#FFFFFF" : "#05408E" }}
                          gutterBottom
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          fontWeight={400}
                          align="left"
                          fontSize="16px"
                          sx={{ color: isSelected ? "#EBF4FF" : "#3E393E" }}
                        >
                          {service.shortDescription}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ButtonBase>
                );
              })}
            </Box>
          ))}
        </Box>

        {/* Nav Buttons */}
        {!isSmall && (
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "flex-start",
              gap: 1,
              ml: 4,
            }}
          >
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#E3EBF2",
                color: "#374151",
              }}
            >
              <ArrowBack fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "#E3EBF2",
                color: "#374151",
              }}
            >
              <ArrowForward fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WhatWeOffer;
