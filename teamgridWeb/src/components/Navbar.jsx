import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Grid,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logo from "../assets/logo.png";

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
import wooIcon from "../assets/wooo (1).png";

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
  "Let's Talk",
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Home");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleMobileMoreClick = () => setMobileMoreOpen(!mobileMoreOpen);

  const drawer = (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(5, 35, 74, 0) -20%, #000E1F 105.53%)",
        height: "100%",
        py: 2,
        color: "white",
      }}
    >
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <img src={logo} alt="logo" style={{ height: "48px", width: "148px" }} />
      </Box>
      <List>
        {navItems.map((item) =>
          item === "What We Do" ? (
            <React.Fragment key={item}>
              <ListItemButton onClick={handleMobileMoreClick}>
                <ListItemText primary={item} sx={{ color: "white" }} />
                {mobileMoreOpen ? (
                  <ExpandLess sx={{ color: "white" }} />
                ) : (
                  <ExpandMore sx={{ color: "white" }} />
                )}
              </ListItemButton>
              <Collapse in={mobileMoreOpen}>
                {megaMenuItems.map((section) => (
                  <Box key={section.title} sx={{ pl: 4, pr: 2 }}>
                    <Typography
                      sx={{ color: "#ccc", fontWeight: "500", mt: 1, fontSize:"14px" }}
                    >
                      {section.title}
                    </Typography>
                    {section.items.map((menuItem) => (
                      <ListItemButton key={menuItem.label}>
                        <ListItemText
                          primary={menuItem.label}
                          sx={{ color: "#eee" }}
                        />
                      </ListItemButton>
                    ))}
                  </Box>
                ))}
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} sx={{ color: "white", pl: 2 }} />
              </ListItemButton>
            </ListItem>
          )
        )}
        <ListItem sx={{ mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#003087",
              borderRadius: 999,
              height: "48px",
              width: "139px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 400,
              mt: 2,
              mr: 20,
              "&:hover": { backgroundColor: "#002366" },
            }}
          >
            Get a Quote
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(0deg, rgba(5, 35, 74, 0) -20%, #000E1F 105.53%)",
          minHeight: "84px", // Changed from height to minHeight
          maxHeight: "84px", // Added maxHeight to prevent expansion
          zIndex: 1100,
          boxShadow: "none",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: "84px !important", // Force toolbar height
            height: "84px", // Set explicit height
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%", // Make container take full height
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: isMobile ? 2 : 12,
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ height: "48px", width: "148px" }}
              />
            </Box>

            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{ keepMounted: true }}
                  PaperProps={{
                    sx: {
                      width: "100%",
                      maxWidth: "100vw",
                      background:
                        "linear-gradient(0deg, rgba(5, 35, 74, 0) -20%, #000E1F 105.53%)",
                      boxSizing: "border-box",
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center", // Center align items vertically
                  columnGap: 1.5,
                  ml: isMobile ? 2 : 13,
                  flexGrow: 1,
                  height: "100%", // Take full height
                }}
              >
                {navItems.map((item) =>
                  item === "What We Do" ? (
                    <Box
                      key={item}
                      onMouseEnter={() => setMenuOpen(true)}
                      onMouseLeave={() => setMenuOpen(false)}
                      sx={{
                        position: "relative",
                        height: "fit-content", // Prevent box from expanding
                      }}
                    >
                      <Button
                        endIcon={<ArrowDropDownIcon />}
                        onClick={() => setSelected(item)}
                        sx={{
                          fontSize: "16px",
                          fontWeight:"400px",
                          textTransform: "none",
                          color: "#fff",
                          borderRadius: "999px",
                          height: 40,
                          px: 3,
                          letterSpacing: 0,
                          backgroundColor:
                            selected === item ? "#0E4FA2" : "transparent",
                          "&:hover": {
                            backgroundColor:
                              selected === item
                                ? "#0E4FA2"
                                : "rgba(255,255,255,0.1)",
                          },
                        }}
                      >
                        {item}
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      key={item}
                      onClick={() => setSelected(item)}
                      sx={{
                        fontSize: "16px",
                        fontFamily: "PayPalOpen , Sans-serif",
                        textTransform: "none",
                        color: "#fff",
                        borderRadius: "999px",
                        height: 40,
                        px: 2.55,
                        letterSpacing: 0,
                        backgroundColor:
                          selected === item ? "#0E4FA2" : "transparent",
                        "&:hover": {
                          backgroundColor:
                            selected === item
                              ? "#0E4FA2"
                              : "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      {item}
                    </Button>
                  )
                )}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#003087",
                    borderRadius: 999,
                    height: "48px",
                    width: "139px",
                    textTransform: "none",
                    fontSize: "16px",
                    fontFamily: "PayPalOpen , Sans-serif",
                    "&:hover": { backgroundColor: "#002366" },
                    ml: 6,
                  }}
                >
                  Get a Quote
                </Button>
              </Box>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      {/* Mega Menu - positioned absolutely to not affect navbar height */}
      {!isMobile && menuOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            width: "84.3vw",
            left: "8vw",
            top: "84px", // Position directly below navbar
            height: 400,
            borderRadius: 3,
            padding: 3,
            zIndex: 1200,
            overflow: "hidden",
            backgroundColor: "white",
          }}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <Grid container spacing={3} wrap="nowrap">
            {megaMenuItems.map((column, index) => (
              <Grid item key={index} sx={{ minWidth: 280 }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 500,
                    color: "grey.600",
                    mb: 1,
                    display: "block",
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                    fontFamily: "PayPalOpen , Sans-serif",
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
                      mb: 2,
                      borderRadius: 2,
                      p: 2,
                      alignItems: "flex-start",
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.1)" },
                    }}
                  >
                    <Box sx={{ height: 40, width: 40 }}>
                      <img
                        src={item.icon}
                        alt={item.label}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: "#0B3C7B",
                          fontFamily: "PayPalOpen , Sans-serif",
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: "#767676",
                          fontFamily: "PayPalOpen , Sans-serif",
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
