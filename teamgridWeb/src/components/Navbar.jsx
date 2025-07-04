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
import whiteLogo from "../assets/Logo.png"; // use your actual white version
import darkLogo from "../assets/LogoDark.png"; // the default black/dark version

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
  "Let's Talk",
];

const navRoutes = {
  Home: "/",
  "About Us": "/about",
  "What We Do": "/whatwedo",
  "Technologies We Use": "/technologies",
  "How we work": "/how-we-work",
  "Let's Talk": "/contact",
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Home");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(5, 35, 74, 0) -20%, #000E1F 105.53%)",
        height: "100%",
        py: 2,
        color: "white",
        px: {
          xs: 2, // phones
          sm: 3, // tablets
          md: 6, // 1024px
          lg: 10, // 1440px
          xl: 20, // 1920px+
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          mb: 2,
          textAlign: { xs: "center", md: "left" },
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
      </Box>

      {/* Menu */}
      <List>
        {navItems.map((item) =>
          item === "What We Do" ? (
            <React.Fragment key={item}>
              <ListItemButton
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              >
                <ListItemText primary={item} sx={{ color: "white" }} />
                {mobileMoreOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={mobileMoreOpen}>
                {megaMenuItems.map((section) => (
                  <Box key={section.title} sx={{ pl: 4, pr: 2 }}>
                    <Typography sx={{ color: "#ccc", fontWeight: 500, mt: 1 }}>
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
              <ListItemButton onClick={() => navigate(navRoutes[item])}>
                <ListItemText primary={item} sx={{ color: "white", pl: 2 }} />
              </ListItemButton>
            </ListItem>
          )
        )}

        {/* CTA Button */}
        <ListItem
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
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
          backgroundColor: isScrolled ? "#fff" : "transparent",
          transition: "all 0.3s ease",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.05)" : "none",
          minHeight: "84px",
          maxHeight: "84px",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ minHeight: "84px !important", height: "84px" }}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: { xs: 1, md: 2, lg: 4, xl: 9 },
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
            </Box>

            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  ModalProps={{ keepMounted: true }}
                  PaperProps={{
                    sx: {
                      width: "100%",
                      maxWidth: "100vw",
                      background:
                        "linear-gradient(0deg, rgba(5, 35, 74, 0) -20%, #000E1F 105.53%)",
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
                  alignItems: "center",
                  columnGap: 1.5,
                  mr: 6,
                }}
              >
                {navItems.map((item) =>
                  item === "What We Do" ? (
                    <Box
                      key={item}
                      onMouseEnter={() => setMenuOpen(true)}
                      // onMouseLeave={() => setMenuOpen(false)}
                      sx={{ position: "relative" }}
                    >
                      <Button
                        endIcon={<ArrowDropDownIcon />}
                        onClick={() => {
                          setSelected(item);
                          navigate(navRoutes[item]);
                        }}
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          textTransform: "none",
                          color: isScrolled ? "#0B3C7B" : "#fff",
                          borderRadius: "999px",
                          height: 40,
                          px: 3,
                          backgroundColor:
                            selected === item
                              ? isScrolled
                                ? "#E0E7FF"
                                : "#0E4FA2"
                              : "transparent",
                          "&:hover": {
                            backgroundColor:
                              selected === item
                                ? isScrolled
                                  ? "#CBD5FF"
                                  : "#0E4FA2"
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
                        fontSize: "16px",
                        fontWeight: "400",
                        textTransform: "none",
                        color: isScrolled ? "#0B3C7B" : "#fff",
                        borderRadius: "999px",
                        height: 40,
                        px: 2.5,
                        backgroundColor:
                          selected === item
                            ? isScrolled
                              ? "#E0E7FF"
                              : "#0E4FA2"
                            : "transparent",
                        "&:hover": {
                          backgroundColor:
                            selected === item
                              ? isScrolled
                                ? "#CBD5FF"
                                : "#0E4FA2"
                              : "rgba(0,0,0,0.05)",
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
                    fontWeight: 400,
                    ml: 4,
                    "&:hover": { backgroundColor: "#002366" },
                  }}
                >
                  Get a Quote
                </Button>
              </Box>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      {!isMobile && menuOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            width: {
              xs: "100vw", // Full width on mobile
              sm: "95vw",
              md: "90vw",
              lg: "84.3vw", // Consistent width on large screens
            },
            left: {
              xs: 0,
              sm: "2.5vw",
              md: "5vw",
              lg: "8vw", // Aligned same as nav button
            },
            top: "84px",
            height: {
              xs: "auto",
              md: 380,
              lg: 386, // Fixed height on large screens
            },
            overflowY: "auto",
            borderRadius: 3,
            padding: { xs: 2, sm: 3, md: 4 },
            zIndex: 1200,
            backgroundColor: "#fff",
            boxSizing: "border-box",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
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
                    fontWeight: 400,
                    color: "#898989",
                    mb: 1,
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
                      mb: 3,
                      borderRadius: 2,
                      alignItems: "flex-start",
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 40,
                        width: 40,
                        borderRadius: "8px",
                        backgroundColor: "#F5F6FA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
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
