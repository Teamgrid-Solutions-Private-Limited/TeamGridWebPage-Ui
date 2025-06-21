import React from "react";
import { Box, Typography, Button } from "@mui/material";
import build from "../assets/Rectangle 25.png"; // Replace with your actual image path
 
const LetsBuildTogether = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "592px", // fixed height as per your spec
        backgroundImage: `url(${build})`, // Example bg, replace with yours
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        p: { xs: 2, md: 8 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "792px", // Fixed width as per Figma
          height: "auto", // Hug content (height adjusts as per content)
          minHeight: "428px", // Ensure minimum height matches Figma
          borderRadius: "24px", // Rounded corners
          backgroundColor: "#002B5B", // Example background color (change as per design or use image)
          padding: "64px", // Padding as per Figma
          display: "flex",
          flexDirection: "column", // Vertical flow
          gap: "10px", // Gap between elements
          color: "#fff", // Text color white for contrast
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Let’s Build Together
        </Typography>
        <Typography variant="subtitle1">
          — Efficiently, Flexibly, and Reliably
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Whether you're scaling a team or shipping a project, Teamgrid is your
          partner in dependable delivery.
        </Typography>
 
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            Let’s Talk
          </Button>
 
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF5A00", // Example orange color for CTA
              color: "#fff",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e04800",
              },
            }}
          >
            Request a Free Quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
 
export default LetsBuildTogether;