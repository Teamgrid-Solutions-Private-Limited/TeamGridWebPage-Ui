import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Orbit icons
import reactIcon from "../assets/react-2.png";
import nodeIcon from "../assets/Frame 153.png";
import figmaIcon from "../assets/Frame 155.png";
import shopifyIcon from "../assets/Frame 160.png";
import wordpressIcon from "../assets/Frame 156.png";
import bootstrapIcon from "../assets/Frame 154.png";
import materialUiIcon from "../assets/material-ui-1 1.png";
import orangeIcon from "../assets/Frame 157.png";
import middleTopIcon from "../assets/Group 8.png";

const orbitLayers = [
  // First orbit (innermost) - React and Node
  [reactIcon, nodeIcon],
  // Second orbit
  [figmaIcon, shopifyIcon],
  // Third orbit
  [wordpressIcon, bootstrapIcon],
  // Fourth orbit (outermost)
  [materialUiIcon, orangeIcon]
];

// Define scales for white orbit circles and use them for icon placement
const orbitScales = [2.9, 2.3, 1.5, 0.9];

// Create dots along the orbit paths
const createDots = (count) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI;
    return { angle };
  });
};

const OrbitBar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        minHeight: "calc(100vh - 64px)", // Subtract navbar height
        width: "100vw", // Full viewport width
        maxWidth: "100%", // Prevent horizontal scrollbar
        background: "radial-gradient(circle at center, #0a1a3b 0%, #08152d 100%)",
        color: "white",
        overflow: "hidden",
        top: "40px",
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
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
            maxWidth: { xs: '100%', md: 600 },
            zIndex: 10,
            width: "100%",
            my: { xs: 4, md: 0 }
          }}
        >
          <Typography variant="overline" sx={{ color: "#c0c0c0", display: "block", mb: 1 }}>
            Powering growth through talent
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mt: 1,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Extend Your Team,<br />Accelerate Your Growth
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: 4,
              color: "#b0b0b0",
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: "90%"
            }}
          >
            We help agencies and startups scale smarter — with dedicated professionals, high-quality
            solutions, and flexible engagement models that fit your workflow and goals.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#007bff",
                borderRadius: 999,
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: "#0056b3"
                }
              }}
            >
              Let's Talk
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "#444",
                borderRadius: 999,
                px: 3,
                py: 1,
                '&:hover': {
                  borderColor: "#666",
                  backgroundColor: "rgba(255,255,255,0.05)"
                }
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
            width: { xs: 300, sm: 400, md: 500 },
            height: { xs: 300, sm: 400, md: 500 },
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
          }}
        >
          {/* Original Blue Concentric Circles */}
          {[0.7, 0.50].map((scale, i) => (
            <Box
              key={`circle-${i}`}
              sx={{
                position: "absolute",
                width: `${scale * 100}%`,
                height: `${scale * 100}%`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                backgroundColor: `rgba(0, 50, 100, ${0.1 + i * 0.05})`,
                zIndex: 1,
              }}
            />
          ))}

          {/* Static Center Logo */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 100, sm: 120, md: 150 },
              height: { xs: 100, sm: 120, md: 150 },
              borderRadius: "50%",
              backgroundColor: "#0f3d7a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
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
              {createDots(3).map((dot, dotIndex) => {
                const angle = dot.angle;
                const radius = (scale * 0.5) * (500);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <Box
                    key={`dot-${i}-${dotIndex}`}
                    sx={{
                      position: "absolute",
                      top: `calc(50% + ${y}px - 2px)`,
                      left: `calc(50% + ${x}px - 2px)`,
                      width: "4px",
                      height: "4px",
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      borderRadius: "50%",
                    }}
                  />
                );
              })}
            </Box>
          ))}

          {/* Rotating Icons on White Orbits */}
          {orbitLayers.map((icons, orbitIndex) => {
            const scale = orbitScales[orbitIndex];
            return (
              <Box
                key={`orbit-${orbitIndex}`}
                sx={{
                  position: "absolute",
                  width: `${scale * 100}%`,
                  height: `${scale * 100}%`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(10deg)",
                  borderRadius: "50%",
                  animation: `spin ${30 + orbitIndex * 10}s linear infinite ${orbitIndex % 2 ? "reverse" : ""}`,
                  zIndex: 3,
                }}
              >
                {icons.map((icon, iconIndex) => {
                  const angle = (iconIndex / icons.length) * 2 * Math.PI;
                  const radius = (scale * 0.5) * 500;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  return (
                    <Box
                      key={`icon-${orbitIndex}-${iconIndex}`}
                      sx={{
                        position: "absolute",
                        top: `calc(50% + ${y}px - 25px)`,
                        left: `calc(50% + ${x}px - 25px)`,
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        animation: `counter-spin ${30 + orbitIndex * 10}s linear infinite ${orbitIndex % 2 ? "" : "reverse"}`,
                      }}
                    >
                      <Box
                        component="img"
                        src={icon}
                        alt={`icon-${orbitIndex}-${iconIndex}`}
                        sx={{
                          width: 40,
                          height: 40,
                          objectFit: "contain",
                          filter: "brightness(1.2)",
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
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>
    </Box>
  );
};

export default OrbitBar;
