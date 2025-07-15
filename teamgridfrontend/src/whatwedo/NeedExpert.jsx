import React from "react";
import { Box, Typography, Button } from "@mui/material";
import build from "../assets/Rectangle 83 (1).svg";

const NeedExpert = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "592px" },
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#085BC8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left content block */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "792px",
          backgroundColor: "#002B5B",
          borderRadius: "24px",
          padding: { xs: 4, sm: 6, md: 8 },
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "#FFFFFF",
          zIndex: 2,
          m: { xs: 2, sm: 4, md: "auto" },
          ml: { md: 8,lg:10 },
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "36px", sm: "44px", md: "56px" },
            lineHeight: 1,
            letterSpacing: "100%",
            color: "#FAFAFA",
          }}
        >
          Need expert front-end developers?
        </Typography>

        {/* <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "18px" },
            lineHeight: 1.5,
            color: "#FAFAFA",
          }}
        >
          — Efficiently, Flexibly, and Reliably
        </Typography> */}

        <Typography
          // variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "16px", sm: "18px", md: "18px" },
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#FAFAFA",
            mt: 2,
          }}
        >
          Let’s talk about how we can support your agency or project. Our flexible team structure lets you start fast and scale when needed.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mt: 4,
            width: "100%",
          }}
        >
          <Button
            // variant="contained"
            sx={{
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27px",
              backgroundColor: "#FFFFFF",
              color: "#140E13",
              borderRadius: "16px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              width: { xs: "100%", sm: "auto", md: "174px" },
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            Contact Us
          </Button>

          <Button
            // variant="contained"
            sx={{
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27px",
              backgroundColor: "#FF4D00",
              color: "#FFFFFF",
              borderRadius: "16px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              width: { xs: "100%", sm: "auto", },
              "&:hover": {
                backgroundColor: "#E04800",
              },
            }}
          >
            Schedule a Call
          </Button>
        </Box>
      </Box>

      {/* Background image on the right */}
      <Box
        component="img"
        src={build}
        alt="build"
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "593px",
          width: "1147px",
          objectFit: "cover",
          opacity: 1,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default NeedExpert;
