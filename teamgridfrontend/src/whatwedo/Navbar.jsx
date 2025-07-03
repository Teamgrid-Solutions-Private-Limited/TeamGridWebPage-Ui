import React from 'react';
import {
    AppBar, Toolbar, Typography, Button, Container, Box, Paper, Grid, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Collapse, useMediaQuery, useTheme
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

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [hoverMenuOpen, setHoverMenuOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [whatWeDoExpanded, setWhatWeDoExpanded] = React.useState(false);
    const closeTimeoutRef = React.useRef(null);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMobileWhatWeDoClick = () => {
        setWhatWeDoExpanded(!whatWeDoExpanded);
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
            }
            setHoverMenuOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            closeTimeoutRef.current = setTimeout(() => {
                setHoverMenuOpen(false);
            }, 200);
        }
    };

    const handleClick = () => {
        if (isMobile) {
            setHoverMenuOpen(!hoverMenuOpen);
        }
    };

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
                    background: "linear-gradient(180deg, #000E1F 0%, #05234A00 100%)",
                    boxShadow: "none",
                    width: "100%",
                    zIndex: 1100,
                    px: { xs: 0, sm: 2, md: 3, lg: 11 },
                }}
            >

                <Toolbar disableGutters>
                    <Box sx={{ width: "100%", }}>
                        <Container
                            maxWidth="100%"
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            {/* Logo */}
                            <Grid item xs={6} md={2}>
                                <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                                    <img src={logo} alt="logo" style={{ height: "40px", width: "auto", maxWidth: "150px" }} />
                                </Box>
                            </Grid>

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
                                    onClick={handleClick}
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
                                            gap={{ md:0,lg:0,xl: 2 }}
                                            gutterBottom
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            sx={{
                                                position: "absolute",
                                                top: 58,
                                                left: "65%",
                                                transform: "translateX(-46.5%)",
                                                p: 3,
                                                backgroundColor: "white",
                                                borderRadius: 3,
                                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                                zIndex: 1300,
                                                width: { xs: "90vw",sm:"1000px", md: "1070px", lg: "1260px", xl: "1300px" },
                                                maxWidth: "90vw"
                                            }}
                                        >
                                            <Grid container spacing={{xs:2, sm:0,md: 0, lg: 1, xl: 5 }}>
                                                {/* Web Dev */}
                                                <Grid item xs={12} md={3}>
                                                    <Typography
                                                        sx={{
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
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle2" gutterBottom sx={{
                                                        mb: 3, fontWeight: 400,
                                                        fontSize: "12px",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "3%",
                                                    }}>MOBILE APP DEVELOPMENT</Typography>
                                                    {feature(designIcon, "iOS & Android Development", "Native mobile experiences that perform and scale.")}
                                                    {feature(crossPlatformIcon, "Cross-Platform Apps", "Build and deploy everywhere with React Native or Flutter.")}
                                                    {feature(pwaIcon, "Progressive Web Apps", "Web apps that work offline and feel native.")}
                                                </Grid>

                                                {/* UI/UX */}
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle2" gutterBottom sx={{
                                                        mb: 3, fontWeight: 400,
                                                        fontSize: "12px",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "3%",
                                                    }}>UI/UX & DESIGN</Typography>
                                                    {feature(designIcon, "UI/UX Design", "Intuitive, user-focused design for web and mobile.")}
                                                    {feature(prototypeIcon, "Prototyping & Wireframing", "Visualize fast using tools like Figma and Adobe XD.")}
                                                    {feature(systemIcon, "Design Systems", "Scalable design libraries to maintain brand consistency.")}
                                                </Grid>

                                                {/* E-Commerce */}
                                                <Grid item xs={12} md={3}>
                                                    <Typography variant="subtitle2" gutterBottom sx={{
                                                        mb: 3, fontWeight: 400,
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
                                {/* <Button sx={navBtnStyle()}>Let's Talk</Button> */}
                            </Box>

                            {/* CTA */}
                            <Button
                                className="cta-desktop"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#05408E",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "150%",
                                    letterSpacing: "0%",
                                    textTransform: "none",
                                    color: "#FFFFFF",
                                    borderRadius: 999,
                                    px: 3,
                                    py: 1.2,
                                    display: { xs: "none", md: "inline-flex" },
                                    '&:hover': {
                                        backgroundColor: "#0E4FA2",
                                    }
                                }}
                                onClick={() => alert("Get a Quote Clicked!")}
                            >
                               Let's Talk
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
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "left", px: 3 }}>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "left", px: 3 }}>
                                <ListItemText primary="About Us" />
                            </ListItemButton>
                        </ListItem>

                        {/* What We Do Section */}
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleMobileWhatWeDoClick();
                                }}
                                sx={{ textAlign: "left", px: 3 }}
                            >
                                <ListItemText primary="What We Do" />
                                <ArrowDropDownIcon sx={{
                                    transform: whatWeDoExpanded ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s ease'
                                }} />
                            </ListItemButton>
                        </ListItem>

                        {/* Collapsible What We Do Options */}
                        <Collapse in={whatWeDoExpanded} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {/* Web Development */}
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 6, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={frontendIcon} alt="Web Dev" style={{ width: "20px", height: "20px" }} />
                                            <ListItemText
                                                primary="Web Development"
                                                primaryTypographyProps={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={frontendIcon} alt="Frontend" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="Front-End Development"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={backendIcon} alt="Backend" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="Back-End Development"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={mobileIcon} alt="WordPress" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="WordPress & CMS"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>

                                {/* Mobile App Development */}
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 6, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={mobileIcon} alt="Mobile Dev" style={{ width: "20px", height: "20px" }} />
                                            <ListItemText
                                                primary="Mobile App Development"
                                                primaryTypographyProps={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={designIcon} alt="iOS Android" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="iOS & Android Development"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={crossPlatformIcon} alt="Cross Platform" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="Cross-Platform Apps"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={pwaIcon} alt="PWA" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="Progressive Web Apps"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>

                                {/* UI/UX & Design */}
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 6, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={designIcon} alt="UI/UX" style={{ width: "20px", height: "20px" }} />
                                            <ListItemText
                                                primary="UI/UX & Design"
                                                primaryTypographyProps={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={designIcon} alt="UI/UX Design" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="UI/UX Design"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={prototypeIcon} alt="Prototyping" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="Prototyping & Wireframing"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={systemIcon} alt="Design Systems" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="Design Systems"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>

                                {/* E-Commerce Solutions */}
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 6, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={shopifyIcon} alt="E-Commerce" style={{ width: "20px", height: "20px" }} />
                                            <ListItemText
                                                primary="E-Commerce Solutions"
                                                primaryTypographyProps={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={shopifyIcon} alt="Shopify" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="Shopify Development"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ pl: 9, pr: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                                            <img src={wooIcon} alt="WooCommerce" style={{ width: "16px", height: "16px" }} />
                                            <ListItemText
                                                primary="WooCommerce Integration"
                                                primaryTypographyProps={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}
                                            />
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "left", px: 3 }}>
                                <ListItemText primary="Technologies We Use" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "left", px: 3 }}>
                                <ListItemText primary="How we work" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "left", px: 3 }}>
                                <ListItemText primary="Let's Talk" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#05408E",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "150%",
                            letterSpacing: "0%",
                            textTransform: "none",
                            color: "#FFFFFF",
                            borderRadius: 999,
                            mb: 3,
                            mt: 1,
                            '&:hover': {
                                backgroundColor: "#0E4FA2",
                            }
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
            width: "100%",
            maxWidth: "282px",
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
                transform: "scale(1.02)",
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

const navBtnStyle = () => ({
    fontWeight: 400,
    fontSize: "16px",
    textTransform: "none",
    color: "#FFFFFF",
    borderRadius: 99,
    px: 1.5,
    py: .5,
    transition: "all 0.3s ease",
    '&:hover': {
        backgroundColor: "#0E4FA2",
        transform: "scale(1.07)",
    },
});

export default NavBar;