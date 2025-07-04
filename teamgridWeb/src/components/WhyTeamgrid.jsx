import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import verifyIcon from "../assets/verify.png";
import TeamImage from "../assets/teamgrid.png";

const features = [
  {
    title: "Right Talent, Matched Your Needs",
    description:
      "We align expertise with your business objectives and workflows.",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Work the way you prefer — retainers, sprints, or fixed-cost projects.",
  },
  {
    title: "Trustworthy and Confidential",
    description:
      "NDA-backed, process-driven, and fully aligned with your brand.",
  },
  {
    title: "Optional Project Oversight",
    description:
      "You stay in control — with or without project management support.",
  },
  {
    title: "Seamless Collaboration",
    description: "Slack, Trello, GitHub, or your tools — we work your way.",
  },
];

const WhyTeamgrid = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        bgcolor: "#fff",
        pt: { xs: 2, sm: 4, md: 8 },
        pb: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 }, // Add horizontal padding for all sizes
        ml: { xs: 0, sm: 2, md: 2, lg: 5, xl: "90px" }, // Reduce left margin on mobile
      }}
    >
      {/* Heading Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          mb: { xs: 3, sm: 4, md: 4 },
          gap: { xs: 2, sm: 3, md: 0 },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "auto" } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "500",
              mb: 1,
              textAlign: "left",
              fontSize: { xs: "24px", sm: "32px", md: "56px" }, // Responsive font sizes
              lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              color: "#140E13",
            }}
          >
            Why Teamgrid
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "left",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: "400",
              lineHeight: { xs: 1.4, sm: 1.5 },
            }}
          >
            Flexible Talent. Reliable Delivery. Scalable Results.
          </Typography>
        </Box>

        <Button
          variant="outlined"
          sx={{
            borderRadius: "39px",
            px: { xs: 2, sm: 3 },
            py: { xs: 1.2, sm: 1.5 },
            mr: { xs: 0, md: 10 },
            textTransform: "none",
            width: { xs: "100%", sm: "240px" }, // Full width on mobile
            maxWidth: "240px",
            height: { xs: "48px", sm: "59px" },
            color: "black",
            borderColor: "#CACACA",
            fontSize: { xs: "14px", sm: "18px" },
            "&:hover": {
              borderColor: "primary.main",
              fontWeight: "400",
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          Explore Services →
        </Button>
      </Box>

      {/* Image + Features Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, sm: 4, md: 4 },
          alignItems: "flex-start",
        }}
      >
        {/* Left Image */}
        <Box
          component="img"
          src={TeamImage}
          alt="Teamgrid working"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "45%",
              lg: "40%",
            },
            maxWidth: { xs: "100%", sm: "500px", md: "none" },
            height: "auto",
            objectFit: "cover",
            borderRadius: { xs: 1, sm: 2 },
            mx: { xs: 0, sm: "auto", md: 0 }, // Center on small screens
          }}
        />

        {/* Right Features List */}
        <Box sx={{ 
          flex: 1, 
          pl: { xs: 0, md: 6 },
          width: { xs: "100%", md: "auto" }
        }}>
          <List sx={{ p: 0 }}>
            {features.map((feature, index) => (
              <ListItem
                key={index}
                sx={{
                  mb: { xs: 1.5, sm: 2 },
                  px: 0,
                  alignItems: "flex-start",
                  flexDirection: { xs: "row" },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: { xs: "25px", sm: "30px" },
                    mt: { xs: "3px", sm: "5px" },
                  }}
                >
                  <Box
                    component="img"
                    src={verifyIcon}
                    alt="Checkmark"
                    sx={{ 
                      width: { xs: "15px", sm: "17.73px" }, 
                      height: { xs: "7px", sm: "8.47px" } 
                    }}
                  />
                </ListItemIcon>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "500",
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      color: "#05408E",
                      lineHeight: { xs: 1.2, sm: 1.3 },
                      mb: { xs: 0.5, sm: 1 },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "14px", md: "16px" },
                      fontWeight: "400",
                      color: "#140E13",
                      lineHeight: { xs: 1.4, sm: 1.5 },
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyTeamgrid;