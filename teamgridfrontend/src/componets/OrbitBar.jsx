import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
// Orbit icons
import orangeIcon from "../assets/Frame 157.png";
import nodeIcon from "../assets/Frame 153.png";
import figmaIcon from "../assets/Frame 155.png";
import shopifyIcon from "../assets/Frame 160.png";
import wordpressIcon from "../assets/Frame 156.png";
import bootstrapIcon from "../assets/Frame 154.png";
import materialUiIcon from "../assets/Frame 159.png";
import reactIcon from "../assets/Frame 152.png";
import postqgIcon from "../assets/Frame 158.png";
import backIcon from "../assets/Variant3.png"
import btstrapIcon from "../assets/Vector.png";
import wordprsIcon from "../assets/Vector (1).png"
import shopifyicon from "../assets/shopify (1).png";
import postQglIcon from "../assets/postgresql.png";
import nodeImgIcon from "../assets/nodejs-3.png";
import materialIcon from "../assets/material-ui-1 1.png";
import postManIcon from "../assets/Group 3 (1).png";
import figmasIcon from "../assets/figma-icon (1).png";
import reactSIcon from "../assets/react.svg"
import arrowIcon from "../assets/ci_arrow-right-lg.png"
import leftLogo from "../assets/Vector (2).png"
import rightLogo from "../assets/Vector (3).png"
import topLogo from "../assets/Vector (4).png"


const orbitLayers = [
  // First orbit (innermost) - React and Node
  [shopifyIcon, materialUiIcon],
  // Second orbit
  [orangeIcon, wordpressIcon],
  // Third orbit
  [figmaIcon, bootstrapIcon],
  // Fourth orbit (outermost)
  [reactIcon, nodeIcon, postqgIcon]
];

// Define scales for white orbit circles and use them for icon placement
const orbitScales = [3.3, 2.4, 1.6, 1];

// Create dots along the orbit paths
// const createDots = (count) => {
//   return Array.from({ length: count }, (_, i) => {
//     const angle = (i / count) * 2 * Math.PI;
//     return { angle };
//   });
// };
const createDots = (radius) => {
  const circumference = 2 * Math.PI * radius;
  const spacing = 260; // adjust to control density
  const dotCount = Math.floor(circumference / spacing);

  return Array.from({ length: dotCount }, (_, i) => {
    const angle = (i / dotCount) * 2 * Math.PI;
    return { angle };
  });
};


const OrbitBar = () => {
  // Add state to track whether hover is active on the center icon
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null); // Holds clicked icon
  const [isZooming, setIsZooming] = useState(false); // Controls zoom animation

  const handleIconClick = (icon) => {
    setIsPaused(true); // Pause animations immediately
    setIsZooming(true);
    // Use a single timeout to coordinate both changes
    setTimeout(() => {
      setSelectedIcon(icon);
      setIsZooming(false);
    }, 500);
    // Match this with your CSS transition duration
  };
  const zoomedImages = {
    [bootstrapIcon]: btstrapIcon, // Changed from figmaIcon to btstrapIcon
    [figmaIcon]: figmasIcon,
    [materialUiIcon]: materialIcon,
    [shopifyIcon]: shopifyicon,
    [wordpressIcon]: wordprsIcon,
    [reactIcon]: reactSIcon,
    [nodeIcon]: nodeImgIcon,
    [postqgIcon]: postQglIcon,
    [orangeIcon]: postManIcon,
  };
  // Determine current screen size to sync the JS radius with the CSS orbit size
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));   // <600px
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));   // 600-899px
  const baseOrbitSize = React.useMemo(() => {
    if (isXs) return 300;   // matches xs wrapper width
    if (isSm) return 400;   // matches sm wrapper width
    return 550;             // md and up wrapper width
  }, [isXs, isSm]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 50px)", // Subtract navbar height
        width: "100vw", // Full viewport width
        maxWidth: "100%", // Prevent horizontal scrollbar
        background: "radial-gradient(circle at center,#072449,#072449 100%)",
        color: "white",
        overflow: "hidden",
        top: "40px",
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        pb: { xs: 4, md: 0 }, // Add padding at the bottom for smaller screens
        mb: {xs:2,sm:2,md:4, lg: 8 }
      }}
    >
      {/* Content Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto",
          position: "relative",
          px: { xs: 2, sm: 4, md: 5.5, lg: 10.6, },

        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            position: "relative",
            maxWidth: { xs: '100%', md: 848 },
            minHeight: { xs: 'auto', md: 329 },
            zIndex: selectedIcon ? "none" : 1,
            // Lower z-index than orbiting icons
            width: "100%",
            py: { xs: 4, md: 20 },
            my: { xs: 4, md: 0 },
            mx: 1,
            transform: {
              xs: 'translate(0px, 0px)',
              sm: 'translate(12px, 8px)',
              md: 'translate(28px, 55px)',
            },
            pointerEvents: 'none',  // Make text container ignore pointer events
            '& > *': {  // But allow pointer events on child elements
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '0.8rem',  // Overrides min-width: 0px
                sm: '0.9rem',  // Overrides min-width: 600px
                md: '18px',  // Optional: override further
              },
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Powering growth through talent
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '2rem',     // 32px on mobile
                sm: '2.75rem',  // ~44px on tablets
                md: '4rem',     // 64px on desktops
              },
              lineHeight: '100%',
              letterSpacing: 0,
              mt: 1,
              width: {
                xs: '100%',    // full width on small screens
                md: '792px',   // match given width on desktop
              },
              height: {
                md: '110px',   // only apply height on larger screens
              },
            }}
          >
            Extend Your Team,<br />Accelerate Your Growth
          </Typography>

          <Box sx={{ py: { xs: 2, md: 5 } }}>
            <Typography
              sx={{
                mt: 2,
                mb: 4,
                color: "#E1E0E0",
                fontWeight: 300,
                fontSize: {
                  xs: "1rem",     // ~16px on small screens
                  md: "1.25rem",  // 20px on medium and up
                },
                lineHeight: "150%",
                letterSpacing: 0,
                // maxWidth: {
                //   xs: "100%",
                //   md: "848px", // Matches the layout width
                // },
                // height: {
                //   md: "60px",  // Apply height only on large screens
                // },
              }}
            >
              We help agencies and startups scale smarter — with dedicated professionals, high-quality <br></br>
              solutions, and flexible engagement models that fit your workflow and goals.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", }}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#072449",
                borderRadius: "40px",
                borderColor: "#444",
                color: "#FFFFFF",
                padding: "16px 32px",
                boxShadow: "none",
                width: "204px",
                height: "59px",
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "#0070FF"
                },
                pointerEvents: selectedIcon ? "none" : 'auto',
                zIndex: selectedIcon ? 0 : 3
              }}
            >
              Let's Talk
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "#FFFFFF",
                borderColor: "#444",
                borderRadius: "40px",
                padding: "16px 32px",
                fontWeight: 500,
                fontSize: "16px",
                bgcolor: "#072449",
                textTransform: "none",
                '&:hover': {
                  borderColor: "#666",
                  backgroundColor: "#0070FF",
                },
                pointerEvents: 'auto',

              }}
            >
              Explore Services →
            </Button>

          </Box>
        </Box>

        {/* Main Orbit System Wrapper */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: 300, sm: 400, md: 550 },
            height: { xs: 300, sm: 400, md: 550 },
            top: "47%",
            left: { sm: "72%", md: "70.6%", lg: "69.9%" },
            transform: "translateY(-50%)",
            borderRadius: "55%",
          }}
        >
          {/* Original Blue Concentric Circles */}
          {[0.65, 0.8, 0.95].map((scale, i) => (
            <Box
              key={`animated-ring-${i}`}
              sx={{
                position: "absolute",
                width: "0%",
                height: "0%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                backgroundColor: i % 2 === 0 ? "#0B3161" : "#0A2B55",
                animation: `rippleOrbitGrow 4s ${i * 0.8}s ease-out infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                opacity: 0,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
          ))}
          {/* Enhanced Blue Ripple Effect */}
          {[0.3, 0.6, 0.9].map((scale, i) => (
            <Box
              key={`ripple-${i}`}
              sx={{
                position: "absolute",
                width: "0%",
                height: "0%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                border: `1px solid rgba(0, 112, 255, ${0.7 - (i * 0.2)})`,
                boxShadow: `0 0 15px rgba(0, 112, 255, ${0.5 - (i * 0.15)})`,
                animation: `rippleEffect 3s ${i * 0.4}s ease-out infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                opacity: 0,
                zIndex: 1,
                backgroundColor: "transparent",
                pointerEvents: 'none',
              }}
            />
          ))}



          {/* Ripple effect outside the center icon */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 50, // start small
              height: 50,
              borderRadius: "50%",
              border: "2px solid rgba(0, 191, 255, 0.5)", // soft bluish border
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Backdrop when zoomed */}
          {selectedIcon && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                // backdropFilter: "blur(4px)",
              }}
              onClick={() => setSelectedIcon(null)}
            />
          )}

          {/* Static Center Logo */}
          <Box
            sx={{
              position: selectedIcon ? "fixed" : "absolute",
              top: selectedIcon
                ? { xs: "90%", sm: "90%", md: "75%", lg: "74%" }
                : { xs: "50%", sm: "50%", md: "50%", lg: "50%" },
              left: selectedIcon
                ? { xs: "60%", sm: "60%", md: "40%", lg: "48%" }
                : "50%",
              width: selectedIcon
                ? { xs: "100vw", sm: "100vw", md: "70vw", lg: 450 }
                : { xs: 100, sm: 130, md: 200, lg: "245px" },
              height: selectedIcon
                ? { xs: "100vh", sm: "70vh", md: "75vh", lg: 700 }
                : { xs: 100, sm: 130, md: 200, lg: "245px" },
              borderRadius: selectedIcon ? "55px" : "50%",
              backgroundColor: selectedIcon ? "#4293FC" : "#0F4285",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: selectedIcon ? 1200 : 2,
              transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              overflow: "hidden",
              boxShadow: selectedIcon ? "0 20px 50px rgba(0, 0, 0, 0.3)" : "none",
              cursor: selectedIcon ? "default" : "pointer",
              p: { xs: 2, sm: 2.5, md: 3, lg: 4 },
            }}
          >
            {!selectedIcon && (
              <>
                {/* Left Logo - Enhanced Animation */}
                <Box
                  component="img"
                  src={leftLogo}
                  alt="Left Logo"
                  sx={{
                    position: 'absolute',
                    width: { xs: '40px', sm: '50px', md: '105.97px',lg: '105.97px' },
                    height: { xs: '70px', sm: '110px', md: '103.16px' ,lg: '143.16px'},
                    top: { xs: '18px', sm: "10px", md: '55px', lg: "55px" },

                    objectFit: 'contain',
                    transform: isZooming ? {
                      xs: 'scale(5) translateX(20px) translateY(20px)',
                      sm: 'scale(6) translateX(30px) translateY(30px)',
                      md: 'scale(8) translateX(40px) translateY(40px)'
                    } : 'scale(1)',
                    opacity: isZooming ? 0 : 1,
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    zIndex: 3,
                  }}
                />

                {/* Right Logo - Enhanced Animation */}
                <Box
                  component="img"
                  src={rightLogo}
                  alt="Right Logo"
                  sx={{
                    position: 'absolute',
                    width: { xs: '20px', sm: '30px', md: '33.12px', lg: '53.12px' },
                    height: { xs: '30px', sm: '42px', md: '54.1px' ,lg: '54.1px'  },
                    top: { xs: '13px', md: '35px' },
                    right: { xs: '30px', sm: '34px', md: '73.31px' },
                    objectFit: 'contain',
                    transform: isZooming ? {
                      xs: 'scale(8) translateX(-15px) translateY(15px)',
                      sm: 'scale(10) translateX(-20px) translateY(20px)',
                      md: 'scale(12) translateX(-25px) translateY(25px)'
                    } : 'scale(1)',
                    opacity: isZooming ? 0 : 1,
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    zIndex: 3,
                  }}
                />

                {/* Top Logo - Enhanced Animation */}
                <Box
                  component="img"
                  src={topLogo}
                  alt="Top Logo"
                  sx={{
                    position: 'absolute',
                    width: { xs: '8px', sm: '20px', md: '15.94px' , lg: '23.94px'},
                    height: { xs: '11px', sm: '18px', md: '24.29px' },
                    top: { xs: '17px', sm: '19px', md: '40px', lg: '35px' },
                    right: { xs: '30px', sm: '33px', md: '73.31px' },
                    objectFit: 'contain',
                    transform: isZooming ? {
                      xs: 'scale(8) translateX(-15px) translateY(-15px)',
                      sm: 'scale(10) translateX(-20px) translateY(-20px)',
                      md: 'scale(12) translateX(-25px) translateY(-25px)'
                    } : 'scale(1)',
                    opacity: isZooming ? 0 : 1,
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    zIndex: 3,
                  }}
                />
              </>
            )}

            {selectedIcon && (
              <>
                {/* Back Button */}
                <Box
                  onClick={() => setSelectedIcon(null)}
                  sx={{
                    position: "absolute",
                    top: { xs: 35, sm: 30, md: 60, lg: 60 },
                    left: { xs: 30, sm: 30, md: 36, lg: 40 },
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 1001,
                    // px:4,
                    transition: "transform 0.2s ease",
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <img src={backIcon} alt="backBtn" />
                </Box>

                {/* Main Content with Fade-in Animation */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: { xs: "16px", sm: "20px", md: "24px" },
                    color: "#072449",
                    animation: "fadeIn 0.5s ease-out",
                  }}
                >
                  {/* Icon Title */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mt: { xs: 17, sm: 16, md: 20, lg: 20 },
                      mb: { xs: 3, sm: 2, md: 4, lg: 4 },
                      // ml: { xs: 0, sm: 0, md: 0 },
                      fontSize: { xs: "24px", sm: "28px", md: "36px" },
                      color: "#FFFFFF",
                    }}
                  >

                    {selectedIcon === bootstrapIcon ? "Bootstrap" :
                      selectedIcon === figmaIcon ? "Figma" :
                        selectedIcon === materialUiIcon ? "Material UI" :
                          selectedIcon === shopifyIcon ? "Shopify" :
                            selectedIcon === wordpressIcon ? "WordPress" :
                              selectedIcon === reactIcon ? "React" :
                                selectedIcon === nodeIcon ? "Node.js" :
                                  selectedIcon === postqgIcon ? "PostgreSQL" :
                                    selectedIcon === orangeIcon ? "Postman" : "Technology"}
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: 120, sm: 100, md: 145, lg: 145 },
                      left: { xs: 35, sm: 36, md: 50, lg: 50 },
                      width: { xs: "44px", sm: "50px", md: "56px" },
                      height: { xs: "44px", sm: "50px", md: "56px" },
                      borderRadius: "12px",
                      backgroundColor: "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={zoomedImages[selectedIcon]}
                      alt="Selected Technology"
                      style={{
                        width: "70%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Box>


                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "15px", md: "18px" },
                      lineHeight: 1.6,
                      color: "#FFFFFF",
                      fontWeight: 400,
                      // ml: { xs: 1, sm: 2, md: 0 },
                      width: { xs: "70%", sm: "38%", md: "331px", lg: "85%" },
                      height: "auto",
                      mb: 3,
                      zIndex: 900
                    }}
                  >

                    We build responsive, mobile-first websites using {selectedIcon === bootstrapIcon ? "Bootstrap's" :
                      selectedIcon === figmaIcon ? "Figma's" :
                        selectedIcon === materialUiIcon ? "Material UI's" :
                          selectedIcon === shopifyIcon ? "Shopify's" :
                            selectedIcon === wordpressIcon ? "WordPress's" :
                              selectedIcon === reactIcon ? "React's" :
                                selectedIcon === nodeIcon ? "Node.js's" :
                                  selectedIcon === postqgIcon ? "PostgreSQL's" :
                                    selectedIcon === orangeIcon ? "Postman's" : ""} powerful framework, delivering clean layouts, fast performance, and consistent design across all devices.
                  </Typography>
                  <Button
                    sx={{
                      width: { xs: "180px", sm: "180px", md: "232px", lg: "232px" },
                      height: { xs: "48px", sm: "54px", md: "59px" },
                      fontWeight: 400,
                      fontSize: { xs: "14px", sm: "15px", md: "18px" },
                      lineHeight: '150%',
                      textTransform: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: '#05408E',
                      color: '#fff',
                      borderRadius: '39px',
                      ml: { xs: 1, sm: 0, md: 7 },
                    }}
                  >
                    Explore Services
                    <img src={arrowIcon} alt="arrow" style={{ width: 20, height: 20 }} />
                  </Button>



                </Box>
              </>
            )}
          </Box>

          {/* Outer White Orbit Circles */}
          {orbitScales.map((scale, i) => (
            <Box
              key={`orbit-circle-${i}`}
              sx={{
                position: "absolute",
                width: `${scale * 100}%`,
                height: `${scale * 100}%`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(10deg)",
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                pointerEvents: 'none',
                zIndex: 1,
              }}
            >
              {/* Dots on the orbit - reduced to 3 */}
              {/* {createDots(3).map((dot, dotIndex) => {
                const angle = dot.angle;
                const radius = (scale * 0.5) * (500);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <Box
                    key={`dot-${i}-${dotIndex}`}

                  />
                );
              })} */}
            </Box>
          ))}

          {/* Rotating Icons on White Orbits */}
          {orbitLayers.map((icons, orbitIndex) => {
            const scale = orbitScales[orbitIndex];
            const orbitSize = scale * baseOrbitSize;
            const radius = orbitSize / 2;
            const orbitAnimationName = `spin-${orbitIndex}`;

            return (
              <Box
                key={`orbit-${orbitIndex}`}
                // onMouseEnter={() => setIsPaused(true)}
                //     onMouseLeave={() => setIsPaused(false)}
                sx={{
                  position: "absolute",
                  width: `${scale * 100}%`,
                  height: `${scale * 100}%`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  animation: `${orbitAnimationName} ${60 + orbitIndex * 20}s linear infinite ${orbitIndex % 2 ? 'reverse' : ''}`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              >
                {/* Orbit border */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    pointerEvents: 'none',
                  }}
                />

                {/* Dots that rotate with the icons */}
                {/* Dots that rotate with the icons */}
                {createDots(radius).map((dot, dotIndex) => {
                  const angle = dot.angle;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  return (
                    <Box
                      key={`rotating-dot-${orbitIndex}-${dotIndex}`}
                      sx={{
                        position: "absolute",
                        top: `calc(50% + ${y}px - 2px)`,
                        left: `calc(50% + ${x}px - 2px)`,
                        width: "4.9px",
                        height: "4.9px",
                        backgroundColor: "rgba(255, 255, 255, 0.93)",
                        borderRadius: "50%",
                        pointerEvents: 'none',
                      }}
                    />
                  );
                })}


                {/* Orbiting Icons */}
                {icons.map((icon, iconIndex) => {
                  const totalIcons = icons.length;
                  const angleDegrees = (iconIndex / totalIcons) * 2 * Math.PI;
                  const x = radius * Math.cos(angleDegrees);
                  const y = radius * Math.sin(angleDegrees);
                  const angle = icons.length > 1
                    ? (-Math.PI / 2) + (iconIndex / (icons.length - 1)) * Math.PI
                    : 0;
                  return (
                    <Box
                      key={`icon-${orbitIndex}-${iconIndex}`}
                      // onClick={() => {
                      //   setIsZooming(true);
                      //   setTimeout(() => {
                      //     setSelectedIcon(icon);
                      //     setIsZooming(false);
                      //   }, 400); // Match transition duration
                      // }}
                      onClick={() => handleIconClick(icon)}


                      sx={{
                        position: "absolute",
                        top: `calc(50% + ${y}px - 32px)`,
                        left: `calc(50% + ${x}px - 32px)`,
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        border: "1px solid white",
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 4px rgba(255, 255, 255, 0.2)",
                        zIndex: selectedIcon ? "none" : 50, // Highest z-index to ensure icons are always clickable
                        pointerEvents: "auto",
                        cursor: "pointer",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: "0 0 12px rgba(255, 255, 255, 0.4)",
                          zIndex: 55,
                        },
                      }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      <Box
                        component="img"
                        src={icon}
                        alt={`icon-${orbitIndex}-${iconIndex}`}
                        sx={{
                          width: 64,
                          height: 64,
                          objectFit: "contain",
                          transform: `rotate(${angle * (270 / Math.PI)}deg)`,
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            );
          })}


        </Box>
      </Box>

      {/* Orbit Animation Keyframes */}
      <style>{`       @keyframes zoomIn {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
 
@keyframes spin-0 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes spin-1 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes spin-2 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes spin-3 {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes heartbeat {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.08);
  }
}
@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.2);
    opacity: 0;
  }
}
@keyframes ripplePulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  70% {
    transform: translate(-50%, -50%) scale(2.2);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
}
@keyframes rippleOrbitGrow {
  0% {
    width: 0%;
    height: 0%;
    opacity: 0.6;
  }
  40% {
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
@keyframes rippleEffect {
  0% {
    width: "10%";
    height: "10%";
    opacity: 0;
  }
  20% {
    opacity: 0.7;
  }
  100% {
    width: "100%";
    height: "100%";
    opacity: 0;
    border-width: 1px;
  }
}
@keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

`}</style>

    </Box>
  );
};

export default OrbitBar;

