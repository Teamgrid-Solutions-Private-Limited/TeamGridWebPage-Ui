import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import icon from "../assets/fluent_people-team-28-regular.svg";
import rightArrow from "../assets/ci_arrow-right-lg (1).svg";
import topIcon from "../assets/fluent_people-team-28-regular (1).svg";

const features = [
    {
        title: "Agency-Centric",
        desc: "Specifically designed to support digital and creative agencies with reliable, scalable front-end development services.",
        bgColor: "#FFF7C7",
        iconBg: "#FDE658",
    },
    {
        title: "Speed & Flexibility",
        desc: "Kickstart projects quickly and scale up or down as your client demands change — no overhead, just results.",
        bgColor: "#DADAFD",
        iconBg: "#EAEAFF",
    },
    {
        title: "UI-First Thinking",
        desc: "Our developers prioritize design fidelity with responsive, pixel-perfect implementations that bring your mockups to life flawlessly.",
        bgColor: "#E7FFD7",
        iconBg: "#CDF5B3",
    },
    {
        title: "NDA-Compliant",
        desc: "We work under strict non-disclosure agreements, ensuring full confidentiality while representing your brand seamlessly.",
        bgColor: "#FFEFFC",
        iconBg: "#FFDDF9",
    },
    {
        title: "Seamless Integration",
        desc: "We collaborate smoothly with your in-house designers, backend developers, and project managers.",
        bgColor: "#ECF9FF",
        iconBg: "#CBEFFF",
    },
];

const WhyPartnerWithUs = () => {
    return (
        <Box
            sx={{
                maxWidth: "1440px",
                mx: "auto",
                px: { xs: 2, sm: 4, md: 8, lg: 9.5 },
                py: { xs: 4, sm: 6, md: 8, lg: 10 },
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: { xs: "column", md: "row" },
                    mb: { xs: 3, md: 6 },
                    gap: { xs: 3, md: 0 },
                }}
            >
                <Typography
                    sx={{
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: "28px", sm: "32px", md: "40px", lg: "48px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        color: "#000000",
                    }}
                >
                    Why Partner With Us
                </Typography>

                <Button
                    variant="outlined"
                    sx={{
                        width: { xs: "100%", sm: "246px" },
                        height: { xs: "48px", md: "59px" },
                        padding: { xs: "12px 24px", md: "16px 40px" },
                        borderRadius: "16px",
                        borderWidth: "1px",
                        borderColor: "#CACACA",
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: "16px", md: "18px" },
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        textTransform: "none",
                        color: "#140E13",
                        "&:hover": {
                            backgroundColor: "#f4f4f4",
                            borderColor: "#CACACA",
                        },
                    }}
                >
                    Explore Services
                    <Box
                        component="img"
                        src={rightArrow}
                        alt="Right Arrow"
                        sx={{
                            width: "16px",
                            height: "16px",
                            ml: 1
                        }}
                    />
                </Button>
            </Box>

            {/* Features Grid - Desktop */}
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                sx={{ 
                    display: { xs: "none", md: "flex" },
                    ml: { md: 0.5 }
                }}
            >
                {features.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            sx={{
                                height: { md: "242px", lg: "260px" },
                                width: "100%",
                                maxWidth: { md: "380px", lg: "410px" },
                                borderRadius: "24px",
                                bgcolor: item.bgColor,
                                p: "24px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                boxSizing: "border-box",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "14px",
                                    backgroundColor: item.iconBg,
                                    padding: "16px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    mb: 0,
                                }}
                            >
                                <img 
                                    src={topIcon} 
                                    alt="icon" 
                                    style={{ width: "32px", height: "32px" }} 
                                />
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: '"PayPal Open", sans-serif',
                                    fontWeight: 500,
                                    fontSize: { md: "18px", lg: "20px" },
                                    lineHeight: "120%",
                                    color: "#05408E",
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    width: "100%",
                                    fontFamily: '"PayPal Open", sans-serif',
                                    fontWeight: 400,
                                    fontSize: { md: "15px", lg: "16px" },
                                    lineHeight: "150%",
                                    color: "#140E13",
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Features Carousel - Mobile */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    gap: "16px",
                    overflowX: "auto",
                    pb: 2,
                    scrollbarWidth: "none", // Hide scrollbar for Firefox
                    "&::-webkit-scrollbar": { // Hide scrollbar for Chrome/Safari
                        display: "none",
                    },
                    "-ms-overflow-style": "none", // Hide scrollbar for IE/Edge
                }}
            >
                {features.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: "280px",
                            height: "280px",
                            borderRadius: "24px",
                            bgcolor: item.bgColor,
                            p: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            boxSizing: "border-box",
                        }}
                    >
                        <Box
                            sx={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                backgroundColor: item.iconBg,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img 
                                src={topIcon} 
                                alt="icon" 
                                style={{ width: "24px", height: "24px" }} 
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: "#05408E",
                                fontFamily: '"PayPal Open", sans-serif',
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"PayPal Open", sans-serif',
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "150%",
                                color: "#140E13",
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default WhyPartnerWithUs;