import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import wordpressIcon from "../assets/Frame 254.svg";
import reactIcon from "../assets/Frame 253.svg";
import figmaIcon from "../assets/Group 119.svg";

const FrontendHeroSection = () => {
    const orbitStyles = [
        {
            width: 586,
            height: 586,
            icon: figmaIcon,
            duration: "28s",
            direction: "clockwise",
        },
        {
            width: 1050,
            height: 1050,
            icon: reactIcon,
            duration: "34s",
            direction: "counter",
        },
        {
            width: 1490,
            height: 1490,
            icon: wordpressIcon,
            duration: "48s",
            direction: "clockwise",
        },
    ];

    return (
        <Box
            sx={{
                background: "#072449",
                color: "#FFFFFF",
                px: 0, // Remove horizontal padding from background
                py: { xs: 6, sm: 8, md: 10, lg: 12 },
                position: "relative",
                overflow: "hidden",
                maxHeight: { xs: 'auto', md: 625 },
                height: { xs: 'auto', md: 625 },
                width: '100%',
                margin: '0 auto',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1440px',
                    width: '100%',
                    margin: '0 auto',
                    px: { xs: 1, sm: 3, md: 4, lg: 7 },
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                width: { xs: '100%', sm: 400, md: 690 },
                                minHeight: { xs: 'auto', md: 366 },
                                position: "relative",
                                top: { xs: 30, md: "70px" },
                                left: { xs: 0, md: "15px" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: { xs: 2, md: 3 },
                                zIndex: 2,
                                m:{xs:1}
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "PayPal Open, sans-serif",
                                    fontWeight: 700,
                                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem', lg: '56px' },
                                    lineHeight: { xs: '110%', md: '56px' },
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
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '20px' },
                                    lineHeight: { xs: '150%', md: '30px' },
                                    color: "#E1E0E0",
                                }}
                            >
                                Hire expert front-end developers skilled in ReactJS, Material UI,
                                and modern frameworks. Ideal for agencies looking to scale delivery
                                without growing overhead.
                            </Typography>

                            <Box sx={{
                                display: "flex",
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: 2, sm: 2, md: 3 },
                                width: { xs: '90%', sm: 350, md: 468 },
                                height: { xs: 'auto', md: 59 },
                                position: 'relative',
                                zIndex: 30
                            }}>
                                <Button
                                    sx={{
                                        color: "#fff",
                                        px: {xs:2,sm:2,md:2,lg:4},
                                        py: 2,
                                        borderRadius: "36px",
                                        textTransform: "none",
                                        fontFamily: "PayPal Open",
                                        fontWeight: 400,
                                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '18px' },
                                        border: "1px solid #FFFFFF45",
                                        lineHeight: "150%",
                                      backgroundColor: "#0070FF" ,
                                        height: { xs: 48, md: 59 },
                                        minWidth: { xs: 10, sm:180,md: 200,lg:200 },
                                    }}
                                >
                                    Hire Developers
                                </Button>

                                <Button
                                    sx={{
                                        color: "#fff",
                                        borderColor: "#4D5BCE",
                                        border: "1px solid #FFFFFF45",
                                        px: {sm:2,md:2,lg:4},
                                        py: 2,
                                        borderRadius: "36px",
                                        textTransform: "none",
                                        fontFamily: "PayPal Open",
                                        fontWeight: 400,
                                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem', lg: '18px' },
                                        lineHeight: "150%",
                                        height: { xs: 48, md: 59 },
                                        minWidth: { xs: 140,sm:260,md: 254 },
                                        bgcolor: "#072449",
                                        "&:hover": {
                                            // backgroundColor: "#0070FF",
                                            borderColor: "#FFFFFF45",
                                        },
                                        zIndex: 30,
                                        position: 'relative',
                                    }}
                                    endIcon={<span style={{ fontSize: "1.2rem" }}>→</span>}
                                >
                                    Get a Free Estimate
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Orbits + Icons + Dots */}
                    {orbitStyles.map((style, i) => {
                        const radius = style.width / 2;
                        let angleRad;
                        if (i === 0 || i === 1) {
                            angleRad = 65 * Math.PI / 180;
                        } else if (i === 2) {
                            angleRad = 13 * Math.PI / 180;
                        } else {
                            angleRad = Math.PI / 4;
                        }
                        const x = radius * Math.cos(angleRad);
                        const y = radius * Math.sin(angleRad);

                        return (
                            <Box
                                key={`orbit-${i}`}
                                sx={{
                                    position: "absolute",
                                    width: `${style.width}px`,
                                    height: `${style.height}px`,
                                    top: "105%",
                                    left: "93%",
                                    transform: `translate(-50%, -50%)`,
                                    borderRadius: "50%",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                }}
                            >
                                {/* Orbiting Icon */}
                                <Box
                                    sx={{
                                        width: "208px",
                                        height: "208px",
                                        position: "absolute",
                                        left: `calc(50% - ${x}px)`,
                                        top: `calc(50% - ${y}px)`,
                                        transform: "translate(-50%, -50%)",
                                        zIndex: 1,
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

                                {/* Orbit Dots */}
                                {i === 0 && (() => {
                                    const dotAngle = 105 * Math.PI / 180;
                                    const dotX = radius * Math.cos(dotAngle);
                                    const dotY = radius * Math.sin(dotAngle);
                                    return (
                                        <Box
                                            key={`dot-${i}-0`}
                                            sx={{
                                                position: "absolute",
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "50%",
                                                backgroundColor: "#B2D2FC",
                                                left: `calc(50% - ${dotX}px)`,
                                                top: `calc(50% - ${dotY}px)` ,
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        />
                                    );
                                })()}
                                {i === 1 && [
                                    { angle: Math.PI / 2 }, // 90deg (right)
                                    { angle: 35 * Math.PI / 180 } // 35deg (slightly north-east)
                                ].map((dot, dotIdx) => {
                                    const dotX = radius * Math.cos(dot.angle);
                                    const dotY = radius * Math.sin(dot.angle);
                                    return (
                                        <Box
                                            key={`dot-${i}-${dotIdx}`}
                                            sx={{
                                                position: "absolute",
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "50%",
                                                backgroundColor: "#B2D2FC",
                                                left: `calc(50% - ${dotX}px)`,
                                                top: `calc(50% - ${dotY}px)`,
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        />
                                    );
                                })}
                                {i === 2 && (() => {
                                    const dotAngle = Math.PI / 4; // 45deg
                                    const dotX = radius * Math.cos(dotAngle);
                                    const dotY = radius * Math.sin(dotAngle);
                                    return (
                                        <Box
                                            key={`dot-${i}-0`}
                                            sx={{
                                                position: "absolute",
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "50%",
                                                backgroundColor: "#B2D2FC",
                                                left: `calc(50% - ${dotX}px)`,
                                                top: `calc(50% - ${dotY}px)` ,
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        />
                                    );
                                })()}
                            </Box>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default FrontendHeroSection;
