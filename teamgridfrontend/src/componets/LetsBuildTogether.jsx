import React from "react";
import { Box, Typography, Button } from "@mui/material";
import build from "../assets/Rectangle 25.png";

const LetsBuildTogether = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "auto", md: "592px" },
        backgroundImage: `url(${build})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: { xs: 2, sm: 4, md: 15,lg:15},
        py: { xs: 8, sm: 10, md: 0 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '792px',
          backgroundColor: '#002B5B',
          borderRadius: '24px',
          padding: { xs: 4, sm: 6, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          color: '#FFFFFF',
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: '36px', sm: '44px', md: '56px' },
            lineHeight: 1,
            letterSpacing: '0%',
            color: '#FAFAFA',
          }}
        >
          Let's Build Together
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '16px', sm: '18px' },
            lineHeight: 1.5,
            color: '#FAFAFA',
          }}
        >
          — Efficiently, Flexibly, and Reliably
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '16px', sm: '18px', md: '20px' },
            lineHeight: '30px',
            letterSpacing: '0%',
            color: '#FFFFFF',
            mt: 2,
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
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '27px',
              backgroundColor: '#FFFFFF',
              color: '#140E13',
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          >
            Let's Talk
          </Button>

          <Button
            variant="contained"
            sx={{
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '27px',
              backgroundColor: '#FF5A00',
              color: '#FFFFFF',
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#E04800',
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
