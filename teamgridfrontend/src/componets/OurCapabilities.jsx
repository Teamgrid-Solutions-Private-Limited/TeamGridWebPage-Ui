import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import reactImg from "../assets/Group 16.png";
import node from "../assets/Group 20.png";
import postman from "../assets/Group 24.png";
import wordpress from "../assets/Group 17.png";
import wocom from "../assets/Group 18.png";
import PostgreSQL from "../assets/Group 20.png";
import mongodb from "../assets/Group 22.png";
import figma from "../assets/Group 23.png";
import shopify from "../assets/Group 19.png";

const capabilities = [
    {
        title: "ReactJS",
        description: "Build fast, interactive UIs with component-based architecture.",
        icon: reactImg // replace with actual paths
    },
    {
        title: "WordPress",
        description: "Flexible CMS for custom websites and content-rich platforms.",
        icon: wordpress
    },
    {
        title: "WooCommerce",
        description: "Power your online store with WordPress integration.",
        icon: wocom
    },
    {
        title: "Shopify",
        description: "Launch beautiful, high-converting e-commerce stores with ease.",
        icon: shopify
        , // replace with actual paths
    },
    {
        title: "Node.js",
        description: "Build fast, scalable servers with non-blocking architecture.",
        icon: node
        , // replace with actual paths
    },
    {
        title: "PostgreSQL",
        description: "Reliable, powerful open-source relational database.",
        icon: PostgreSQL
        // replace with actual paths
    },
    {
        title: "MongoDB",
        description: "Flexible NoSQL database for modern applications.",
        icon: mongodb
        , // replace with actual paths
    },
    {
        title: "Figma",
        description: "Collaborative UI/UX design and prototyping platform.",
        icon: figma
        // replace with actual paths
    },
    {
        title: "Postman",
        description: "Simplify API development, testing, and collaboration.",
        icon: postman
        // replace with actual paths
    },
];

const OurCapabilities = () => {
    return (
        // Outer full-width section
        <Box sx={{
            width: "99.1vw", bgcolor: "#0B3C7B", color: "white", py: 8, px: 0, m: 0, left: -122, position: "relative", overflow: "hidden", zIndex: 1
        }}>

            {/* No maxWidth — full bleed content */}
            <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                {/* Top Heading Row */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        mb: 4,
                        width: "92%",
                        pl: { xs: 2, sm: 4, md: 6, lg: 8 }
                    }}
                >
                    <Box>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Our Capabilities
                        </Typography>
                        <Typography variant="subtitle1" sx={{ opacity: 0.85 }}>
                            Modern Technologies & Collaborative Tools
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#1E90FF",
                            borderRadius: "999px",
                            px: 4,
                            py: 1.5,
                            textTransform: "none",
                            fontWeight: "bold",
                            mt: { xs: 2, md: 0 },
                        }}
                    >
                        Get a Quote →
                    </Button>
                </Box>

                <Grid container spacing={3} sx={{ width: "100%", ml: 4 }} >
                    {capabilities.map((cap, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    width: 384,
                                    height: 90,
                                    bgcolor: "#0D3B66",
                                    borderRadius: "24px",
                                    padding: "20px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                {/* Left: Icon */}
                                <Box
                                    component="img"
                                    src={cap.icon}
                                    alt={cap.title}
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: "16px",
                                        objectFit: "contain",
                                        flexShrink: 0,
                                    }}
                                />

                                {/* Right: Title + Description */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight="bold"
                                        color="white"
                                        textAlign="left"
                                        sx={{
                                            lineHeight: 1.2,
                                            wordBreak: "break-word",
                                            mb: 0.5,
                                            mt: 0.3,
                                        }}
                                    >
                                        {cap.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontFamily: "PayPal Open",
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                            letterSpacing: "0%",
                                            color: "rgba(255,255,255,0.8)",
                                            wordBreak: "break-word",
                                            whiteSpace: "normal",
                                        }}
                                    >
                                        {cap.description}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>


            </Box>
        </Box>
    );
};


export default OurCapabilities;
