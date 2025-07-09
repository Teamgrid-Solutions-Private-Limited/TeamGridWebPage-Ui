import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "../assets/ci_check-all.svg";
import ArrowForwardIcon1 from "../assets/ci_arrow-right-lg (2).svg";
import ArrowForwardIcon from "../assets/ci_arrow-right-lg (1).svg";


const models = [
  {
    title: "Flexible Time & Material Model for Evolving Needs",
    points: [
      "Pay only for hours worked",
      "Ideal for ongoing or evolving tasks",
      "Transparent weekly timesheets",
    ],
  },
  {
    title: "Dedicated Front-End Developer",
    points: [
      "Full-time resource working under your brand",
      "Monthly fixed cost",
      "Flexible replacement or scaling",
    ],
  },
  {
    title: "Fixed-Cost Model for Defined Scopes",
    points: [
      "Ideal for defined scopes like landing pages or small apps",
      "Detailed estimate upfront",
      "Milestone-based delivery & billing",
    ],
  },
];

const EngagementElement = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, sm: 4, md: 8, lg: 9 },
        py: { xs: 4, sm: 6, md: 10 },
      }}
    >
      {/* Top Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          mb: 4,
          ml: 1
        }}
      >
        <Box>
          <Typography
            sx={{
              width: "477px",
              height: "34px",
              fontFamily: '"PayPal Open", sans-serif',
              fontWeight: 500,
              fontSize: "48px",
              lineHeight: "100%",
              color: "#000000",
              textAlign: "center",
              opacity: 1,
              mb:3
            }}
          >
            Engagement Models
          </Typography>

          <Typography
            sx={{
              width: "954px",
              height: "27px",
              fontFamily: '"PayPal Open", sans-serif',
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
              opacity: 1,
            }}
          >
            Choose the engagement model that best suits your project needs
          </Typography>

        </Box>

        <Button
          variant="outlined"
          endIcon={
            <img
              src={ArrowForwardIcon}
              alt="arrow"
              style={{
                width: "16px",
                height: "16px",
                opacity: 1,
              }}
            />
          }
          sx={{
            mt: { xs: 3, md: 0 },
            borderRadius: "16px",
            textTransform: "none",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "150%",
            px: "40px",
            py: "16px",
            border: "1px solid #CACACA",
            color: "#000",
          }}
        >
          Explore Services
        </Button>
      </Box>

      {/* Model Cards */}
      <Grid container spacing={3.5} ml={1}>
        {models.map((model, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box
              sx={{
                width: "410px",
                height: "350px",
                borderRadius: "24px",
                pt: "32px",
                px: "34px",
                pb: "24px",
                backgroundColor: "#F5F7FA",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                opacity: 1,
                // Remove old p: "32px"
              }}
            >
              <Typography
                sx={{
                  width: "330px", // optional: remove if auto-width preferred
                  height: "46px", // optional
                  fontFamily: '"PayPal Open", sans-serif',
                  fontWeight: 500, // corresponds to "Medium"
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  color: "#05408E",
                  textAlign: "left", // default fallback; set to "center" if needed
                  opacity: 1,
                  // mb: 2,
                }}
              >
                {model.title}
              </Typography>
              <Box
                sx={{
                  width: "336px",
                  height: "124px",
                  opacity: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  // gap: "10px",
                  my: 2
                }}
              >
                {model.points.map((point, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: "336px",
                      height: "52px",
                      // borderLeft: "5px solid #00C853",
                      borderRadius: "8px",
                      // paddingLeft: "35px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      opacity: 1,
                    }}
                  >
                    <img
                      src={CheckCircleIcon}
                      alt="check"
                      style={{
                        width: 24,
                        height: 24,
                        opacity: 1,
                        transform: "rotate(0deg)",
                      }}
                    />
                    <Typography
                      sx={{
                        width: "301px",
                        height: "48px",
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        color: "#140E13",
                        opacity: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>



              {/* Buttons */}
              <Box sx={{ display: "flex", gap: 2, mt: "auto" }}>
                <Button
                  // variant="contained"
                  endIcon={
                    <img
                      src={ArrowForwardIcon1}
                      alt="arrow"
                      style={{
                        width: "16px",
                        height: "16px",
                        opacity: 1,
                      }}
                    />
                  }
                  sx={{
                    width: "144px",
                    // height: "48px",
                    border: "1px solid #D7D7D7",
                    borderRadius: "12px",
                    backgroundColor: "#05408E",
                    // px: "24px",
                    py: "10px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#003E79" },
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    height: "48px", // optional if you want fixed height
                  }}
                >
                  <Typography
                    sx={{
                      width: "69px", // as per spec
                      height: "24px",
                      fontFamily: '"PayPal Open", sans-serif',
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      color: "#FAFAFA", // ensure white text on blue background
                      opacity: 1,
                    }}
                  >
                    Reach us
                  </Typography>
                </Button>

                <Box
                  sx={{
                    width: "144px",
                    height: "48px",
                    border: "1px solid #D7D7D7",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    opacity: 1,
                  }}
                >
                  <Typography
                    sx={{
                      width: "96px",
                      height: "24px",
                      fontFamily: '"PayPal Open", sans-serif',
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      color: "#140E13",
                      opacity: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Know More..
                  </Typography>
                </Box>

              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EngagementElement;
