import React from 'react';
import { Box, Typography, TextField, IconButton, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import sendIcon from "../assets/send.png";
import mailIcon from "../assets/mail.png"
const Footer = () => {
  const headingStyles = {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0%',
    color: '#FFFFFF',
    mb: 2,
  };

  const subTextStyles = {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0%',
    color: '#A8B6C5',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#FFFFFF',
      backgroundColor: 'transparent',
      color: "#FFFFFF"
    },
  };

  return (
    <Box sx={{ bgcolor: '#072449', color: '#fff', 
    px: { xs: 3, sm: 4, md: 3, lg: 14 }, py: 6, width: '100%' }}>
      {/* Top Row: 4 Columns */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          mb: 4,
          ml: { md: 1 }
        }}
      >
        {/* Blogs */}
        <Box sx={{ minWidth: 200, mb: 2 }}>
          <Typography variant="h6" sx={headingStyles}>Blogs</Typography>
          {['How AI Is Transforming Web & Mobile App Development in 2025', 'Choosing the Right Tech Stack for Scalable Product Development', 'Design Smarter: Why UI/UX Matters More Than Ever in AI-Powered Apps', 'Fixed-Cost vs. Dedicated Teams: What Works Best for Your Next Project?'].map((text, idx) => (
            <Typography key={idx} sx={{ ...subTextStyles, mb: 1 }}>
              {text}
            </Typography>
          ))}
        </Box>

        {/* Quick Links */}
        <Box sx={{ minWidth: 120, mb: 2 }}>
          <Typography variant="h6" sx={headingStyles}>Quick Links</Typography>
          {['Home', 'About Us', 'What We Do', 'Technologies We Use', 'How We Work', "Let's Talk"].map((link, idx) => (
            <Typography key={idx} sx={{ ...subTextStyles, mb: 1, cursor: 'pointer' }}>
              {link}
            </Typography>
          ))}
        </Box>

        {/* Services */}
        <Box sx={{ minWidth: 150, mb: 2 }}>
          <Typography variant="h6" sx={headingStyles}>Services</Typography>
          {['Web Development', 'Mobile App Development', 'UI/UX Design', 'AI/ML & GenAI Solutions', 'E-commerce', 'WordPress & Shopify'].map((service, idx) => (
            <Typography key={idx} sx={{ ...subTextStyles, mb: 1 }}>
              {service}
            </Typography>
          ))}
        </Box>

        {/* Policies */}
        <Box sx={{ minWidth: 150, mb: 2 }}>
          <Typography variant="h6" sx={headingStyles}>Policies</Typography>
          {['Terms & Conditions', 'Privacy Policy', 'NDA Available on Request'].map((policy, idx) => (
            <Typography key={idx} sx={{ ...subTextStyles, mb: 1 }}>
              {policy}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Middle Row: Contact + Newsletter */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          borderTop: '1px solid #2E4B7D',
          pt: 4,
          pb: 4,
          gap: 4,
        }}
      >
        {/* Contact */}
        <Box
          sx={{
            minWidth: { xs: '100%', sm: 280 },
            maxWidth: 400,
            mb: 2,
            boxSizing: 'border-box',
            px: { xs: 0, sm: 0,md:1,lg:1 },
          }}
        >
          <Typography variant="h6" sx={headingStyles}>
            Need Assistance? Call Us!
          </Typography>
          <Typography
            sx={{
              ...subTextStyles,
              mb: 2,
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            Our experts are here to help. Contact us for personalised guidance or any queries about your project or digital solution.
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 'bold', mb: 1 }}>
            +91 - 98304 42666
          </Typography>
          <Typography sx={subTextStyles}>
            Mail us at info@teamgrid.com
          </Typography>
        </Box>

        {/* Newsletter - Fixed section */}
        <Box
          sx={{
            minWidth: { xs: '100%', sm: 280 },
            maxWidth: 400,
            px: { xs: 0, sm: 0 ,lg:0},
          }}
        >
          <Typography variant="h6" sx={headingStyles}>
            Stay Connected with Our Newsletter
          </Typography>
          <Typography
            sx={{
              ...subTextStyles,
              mb: 2,
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            Stay updated with expert insights, smart development tips, and exclusive Teamgrid news—delivered straight to your inbox.
          </Typography>
          <Box display="flex" alignItems="center" width="100%">
            {/* Mail Box */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#2E4B7D',
                borderRadius: '30px',
                alignItems: 'center',
                px: 2,
                py: 1,
                flex: 1, // Take available width
              }}
            >
              <Box display="flex" alignItems="center" pr={1}>
                <img src={mailIcon} alt="mailIcon" width={24} height={24} />
              </Box>

              <TextField
                variant="standard"
                placeholder="Your email ID"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    color: '#fff',
                    fontSize: 16,
                  },
                }}
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              />


            </Box>

            {/* Send Button */}
            <Button
              // variant="contained"
              sx={{
                ml: 0, // space between box and button
                // borderRadius: '30px',
                px: 0,
                py: 1.5,
                // backgroundColor: '#2E4B7D',
                textTransform: 'none',
              }}
            >
              <img src={sendIcon} alt="sendIcon" width={24} height={24} />

            </Button>
          </Box>

        </Box>
      </Box>

      {/* Bottom Row: Disclaimer */}
    <Box
  sx={{
    borderTop: '1px solid #2E4B7D',
    pt: 2,
    pl: { xs: 1, sm: 0, md: 2 ,lg:1}, // Responsive left padding
    pr: { xs: 1, sm: 2 },        // Optional right padding for small screens
  }}
>
  <Typography
    sx={{
      fontSize: 12,
      color: '#B0C4DE',
      mb: 1,
      display: "flex",
      textAlign: { xs: "left", sm: "center", md: "center" }, // md kept unchanged
      flexWrap: "wrap", // Ensures proper text wrapping
    }}
  >
    <span><strong>Disclaimer :</strong>&nbsp;Content and services on this site are for general information only and may change. Teamgrid is not liable for outcomes influenced by third-party tools or evolving technologies.</span> 
  </Typography>

  <Typography
    sx={{
      fontSize: 12,
      color: '#B0C4DE',
      textAlign: { xs: "left", sm: "center", md: "center" }, // md layout unchanged
    }}
  >
    © 2025 Teamgrid. All rights reserved.
  </Typography>
</Box>

    </Box>
  );
};

export default Footer;