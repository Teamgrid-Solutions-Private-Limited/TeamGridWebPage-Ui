import React from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
 
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#072449', color: '#fff', px: 8, py: 6, width: '100%' }}>
      {/* Top Row: 4 Columns */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          mb: 4,
        }}
      >
        {/* Blogs */}
        <Box sx={{ minWidth: 200, mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Blogs</Typography>
          {['How AI Is Transforming Web & Mobile App Development in 2025', 'Choosing the Right Tech Stack for Scalable Product Development', 'Design Smarter: Why UI/UX Matters More Than Ever in AI-Powered Apps', 'Fixed-Cost vs. Dedicated Teams: What Works Best for Your Next Project?'].map((text, idx) => (
            <Typography key={idx} sx={{ mb: 1, fontSize: 14, lineHeight: 1.5 }}>
              {text}
            </Typography>
          ))}
        </Box>
 
        {/* Quick Links */}
        <Box sx={{ minWidth: 120, mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Quick Links</Typography>
          {['Home', 'About Us', 'What We Do', 'Technologies We Use', 'How We Work', 'Let’s Talk'].map((link, idx) => (
            <Typography key={idx} sx={{ mb: 1, fontSize: 14, lineHeight: 1.5, cursor: 'pointer' }}>
              {link}
            </Typography>
          ))}
        </Box>
 
        {/* Services */}
        <Box sx={{ minWidth: 150, mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Services</Typography>
          {['Web Development', 'Mobile App Development', 'UI/UX Design', 'AI/ML & GenAI Solutions', 'E-commerce', 'WordPress & Shopify'].map((service, idx) => (
            <Typography key={idx} sx={{ mb: 1, fontSize: 14, lineHeight: 1.5 }}>
              {service}
            </Typography>
          ))}
        </Box>
 
        {/* Policies */}
        <Box sx={{ minWidth: 150, mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Policies</Typography>
          {['Terms & Conditions', 'Privacy Policy', 'NDA Available on Request'].map((policy, idx) => (
            <Typography key={idx} sx={{ mb: 1, fontSize: 14, lineHeight: 1.5 }}>
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
    gap: 4, // adds space between items on smaller screens
  }}
>
  {/* Contact */}
  <Box
    sx={{
      minWidth: 280,
      maxWidth: 400,
      mb: 2,
      boxSizing: 'border-box',
      px: 2,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
      Need Assistance? Call Us!
    </Typography>
    <Typography
      sx={{
        fontSize: 14,
        mb: 2,
        lineHeight: 1.5,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      Our experts are here to help. Contact us for personalised guidance or any queries about your project or digital solution.
    </Typography>
    <Typography sx={{ fontSize: 16, fontWeight: 'bold', mb: 1 }}>
      +91 - 98304 42666
    </Typography>
    <Typography sx={{ fontSize: 14 }}>
      Mail us at info@teamgrid.com
    </Typography>
  </Box>

  {/* Newsletter */}
  <Box
    sx={{
      minWidth: 280,
      maxWidth: 400,
      px: 2,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
      Stay Connected with Our Newsletter
    </Typography>
    <Typography
      sx={{
        fontSize: 14,
        mb: 2,
        lineHeight: 1.5,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      Stay updated with expert insights, smart development tips, and exclusive Teamgrid news—delivered straight to your inbox.
    </Typography>
    <Box
      sx={{
        display: 'flex',
        bgcolor: '#2E4B7D',
        borderRadius: '30px',
        alignItems: 'center',
        px: 2,
      }}
    >
      <TextField
        variant="standard"
        placeholder="Your email ID"
        InputProps={{
          disableUnderline: true,
          style: { color: '#fff', fontSize: 14 },
        }}
        sx={{ flex: 1 }}
      />
      <IconButton sx={{ color: '#fff' }}>
        <SendIcon />
      </IconButton>
    </Box>
  </Box>
</Box>

 
      {/* Bottom Row: Disclaimer */}
      <Box sx={{ borderTop: '1px solid #2E4B7D', pt: 2 }}>
        <Typography sx={{ fontSize: 12, color: '#B0C4DE', mb: 1 }}>
          <strong>Disclaimer :</strong> Content and services on this site are for general information only and may change. Teamgrid is not liable for outcomes influenced by third-party tools or evolving technologies.
        </Typography>
        <Typography sx={{ fontSize: 12, color: '#B0C4DE' }}>
          © 2025 Teamgrid. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
 
export default Footer;