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
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "white",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                width: "100%",
                zIndex: 1100,
                px: 6
            }}
        >
            <Toolbar disableGutters>
                <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "end" }}>
                        <img src={logo} alt="logo" style={{ height: 42, marginLeft: 8 }} />
                        {/* <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0b63e5" }}>eamgrid</Typography> */}
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button variant="contained" sx={{ backgroundColor: "#f5f7fa", color: "#0b3c7b", borderRadius: 999, textTransform: "none", fontSize: "15px" }}>Home</Button>
                        <Button sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "15px" }}>About Us</Button>
                        <Box>
                            <Button onClick={handleClick} endIcon={<ArrowDropDownIcon />} sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "15px" }}>
                                What We Do
                            </Button>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem onClick={handleClose} sx={{ textTransform: "none", fontSize: "15px" }}>Web Development</MenuItem>
                                <MenuItem onClick={handleClose} sx={{ textTransform: "none", fontSize: "15px" }}>Mobile Apps</MenuItem>
                                <MenuItem onClick={handleClose} sx={{ textTransform: "none", fontSize: "15px" }}>Consulting</MenuItem>
                            </Menu>
                        </Box>
                        <Button sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "15px" }}>Technologies We Use</Button>
                        <Button sx={{ color: "#0b3c7b", textTransform: "none", fontSize: "15px" }}>How we work</Button>
                        <Button sx={{ color: "#0b3c7b", textTransform: "none" }}>Let's Talk</Button>
                    </Box>

                    <Button variant="contained" sx={{ backgroundColor: "#003087", borderRadius: 999, px: 3, textTransform: "none", fontSize: "15px" }} onClick={() => alert('Get a Quote Clicked!')}>
                        Get a Quote
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default TopNavBar