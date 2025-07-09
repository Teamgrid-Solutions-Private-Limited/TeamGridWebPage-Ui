import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import reactIcon from '../assets/Frame 199.svg';
import jsIcon from '../assets/icons8-javascript 1.svg';
import tsIcon from '../assets/icons8-typescript 1.svg';
import htmlIcon from '../assets/icons8-html5 1.svg';
import cssIcon from '../assets/icons8-css3 1.svg';
import muiIcon from '../assets/icons8-material-ui 1.svg';
import bootstrapIcon from '../assets/icons8-bootstrap 1.svg';
import LeftImg from "../assets/Rectangle 84.svg"
const techStack = [
    { label: 'ReactJS', icon: reactIcon },
    { label: 'JavaScript', icon: jsIcon },
    { label: 'TypeScript', icon: tsIcon },
    { label: 'HTML5', icon: htmlIcon },
    { label: 'CSS3', icon: cssIcon },
    { label: 'Material UI', icon: muiIcon },
    { label: 'Bootstrap', icon: bootstrapIcon },
];

const OurTechStackSection = () => {
    return (
        <Box
            sx={{
                maxWidth: '1440px',
                mx: 'auto',
                px: { xs: 2, md: 9 },
                py: { xs: 6, md: 10 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 16,
                alignItems: 'center',
            }}
        >
            {/* LEFT IMAGE BLOCK */}
            <Box
                sx={{
                    width: '486px',
                    height: '591px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    ml: 1
                }}
            >
                <img
                    src={LeftImg} // Replace with actual image
                    alt="Team Working"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 40,
                        left: 35,
                        color: '#FFFFFF',
                        fontFamily: '"PayPal Open", sans-serif',
                        width: '436px',
                        height: '146px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '48px',
                            fontWeight: 500,
                            lineHeight: '100%',
                        }}
                    >
                        We use <Box component="span" sx={{ color: '#30ECAD' }}>modern,</Box>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '48px',
                            fontWeight: 500,
                            lineHeight: '100%',
                        }}
                    >
                        <Box component="span" sx={{ color: '#30ECAD' }}>scalable</Box> front-end technologies
                    </Typography>
                </Box>

            </Box>

            {/* RIGHT TECH STACK BLOCK */}
            <Box
                sx={{
                    width: { xs: '100%', md: '608px' },
                    height: { xs: 'auto', md: '528px' },
                    background: '#fff',
                    borderRadius: '24px',
                    // boxShadow: '0px 6px 24px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '31px',
                    p: 3,
                    opacity: 1,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 500,             // Medium = 500
                        fontSize: '56px',            // As per design
                        lineHeight: '100%',          // 1 = 100%
                        letterSpacing: '0%',
                        mb: 0,
                        color: '#000000',            // Add if needed for clarity
                    }}
                >
                    Our Tech Stack
                </Typography>


                <Typography
                    sx={{
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 400,             // Regular = 400
                        fontSize: '16px',
                        lineHeight: '150%',          // 150%
                        letterSpacing: '0%',
                        color: 'text.secondary',     // Or use '#000000' if needed
                        maxWidth: '500px',
                        mb: 4,
                    }}
                >
                    We use modern, scalable front-end technologies to build fast, responsive, and
                    modular interfaces. Our tech stack ensures performance, maintainability, and
                    future-ready web experiences.
                </Typography>

                <Grid container spacing={2}>
                    {techStack.map((item, idx) => (
                        <Grid item xs={4} sm={3} md={3} key={idx}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: '123px',
                                    height: '115px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: '16px',
                                    paddingTop: '16px',
                                    paddingRight: '29px',
                                    paddingBottom: '20px',
                                    paddingLeft: '29px',
                                    border: '1px solid #E3EBF2',
                                    opacity: 1,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={item.icon}
                                    alt={item.label}
                                    sx={{ width: 56, height: 56, mb: 1 }}
                                />
                                <Typography
                                    sx={{
                                        width: '85px',
                                        height: '11px',
                                        fontFamily: '"PayPal Open", sans-serif',
                                        fontWeight: 500,              // Medium
                                        fontSize: '16px',
                                        lineHeight: '100%',
                                        letterSpacing: '0%',
                                        color: '#05408E',
                                        textAlign: 'center',
                                        opacity: 1,
                                    }}
                                >
                                    {item.label}
                                </Typography>

                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default OurTechStackSection;
