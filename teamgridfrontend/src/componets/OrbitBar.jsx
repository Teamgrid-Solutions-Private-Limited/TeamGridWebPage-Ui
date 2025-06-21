import React from "react";
import { Box, Typography, Button } from "@mui/material";

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
        position: "absolute",
        minHeight: "calc(100vh - 64px)", // Subtract navbar height
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
            width: { xs: 300, sm: 400, md: 510 },
            height: { xs: 300, sm: 400, md: 510 },
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
            borderRadius: "55%",
          }}
        >
          {/* Original Blue Concentric Circles */}
          {[0.7, 0.5].map((scale, i) => (
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
                backgroundColor: i === 0
                  ? "rgba(11, 49, 97, 0.3)" // Outer circle: #0B3161 with 0.3 opacity
                  : "#0B3161", // Inner circle: faded version
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
              width: { xs: 100, sm: 120, md: 150 },
              height: { xs: 100, sm: 120, md: 150 },
              borderRadius: "50%",
              border: "2px solid rgba(0, 181, 255, 0.4)",
              animation: "ripple 2.5s infinite ease-out",
              zIndex: 1,
            }}
          />


          {/* Static Center Logo */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: { xs: 100, sm: 120, md: 150 },
              height: { xs: 100, sm: 120, md: 150 },
              borderRadius: "50%",
              backgroundColor: "#0F4285",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              transform: "translate(-50%, -50%)",
              animation: "heartbeat 2s infinite ease-in-out",
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

                  />
                );
              })}
            </Box>
          ))}

          {/* Rotating Icons on White Orbits */}
          {orbitLayers.map((icons, orbitIndex) => {
            const scale = orbitScales[orbitIndex];
            const baseSize = 510;
            const orbitSize = scale * baseSize;
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
                  animation: `${orbitAnimationName} ${30 + orbitIndex * 10}s linear infinite ${orbitIndex % 2 ? 'reverse' : ''}`,
                  zIndex: 2,
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
{createDots(icons.length).map((dot, dotIndex) => {
  const angle = ((dotIndex + 0.5) / icons.length) * 2 * Math.PI; // offset by half step
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return (
    <Box
      key={`rotating-dot-${orbitIndex}-${dotIndex}`}
      sx={{
        position: "absolute",
        top: `calc(50% + ${y}px - 2px)`,
        left: `calc(50% + ${x}px - 2px)`,
        width: "4px",
        height: "4px",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
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


`}</style>

    </Box>
  );
};

export default OrbitBar;
