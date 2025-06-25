import React from 'react';
import {
    AppBar, Toolbar, Typography, Button, Container, Box, Paper, Grid, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from "../assets/Layer_1 (1).png";
import MenuIcon from '@mui/icons-material/Menu';

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

    // Drawer state for mobile navigation
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Ref to hold the timeout ID for delayed close
    const closeTimeoutRef = React.useRef(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        "Home",
        "About Us",
        "What We Do",
        "Technologies We Use",
        "How we work",
        "Let's Talk",
    ];

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
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "#072449",
                    borderBottom: "1px solid #354C6B",
                    boxShadow: "none",
                    width: "100%",
                    zIndex: 1100,
                    px: { xs: 2, sm: 4, md: 3, lg: 11},
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
                            <Box sx={{ display: "flex", alignItems: "flex-end" ,p: 1}}>
                                <img src={logo} alt="logo" style={{ height: "50px", width: "150px" }} />
                            </Box>

                            {/* Hamburger Menu - Mobile */}
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: "none" } }}
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* Navigation - Desktop */}
                            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
                                <Button sx={navBtnStyle()}>Home</Button>
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
                                                top: 58,
                                                left: "62%",
                                                transform: "translateX(-42.5%)",
                                                p: 3,
                                                backgroundColor: "white",
                                                borderRadius: 3,
                                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                                zIndex: 1300,
                                                width: { xs: "90vw", md: "1200px" },
                                                maxWidth: "95vw"

                                            }}
                                        >
                                            <Grid container spacing={1}>
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
                                className="cta-desktop"
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
                                    display: { xs: "none", md: "inline-flex" },
                                }}
                                onClick={() => alert("Get a Quote Clicked!")}
                            >
                                Get a Quote
                            </Button>
                        </Container>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 240,
                        backgroundColor: "#072449",
                        color: "#FFFFFF",
                    },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 2 }}>
                    <img src={logo} alt="logo" style={{ height: "40px" }} />
                    <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 2 }} />
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton sx={{ textAlign: "left", px: 3 }}>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
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
                            borderRadius: 999,
                            // mx: 1,
                            mb: 3,
                            mt: 1,
                        }}
                        onClick={() => alert("Get a Quote Clicked!")}
                    >
                        Get a Quote
                    </Button>
                </Box>
            </Drawer>
        </>
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
            gap: "10px",
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
const navBtnStyle = () => ({
    // backgroundColor: "#f5f7fa",
    fontFamily: `"PayPal Open", Arial, sans-serif`,
        // fontFamily: `PayPal Open`,

    fontWeight: 500,
    fontSize: "16px",
    // lineHeight: "150%",
    // letterSpacing: "0%",
    textTransform: "none",
    color: "#FFFFFF",
    //   backgroundColor: isPrimary ? "#007bff" : "transparent",
    borderRadius: 99,
    px: 1.5,
    py: .5,
    transition: "all 0.3s ease",

    '&:hover': {
        backgroundColor: "#0E4FA2",
        transform: "scale(1.07)",
    },
});

export default TopNavBar;

