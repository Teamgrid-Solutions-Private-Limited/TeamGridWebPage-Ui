import React from "react";
import { Box, Typography, Button } from "@mui/material";
import bgImage from "../assets/Rectangle-25.png";

const LetsTalk = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1700px",
        margin: "0 auto",
        width: "100%",
        height: { xs: "auto", md: 600 },
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: { xs: 2, md: 12 },
        py: { xs: 6, md: 0 },
      }}
    >
      <Box
        sx={{
          bgcolor: "#072449",
          color: "white",
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          maxWidth: 650,
          boxShadow: 3,
        }}
      >
        <Typography
          fontSize={{ xs: "28px", sm: "34px", md: "40px" }}
          fontWeight={700}
        >
          Let’s Build Together
        </Typography>
        <Typography variant="subtitle2" fontWeight={300} sx={{ mb: 5 }}>
          — Efficiently, Flexibly, and Reliably
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Whether you're scaling a team or shipping a project, Teamgrid is your
          partner in dependable delivery.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" }, 
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "black",
              px: 4,
              py: 1.5,
              borderRadius: 999,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
            }}
          >
            Let’s Talk
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF4D00",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 999,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                bgcolor: "#e14a00",
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

export default LetsTalk;
