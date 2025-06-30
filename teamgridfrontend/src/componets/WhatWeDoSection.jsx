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
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Box sx={{
            width: "100%",
            py: { xs: 6, md: 4 },
            px: { xs: 1, sm: 4, md: 3, lg: 10 }, // Match navbar padding
            // maxWidth: "xl",
            // mx: "auto"
        }}>
            {/* Header Text */}
            <Box sx={{
                maxWidth: "1440px",
                mb: { xs: 4, md: 6 },
                ml: { lg: 1 }
            }}>
                <Typography
                    sx={{
                        fontFamily: '"Paypal Open", Arial, Sharif',
                        fontWeight: 500,
                        fontSize: { xs: '32px', sm: '40px', md: '56px' },
                        lineHeight: '100%',
                        color: '#140E13',
                        width: { xs: '100%', md: '325px' },
                        textAlign: 'left',
                        mb: 2
                    }}
                >
                    What We Do
                </Typography>
                <Typography
                    sx={{
                        fontFamily: '"Paypal Open", Arial, Sharif',
                        fontWeight: 400,
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                        lineHeight: '150%',
                        color: '#140E13',
                        textAlign: 'left',
                        width: { xs: '100%', md: '80%', lg: '100%' },
                        mb: 4,
                        m: 1,
                    }}
                >
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
                    pb: { xs: 12, md: 14 },
                    // m:1,
                    overflow: "hidden",
                    m: { lg: .5 },
                    width: "100%"
                }}
            >
                {/* Left Content */}
                <Box sx={{
                    flex: 1,
                    px: { md: 2 },
                    mb: { xs: 4, md: 0 },
                    width: { xs: '100%', md: 'auto' }
                }}>
                    <Typography
                        sx={{
                            fontFamily: '"Paypal Open", Arial, Sharif',
                            fontWeight: 500,
                            fontSize: { xs: '28px', sm: '32px', md: '40px' },
                            lineHeight: '100%',
                            color: '#140E13',
                            width: { xs: '100%', md: '486px' },
                            textAlign: 'left',
                            mb: 2
                        }}
                    >
                        {tabItems[activeTab].title}
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: '"Paypal Open", Arial, Sharif',
                            fontWeight: 400,
                            fontSize: { xs: '14px', md: '16px' },
                            lineHeight: '150%',
                            color: '#000000',
                            width: { xs: '100%', md: '469px' },
                            textAlign: 'left',
                            mb: 3
                        }}
                    >
                        We design and develop high-performing e-commerce platforms tailored to your brand.
                        From storefront to checkout, we build seamless, scalable, and conversion-focused
                        experiences that drive sales and customer loyalty.
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: 'column', sm: 'column' },
                        gap: 2,
                        alignItems: { xs: 'flex-start', sm: 'flex-start' }
                    }}>
                        <Button
                            variant="outlined"
                            sx={{
                                fontFamily: '"Paypal Open", Arial, Sharif',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '100%',
                                color: '#000000',
                                borderColor: '#A8BDD3',
                                px: 3,
                                py: 1.5,
                                borderRadius: '999px',
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#003F9F',
                                    color: '#003F9F',
                                },
                                width: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            Explore Our Portfolio →
                        </Button>

                        <Box sx={{
                            display: "flex",
                            gap: 2,
                            width: { xs: '100%', sm: 'auto' },
                            justifyContent: { xs: 'space-between', sm: 'flex-start' }
                        }}>
                            <Button
                                onClick={() => setActiveTab(prev => prev === 0 ? tabItems.length - 1 : prev - 1)}
                                sx={{
                                    minWidth: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                    bgcolor: "#FFFFFF75",
                                    boxShadow: 1,
                                    "&:hover": { bgcolor: "#FFFFFF" }
                                }}
                            >
                                ←
                            </Button>
                            <Button
                                onClick={() => setActiveTab(prev => prev === tabItems.length - 1 ? 0 : prev + 1)}
                                sx={{
                                    minWidth: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                    bgcolor: "#FFFFFF75",
                                    boxShadow: 1,
                                    "&:hover": { bgcolor: "#FFFFFF75" }
                                }}
                            >
                                →
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Right Images with Overlap */}
                <Box sx={{
                    flex: 1,
                    position: "relative",
                    minHeight: { xs: 250, sm: 320, md: 420 },
                    width: { xs: '100%', md: 'auto' },
                    mt: { xs: 4, md: 0 }
                }}>
                    {/* Bottom Image */}
                    <Box
                        component="img"
                        src={ecommerceImageBottom}
                        alt="Bottom E-commerce"
                        sx={{
                            position: "absolute",
                            width: { xs: "80%", sm: "70%", md: "65%" },
                            height: { xs: "80%", md: "120%" },
                            objectFit: "cover",
                            borderRadius: "12px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                            top: { xs: "10%", md: "-60px" },
                            right: { xs: "5%", md: "10px" },
                        }}
                    />

                    {/* Top Image */}
                    <Box
                        component="img"
                        src={ecommerceImageTop}
                        alt="Top E-commerce Overlay"
                        sx={{
                            position: "absolute",
                            top: { xs: "0", md: "5%" },
                            left: { xs: "5%", md: "1%" },
                            width: { xs: "80%", sm: "70%", md: "65%" },
                            borderRadius: "12px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                            height: { xs: "80%", md: "121%" },
                            zIndex: 1,
                        }}
                    />
                </Box>

                {/* Floating Tabs Box */}
                {/* Floating Tabs Box */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: { xs: 10, md: 20 },
                        left: { xs: 10, md: 20 },
                        right: { xs: 10, md: 20 },

                        // ✅ Translucent background
                        backdropFilter: "blur(156.9px)",
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        WebkitBackdropFilter: "blur(20px)", // Safari support

                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                        px: 1,
                        py: 1,
                        zIndex: 2,
                    }}

                >
                    <Box
                        id="tabs-container"
                        sx={{
                            display: "flex",
                            overflowX: "auto",
                            scrollbarWidth: "none",
                            "&::-webkit-scrollbar": { display: "none" },
                            cursor: "grab",
                            "&:active": { cursor: "grabbing" },
                            WebkitOverflowScrolling: "touch", // For smooth scrolling on iOS
                        }}
                        onMouseDown={(e) => {
                            const container = e.currentTarget;
                            const startX = e.pageX - container.offsetLeft;
                            const scrollLeft = container.scrollLeft;

                            const handleMouseMove = (e) => {
                                const x = e.pageX - container.offsetLeft;
                                const walk = (x - startX) * 2; // Scroll speed multiplier
                                container.scrollLeft = scrollLeft - walk;
                            };

                            const handleMouseUp = () => {
                                document.removeEventListener('mousemove', handleMouseMove);
                                document.removeEventListener('mouseup', handleMouseUp);
                                container.style.cursor = "grab";
                            };

                            document.addEventListener('mousemove', handleMouseMove);
                            document.addEventListener('mouseup', handleMouseUp);
                            container.style.cursor = "grabbing";
                        }}
                    >
                        {tabItems.map((item, index) => {
                            const isActive = index === activeTab;
                            return (
                                <Box
                                    key={item.title}
                                    onClick={() => setActiveTab(index)}
                                    sx={{
                                        cursor: "pointer",
                                        px: { xs: 1.5, md: 2 },
                                        py: 2,
                                        textAlign: "left",
                                        minWidth: { xs: 160, sm: 180, md: 200, lg: 203 },
                                        flexShrink: 0, // Prevent items from shrinking

                                        // 👇 Thinner right border
                                        // borderRight: index !== tabItems.length - 1 ? "0.8px solid #E0E0E0" : "none",

                                        // 👇 Background + blur
                                        color: index === isActive ? "#fff" : "#000",
                                        backgroundColor:
                                            index === isActive ? "#002b5b" : "transparent",
                                        WebkitBackdropFilter: isActive ? "none" : "blur(20px)", // Safari support

                                        // color: isActive ? "#FFFFFF" : "#002C6D",
                                        borderRadius: isActive ? "8px" : "0",
                                        transition: "all 0.3s ease",

                                        "&:hover": {
                                            backgroundColor: isActive ? "#072449" : "#F5F5F5BF", // lighter hover effect
                                        },
                                    }}
                                >

                                    <Typography fontWeight="bold" fontSize={{ xs: '14px', md: '16px' }} gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                    variant="caption"
                                        fontSize={{ xs: '12px', md: '13px' }}
                                        sx={{ color: isActive ? "white" : "#0724498C" }}
                                    >
                                        {item.subtitle}
                                    </Typography>
                                    {index !== tabItems.length - 1 && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                right: 0,
                                                top: "35%",
                                                bottom: "35%",
                                                width: "1.5px",
                                                backgroundColor: "rgba(0, 0, 0, 0.32)",
                                                display: { xs: "none", sm: "block" },
                                            }}
                                        />
                                    )}

                                </Box>

                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WhatWeDoSection;