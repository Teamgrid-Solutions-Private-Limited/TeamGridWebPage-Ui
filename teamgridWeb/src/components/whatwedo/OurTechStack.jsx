import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";

// Icons (You can replace with your own SVGs or images)
import ReactLogo from "../../assets/reactw.png";
import JsLogo from "../../assets/js.png";
import TsLogo from "../../assets/ts.png";
import HtmlLogo from "../../assets/html.png";
import CssLogo from "../../assets/css.png";
import MuiLogo from "../../assets/mui.png";
import BsLogo from "../../assets/bootsw.png";
import techstake from "../../assets/techstake.png";

// Or use image URLs
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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 0 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
        ml: 5,
      }}
    >
      {/* Left Image and Text */}
      <Box
        sx={{
          position: "relative",
          width: "486px",
          height: "591px",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={techstake}
          alt="Tech Stack Illustration"
          sx={{
            width: "486px",
            height: "591px",
            objectFit: "cover",
          }}
        />

        {/* Overlay gradient */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.74) 90%)",
          }}
        />

        {/* Overlay Text */}
        <Box
          sx={{
            position: "absolute",
            bottom: 32,
            left: 24,
            color: "#fff",
          }}
        >
          <Typography sx={{ fontSize: "48px", fontWeight: 500 }}>
            We use <span style={{ color: "#30ECAD" }}>modern,</span>
          </Typography>
          <Typography sx={{ fontSize: "48px", fontWeight: 500 }}>
            <span style={{ color: "#30ECAD" }}>scalable</span> front-end
          </Typography>
          <Typography sx={{ fontSize: "48px", fontWeight: 500 }}>
            technologies
          </Typography>
        </Box>
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 1, height: "428px", width: "588px", ml: 12 }}>
        <Typography
          fontWeight="500"
          sx={{ mb: 2, fontSize: { xs: "28px", md: "56px", color: "#140E13" } }}
        >
          Our Tech Stack
        </Typography>
        <Typography
          sx={{
            mb: 4,
            lineHeight: 1.6,
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
          }}
        >
          We use modern, scalable front-end technologies to build fast,
          responsive, and modular interfaces. Our tech stack ensures
          performance, maintainability, and future-ready web experiences.
        </Typography>

        {/* Tech Cards Grid */}
        <Grid container spacing={4}>
          {" "}
          {/* Change spacing from 2 to 4 or more */}
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
                  width:"123px"
                }}
              >
                <Box
                  sx={{
                    height: "40px",
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    style={{ width: 56, height: 56 }}
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
