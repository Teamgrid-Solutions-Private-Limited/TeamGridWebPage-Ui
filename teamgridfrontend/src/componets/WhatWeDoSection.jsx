import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ecommerceImageBottom from "../assets/Funiro Landing Page 3.png";
import ecommerceImageTop from "../assets/Funiro Landing Page 4.png";
import { useState } from "react";
const tabItems = [
    {
        title: "E-commerce",
        subtitle: "Sell smarter online",
    },
    {
        title: "Web Development",
        subtitle: "Fast. Clean. Scalable.",
    },
    {
        title: "UI / UX",
        subtitle: "Design with purpose",
    },
    {
        title: "Mobile App Development",
        subtitle: "Apps that perform",
    },
    {
        title: "Dedicated Teams",
        subtitle: "Scale your squad",
    },
    {
        title: "AI / ML / GenAI",
        subtitle: "Smart tech & real results",
    },
];



const WhatWeDoSection = () => {
    const [activeTab, setActiveTab] = useState(0); // <-- Add this

    return (
        <Box sx={{ width: "100%", py: { xs: 6, md: 4 } }}>
            <Box sx={{ maxWidth: "1440px", mx: "auto", px: { xs: 2, md: 3 } }}>
                {/* Header Text */}
                <Typography variant="h4" fontWeight="bold" gutterBottom
                    sx={{ textAlign: "left", mb: 2 }}>
                    What We Do
                </Typography>
                <Typography variant="body1" color="text.secondary"
                    sx={{ textAlign: "left", mb: 4 }}>
                    We build AI-powered web and mobile apps with innovative design and scalable development.
                    Our team delivers seamless UI/UX and solutions to help your business grow smarter and faster.
                </Typography>
            </Box>

            {/* Main Section */}
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: "#E1ECF9",
                    borderRadius: 4,
                    px: { xs: 3, md: 6 },
                    pt: { xs: 5, md: 8 },
                    pb: { xs: 12, md: 14 }, // Extra bottom padding to give space for tabs
                    mt: 4,
                    mx:9,
                    overflow: "hidden",
                }}
            >
                {/* Left Content */}
                <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        E-commerce
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        We design and develop high-performing e-commerce platforms tailored to your brand.
                        From storefront to checkout, we build seamless, scalable, and conversion-focused
                        experiences that drive sales and customer loyalty.
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            px: 3,
                            py: 1.5,
                            borderRadius: "999px",
                            textTransform: "none",
                            mb: 3,
                        }}
                    >
                        Explore Our Portfolio →
                    </Button>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button
                            sx={{
                                minWidth: 50,
                                height: 50,
                                borderRadius: "50%",
                                bgcolor: "white",
                                boxShadow: 1,
                            }}
                        >
                            ←
                        </Button>
                        <Button
                            sx={{
                                minWidth: 50,
                                height: 50,
                                borderRadius: "50%",
                                bgcolor: "white",
                                boxShadow: 1,
                            }}
                        >
                            →
                        </Button>
                    </Box>
                </Box>

                {/* Right Images with Overlap */}
                <Box sx={{ flex: 1, position: "relative", minHeight: { xs: 320, md: 420 } }}>
                    {/* Bottom Image */}
                    <Box
                        component="img"
                        src={ecommerceImageBottom}
                        alt="Bottom E-commerce"
                        sx={{
                            position: "absolute",
                            width: { xs: "80%", md: "65%" },
                            height: "120%",
                            objectFit: "cover",
                            borderRadius: "12px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                            top: { xs: "10%", md: "-60px" },
                            right: { xs: "10%", md: "10px" },
                        }}
                    />

                    {/* Top Image */}
                    <Box
                        component="img"
                        src={ecommerceImageTop}
                        alt="Top E-commerce Overlay"
                        sx={{
                            position: "absolute",
                            top: { xs: "10%", md: "5%" },
                            left: { xs: "10%", md: "1%" },
                            width: { xs: "80%", md: "65%" },
                            borderRadius: "12px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                            height: "121%",
                            zIndex: 1,
                        }}
                    />
                </Box>

                {/* Floating Tabs Box */}
                {/* Inline Tabs (Floating Box Style) */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 20,
                        left: 0,
                        right: 0,
                        mx: "auto",
                        maxWidth: "calc(100% - 35px)",
                        bgcolor: "white",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                        display: "flex",
                        flexWrap: "nowrap",
                        overflowX: "auto",
                        // px: 1.,
                        py: 1,
                        pl: 1,
                        zIndex: 2,
                        scrollbarWidth: "none", // Firefox
                        "&::-webkit-scrollbar": {
                            display: "none", // Chrome, Safari
                        },
                    }}

                >

                    {tabItems.map((item, index) => {
                        const isActive = index === activeTab; // <-- Compare with state
                        return (
                            <Box
                                key={item.title}
                                onClick={() => setActiveTab(index)} // <-- Set active on click
                                sx={{
                                    cursor: "pointer", // <-- Indicate clickability
                                    px: 1,
                                    py: 2.5,
                                    textAlign: "left",
                                    minWidth: 221,
                                    borderRight:
                                        index !== tabItems.length - 1 ? "1px solid #E0E0E0" : "none",
                                    bgcolor: isActive ? "#002C6D" : "transparent",
                                    color: isActive ? "white" : "#002C6D",
                                    borderRadius: isActive ? "8px" : "0",
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                <Typography fontWeight="bold" fontSize="14px">
                                    {item.title}
                                </Typography>
                                <Typography
                                    fontSize="13px"
                                    sx={{ color: isActive ? "white" : "text.secondary" }}
                                >
                                    {item.subtitle}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>

            </Box>
        </Box>
    );
};

export default WhatWeDoSection;
