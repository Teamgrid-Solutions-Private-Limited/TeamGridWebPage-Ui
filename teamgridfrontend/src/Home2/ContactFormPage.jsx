import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import leftImage from "../assets/Rectangle 107.svg"; // Placeholder for left section image
const ContactFormPage = () => {
  return (
    <Grid container direction="row" alignItems="stretch" sx={{ minHeight: '90vh', maxWidth: 1200, minWidth: 650, mx: 'auto', borderRadius: 3, boxShadow: 3, overflow: 'hidden', background: '#fff' }}>
      {/* Left Section */}
      <Grid
        item
        xs={6}
        sx={{
          background: '#002366',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          py: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1} sx={{ fontSize: 22 }}>
          Let’s Build <span style={{ color: '#00E676' }}>Something Together</span>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 14, textAlign: 'center' }}>
          We’re here to answer questions, scope projects, and help you find the right talent.
        </Typography>
        <Box mt={18} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <img src={leftImage} alt="Team" style={{  width: "508px", height: "380px", objectFit: 'cover' }} />
        </Box>
      </Grid>

      {/* Right Section - Form */}
      <Grid
        item
        xs={6}
        sx={{
          backgroundColor: '#fff',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" mb={1} sx={{ fontSize: 18 }}>
          Contact us
        </Typography>
        <Typography variant="body2" mb={2} sx={{ fontSize: 13 }}>
          Let’s connect and bring your ideas to life — we’re just a message away.
        </Typography>

        <Box component="form">
          <TextField fullWidth label="Name" variant="outlined" size="small" sx={{ mb: 1.5 }} />
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Company" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" type="email" variant="outlined" size="small" />
            </Grid>
          </Grid>

          <TextField
            select
            fullWidth
            label="Type of Service You Need"
            variant="outlined"
            size="small"
            sx={{ my: 1.5 }}
          >
            <MenuItem value="web">Web Development</MenuItem>
            <MenuItem value="mobile">Mobile App</MenuItem>
            <MenuItem value="design">UI/UX Design</MenuItem>
          </TextField>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Describe Your Project / Requirements"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <Button variant="contained" color="primary" size="small">
              Free Consultation
            </Button>
            <Button variant="outlined" size="small">Request a Talent Match</Button>
            <Button variant="outlined" color="secondary" size="small">
              NDA Required
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="contained" color="primary" type="submit" size="small">
              Submit
            </Button>
            <Button variant="outlined" size="small">Reset</Button>
          </Box>
        </Box>

        {/* Footer Links */}
        <Box mt={2}>
          <Typography variant="body2" sx={{ fontSize: 12 }}>📧 hello@teamgrid.io</Typography>
          <Typography variant="body2" sx={{ fontSize: 12 }}>🌐 www.teamgrid.io</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactFormPage;
