import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import HeroSection from "./HeroSection";
import WhoWeHelp from "./WhoWeHelp";
import WhatWeDo from "./WhatWeDo"; // Import the WhatWeDo component
import WhyTeamgrid from "./WhyTeamgrid"; // Import the WhyTeamgrid component
import Capabilities from "./Capabilities";
import TestimonialsSection from "./TestimonialsSection ";
import LetsBuildTogether from "./LetsBuildTogether";
import Footer from "./Footer"; // Import the Footer component
import Navbar from "./Navbar"; // Import the Navbar component

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeHelp />
      <WhatWeDo />
      <WhyTeamgrid />
      <Capabilities />
      <TestimonialsSection />
      <LetsBuildTogether />
      <Footer />
    </>
  );
};

export default Home;
