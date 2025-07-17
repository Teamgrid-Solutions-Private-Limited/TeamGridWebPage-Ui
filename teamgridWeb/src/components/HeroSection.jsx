import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Assets
import centerImage from "../assets/555.png";
import P1 from "../assets/P1.png";
import P11 from "../assets/P11.png";
import P111 from "../assets/P111.png";
import P2 from "../assets/P2.png";
import P22 from "../assets/P22.png";
import P3 from "../assets/P3.png";
import P33 from "../assets/P33.png";
import P4 from "../assets/P4.png";
import P44 from "../assets/P44.png";
import back from "../assets/back.png";
import smallCircle from "../assets/smallCircle.png";

// Responsive center positions and orbit sizes
const getResponsiveConfig = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width < 600) {
    // Mobile phones
    return {
      center: { x: width * 0.45, y: height * 0.35 - 80 }, // align left
      orbitSizes: [
        { width: width * 1.0, height: width * 1.0 }, // reduced from 1.4
        { width: width * 0.7, height: width * 0.7 }, // reduced from 1.0
        { width: width * 0.2, height: width * 0.2 }, // reduced from 0.3
      ],
      logoSize: { width: width * 0.3125, height: width * 0.3125 }, // increased by 25%
      planetSize: 35,
      showOrbits: true,
      orbitOpacity: 0.3,
    };
  } else if (width < 900) {
    // Tablets
    return {
      center: { x: width / 2 + width * 0.1 - 5, y: height * 0.4 - 80 },
      orbitSizes: [
        { width: width * 1.0, height: width * 1.0 }, // reduced from 1.3
        { width: width * 0.7, height: width * 0.7 }, // reduced from 0.9
        { width: width * 0.5, height: width * 0.5 }, // reduced from 0.7
        { width: width * 0.15, height: width * 0.15 }, // reduced from 0.2
      ],
      logoSize: { width: width * 0.1875, height: width * 0.1875 }, // increased by 25%
      planetSize: 45,
      showOrbits: true,
      orbitOpacity: 0.4,
    };
  } else if (width < 1200) {
    // Small desktops (improved for 900-1200px)
    return {
      center: { x: width * 0.75 + width * 0.1 - 5, y: height * 0.5 - 220 - 80 },
      orbitSizes: [
        { width: 623, height: 623 },
        { width: 957, height: 957 },
        { width: 1301, height: 1301 },
        { width: 1645, height: 1645 }, // was 850
      ],
      logoSize: { width: 437, height: 437 }, // increased by 25% from 350
      planetSize: 55,
      showOrbits: true,
      orbitOpacity: 0.6,
    };
  } else if (width < 1600) {
    // Medium desktops
    return {
      center: { x: width * 0.75 + width * 0.1 - 5, y: height * 0.5 - 220 - 80 },
      orbitSizes: [
        { width: 623, height: 623 },
        { width: 957, height: 957 },
        { width: 1301, height: 1301 },
        { width: 1645, height: 1645 }, // was 850
      ],
      logoSize: { width: 437, height: 437 }, // increased by 25% from 350
      planetSize: 60,
      showOrbits: true,
      orbitOpacity: 0.6,
    };
  } else {
    // Large desktops and ultra-wide
    return {
      center: {
        x: (width > 1800 ? width * 0.7 : width * 0.75) + width * 0.1 - 5,
        y: height * 0.5 - 220 - 80,
      },
      orbitSizes: [
        { width: 623, height: 623 }, // 1st orbit
        { width: 957, height: 957 }, // 2nd orbit, reduced gap
        { width: 1301, height: 1301 }, // 3rd orbit
        { width: 1645, height: 1645 }, // 4th orbit
      ],
      logoSize: { width: 400, height: 400 }, // set to 400x400 for very large devices
      planetSize: 65,
      showOrbits: true,
      orbitOpacity: 0.7,
    };
  }
};

const orbitPlanetsData = [
  [
    {
      img: P1,
      name: "React",
      description:
        "A JavaScript library for building user interfaces with component-based architecture.",
    },
    {
      img: P11,
      name: "Next.js",
      description:
        "React framework for production-grade server-rendered applications.",
    },
    {
      img: P111,
      name: "Gatsby",
      description: "React-based static site generator for fast websites.",
    },
  ],
  [
    {
      img: P2,
      name: "Node.js",
      description:
        "JavaScript runtime built on Chrome's V8 engine for backend development.",
    },
    {
      img: P22,
      name: "Express",
      description:
        "Fast, unopinionated web framework for Node.js applications.",
    },
  ],
  [
    {
      img: P3,
      name: "MongoDB",
      description: "Document-based NoSQL database for modern applications.",
    },
    {
      img: P33,
      name: "PostgreSQL",
      description: "Advanced open-source relational database system.",
    },
  ],
  [
    {
      img: P4,
      name: "WordPress",
      description: "Popular open-source content management system.",
    },
    {
      img: P44,
      name: "WooCommerce",
      description: "Flexible eCommerce platform built on WordPress.",
    },
  ],
];

const Orbit = ({
  index,
  size,
  isPaused,
  setIsPaused,
  setSelectedPlanet,
  config,
}) => {
  const duration = 500 + index * 20;
  const planets = orbitPlanetsData[index];

  if (!planets || !config.showOrbits) return null;

  // Responsive dot counts
  const dotCounts = window.innerWidth < 600 ? [8, 6, 4, 2] : [12, 10, 8, 4];
  const whiteDots = Array.from({ length: dotCounts[index] || 4 });

  return (
    <>
      {/* Orbit Line */}
      <Box
        sx={{
          position: "absolute",
          top: `${config.center.y - size.height / 2}px`,
          left: `${config.center.x - size.width / 2}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          borderRadius: "50%",
          border: `1px solid rgba(255, 255, 255, ${config.orbitOpacity * 0.5})`,
          zIndex: 2,
        }}
      />

      {/* Orbit Content (Planets + White Circles) */}
      <motion.div
        animate={{ rotate: isPaused ? 0 : index % 2 === 0 ? 360 : -360 }}
        transition={{
          repeat: isPaused ? 0 : Infinity,
          duration,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: `${config.center.y - size.height / 2}px`,
          left: `${config.center.x - size.width / 2}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          borderRadius: "50%",
          zIndex: 4,
          transformOrigin: "center center",
        }}
      >
        {/* White Circles on Orbit */}
        {whiteDots.map((_, i) => {
          const angle = (360 / whiteDots.length) * i;
          const rad = (angle * Math.PI) / 180;
          const radius = size.width / 2;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          const dotSize = window.innerWidth < 600 ? 6 : 8;

          return (
            <Box
              key={`dot-${i}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: dotSize,
                height: dotSize,
                backgroundColor: `rgba(178, 210, 252, ${config.orbitOpacity})`,
                borderRadius: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            />
          );
        })}

        {/* Planets on Orbit */}
        {planets.map((planet, i) => {
          const angle = (360 / planets.length) * i;
          const rad = (angle * Math.PI) / 180;
          const radius = size.width / 2;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          // Only outermost orbit (index === 0) planets are interactive
          const interactive = index === (config.orbitSizes.length - 1);

          return (
            <Box
              key={`planet-${i}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: config.planetSize,
                height: config.planetSize,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                cursor: interactive ? "pointer" : "default",
                transition: "transform 0.2s ease",
                "&:hover": interactive
                  ? { transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(1.1)` }
                  : {},
              }}
              onMouseEnter={interactive ? () => setIsPaused(true) : undefined}
              onMouseLeave={interactive ? () => setIsPaused(false) : undefined}
              onTouchStart={interactive ? () => setIsPaused(true) : undefined}
              onTouchEnd={interactive ? () => setIsPaused(false) : undefined}
              onClick={interactive ? () => setSelectedPlanet(planet) : undefined}
            >
              <motion.div
                animate={{
                  rotate: isPaused ? 0 : index % 2 === 0 ? -360 : 360,
                }}
                transition={{
                  repeat: isPaused ? 0 : Infinity,
                  duration,
                  ease: "linear",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  boxShadow: `0 0 ${
                    window.innerWidth < 600 ? 4 : 8
                  }px 2px rgba(255, 255, 255, ${config.orbitOpacity * 0.8})`,
                }}
              >
                <img
                  src={planet.img}
                  alt={planet.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </motion.div>
            </Box>
          );
        })}
      </motion.div>
    </>
  );
};

const CenterPiece = ({
  setSelectedPlanet,
  selectedPlanet,
  setLogoZoomed,
  config,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (selectedPlanet) {
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  }, [selectedPlanet]);

  const handleLogoClick = () => {
    if (!selectedPlanet) {
      setSelectedPlanet({
        name: "Teamgrid",
        description:
          "We build scalable, intuitive digital solutions for startups and enterprises, helping them extend their teams and accelerate growth through dedicated professionals.",
        img: centerImage,
      });
      setLogoZoomed(true);
    }
  };

  const logoDisplaySize = {
    width: config.logoSize.width * 0.25,
    height: config.logoSize.height * 0.35,
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: `${config.center.y - config.logoSize.height / 2}px`,
        left: `${config.center.x - config.logoSize.width / 2}px`,
        width: `${config.logoSize.width}px`,
        height: `${config.logoSize.height}px`,
        zIndex: 5,
        cursor: "pointer",
      }}
    >
      {/* Background circle */}
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          background: "rgba(0, 123, 255, 0.2)",
          zIndex: 2,
        }}
      />

      {/* Ripple effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1.2, 2], opacity: [0, 0.3, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: "50%",
            height: "50%",
            borderRadius: "50%",
            background: "rgba(0, 123, 255, 0.2)",
            zIndex: 1,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: isZoomed ? 1 : 1,
          translateX: isZoomed && window.innerWidth >= 900 ? "-5vw" : 0,
          translateY: isZoomed && window.innerWidth >= 900 ? "-20vh" : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 3,
        }}
        onClick={handleLogoClick}
      >
        <Box
          sx={{
            width: `${logoDisplaySize.width}px`,
            height: `${logoDisplaySize.height}px`,
          }}
        >
          <img
            src={centerImage}
            alt="Center Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* Details rendered directly on the zoomed logo */}
        <AnimatePresence>
          {isZoomed && selectedPlanet && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{
                position: "fixed",
                top: window.innerWidth < 900 ? "0" : "150px",
                right: 0,
                left: window.innerWidth < 900 ? 0 : "auto",
                width: window.innerWidth < 900 ? "100vw" : "380px",
                height: window.innerWidth < 900 ? "100vh" : "590px",
                backgroundColor: "#1A73E8",
                color: "#fff",
                padding:
                  window.innerWidth < 900 ? "60px 28px 32px" : "28px 28px 32px",
                borderTopLeftRadius: window.innerWidth < 900 ? 0 : "50px",
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              <Button
                onClick={() => {
                  setSelectedPlanet(null);
                  setLogoZoomed(false);
                }}
                sx={{
                  alignSelf: "flex-start",
                  minWidth: "auto",
                  padding: 0,
                  color: "#fff",
                  mb: window.innerWidth < 900 ? 2 : 0,
                }}
              >
                <img
                  src={back}
                  alt="back"
                  style={{ height: "24px", width: "24px" }}
                />
              </Button>

              <Box sx={{ display: "flex", justifyContent: "start", mt: 3 }}>
                <img
                  src={selectedPlanet.img}
                  alt={selectedPlanet.name}
                  style={{
                    width: window.innerWidth < 600 ? "48px" : "64px",
                    height: window.innerWidth < 600 ? "48px" : "64px",
                    borderRadius: "12px",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "24px", md: "28px" },
                  fontWeight: "600",
                  mt: 1.5,
                  fontFamily: "PayPalOpen, Sans-serif",
                }}
              >
                {selectedPlanet.name}
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: "22px", md: "26px" },
                  fontWeight: 400,
                  color: "#DDE9FF",
                  fontFamily: "PayPalOpen, Sans-serif",
                }}
              >
                {selectedPlanet.description}
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#05408E",
                  borderRadius: "40px",
                  height: { xs: "50px", md: "59px" },
                  width: { xs: "100%", md: "232px" },
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 500,
                  mb:10,
                  fontFamily: "PayPalOpen, Sans-serif",
                }}
              >
                Explore Services →
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Box>
  );
};

const HeroSection = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [logoZoomed, setLogoZoomed] = useState(false);
  const [config, setConfig] = useState(getResponsiveConfig());

  useEffect(() => {
    const handleResize = () => {
      setConfig(getResponsiveConfig());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!selectedPlanet) {
      setIsPaused(false);
    }
  }, [selectedPlanet]);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
    setLogoZoomed(true);
  };

  const [isZoomedOut, setIsZoomedOut] = useState(false);

  useEffect(() => {
    const checkZoom = () => {
      const zoomLevel = window.devicePixelRatio;
      setIsZoomedOut(zoomLevel <= 0.5);
    };

    checkZoom();
    window.addEventListener("resize", checkZoom);
    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: {
          xs: "100vh",
          sm: "100vh",
          md: "600px",
          lg: "650px",
          xl: "720px",
        },
        position: "relative",
        backgroundColor: "#072449",
        overflow: "hidden",
        margin: "0 auto",
        display: "flex",
        alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
        justifyContent: "center",
        padding: {
          xs: "60px 16px 40px",
          sm: "80px 20px 40px",
          md: "0 40px",
          lg: "0 60px",
          xl: "0 80px",
        },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          position: "relative",
          "@media (min-width: 2000px)": {
            position: "absolute",
          },
        }}
      >
        <CenterPiece
          setSelectedPlanet={setSelectedPlanet}
          selectedPlanet={selectedPlanet}
          setLogoZoomed={setLogoZoomed}
          config={config}
        />

        {/* Responsive Orbits */}
        {config.orbitSizes.map((orbit, index) => (
          <Orbit
            key={index}
            index={index}
            size={orbit}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            setSelectedPlanet={handlePlanetClick}
            config={config}
          />
        ))}

        {/* Main Content */}
        <Box
          sx={{
            position: "absolute",
            top: isZoomedOut
              ? "-50px"
              : {
                  xs: "40px",
                  sm: "60px",
                  md: "-120px", // slightly up for better balance
                  lg: "-170px",
                  xl: "-130px",
                },
            left: {
              xs: "6px",
              sm: "10px",
              md: "50px", // move right for better fit
              lg: "20px",
              xl: "40px",
            },
            right: {
              xs: "16px",
              sm: "20px",
              md: "40px",
              lg: "60px",
              xl: "80px",
            },
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "520px", // reduce for better fit
              lg: "750px",
              xl: "800px",
            },
            textAlign: { xs: "center", sm: "left" },
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: {
              xs: "16px",
              sm: "18px",
              md: "20px",
            },
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              color: "#E1E0E0",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
                xl: "22px",
              },
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            Powering growth through talent
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: {
                xs: "28px",
                sm: "36px",
                md: "38px",
                lg: "56px",
                xl: "64px",
              },
              lineHeight: {
                xs: "34px",
                sm: "42px",
                md: "44px",
                lg: "60px",
                xl: "68px",
              },
            }}
          >
            Extend Your Team,
            <br />
            Accelerate Your Growth
          </Typography>

          <Typography
            sx={{
              color: "#E1E0E0",
              fontSize: {
                xs: "15px",
                sm: "16px",
                md: "16px",
                lg: "20px",
                xl: "22px",
              },
              fontWeight: 300,
              lineHeight: {
                xs: "22px",
                sm: "24px",
                md: "24px",
                lg: "28px",
                xl: "30px",
              },
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "85%",
                xl: "80%",
              },
            }}
          >
            We help agencies and startups scale smarter — with dedicated
            professionals, high-quality solutions, and flexible engagement
            models that fit your workflow and goals.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
              },
              gap: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
              mt: {
                xs: "20px",
                sm: "24px",
                md: "28px",
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: "auto",
              },
            }}
          >
            <Button
              variant="contained"
              sx={{
                pointerEvents: "auto",
                backgroundColor: "#0070FF",
                borderRadius: "39px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "204px",
                },
                height: {
                  xs: "56px",
                  sm: "58px",
                  md: "59px",
                },
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "18px",
                },
                fontWeight: 400,
                color: "#FFFFFF",
                textTransform: "none",
                padding: {
                  xs: "16px 24px",
                  sm: "16px 28px",
                  md: "16px 32px",
                },
                "&:hover": {
                  backgroundColor: "#0060E6",
                },
              }}
            >
              Let's Talk
            </Button>

            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#072449",
                pointerEvents: "auto",
                border: "1px solid #FFFFFF45",
                color: "#fff",
                borderRadius: "39px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "230px",
                },
                height: {
                  xs: "56px",
                  sm: "58px",
                  md: "59px",
                },
                padding: {
                  xs: "14px 24px",
                  sm: "14px 28px",
                  md: "14px 32px",
                },
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "18px",
                },
                fontWeight: 400,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#FFFFFF98",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              Explore Services →
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
