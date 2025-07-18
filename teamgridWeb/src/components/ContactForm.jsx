import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Divider,
  Stack,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const services = ['Web Development', 'UI/UX Design', 'Mobile App', 'Other'];

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: 20,
  padding: '6px 16px',
}));

export default function ContactForm({ onClose }) {
  return (
    <Box
      sx={{
        width: '1200px',
        height: '748px',
        bgcolor: '#fff',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: 6,
        top:"100px",
        left :"150px"
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 10,
          bgcolor: '#f1f1f1',
          '&:hover': { bgcolor: '#e0e0e0' },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Grid container sx={{ height: '100%' }}>
        {/* Left Panel */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: '#002c6a',
            color: '#fff',
            px: { xs: 3, md: 6 },
            py: { xs: 6, md: 10 },
            position: 'relative',
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Let’s Build <br />
            Something{' '}
            <Box component="span" color="#1AE0AE">
              Together
            </Box>
          </Typography>
          <Typography mt={2} maxWidth="400px">
            We’re here to answer questions, scope projects, and help you find the right talent.
          </Typography>

          {/* Placeholder for Orbit or Team Image */}
          <Box
            component="img"
            src="/path-to-your-image.png" // replace with actual image path
            alt="team"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              maxHeight: '240px',
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* Right Panel */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 10 }, overflowY: 'auto' }}
        >
          <Typography variant="h6" fontWeight={600}>
            Contact us
          </Typography>
          <Typography mt={1} color="text.secondary" maxWidth="90%">
            Let’s connect and bring your ideas to life — we’re just a message away.
          </Typography>

          <Stack spacing={2} mt={3}>
            <TextField label="Name" fullWidth />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="Company" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Email" fullWidth />
              </Grid>
            </Grid>
            <TextField label="Type of Service You Need" select fullWidth>
              {services.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Describe Your Project / Requirements"
              fullWidth
              multiline
              rows={4}
            />
          </Stack>

          {/* Buttons */}
          <Stack direction="row" spacing={2} mt={3}>
            <StyledButton variant="contained" sx={{ bgcolor: '#0070F3' }}>
              Free Consultation
            </StyledButton>
            <StyledButton variant="outlined">Request a Talent Match</StyledButton>
            <StyledButton variant="outlined">NDA Required</StyledButton>
          </Stack>

          {/* Submit / Reset */}
          <Stack direction="row" spacing={2} mt={4}>
            <StyledButton variant="contained" sx={{ bgcolor: '#0070F3' }}>
              Submit
            </StyledButton>
            <StyledButton variant="outlined">Reset</StyledButton>
          </Stack>

          {/* Footer */}
          <Divider sx={{ my: 4 }} />
          <Stack direction="row" spacing={4} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon fontSize="small" />
              <Typography variant="body2">hello@teamgrid.io</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LanguageIcon fontSize="small" />
              <Typography variant="body2">www.teamgrid.io</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
