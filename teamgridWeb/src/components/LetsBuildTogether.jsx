import React from "react";
import { Box, Typography, Button } from "@mui/material";
import build from "../assets/Build.png"; // Replace with your actual image path

const LetsBuildTogether = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "592px",
        backgroundImage: `url(${build})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: {
          xs: "center", // center on phones
          md: "center", // maybe center on tablets
          lg: "flex-start", // align children to left on desktops
        },
        p: { xs: 2, md: 8 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "792px" },
          minHeight: { xs: "auto", md: "428px" },
          maxWidth: "1440px",
          borderRadius: "24px",
          backgroundColor: "#072449",
          p: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "#fff",
          mx: {lg:"28px",xl:"50px"}, // default left offset
          "@media (min-width: 2000px)": {
            mx: "auto", // center if screen is zoomed out / ultra wide
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { xs: "28px", sm: "32px", md: "56px" },
            color: "#FAFAFA",
          }}
        >
          Let’s Build Together
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "400",
            color: "#FAFAFA",
          }}
        >
          — Efficiently, Flexibly, and Reliably
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: { xs: "14px", md: "20px" },
          }}
        >
          Whether you're scaling a team or shipping a project, Teamgrid is your
          partner in dependable delivery.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#140E13",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
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
              backgroundColor: "#FF4D00",
              color: "#FFFFFF",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
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
