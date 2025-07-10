import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ReactLogo from "../../assets/react.svg";
import JsLogo from "../../assets/js.svg";
import TsLogo from "../../assets/ts.svg";
import HtmlLogo from "../../assets/html.svg";
import CssLogo from "../../assets/css.svg";
import MuiLogo from "../../assets/mui.svg";
import BsLogo from "../../assets/boots.svg";
import techstake from "../../assets/techstake.png";

const techStack = [
  { name: "ReactJS", icon: ReactLogo },
  { name: "JavaScript", icon: JsLogo },
  { name: "TypeScript", icon: TsLogo },
  { name: "HTML5", icon: HtmlLogo },
  { name: "CSS3", icon: CssLogo },
  { name: "Material UI", icon: MuiLogo },
  { name: "Bootstrap", icon: BsLogo },
];

const OurTechStack = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        maxWidth: "1440px", // Limit width on large screens
        mx: "auto", // Horizontally center the container
        px: { xs: 2, sm: 3, md: 10 , lg:11, xl:10 }, // Responsive horizontal padding
        py: { xs: 6, sm: 8, md: 12 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* Left Image & Overlay Text */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "420px", md: "486px" },
          height: { xs: "auto", md: "591px" },
          borderRadius: "24px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={techstake}
          alt="Tech Stack Illustration"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.74) 90%)",
          }}
        />

        {/* Text Overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: 32,
            left: 24,
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "48px" },
              fontWeight: 500,
            }}
          >
            We use <span style={{ color: "#30ECAD" }}>modern,</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "48px" },
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#30ECAD" }}>scalable</span> front-end
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "48px" },
              fontWeight: 500,
            }}
          >
            technologies
          </Typography>
        </Box>
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 1, width: "100%", ml: 5 }}>
        <Typography
          fontWeight={500}
          sx={{
            mb: 2,
            fontSize: { xs: "28px", sm: "36px", md: "56px" },
            color: "#140E13",
          }}
        >
          Our Tech Stack
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: 1.6,
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 400,
            color: "#000",
          }}
        >
          We use modern, scalable front-end technologies to build fast,
          responsive, and modular interfaces. Our tech stack ensures
          performance, maintainability, and future-ready web experiences.
        </Typography>

        {/* Responsive Tech Card Grid */}
        <Grid container spacing={2}>
          {techStack.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card
                elevation={1}
                sx={{
                  borderRadius: "16px",
                  textAlign: "center",
                  py: 3,
                  px: 2,
                  height: "115px",
                  width: "123px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #CFE5FF",
                  boxShadow: "none",
                }}
              >
                <Box
                  sx={{
                    mb: 1,
                    width: 56,
                    height: 56,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={tech.icon}
                    alt={tech.name}
                    sx={{ width: 56, height: 56 }}
                  />
                </Box>
                <Typography
                  fontSize="16px"
                  fontWeight="500"
                  sx={{ color: "#05408E" }}
                >
                  {tech.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurTechStack;
