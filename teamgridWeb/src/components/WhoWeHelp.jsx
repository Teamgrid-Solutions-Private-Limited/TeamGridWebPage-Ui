import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Rec1 from "../assets/Rec1.png";
import Rec2 from "../assets/Rec2.png";
import Rec3 from "../assets/Rec3.png";
import Rec4 from "../assets/Rec4.png";

const WhoWeHelp = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        height: { xs: "auto", md: "900px" },
        bgcolor: "#fff",
        overflow: "hidden",
        px: { xs: 2, md: 0 },
        pt: { xs: 8, md: 0 },
        pb: { xs: 10, md: 0 },
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          top: { md: "253px" },
          left: { md: "120px" },
          width: { xs: "100%", sm: "400px", md: "468px" },
          px: { xs: 0, sm: 3, md: 0 },
        }}
      >
        <Typography
          // variant="h3"
          fontWeight="500"
          gutterBottom
          sx={{
            fontSize: { xs: "32px", md: "56px" },
            // fontFamily: "PayPalOpen , Sans-serif",
          }}
        >
          Who We Help
        </Typography>
        <Typography
          // variant="subtitle1"
          color=""
          gutterBottom
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            // fontFamily: "PayPalOpen , Sans-serif",
          }}
        >
          A Trusted Partner for Growing Teams
        </Typography>
        <Typography
          color=" #000000"
          sx={{
            mb: 4,
            fontSize: "16px",
            fontWeight: "400",
            // fontFamily: "PayPalOpen , Sans-serif",
          }}
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
    {/* Images Section */}
<Box
  sx={{
    display: { xs: "flex", md: "block" },
    flexDirection: { xs: "column" },
    alignItems: { xs: "center" },
    gap: 2,
    position: "relative",
    mt: { xs: 4, md: 0 },
  }}
>
  {/* For small devices: stacked in a wrapper box */}
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

  {/* For large devices: use absolute layout */}
  <Box sx={{ display: { xs: "none", md: "block" } }}>
    {/* Rec1 */}
    <Box
      sx={{
        position: "absolute",
        top: "105.66px",
        left: "851px",
        width: "272.87px",
        height: "325.12px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <img src={Rec1} alt="Rec1" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
    </Box>

    {/* Rec2 */}
    <Box
      sx={{
        position: "absolute",
        top: "59.21px",
        left: "1146.13px",
        width: "272.87px",
        height: "325.16px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <img src={Rec2} alt="Rec2" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
    </Box>

    {/* Rec3 */}
    <Box
      sx={{
        position: "absolute",
        top: "454.78px",
        left: "851px",
        width: "272.87px",
        height: "325.16px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <img src={Rec3} alt="Rec3" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
    </Box>

    {/* Rec4 */}
    <Box
      sx={{
        position: "absolute",
        top: "407.37px",
        left: "1146.13px",
        width: "272.87px",
        height: "325.16px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <img src={Rec4} alt="Rec4" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }} />
    </Box>
  </Box>
</Box>

    </Box>
  );
};

export default WhoWeHelp;
