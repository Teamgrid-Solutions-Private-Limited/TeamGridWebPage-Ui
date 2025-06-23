import React from 'react';
import {
    AppBar, Toolbar, Typography, Button, Container, Box, Paper, Grid
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from "../assets/Layer_1.png";

// Icons
import frontendIcon from "../assets/Group 25.png";
import backendIcon from "../assets/Group 26.png";
import mobileIcon from "../assets/Group 28.png";
import designIcon from "../assets/Group 29.png";
import shopifyIcon from "../assets/Group 36.png";
import wooIcon from "../assets/Group 34.png";
import crossPlatformIcon from "../assets/Group 33.png";
import pwaIcon from "../assets/Group 31.png";
import prototypeIcon from "../assets/Group 30.png";
import systemIcon from "../assets/Group 35.png";

const TopNavBar = () => {
    const [hoverMenuOpen, setHoverMenuOpen] = React.useState(false);

    // Ref to hold the timeout ID for delayed close
    const closeTimeoutRef = React.useRef(null);

    // Open the menu immediately and clear any pending close timeout
    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setHoverMenuOpen(true);
    };

    // Start a small delay before closing to allow the cursor to travel the gap
    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setHoverMenuOpen(false);
        }, 200); // adjust delay as needed
    };

    // Clean-up on unmount
    React.useEffect(() => () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "white",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                width: "100%",
                zIndex: 1100,
                px: 6,
                py: 1.5,
                height: 80
            }}
        >
            <Toolbar disableGutters>
                <Box sx={{ width: "100%", fontFamily: `"PayPal Open", Arial, sans-serif` }}>
                    <Container
                        maxWidth="xl"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        {/* Logo */}
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <img src={logo} alt="logo" style={{ height: "58px", width: "180px" }} />
                        </Box>

                        {/* Navigation */}
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            <Button variant="contained" sx={navBtnStyle(true)}>Home</Button>
                            <Button sx={navBtnStyle()}>About Us</Button>

                            {/* Dropdown Trigger */}
                            <Box
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                sx={{ position: "relative" }}
                            >
                                <Button
                                    endIcon={<ArrowDropDownIcon />}
                                    sx={navBtnStyle()}
                                >
                                    What We Do
                                </Button>

                                {/* Dropdown Menu */}
                                {hoverMenuOpen && (
                                    <Paper
                                        elevation={3}
                                        gap={2}
                                        gutterBottom
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        sx={{
                                            position: "absolute",
                                            top: 65,
                                            left: "59%",
                                            transform: "translateX(-42.5%)",
                                            display: "flex",
                                            p: 3,
                                            flexDirection: "column",
                                            backgroundColor: "white",

                                            borderRadius: 3,
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                            zIndex: 1300,
                                            minWidth: "1300px"
                                        }}
                                    >
                                        <Grid container spacing={4}>
                                            {/* Web Dev */}
                                            <Grid item xs={3}>
                                                <Typography
                                                    sx={{
                                                        fontFamily: `"PayPal Open", Arial, sans-serif`,
                                                        fontWeight: 400,
                                                        fontSize: "12px",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "3%",
                                                        mb: 3,
                                                        ml: 1,
                                                    }}
                                                >
                                                    WEB DEVELOPMENT
                                                </Typography>

                                                {feature(frontendIcon, "Front-End Development", "Fast, responsive, and pixel-perfect user interfaces.")}
                                                {feature(backendIcon, "Back-End Development", "Scalable, secure, and efficient architecture.")}
                                                {feature(mobileIcon, "WordPress & CMS", "Custom WordPress sites with Elementor, and more.")}
                                            </Grid>

                                            {/* Mobile Dev */}
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle2" gutterBottom sx={{
                                                    mb: 3, fontFamily: `"PayPal Open", Arial, sans-serif`,
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "3%",
                                                }}   >MOBILE APP DEVELOPMENT</Typography>
                                                {feature(designIcon, "iOS & Android Development", "Native mobile experiences that perform and scale.")}
                                                {feature(crossPlatformIcon, "Cross-Platform Apps", "Build and deploy everywhere with React Native or Flutter.")}
                                                {feature(pwaIcon, "Progressive Web Apps", "Web apps that work offline and feel native.")}
                                            </Grid>

                                            {/* UI/UX */}
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle2" gutterBottom sx={{
                                                    mb: 3, fontFamily: `"PayPal Open", Arial, sans-serif`,
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "3%",
                                                }}>UI/UX & DESIGN</Typography>
                                                {feature(designIcon, "UI/UX Design", "Intuitive, user-focused design for web and mobile.")}
                                                {feature(prototypeIcon, "Prototyping & Wireframing", "Visualize fast using tools like Figma and Adobe XD.")}
                                                {feature(systemIcon, "Design Systems", "Scalable design libraries to maintain brand consistency.")}
                                            </Grid>

                                            {/* E-Commerce */}
                                            <Grid item xs={3}>
                                                <Typography variant="subtitle2" gutterBottom sx={{
                                                    mb: 3, fontFamily: `"PayPal Open", Arial, sans-serif`,
                                                    fontWeight: 400,
                                                    fontSize: "12px",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "3%",
                                                }}>E-COMMERCE SOLUTIONS</Typography>
                                                {feature(shopifyIcon, "Shopify Development", "Custom stores with fast checkout and optimized UX.")}
                                                {feature(wooIcon, "WooCommerce Integration", "Extend WordPress with powerful features.")}
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                )}
                            </Box>

                            <Button sx={navBtnStyle()}>Technologies We Use</Button>
                            <Button sx={navBtnStyle()}>How we work</Button>
                            <Button sx={navBtnStyle()}>Let's Talk</Button>
                        </Box>

                        {/* CTA */}
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#05408E",
                                fontFamily: `"PayPal Open", Arial, sans-serif`,
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "150%",
                                letterSpacing: "0%",
                                textTransform: "none",
                                color: "#FFFFFF",
                                //   backgroundColor: isPrimary ? "#007bff" : "transparent",
                                borderRadius: 999,
                                px: 3,
                                py: 1.2,
                            }}
                            onClick={() => alert("Get a Quote Clicked!")}
                        >
                            Get a Quote
                        </Button>
                    </Container>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

// Reusable Feature Item
const feature = (icon, title, desc) => (
    <Box
        sx={{
            width: "282px",
            minHeight: "89px",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            gap: "16px",
            backgroundColor: "#fff",
            alignItems: "flex-start",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#F3F3F6",
                transform: "scale(1.05)",
            },
        }}
    >
        <Box
            component="img"
            src={icon}
            alt={title}
            sx={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                objectFit: "contain",
            }}
        />
        <Box>
            <Typography
                sx={{
                    fontFamily: `"PayPal Open", Arial, sans-serif`,
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "150%",
                    mb: "2px"
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontFamily: `"PayPal Open", Arial, sans-serif`,
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "150%",
                    color: "#555",
                }}
            >
                {desc}
            </Typography>
        </Box>
    </Box>
);


// Button styling
const navBtnStyle = (isPrimary = false) => ({
    backgroundColor: "#f5f7fa",
    fontFamily: `"PayPal Open", Arial, sans-serif`,
    fontWeight: 500,
    fontSize: "1rem",
    // lineHeight: "150%",
    letterSpacing: "0%",
    textTransform: "none",
    color: "#0B3C7B",
    //   backgroundColor: isPrimary ? "#007bff" : "transparent",
    borderRadius: 999,
    px: 3,
    py: 1.2,
    transition: "all 0.3s ease",

    '&:hover': {
        backgroundColor: "#F3F3F1",
        transform: "scale(1.07)",
    },
});

export default TopNavBar;

