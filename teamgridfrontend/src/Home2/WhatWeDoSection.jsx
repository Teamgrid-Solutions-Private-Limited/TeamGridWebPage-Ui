import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import firstImg from "../assets/17dd44cdbeefb13b97addfd691610500cc5e4055.jpg";
import secImg from "../assets/91cc290445aa0bb9443e8223fe5f969c04e464d9.png";
import thrImg from "../assets/8764d9b596caf94331258cf0923bb303d195383e.png";
import fourImg from "../assets/03c3fbaad4a4d46c735c4d10e07a37f498d7a832.png";
import fiveImg from "../assets/410715d61f22e3219c09bcbfff492d680badc326.png";
import sixImg from "../assets/49f69719869cf43d39628565ba60f2819238a5a5.jpg";

const services = [
    {
        title: ["Web", "Development"],
        color: "#00D084",
        description: "Custom websites, front-end, back-end, full-stack, and CMS-powered builds.",
        image: firstImg,
    },
    {
        title: ["Mobile App", "Development"],
        color: "#00D084",
        description: "Cross-platform mobile applications tailored for performance and usability.",
        image: secImg,
    },
    {
        title: ["Remote", "Team Support"],
        color: "#00D084",
        description: "Skilled professionals to support your operations, digital projects, and workflows.",
        image: thrImg,
    },
    {
        title: ["AI/ML/", "GenAI"],
        color: "#00D084",
        description: "Empower your products with intelligent automation using AI and GenAI.",
        image: fourImg,
    },
    {
        title: ["UI/UX ", "Design"],
        color: "#00D084",
        description: "We create intuitive interfaces that align with user needs and business goals.",
        image: fiveImg,
    },
    {
        title: ["E-commerce", "Solutions"],
        color: "#00D084",
        description: "Storefronts, secure payments, and smooth shopping experiences across devices.",
        image: sixImg,
    },
];

const WhatWeDoSection = () => {
    return (
        <Box sx={{ px: { xs: 2, sm: 4, md: 10, lg: 5, xl: 0 }, py: { xs: 6, md: 6 }, textAlign: "center",  maxWidth: "1456px",
                mx: "auto", }}>
            {/* Title */}
          <Box
  sx={{
    width: { xs: '100%', sm: '90%', md: 790 },
    height: { xs: 'auto', sm: 113 },
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2, sm: 4, md: "32px" },
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    mx: "auto",
    mb: { xs: 4, sm: 8 },
    px: { xs: 2, sm: 0 } // Add horizontal padding on small screens
  }}
>
  <Typography
    sx={{
      width: { xs: '100%', sm: 325 },
      height: { xs: 'auto', sm: 40 },
      fontFamily: `"PayPal Open", sans-serif`,
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: { xs: "32px", sm: "40px", md: "56px" },
      lineHeight: "100%",
      letterSpacing: 0,
      color: "#140E13",
      opacity: 1,
      textAlign: { xs: 'center', sm: 'left' }
    }}
  >
    What We Do
  </Typography>

  <Typography
    sx={{
      width: { xs: '100%', sm: '90%', md: 790 },
      height: { xs: 'auto', sm: 41 },
      fontFamily: `"PayPal Open", sans-serif`,
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: { xs: "14px", sm: "16px" },
      lineHeight: "170%",
      letterSpacing: 0,
      textAlign: "center",
      color: "#000000",
      opacity: 1,
      px: { xs: 1, sm: 0 } ,// Add some padding on small screens
      mb:{xs:3}
    }}
  >
    We build AI-powered web and mobile apps with innovative design and scalable development.
    Our team delivers seamless UI/UX and solutions to help your business grow smarter and faster.
  </Typography>
</Box>


            {/* Grid */}
            <Grid container spacing={{ xs: 4 }} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item key={index}
                        sx={{
                            width: {
                                xs: '100%', // full width on mobile
                                sm: '80%',  // slightly smaller on small screens
                                md: '45%',  // two per row on md
                                lg: '30%',  // three per row on lg+
                                xl: '28%'
                            },
                            maxWidth: 410,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: {
                                    xs: 340,
                                    sm: 400,
                                    md: 440,
                                    lg: 484,
                                },
                                borderRadius: { xs: '16px', md: '24px' },
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                boxShadow: 3,
                                mb: { xs: 3, md: 0 },
                            }}
                        >
                            {/* Image */}
                            <Box
                                component="img"
                                src={service.image}
                                alt={`${service.title.join(" ")} image`}
                                sx={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    top: 0,
                                    left: 0,
                                }}
                            />
                            {/* Overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
                                }}
                            />
                            {/* Content */}
                            <Box
                                sx={{
                                    position: "relative",
                                    zIndex: 1,
                                    color: "#fff",
                                    p: { xs: "20px 12px", sm: "28px 18px", md: "32px 24px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    textAlign: "left",
                                }}
                            >
                                <Typography
                                    sx={{
                                        width: "100%",
                                        fontFamily: `"PayPal Open", sans-serif`,
                                        fontWeight: 500,
                                        fontStyle: "normal", // Medium not needed, handled by fontWeight
                                        fontSize: "40px",
                                        lineHeight: "100%",
                                        letterSpacing: 0,
                                        color: "#fff",
                                    }}
                                >
                                    {service.title[0] === "AI/ML/" && service.title[1] === "GenAI" ? (
                                        <>
                                            <Box component="span" sx={{ color: "#fff" }}>{service.title[0]}</Box>
                                            <Box component="span" sx={{ color: "#30ECAD" }}>{service.title[1]}</Box>
                                        </>
                                    ) : service.title[0] === "UI/UX " && service.title[1] === "Design" ? (
                                        <>
                                            <Box component="span" sx={{ color: "#fff" }}>{service.title[0]}</Box>
                                            <Box component="span" sx={{ color: "#30ECAD" }}>{service.title[1]}</Box>
                                        </>
                                    ) : service.title[0] === "Remote" && service.title[1] === "Team Support" ? (
                                        <>
                                            <Box component="span" sx={{ color: "#fff" }}>{service.title[0]}</Box>
                                            <br />
                                            <Box component="span" sx={{ color: service.color }}>{service.title[1]}</Box>
                                        </>
                                    ) : (
                                        service.title.map((part, idx) => (
                                            <React.Fragment key={idx}>
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        color: idx === 0 ? service.color : "#fff",
                                                    }}
                                                >
                                                    {part}
                                                </Box>
                                                {idx < service.title.length - 1 && <br />}
                                            </React.Fragment>
                                        ))
                                    )}
                                </Typography>

                                <Typography
                                    sx={{
                                        width: 336,
                                        height: 48,
                                        fontFamily: `"PayPal Open", sans-serif`,
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "16px",
                                        lineHeight: "150%",
                                        letterSpacing: "0%",
                                        color: "#E0DFE0",
                                    }}
                                >
                                    {service.description}
                                </Typography>
                                <Box
                                    sx={{
                                        mt: 1,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "20px",
                                        opacity: 1,
                                    }}
                                >
                                    <Button
                                        endIcon={<span style={{ fontSize: "1.2rem", color: "#ffffff" }}>→</span>}
                                        sx={{
                                            height: 27,
                                            fontFamily: `"PayPal Open", sans-serif`,
                                            fontWeight: 400,
                                            fontStyle: "normal",
                                            fontSize: "18px",
                                            lineHeight: "150%",
                                            letterSpacing: "0%",
                                            color: "#ffffff",
                                            textTransform: "none",
                                            px: 0,
                                            minWidth: "unset",
                                            '&:hover': {
                                                backgroundColor: "transparent",
                                                textDecoration: "underline",
                                            },
                                        }}
                                    >
                                        Know more
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WhatWeDoSection;
