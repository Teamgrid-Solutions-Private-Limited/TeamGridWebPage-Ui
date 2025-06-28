import React from "react";
import { Box, Typography, Button } from "@mui/material";
import womanLaptop from '../assets/Rectangle 41.png';
import teamDiscussion from '../assets/Rectangle 40.png';
import groupWork from '../assets/Rectangle 45.png';
import manWorking from '../assets/Rectangle 46.png';

const imageData = [
    { src: womanLaptop, alt: "Woman with laptop", bg: "#F1F8FF" },
    { src: teamDiscussion, alt: "Team discussion", bg: "#FFF6F0" },
    { src: groupWork, alt: "Group work", bg: "#F1F8FF" },
    { src: manWorking, alt: "Man working", bg: "#FFF6F0" }
];

const WhoWeHelp = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "flex-start",
                justifyContent: "space-between",
                px: { xs: 2, sm: 4, md: 3, lg: 10 },
                py: { xs: 6, md: 4 },
                bgcolor: "#fff",
                maxWidth: "xl",
                margin: "0 auto"
            }}
        >
            {/* Left Text Content */}
            <Box
                sx={{
                    flex: 1,
                    width: {
                        xs: '100%',
                        md: '486px'
                    },
                    pr: { md: 8, lg: 15 },
                    mb: { xs: 6, md: 0 },
                    mt: { xs: 0, md: 8, lg: 27 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: '24px', md: '32px' },
                    pl: { md: 1 }

                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'PayPal Open',
                        fontWeight: 500,
                        fontSize: {
                            xs: '32px',
                            sm: '40px',
                            md: '56px'
                        },
                        lineHeight: '100%',
                        color: '#140E13',
                        width: {
                            xs: '100%',
                            md: '359px'
                        },
                    }}
                    gutterBottom
                >
                    Who We Help
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'PayPal Open',
                        fontWeight: 400,
                        fontSize: {
                            xs: '16px',
                            md: '18px'
                        },
                        lineHeight: '150%',
                        color: '#000000',
                        width: {
                            xs: '100%',
                            md: '359px'
                        }
                    }}
                    gutterBottom
                >
                    A Trusted Partner for Growing Teams
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'PayPal Open',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '150%',
                        color: '#000000',
                        width: {
                            xs: '100%',
                            md: '486px'
                        }
                    }}
                >
                    We work with agencies, startups, and businesses of all sizes — helping them extend their capacity, speed up delivery, and stay focused on what matters most.
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        width: { xs: '100%', sm: '246px' },
                        height: '59px',
                        backgroundColor: '#05408E',
                        borderRadius: '39px',
                        px: '40px',
                        py: '16px',
                        textTransform: 'none',
                        fontWeight: 400,
                        fontSize: '18px',
                        fontFamily: 'PayPal Open',
                        lineHeight: '150%',
                        "&:hover": {
                            backgroundColor: "#003F9F",
                        },
                    }}
                >
                    Explore Services →
                </Button>
            </Box>

            {/* Right Image Grid - modified for scroll responsiveness */}
            <Box
                sx={{
                    flex: 1,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr ",
                        md: "repeat(2, 1fr)"
                    },
                    gap: { xs: 2, md: 3 },
                    mt: { xs: 4, md: 0 },
                    ml: { xs: 0, md: 4 }, // Reduced margin to avoid overflow
                    justifyItems: "center", // Better visual alignment
                    width: "100%"
                }}
            >

                {imageData.map((img, index) => {
                    const isLeftCol = index % 2 === 0;
                    const offset = isLeftCol ? { xs: "15px", md: "30px" } : "0px";

                    return (
                        <Box
                            key={index}
                            sx={{
                                width: "100%",
                                height: {
                                    xs: '40vw',
                                    sm: '300px',
                                    md: '325.12px'
                                },
                                maxWidth: '272.87px',
                                minWidth: '150px', // Minimum width before wrapping
                                borderRadius: '24px',
                                overflow: 'hidden',
                                transform: {
                                    md: isLeftCol ? 'translateY(30px)' : 'translateY(0px)'
                                },
                                transition: 'transform 0.3s ease',
                                '@media (max-width: 900px)': {
                                    height: '70vw'
                                }
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};
export default WhoWeHelp