import React from "react";
import { Box, Typography, Button } from "@mui/material";
import build from "../../assets/needd.png"; // Replace with your actual image path
import need from "../../assets/need.svg";

const Need = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "592px",
        backgroundImage: `url(${build})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        p: { xs: 2, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Photo image layered on top of build image, aligned right */}
      <Box
        component="img"
        src={need}
        alt="Right Background"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: { xs: "40%", sm: "80%", md: "100%" }, // Responsive width
          maxWidth: "1147px", // Optional: Limits maximum expansion
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Foreground box */}
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "792px" },
          minHeight: { xs: "auto", md: "428px" },
          borderRadius: "24px",
          backgroundColor: "#072449",
          p: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "#fff",
          // ml: { xs: 0, sm: 0, md: 0, lg: 1, xl: 7 },
          mx: { lg: "28px", xl: "50px" }, // default left offset
          "@media (min-width: 2000px)": {
            mx: "auto", // center if screen is zoomed out / ultra wide
          },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "28px", sm: "32px", md: "56px" },
            color: "#FAFAFA",
            lineHeight: { xs: "1.2", sm: "1.3", md: "1.2" }, // reduced line height
          }}
        >
          Need expert front-end developers?
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#FAFAFA",
            fontWeight: 400,
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          Let’s talk about how we can support your agency or project. Our
          flexible team structure lets you start fast and scale when needed.
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
              borderRadius: "16px",
              height: "59px",
              width: "174px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
              "&:hover": {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            Contact Us
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF4D00",
              color: "#FFFFFF",
              borderRadius: "16px",
              height: "59px",
              width: "212px",
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
            Schedule a call
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Need;
