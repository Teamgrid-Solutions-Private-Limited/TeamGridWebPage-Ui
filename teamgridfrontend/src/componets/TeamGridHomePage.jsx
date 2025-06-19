// App.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import logo from "../assets/Layer_1.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TopNavBar from "./TopNavBar";
import OrbitBar from "./OrbitBar";
function TeamGridHomePage() {
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
        <TopNavBar />
        <OrbitBar/>

    </Box>
  );
}

export default TeamGridHomePage;
