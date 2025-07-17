import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Rec1 from "../assets/Rec1.png";
import Rec2 from "../assets/Rec2.png";
import Rec3 from "../assets/Rec3.png";
import Rec4 from "../assets/Rec4.png";

const WhoWeHelp = () => {
  const theme = useTheme();
  const isBelow1400 = useMediaQuery("(max-width:1399px)");

  const imageSize = {
    width: isBelow1400 ? 220 : 272,
    height: isBelow1400 ? 260 : 325,
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        height: { xs: "auto", md: "900px" },
        bgcolor: "#fff",
        overflow: "hidden",
        px: { xs: 2, md: 2, lg: 12, xl: 12 },
        py: { xs: 8, md: 0 },
        mx: "auto",
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "253px" },
          left: { md: "%", lg: "2.5%" },
          width: { xs: "100%", sm: "400px", md: "568px" },
          px: { xs: 0, sm: 3, md: 0, lg: 6, xl: 5 },
        }}
      >
        <Typography
          fontWeight="500"
          gutterBottom
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          Who We Help
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontSize: "18px", fontWeight: "400", mb: 5 }}
        >
          A Trusted Partner for Growing Teams
        </Typography>
        <Typography
          color="#000000"
          sx={{ mb: 4, fontSize: "16px", fontWeight: "400" }}
        >
          We work with agencies, startups, and businesses of all sizes — helping
          them extend their capacity, speed up delivery, and stay focused on
          what matters most.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#05408E",
            px: 4,
            py: 1.5,
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: "400",
            fontSize: "18px",
          }}
        >
          Explore Services →
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          display: { xs: "flex", md: "block" },
          flexDirection: { xs: "column" },
          alignItems: "center",
          gap: 2,
          position: "relative",
          mt: { xs: 4, md: 0 },
        }}
      >
        {/* Small Devices */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: 2,
            width: "100%",
            px: 2,
          }}
        >
          {[Rec1, Rec2, Rec3, Rec4].map((img, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                maxWidth: 320,
                mx: "auto",
                height: "auto",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <img
                src={img}
                alt={`Rec${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Large Devices */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {/* Rec1 */}
          <Box
            sx={{
              position: "absolute",
              top: "105px",
              left: "56%",
              width: imageSize.width,
              height: imageSize.height,
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src={Rec1}
              alt="Rec1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          {/* Rec2 */}
          <Box
            sx={{
              position: "absolute",
              top: "59px",
              left: "79%",
              width: imageSize.width,
              height: imageSize.height,
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src={Rec2}
              alt="Rec2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          {/* Rec3 */}
          <Box
            sx={{
              position: "absolute",
              top: "455px",
              left: "56%",
              width: imageSize.width,
              height: imageSize.height,
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src={Rec3}
              alt="Rec3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          {/* Rec4 */}
          <Box
            sx={{
              position: "absolute",
              top: "407px",
              left: "79%",
              width: imageSize.width,
              height: imageSize.height,
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <img
              src={Rec4}
              alt="Rec4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeHelp;
