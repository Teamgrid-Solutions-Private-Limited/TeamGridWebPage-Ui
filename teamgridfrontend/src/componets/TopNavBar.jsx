import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import logo from "../assets/Layer_1.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
const TopNavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        // <AppBar
        //     position="fixed"
        //     sx={{
        //         backgroundColor: "white",
        //         boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
        //         width: "100%",
        //         zIndex: 1100,
        //         px: 6
        //     }}
        // >
        <AppBar
            position="fixed"
            className="css-rs9v32"
            sx={{
                backgroundColor: "white",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                width: "100%",
                zIndex: 1100,
                px: 6,
                py: 1.5,
                height: 80
            }}
        >

            <Toolbar disableGutters>
                <Box sx={{
                    color: "rgb(20, 14, 19)",
                    fontSize: "18px",
                    lineHeight: 1,
                    fontFamily: `"PayPal Open", Arial, sans-serif`,
                    fontWeight: 400,
                    backgroundColor: "rgb(255,255,255)",
                    width: "100%",
                }}>
                    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "end" }}>
                            <img src={logo} alt="logo" style={{ height: 60, marginLeft: 6 }} />
                            {/* <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0b63e5" }}>eamgrid</Typography> */}
                        </Box>

                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button variant="contained" sx={{ backgroundColor: "#f5f7fa", color: "#0b3c7b", borderRadius: 999, textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 500 }}>Home</Button>
                            <Button sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400 }}>About Us</Button>
                            <Box>
                                <Button onClick={handleClick} endIcon={<ArrowDropDownIcon />} sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400 }}>
                                    What We Do
                                </Button>
                                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <MenuItem onClick={handleClose} sx={{ textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400 }}>Web Development</MenuItem>
                                    <MenuItem onClick={handleClose} sx={{ textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400 }}>Mobile Apps</MenuItem>
                                    <MenuItem onClick={handleClose} sx={{ textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400 }}>Consulting</MenuItem>
                                </Menu>
                            </Box>
                            <Button sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400 }}>Technologies We Use</Button>
                            <Button sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "18px", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400 }}>How we work</Button>
                            <Button sx={{ color: "#0b3c7b", textTransform: "none", lineHeight: 1.5, fontFamily: `"PayPal Open", Arial, sans-serif`, fontWeight: 400,fontSize:`18px` }}>Let's Talk</Button>
                        </Box>

                        <Button variant="contained" sx={{ backgroundColor: "#003087", borderRadius: 999, px: 3, textTransform: "none", fontSize: "18px" }} onClick={() => alert('Get a Quote Clicked!')}>
                            Get a Quote
                        </Button>
                    </Container>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TopNavBar