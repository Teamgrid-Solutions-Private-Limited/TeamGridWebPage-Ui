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
import middleTopIcon from "../assets/Group 8.png";

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
        position: "absolute",
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
      }}
    >
      {/* Content Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            position: "relative",
            maxWidth: { xs: '100%', md: 848 },
            minHeight: { xs: 'auto', md: 329 },
            zIndex: 10,
            width: "100%",
            py: { xs: 4, md: 20 },

            my: { xs: 4, md: 0 },
            mx: 1,
            transform: {
              xs: 'translate(0px, 0px)',      // No shift on mobile
              sm: 'translate(12px, 8px)',     // Slight shift on tablet
              md: 'translate(28px, 55px)',    // More shift on desktop
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
              fontFamily: '"PayPal Open", Arial, sans-serif',
              fontWeight: 500,
              lineHeight: "150%",
            }}
          >
            Powering growth through talent
          </Typography>

          <Typography
            sx={{
              fontFamily: `"PayPal Open", Arial, sans-serif`,
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
          <Box sx={{ py: { xs: 2, md: 8 } }}>
            <Typography
              sx={{
                mt: 2,
                mb: 4,
                color: "#E1E0E0",
                fontFamily: `"PayPal Open", Arial, sans-serif`,
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
              We help agencies and startups scale smarter — with dedicated professionals, high-quality
              solutions, and flexible engagement models that fit your workflow and goals.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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
                fontFamily: `"PayPal Open", Arial, sans-serif`,
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "#0070FF"
                }
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
                fontFamily: `"PayPal Open", Arial, sans-serif`,
                fontWeight: 500,
                fontSize: "16px",
                bgcolor: "#072449",
                textTransform: "none",
                '&:hover': {
                  borderColor: "#666",
                  backgroundColor: "#0070FF",
                },
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
            top: "45%",
            left: { sm: "72%", md: "72%" },
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



          {/* Static Center Logo */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: { xs: 100, sm: 120, md: "245px" },
              height: { xs: 100, sm: 120, md: "245px" },
              borderRadius: "50%",
              backgroundColor: "#0F4285",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              pointerEvents: "auto",
              transform: "translate(-50%, -50%)",
              // animation: "heartbeat 2s infinite ease-in-out",
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            // Pause rotations on hover
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            <img
              src={middleTopIcon}
              alt="Center Icon"
              style={{
                width: "60%",
                height: "60%",
                objectFit: "contain"
              }}
            />
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
                sx={{
                  position: "absolute",
                  width: `${scale * 100}%`,
                  height: `${scale * 100}%`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  animation: `${orbitAnimationName} ${60 + orbitIndex * 20}s linear infinite ${orbitIndex % 2 ? 'reverse' : ''}`,
                  // Apply play state based on hover
                  animationPlayState: isPaused ? 'paused' : 'running',
                  zIndex: 2,
                  pointerEvents: "none",
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
                      }}
                    />
                  );
                })}


                {/* Orbiting Icons */}
                {icons.map((icon, iconIndex) => {
                  const totalIcons = icons.length;

                  const angle = icons.length > 1
                    ? (-Math.PI / 2) + (iconIndex / (icons.length - 1)) * Math.PI
                    : 0;
                  const angleDegrees = (iconIndex / totalIcons) * 2 * Math.PI; // full circle spacing

                  const x = radius * Math.cos(angleDegrees);
                  const y = radius * Math.sin(angleDegrees);


                  return (
                    <Box
                      key={`icon-${orbitIndex}-${iconIndex}`}
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
                        zIndex: 3,
                      }}
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
      <style>{`
 
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



`}</style>

    </Box>
  );
};

export default OrbitBar;
