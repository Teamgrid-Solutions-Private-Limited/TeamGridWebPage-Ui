import React from "react";
import { Box } from "@mui/material";
import reactIcon from "../assets/react.svg";
import figmaIcon from "../assets/figma-icon.png";
import wordpressIcon from "../assets/Frame 156.png";

const icons = [
  { src: reactIcon, size: 80, orbitSize: 300, top: "10%", left: "50%" },
  { src: figmaIcon, size: 80, orbitSize: 450, top: "50%", left: "80%" },
  { src: wordpressIcon, size: 80, orbitSize: 600, top: "80%", left: "40%" },
];

const OrbitGraphics = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: { xs: 0, md: "5%" },
        top: { xs: "20%", md: "10%" },
        width: "700px",
        height: "700px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Orbit Rings */}
      {[300, 450, 600].map((size, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: `${size}px`,
            height: `${size}px`,
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%",
            animation: `rotate ${60 + i * 20}s linear infinite`,
          }}
        />
      ))}

      {/* Icons */}
      {icons.map((icon, index) => (
        <Box
          key={index}
          component="img"
          src={icon.src}
          alt="orbit-icon"
          sx={{
            position: "absolute",
            top: icon.top,
            left: icon.left,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            transform: "translate(-50%, -50%)",
            animation: `orbit-icon-rotate ${60 + index * 20}s linear infinite reverse`,
          }}
        />
      ))}
    </Box>
  );
};

export default OrbitGraphics;
