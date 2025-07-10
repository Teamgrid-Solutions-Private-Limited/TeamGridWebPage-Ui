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

// Responsive center positions
const getCenterPosition = () => {
  const width = window.innerWidth;
  if (width < 600) {
    return { x: width / 2, y: 300 };
  } else if (width < 900) {
    return { x: width / 2, y: 350 };
  } else {
    return { x: 1350, y: 397 };
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

const Orbit = ({ index, size, isPaused, setIsPaused, setSelectedPlanet }) => {
  const [centerPos, setCenterPos] = useState(getCenterPosition());
  const duration = 500 + index * 20;
  const planets = orbitPlanetsData[index];
  const planetSize = window.innerWidth < 600 ? 45 : 65;

  useEffect(() => {
    const handleResize = () => {
      setCenterPos(getCenterPosition());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 4 white dots
  const dotCounts = [12, 10, 8, 4];
  const whiteDots = Array.from({ length: dotCounts[index] });
  return (
    <>
      {/* Orbit Line */}
      <Box
        sx={{
          position: "absolute",
          top: `${centerPos.y - size.height / 2}px`,
          left: `${centerPos.x - size.width / 2}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          borderRadius: "50%",
          border: "1px solid #FFFFFF36",
          zIndex: 2,
          display: { xs: "none", md: "block" },
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
          top: `${centerPos.y - size.height / 2}px`,
          left: `${centerPos.x - size.width / 2}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          borderRadius: "50%",
          zIndex: 4,
          transformOrigin: "center center",
          display: window.innerWidth < 900 ? "none" : "block",
        }}
      >
        {/* White Circles on Orbit */}
        {whiteDots.map((_, i) => {
          const angle = (360 / whiteDots.length) * i;
          const rad = (angle * Math.PI) / 180;
          const radius = size.width / 2;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          return (
            <Box
              key={`dot-${i}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 8,
                height: 8,
                backgroundColor: "#B2D2FC",
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

          return (
            <Box
              key={`planet-${i}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: planetSize,
                height: planetSize,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => setSelectedPlanet(planet)}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px 2px #fff5",
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
              </div>
            </Box>
          );
        })}
      </motion.div>
    </>
  );
};

// Mobile-friendly animated orbit
const MobileOrbit = ({ setSelectedPlanet, isPaused, setIsPaused }) => {
  const [centerPos, setCenterPos] = useState(getCenterPosition());
  const allPlanets = orbitPlanetsData.flat();
  const radius = window.innerWidth < 600 ? 120 : 150;
  const planetSize = 40;

  useEffect(() => {
    const handleResize = () => {
      setCenterPos(getCenterPosition());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 4,
      }}
    >
      {/* Mobile Orbit Circle */}
      <Box
        sx={{
          position: "absolute",
          top: `${centerPos.y - radius}px`,
          left: `${centerPos.x - radius}px`,
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          borderRadius: "50%",
          border: "1px solid #FFFFFF20",
          zIndex: 2,
        }}
      />

      {/* Animated planets on mobile */}
      <motion.div
        animate={{ rotate: isPaused ? 0 : 360 }}
        transition={{
          repeat: isPaused ? 0 : Infinity,
          duration: 60,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: `${centerPos.y - radius}px`,
          left: `${centerPos.x - radius}px`,
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          borderRadius: "50%",
          transformOrigin: "center center",
          zIndex: 4,
        }}
      >
        {allPlanets.map((planet, i) => {
          const angle = (360 / allPlanets.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <Box
              key={`mobile-planet-${i}`}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: planetSize,
                height: planetSize,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                cursor: "pointer",
                zIndex: 5,
              }}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onClick={() => setSelectedPlanet(planet)}
            >
              <motion.div
                animate={{ rotate: isPaused ? 0 : -360 }}
                transition={{
                  repeat: isPaused ? 0 : Infinity,
                  duration: 60,
                  ease: "linear",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px 2px #fff4",
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

      {/* Mobile Technology Label */}
      <Box
        sx={{
          position: "absolute",
          bottom: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Typography
          sx={{
            color: "#ffffffcc",
            fontSize: "12px",
            textAlign: "center",
            fontFamily: "PayPalOpen, Sans-serif",
          }}
        >
          Tap any technology to learn more
        </Typography>
      </Box>
    </Box>
  );
};

const CenterPiece = ({ setSelectedPlanet, selectedPlanet, setLogoZoomed }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [centerPos, setCenterPos] = useState(getCenterPosition());

  useEffect(() => {
    const handleResize = () => {
      setCenterPos(getCenterPosition());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const logoSize =
    window.innerWidth < 600
      ? { width: "200px", height: "200px" }
      : window.innerWidth < 900
      ? { width: "250px", height: "250px" }
      : { width: "491px", height: "491px" };

  return (
    <Box
      sx={{
        position: "absolute",
        top: {
          xs: `${centerPos.y - 100}px`,
          sm: `${centerPos.y - 125}px`,
          md: `${centerPos.y - 245}px`,
        },
        left: {
          xs: `${centerPos.x - 100}px`,
          sm: `${centerPos.x - 125}px`,
          md: `${centerPos.x - 245}px`,
        },
        width: logoSize.width,
        height: logoSize.height,
        zIndex: 5,
        cursor: "pointer",
      }}
    >
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
            width: { xs: "48px", sm: "64px", md: "105.97px" },
            height: { xs: "68px", sm: "90px", md: "160px" },
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
                  mt: 3,
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

  // Responsive orbit sizes
  const getOrbitSizes = () => {
    const width = window.innerWidth;
    if (width < 900) {
      return []; // No orbits on mobile
    }
    return [
      { width: 1645, height: 1645 },
      { width: 1301, height: 1301 },
      { width: 957, height: 957 },
      { width: 623, height: 623 },
    ];
  };

  const [orbitSizes, setOrbitSizes] = useState(getOrbitSizes());

  useEffect(() => {
    const handleResize = () => {
      setOrbitSizes(getOrbitSizes());
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

  return (
    <Box
      sx={{
        width: "100%",
        // height: { xs: "100vh", md: "100vh" },
        minHeight: {
          xs: "700px",
          sm: "700px",
          md: "600px",
          lg: "650px",
          xl: "720px",
        },
        position: "relative",
        backgroundColor: "#072449",
        overflow: "hidden",
        margin: "0 auto",
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "center", // optional: center horizontally
        padding: {
          xs: "80px 16px 40px", // mobile
          sm: "100px 24px 40px", // tablet
          md: "0 60px", // medium desktop
          lg: "0 100px", // large desktop
          xl: "0 140px", // very large screens
        },
        boxSizing: "border-box", // ensure padding doesn’t break layout
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          position: "none",
          "@media (min-width: 2000px)": {
           position: "absolute", // center if screen is zoomed out / ultra wide
          },
        }}
      >
        <CenterPiece
          setSelectedPlanet={setSelectedPlanet}
          selectedPlanet={selectedPlanet}
          setLogoZoomed={setLogoZoomed}
        />

        {/* Desktop Orbits */}
        {orbitSizes.map((orbit, index) => (
          <Box key={index} sx={{ display: { xs: "none", md: "block" } }}>
            <Orbit
              index={index}
              size={orbit}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
              setSelectedPlanet={handlePlanetClick}
            />
          </Box>
        ))}

        {/* Mobile Animated Orbit */}
        <MobileOrbit
          setSelectedPlanet={handlePlanetClick}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />

        {/* Main Content */}
        <Box
          sx={{
            position: "absolute",
            top: {
              xs: "64px", // Smaller offset for mobile
              sm: "100px",
              md: "180px",
              lg: "220px",
              xl: "245px",
            },
            left: {
              xs: "16px",
              sm: "24px",
              md: "80px",
              lg: "80px",
              xl: "115px",
            },
            right: {
              xs: "16px", // Allow padding on both sides on mobile
              sm: "24px",
              md: "auto",
            },
            maxWidth: {
              xs: "100%", // Full width on phones
              sm: "100%",
              md: "720px",
              lg: "800px",
              xl: "848px",
            },
            zIndex: 10,
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: {
              xs: "12px",
              sm: "14px",
              md: "16px",
            },
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              color: "#E1E0E0",
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "18px",
                lg: "20px",
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
                xs: "24px",
                sm: "32px",
                md: "48px",
                lg: "56px",
                xl: "64px",
              },
              lineHeight: {
                xs: "30px",
                sm: "40px",
                md: "52px",
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
                xs: "13px",
                sm: "15px",
                md: "18px",
                lg: "20px",
              },
              fontWeight: 300,
              lineHeight: {
                xs: "20px",
                sm: "24px",
                md: "26px",
                lg: "28px",
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
                sm: "row",
              },
              gap: {
                xs: "8px",
                sm: "12px",
                md: "16px",
              },
              mt: {
                xs: "16px",
                sm: "20px",
                md: "24px",
              },
            }}
          >
            <Button
              variant="contained"
              sx={{
                pointerEvents: "auto",
                backgroundColor: "#1A73E8",
                borderRadius: "40px",
                width: {
                  xs: "100%",
                  sm: "160px",
                  md: "180px",
                  lg: "204px",
                },
                height: {
                  xs: "44px",
                  sm: "48px",
                  md: "50px",
                },
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "16px",
                  lg: "18px",
                },
                fontWeight: 400,
                textTransform: "none",
              }}
            >
              Let's Talk
            </Button>

            <Button
              variant="outlined"
              sx={{
                pointerEvents: "auto",
                borderColor: "#ffffff99",
                color: "#fff",
                borderRadius: "40px",
                width: {
                  xs: "100%",
                  sm: "180px",
                  md: "200px",
                  lg: "230px",
                },
                height: {
                  xs: "44px",
                  sm: "48px",
                  md: "50px",
                },
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "16px",
                  lg: "18px",
                },
                fontWeight: 400,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
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
