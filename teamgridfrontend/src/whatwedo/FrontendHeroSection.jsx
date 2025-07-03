import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import wordpressIcon from "../assets/Frame 254.png";
import reactIcon from "../assets/Frame 253.png";
import figmaIcon from "../assets/Frame 161.png";
import { keyframes } from "@emotion/react"; // Needed for MUI animations

const FrontendHeroSection = () => {
    // Orbit style definitions

    const rotateClockwise = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

    const rotateCounterClockwise = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
`;

    const orbitStyles = [
        {
            width: 586,
            height: 586,
            icon: reactIcon,
            duration: "28s",
            direction: "clockwise",
        },
        {
            width: 1020,
            height: 1020,
            icon: figmaIcon,
            duration: "34s",
            direction: "counter",
        },
        {
            width: 1465,
            height: 1465,
            icon: wordpressIcon,
            duration: "48s",
            direction: "clockwise",
        },
    ];

    // Rotation animation keyframes
    const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

    return (
        <Box
            sx={{
                background: "#072449",
                color: "#FFFFFF",
                px: { xs: 2, md: 8 },
                py: { xs: 6, md: 10 },
                position: "relative",
                overflow: "hidden",
                maxHeight: "625px",
                height: "625px",
                maxWidth: { xs: '100%', md: '1800px' },
                width: '100%',
                margin: '0 auto',
            }}
        >
            {/* Hero Content */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: "690px",
                            height: "366px",
                            position: "relative",
                            top: "80px",
                            left: "58px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "24px",
                            zIndex: 2
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "PayPal Open, sans-serif",
                                fontWeight: 700,
                                fontSize: "56px",
                                lineHeight: "56px",
                            }}
                        >
                            Front-End Development for{" "}
                            <Box component="span" sx={{ color: "#30ECAD" }}>
                                Fast & Scalable
                            </Box>{" "}
                            Interfaces
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "PayPal Open, sans-serif",
                                fontWeight: 300,
                                fontSize: "20px",
                                lineHeight: "30px",
                                color: "#E1E0E0",
                            }}
                        >
                            Hire expert front-end developers skilled in ReactJS, Material UI,
                            and modern frameworks. Ideal for agencies looking to scale delivery
                            without growing overhead.
                        </Typography>

                        <Box sx={{ display: "flex", gap: "15px", width: "468px", height: "59px" }}>
                            <Button
                                sx={{
                                    color: "#fff",
                                    px: 4,
                                    py: 2,
                                    borderRadius: "16px",
                                    textTransform: "none",
                                    fontFamily: "PayPal Open",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    border: "1px solid #FFFFFF45",
                                    lineHeight: "150%",
                                    "&:hover": { backgroundColor: "#0070FF" },
                                    height: "59px",
                                    minWidth: "200px",
                                }}
                            >
                                Hire Developers
                            </Button>

                            <Button
                                sx={{
                                    color: "#fff",
                                    borderColor: "#4D5BCE",
                                    border: "1px solid #FFFFFF45",
                                    px: 4,
                                    py: 2,
                                    borderRadius: "16px",
                                    textTransform: "none",
                                    fontFamily: "PayPal Open",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "150%",
                                    height: "59px",
                                    minWidth: "254px",
                                    "&:hover": {
                                        backgroundColor: "#0070FF",
                                        borderColor: "#FFFFFF45",
                                    },
                                }}
                                endIcon={<span style={{ fontSize: "1.2rem" }}>→</span>}
                            >
                                Get a Free Estimate
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* Right-side Orbits with Icons */}
                {orbitStyles.map((style, i) => (
                    <Box
                        key={`orbit-${i}`}
                        sx={{
                            position: "absolute",
                            width: `${style.width}px`,
                            height: `${style.height}px`,
                            top: "102%",
                            left: "92%",
                            transform: `translate(-50%, -50%)`,
                            borderRadius: "50%",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            pointerEvents: "none",
                            zIndex: 1,
                        }}
                    >
                        {/* Rotating Container */}
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                animation: `${style.direction === "counter" ? rotateCounterClockwise : rotateClockwise} ${style.duration} linear infinite`,
                            }}
                        >
                            {/* Icon Wrapper */}
                            <Box
                                sx={{
                                    width: "163px",
                                    height: "186px",
                                    position: "absolute",
                                    top: "50%",
                                    left: "100%",
                                    transform: "translate(-50%, -50%)  rotate(-180deg)",

                                }}
                            >
                                <Box
                                    component="img"
                                    src={style.icon}
                                    alt={`orbit-icon-${i}`}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                ))}


            </Grid>
        </Box>
    );
};

export default FrontendHeroSection;
