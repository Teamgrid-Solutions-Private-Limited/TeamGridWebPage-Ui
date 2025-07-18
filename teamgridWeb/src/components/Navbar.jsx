import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  useMediaQuery,
  IconButton,
  Paper,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import whiteLogo from "../assets/Logo.png";
import darkLogo from "../assets/LogoDark.png";

// Icons
import frontendIcon from "../assets/frontend.png";
import backendIcon from "../assets/backend.png";
import wordpressIcon from "../assets/word.png";
import iosIcon from "../assets/ios.png";
import crossPlatformIcon from "../assets/crossplatform.png";
import progressiveIcon from "../assets/progressive.png";
import uiuxIcon from "../assets/uiux.png";
import prototypeIcon from "../assets/prototype.png";
import designIcon from "../assets/design.png";
import shopifyIcon from "../assets/shopifyy.png";
import wooIcon from "../assets/wooo(1).png";


const megaMenuItems = [
  {
    title: "WEB DEVELOPMENT",
    items: [
      {
        icon: frontendIcon,
        label: "Front-End Development",
        desc: "Fast, responsive, and pixel-perfect user interfaces.",
      },
      {
        icon: backendIcon,
        label: "Back-End Development",
        desc: "Scalable, secure, and efficient architecture.",
      },
      {
        icon: wordpressIcon,
        label: "WordPress & CMS",
        desc: "Custom WordPress sites with Elementor, and more.",
      },
    ],
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    items: [
      {
        icon: iosIcon,
        label: "iOS & Android Development",
        desc: "Native mobile experiences that perform and scale.",
      },
      {
        icon: crossPlatformIcon,
        label: "Cross-Platform Apps",
        desc: "React Native or Flutter for all devices.",
      },
      {
        icon: progressiveIcon,
        label: "Progressive Web Apps",
        desc: "Web apps that work offline and feel native.",
      },
    ],
  },
  {
    title: "UI/UX & DESIGN",
    items: [
      {
        icon: uiuxIcon,
        label: "UI/UX Design",
        desc: "User-focused design for web and mobile.",
      },
      {
        icon: prototypeIcon,
        label: "Prototyping & Wireframing",
        desc: "Fast visuals using Figma and Adobe XD.",
      },
      {
        icon: designIcon,
        label: "Design Systems",
        desc: "Design libraries to maintain brand consistency.",
      },
    ],
  },
  {
    title: "E-COMMERCE SOLUTIONS",
    items: [
      {
        icon: shopifyIcon,
        label: "Shopify Development",
        desc: "Fast checkout & optimized UX.",
      },
      {
        icon: wooIcon,
        label: "WooCommerce Integration",
        desc: "Extend WordPress with powerful features.",
      },
    ],
  },
];

const navItems = [
  "Home",
  "About Us",
  "What We Do",
  "Technologies We Use",
  "How we work",
];

const navRoutes = {
  Home: "/",
  "About Us": "/about",
  "What We Do": "/whatwedo",
  "Technologies We Use": "/technologies",
  "How we work": "/how-we-work",
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Home");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavItemClick = (item) => {
    setSelected(item);
    navigate(navRoutes[item]);
    setDrawerOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(5, 35, 74, 0) -20%, #000E1F 105.53%)",
        height: "100vh",
        py: 2,
        color: "white",
        px: isSmallMobile ? 2 : 4,
        width: isSmallMobile ? "100vw" : "400px",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: isSmallMobile ? 1 : 2,
        }}
      >
        <img
          src={isScrolled ? darkLogo : whiteLogo}
          alt="logo"
          style={{
            height: "48px",
            width: "148px",
            transition: "0.3s ease-in-out",
          }}
        />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "white", display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Menu */}
      <List sx={{ overflowY: "auto", maxHeight: "calc(100vh - 120px)" }}>
        {navItems.map((item) =>
          item === "What We Do" ? (
            <React.Fragment key={item}>
              <ListItemButton
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                sx={{
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      color: "white",
                      fontSize: isSmallMobile ? "14px" : "16px",
                    },
                  }}
                />
                {mobileMoreOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={mobileMoreOpen} timeout="auto" unmountOnExit>
                {megaMenuItems.map((section) => (
                  <Box key={section.title} sx={{ pl: 4, pr: 2, mb: 5 }}>
                    <Typography
                      sx={{
                        color: "#ccc",
                        fontWeight: 500,
                        mt: 1,
                        fontSize: isSmallMobile ? "12px" : "14px",
                      }}
                    >
                      {section.title}
                    </Typography>
                    {section.items.map((menuItem) => (
                      <ListItemButton
                        key={menuItem.label}
                        sx={{ pl: 2 }}
                        onClick={() => {
                          navigate("/whatwedo");
                          setDrawerOpen(false); // Ensure drawer closes
                        }}
                      >
                        <ListItemText
                          primary={menuItem.label}
                          primaryTypographyProps={{
                            sx: {
                              color: "#eee",
                              fontSize: isSmallMobile ? "13px" : "14px",
                            },
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </Box>
                ))}
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={() => handleNavItemClick(item)}
                sx={{
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      color: "white",
                      pl: 2,
                      fontSize: isSmallMobile ? "14px" : "16px",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}

        {/* CTA Button */}
        {/* <ListItem
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
         
        </ListItem> */}
      </List>
      {/* <Box sx={{ml:5}}>
         <Button
            variant="contained"
            onClick={() => handleNavItemClick("Let's Talk")}
            sx={{
              backgroundColor: "#05408E",
              borderRadius: "12px",
              height: "48px",
              minWidth: "140px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 400,
              "&:hover": { backgroundColor: "#002366" },
            }}
          >
            Let's Talk
          </Button>
      </Box> */}
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          transition: "all 0.3s ease",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
          height: { xs: "64px", sm: "72px", md: "84px" },
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ minHeight: "inherit !important", height: "inherit" }}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              px: { xs: 2, sm: 3, md: 10, lg: 8, xl: 12 },
            }}
          >
            {/* Only show logo and menu icon on mobile if drawer is closed */}
            {!(isMobile && drawerOpen) && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src={isScrolled ? darkLogo : whiteLogo}
                  alt="logo"
                  style={{
                    height: isSmallMobile ? "40px" : "48px",
                    width: isSmallMobile ? "120px" : "148px",
                    transition: "0.3s ease-in-out",
                  }}
                />
              </Box>
            )}

            {isMobile ? (
              !drawerOpen && (
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  edge="end"
                  sx={{
                    color: isScrolled ? "#0B3C7B" : "white",
                    ml: "auto",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: 1,
                  mr: { md: 2, lg: 4, xl: 6 },
                }}
              >
                {navItems.map((item) =>
                  item === "What We Do" ? (
                    <Box
                      key={item}
                      onMouseEnter={() => setMenuOpen(true)}
                      sx={{ position: "relative" }}
                    >
                      <Button
                        endIcon={<ArrowDropDownIcon />}
                        onClick={() => {
                          setSelected(item);
                          navigate(navRoutes[item]);
                        }}
                        sx={{
                          fontSize: { md: "14px", lg: "16px" },
                          fontWeight: "400",
                          textTransform: "none",
                          color: isScrolled ? "#0B3C7B" : "#fff",
                          borderRadius: "999px",
                          height: 40,
                          px: { md: 2, lg: 3 },
                          backgroundColor:
                            selected === item
                              ? isScrolled
                                ? "#F3F3F6"
                                : "#3082EC3B"
                              : "transparent",
                          "&:hover": {
                            backgroundColor: selected
                              ? isScrolled
                                ? "#F3F3F6"
                                : "#3082EC3B"
                              : "rgba(0,0,0,0.05)",
                          },
                        }}
                      >
                        {item}
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      key={item}
                      onClick={() => {
                        setSelected(item);
                        navigate(navRoutes[item]);
                      }}
                      sx={{
                        fontSize: { md: "14px", lg: "16px" },
                        fontWeight: "400",
                        textTransform: "none",
                        color: isScrolled ? "#0B3C7B" : "#fff",
                        borderRadius: "999px",
                        height: 40,
                        px: { md: 2, lg: 2.5 },
                        backgroundColor:
                          selected === item
                            ? isScrolled
                              ? "#F3F3F6"
                              : "#3082EC3B"
                            : "transparent",
                        "&:hover": {
                          backgroundColor: selected
                            ? isScrolled
                              ? "#F3F3F6"
                              : "#3082EC3B"
                            : "rgba(0,0,0,0.05)",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  )
                )}
              </Box>
            )}
            {/* Only show Let's Talk button if not mobile (>=1200px) */}
            {!isMobile && (
              <Button
                variant="contained"
                onClick={() => navigate('/talk')}
                sx={{
                  backgroundColor: "#05408E",
                  borderRadius: "36px",
                  height: "48px",
                  minWidth: "116px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                  ml: { md: 2, lg: 2 },
                  "&:hover": { backgroundColor: "#002366" },
                  display: { xs: "none", md: "block" },
                }}
              >
                Let's Talk
              </Button>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: isSmallMobile ? "100vw" : "400px",
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Mega Menu Dropdown */}
      {!isMobile && menuOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            top: { xs: "76px", sm: "84px", md: "90px" },
            left: "50%",
            transform: "translateX(-50%)", // center it
            width: "83vw",
            maxWidth: "1340px", // ⬅️ restrict max width
            // height: {
            //   xs: "auto",
            //   sm: 320,
            //   md: 320,
            //   lg: 340,
            //   xl: 345,
            // },
            overflowY: "auto",
            borderRadius: "16px",
            px: { xs: 1, sm: 2, md: 3 }, // keep horizontal padding
            py: { xs: 0.5, sm: 1, md: 1 }, // reduce vertical padding her
            zIndex: 1200,
            backgroundColor: "#fff",
            boxSizing: "border-box",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <Grid container spacing={2} wrap="nowrap">
            {megaMenuItems.map((column, index) => (
              <Grid
                item
                key={index}
                sx={{
                  minWidth: 240,
                  maxWidth: 300,
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 400,
                    color: "#898989",
                    mb: 5,
                    my: 1,
                    display: "block",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {column.title}
                </Typography>
                {column.items.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 1.5,
                      mt: idx === 0 ? 2.5 : 0, 
                      borderRadius: 2,
                      alignItems: "flex-start",
                      cursor: "pointer",
                      transition: "0.3s",
                      p: 1.25,
                      "&:hover": {
                        // transform: "translateY(-2px)",
                        backgroundColor: "#F3F3F6",
                      },
                      "&:hover .icon-box": {
                        backgroundColor: "#fff", // Change icon container bg on hover
                      },
                    }}
                    onClick={() => {
                      setSelected("What We Do");
                      navigate("/whatwedo");
                      setMenuOpen(false);
                    }}
                  >
                    <Box
                      className="icon-box"
                      sx={{
                        height: 40,
                        width: 40,
                        borderRadius: "8px",
                        backgroundColor: "#F5F6FA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "0.3s", // Smooth bg transition
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        style={{
                          height: 24,
                          width: 24,
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: 1.4,
                          color: "#0B3C7B",
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          color: "#767676",
                          mt: 0.5,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default NavBar;
