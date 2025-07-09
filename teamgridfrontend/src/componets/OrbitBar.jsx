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
import centerLogo from "../assets/Group 8.svg";
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
  const [centerLogoZoomed, setCenterLogoZoomed] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null); // Holds clicked icon
  const [showContent, setShowContent] = useState(false);
  // Fade-in state for info panel
  const [infoPanelVisible, setInfoPanelVisible] = useState(false);


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

  const handleOrbitIconClick = (icon) => {
    setIsPaused(true);
    setCenterLogoZoomed(true);
    setSelectedIcon(icon);

    // Delay showing content until after zoom animation
    setTimeout(() => {
      setShowContent(true);
    }, 700); // Match this with your zoom animation duration
  };

  // Fade-in effect for info panel
  React.useEffect(() => {
    if (showContent) {
      // Small delay to trigger fade-in after content is mounted
      const timer = setTimeout(() => setInfoPanelVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setInfoPanelVisible(false);
    }
  }, [showContent]);

  // Reset function
  const resetCenterLogo = () => {
    setShowContent(false);
    setCenterLogoZoomed(false);
    setIsPaused(false);
    setTimeout(() => {
      setSelectedIcon(null);
    }, 300); // Small delay for smoother transition
  };
  // // Modify the icon click handler
  // const handleOrbitIconClick = (icon) => {
  //   setCenterLogoZoomed(true);
  //   setIsPaused(true);
  //   setTimeout(() => {
  //     setSelectedIcon(icon);
  //   }, 700); // match the zoom transition duration
  // };

  // // Add reset function
  // const resetCenterLogo = () => {
  //   setCenterLogoZoomed(false);
  //   setIsPaused(false);
  // };
  // Determine current screen size to sync the JS radius with the CSS orbit size
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));   // <600px
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));   // 600-899px
  const baseOrbitSize = React.useMemo(() => {
    if (isXs) return 300;   // matches xs wrapper width
    if (isSm) return 400;   // matches sm wrapper width
    return 550;             // md and up wrapper width
  }, [isXs, isSm]);
  const isMd = useMediaQuery(theme.breakpoints.only("md"));  // 900px–1199px
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));  // 1200px–1535px
  const zoomTransform = React.useMemo(() => {
    if (!centerLogoZoomed) return "scale(1) translateY(0)";
    if (isXs) return "scale(45) translateY(16px) translateX(14px)";
    if (isSm) return "scale(32) translateY(28px) translateX(22px)";
    if (isMd) return "scale(30) translateY(47px) translateX(38px)";
    if (isLg) return "scale(19) translateY(51px) translateX(41px)";
    return "scale(19) translateY(51px) translateX(41px)"; // fallback for xl and above
  }, [centerLogoZoomed, isXs, isSm, isMd, isLg]);

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
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        pb: { xs: 4, md: 0 }, // Add padding at the bottom for smaller screens
        mb: { xs: 2, sm: 2, md: 4, lg: 4 }
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
            // zIndex: 1,
            zIndex: centerLogoZoomed ? 0 : 2,  // push behind zoomed image

            transition: "opacity 0.5s ease", // optional smooth transition

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
                borderRadius: "12px",
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
                pointerEvents: 'auto',
                zIndex: 3
              }}
            >
              Let's Talk
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "#FFFFFF",
                borderColor: "#444",
                borderRadius: "12px",
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
            top: "50%",
            left: { sm: "65%", md: "63%", lg: "69.7%" },
            transform: "translateY(-50%)",
            borderRadius: "55%",
          }}
        >
          {/* Original Blue Concentric Circles */}
          {/* Original Blue Concentric Circles - Updated with smaller ripple */}
          {[0.5, 0.4, 0.3].map((scale, i) => (
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
                animation: `rippleOrbitGrow 3s ${i * 0.5}s ease-out infinite`, // Faster animation
                animationPlayState: isPaused ? 'paused' : 'running',
                opacity: 0,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
          ))}
          {/* {[0.7, 0.6, 0.5].map((scale, i) => (
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
                animation: `rippleOrbitGrow 4s ${i * 0.7}s ease-out infinite`,
                animationPlayState: isPaused ? 'paused' : 'running',
                opacity: 0,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
          ))} */}


          {/* Static Center Logo */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: "50%", sm: "50%", md: "50%", lg: "50%" },
              left: "50%",
              width: { xs: 90, sm: 130, md: 200, lg: "245px" },
              height: { xs: 90, sm: 130, md: 200, lg: "245px" },
              borderRadius: "50%",
              backgroundColor: "#0F4285",
              // boxShadow: centerLogoZoomed ? 8 : undefined,
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: selectedIcon ? 1200 : 2,

              transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              overflow: "visible",
              cursor: "pointer",
              p: { xs: 2, sm: 2.5, md: 3, lg: 4 },
            }}
            onClick={centerLogoZoomed ? resetCenterLogo : undefined}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: { xs: "40px", sm: "100px", md: "120px", lg: "105.97px", },
                height: { xs: "50px", sm: "90px", md: "140px", lg: "160px", },

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: selectedIcon ? 2200 : 2,
                transform: zoomTransform,
              transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",

                position: "relative",
                pointerEvents: centerLogoZoomed ? "auto" : "none",
                overflow: "visible",
              }}
            >
              <Box
                component="img"
                src={centerLogo}
                alt="centeredLogo"
                sx={{

                  pointerEvents: "none",

                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  // transform: centerLogoZoomed ? "scale(9.5)" : "scale(1)",
                  zIndex: centerLogoZoomed ? 1200 : 3,
                  // boxShadow: centerLogoZoomed ? "0 8px 32px 8px rgba(0,0,0,0.25)" : undefined,
                }}
              />
            </Box>
          </Box>

          {showContent && selectedIcon && (
            <Box
              sx={{
                position: "absolute",
                top: { xs: -12, sm: 0, md: 20, lg: 23 },
                left: { xs: 40, sm: 0, md: 60, lg: 60 },
                width: "100%",
                height: "100%",
                zIndex: 1200, // Below zoomed logo but above other elements
                // pointerEvents: "auto",
                opacity: infoPanelVisible ? 1 : 0,
                transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Back Button */}
              <Box
                onClick={resetCenterLogo}
                sx={{
                  position: "absolute",
                  top: { xs: 35, sm: 10, md: 60, lg: 60 },
                  left: { xs: 30, sm: 10, md: 36, lg: 40 },
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  pointerEvents: "auto",
                  zIndex: 9501,
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
                  zIndex: 4001,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 120, sm: 100, md: 145, lg: 145 },
                    left: { xs: 35, sm: 16, md: 50, lg: 50 },
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

                {/* Icon Title */}
                <Typography
                  sx={{

                    fontWeight: 500,
                    mt: { xs: 20, sm: 20, md: 29, lg: 26 },
                    mb: { xs: 3, sm: 2, md: 4, lg: 4 },
                    ml: { xs: 2.5, sm: 0, md: 3, lg: 3 },
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



                {/* Description */}
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "15px", md: "18px" },
                    lineHeight: 1.6,
                    color: "#FFFFFF",
                    fontWeight: 400,
                    ml: { xs: 2.5, sm: 0, md: 3, lg: 3 },
                    width: { xs: "80%", sm: "55%", md: "331px", lg: "65%" },
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
                    lineHeight: '190%',
                    textTransform: 'none',
                    py: "16px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#05408E',
                    color: '#fff',
                    borderRadius: '39px',
                    ml: { xs: 3, sm: 0, md: 3, lg: 3 },
                  }}
                >
                  Explore Services
                  <img src={arrowIcon} alt="arrow" style={{ width: 20, height: 20 }} />
                </Button>



              </Box>
            </Box>
          )}

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
                  transform: "translate(-55%, -50%)",
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
                      onClick={() => handleOrbitIconClick(icon)}
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
                        zIndex: 50,
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
                      onMouseLeave={() =>
                        // !centerLogoZoomed && 
                        setIsPaused(false)}
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
    width: 90%;
    height: 90%;
    opacity: 0;
  }
}
@keyframes rippleEffect {
  0% {
    width: "10%";
    height: "10%";
    opacity: 1;
  }
  20% {
    opacity: 1.7;
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

