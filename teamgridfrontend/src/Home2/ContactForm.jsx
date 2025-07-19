import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, TextField, Typography, Button, Checkbox,
  FormControlLabel, FormGroup, InputAdornment, IconButton, Grid, LinearProgress
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ContactForm = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    topics: [],
    file: null,
    googleDriveLink: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [linkAdded, setLinkAdded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTopicChange = (event) => {
    const { name, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      topics: checked
        ? [...prev.topics, name]
        : prev.topics.filter((t) => t !== name),
    }));
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleGoogleDriveLink = (e) => {
    e.preventDefault();
    const link = window.prompt('Paste your Google Drive link here:');
    if (link) {
      // Basic validation for Google Drive link
      if (link.includes('drive.google.com') || link.includes('docs.google.com')) {
        setForm((prev) => ({ ...prev, googleDriveLink: link }));
        setLinkAdded(true);
        console.log('Google Drive link added:', link); // Debug log
        
        // Clear success message after 3 seconds
        setTimeout(() => setLinkAdded(false), 3000);
      } else {
        alert('Please enter a valid Google Drive or Google Docs link');
      }
    }
  };

  const clearGoogleDriveLink = () => {
    setForm((prev) => ({ ...prev, googleDriveLink: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    setUploadProgress(0);
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('company', form.company);
      data.append('message', form.message);
      data.append('topics', form.topics.join(','));
      if (form.file) data.append('file', form.file);
      if (form.googleDriveLink) {
        data.append('googleDriveLink', form.googleDriveLink);
        console.log('Google Drive Link being sent:', form.googleDriveLink); // Debug log
      }

      // Debug: Log all form data being sent
      console.log('Form data being sent:');
      for (let [key, value] of data.entries()) {
        console.log(key, ':', value);
      }

      const res = await axios.post('https://formbackend-ewmo.onrender.com/api/contact', data, {
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percent);
          }
        },
      });

      if (res.status === 201) {
        setSuccess('Message sent successfully!');
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          topics: [],
          file: null,
          googleDriveLink: '',
        });
        setUploadProgress(0);
        if (onSuccess) onSuccess(); // <-- call parent Snackbar
        if (onClose) onClose(); // Close immediately
      } else {
        setError(res.data.error || 'Failed to send message.');
        setUploadProgress(0);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.response?.data?.error || 'Failed to send message.');
      setUploadProgress(0);
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
        p: 4,
        borderRadius: 4,
        boxShadow: 3,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        position: 'relative',
      }}
    >
      {/* Close Button */}
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#fff',
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <Typography variant="h5" mb={2} sx={{ textAlign: 'center', fontWeight: 600, mt: onClose ? 0 : 2 }}>
        Contact Us
      </Typography>
      {success && <Typography sx={{ color: '#22c55e', mb: 1, textAlign: 'center' }}>{success}</Typography>}
      {error && <Typography sx={{ color: '#ef4444', mb: 1, textAlign: 'center' }}>{error}</Typography>}
      {linkAdded && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', mb: 1 }}>
          <Typography sx={{ color: '#22c55e', fontSize: '14px' }}>✅ Google Drive link added successfully!</Typography>
          <IconButton size="small" onClick={clearGoogleDriveLink} sx={{ color: '#22c55e' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <Box sx={{ width: '100%', mb: 2 }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
          <Typography sx={{ color: '#fff', fontSize: 12, textAlign: 'center', mt: 0.5 }}>{uploadProgress}%</Typography>
        </Box>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box display="flex" flexDirection="column" gap={2}>
          {/* Full Name */}
          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}>Full Name</Typography>
            <TextField
              fullWidth
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ background: '#fff', borderRadius: 1 }}
            />
          </Box>

          {/* Work Email */}
          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}>Work Email</Typography>
            <TextField
              fullWidth
              required
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ background: '#fff', borderRadius: 1 }}
            />
          </Box>

          {/* Phone Number */}
          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}>Phone Number</Typography>
            <TextField
              fullWidth
              name="phone"
              value={form.phone}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ background: '#fff', borderRadius: 1 }}
            />
          </Box>

          {/* Company */}
          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}>Company</Typography>
            <TextField
              fullWidth
              name="company"
              value={form.company}
              onChange={handleChange}
              variant="outlined"
              sx={{ background: '#fff', borderRadius: 1 }}
            />
          </Box>

          {/* Topics */}
          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}>Topics</Typography>
            <FormGroup>
              {[
                ['general', 'General Inquiry'],
                ['partnership', 'Partnership'],
                ['support', 'Support'],
                ['other', 'Other'],
              ].map(([name, label]) => (
                <FormControlLabel
                  key={name}
                  control={
                    <Checkbox
                      checked={form.topics.includes(name)}
                      onChange={handleTopicChange}
                      name={name}
                      sx={{ color: 'white' }}
                    />
                  }
                  label={label}
                  sx={{ color: '#fff' }}
                />
              ))}
            </FormGroup>
          </Box>

          {/* Message */}
          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 500, mb: 0.5 }}>Message</Typography>
            <TextField
              fullWidth
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              sx={{ background: '#fff', borderRadius: 1 }}
            />
          </Box>

          {/* File Upload */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography
              sx={{
                color: '#90ee90',
                fontSize: 14,
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <AttachFileIcon sx={{ fontSize: 18 }} />
              Select Files From Your&nbsp;
              <label htmlFor="file-upload" style={{ color: '#90ee90', textDecoration: 'underline', cursor: 'pointer' }}>
                Computer
              </label>
              {' '}or{' '}
              <a href="#" style={{ color: '#90ee90', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleGoogleDriveLink}>Google Docs</a>
            </Typography>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            {form.file && (
              <Typography sx={{ color: '#fff', fontSize: 13 }}>
                Selected: {form.file.name}
              </Typography>
            )}
            {form.googleDriveLink && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                <Typography sx={{ color: '#fff', fontSize: 13 }}>
                  Google Drive Link: <a href={form.googleDriveLink} target="_blank" rel="noopener noreferrer" style={{ color: '#90ee90', wordBreak: 'break-all' }}>{form.googleDriveLink}</a>
                </Typography>
                <IconButton size="small" onClick={clearGoogleDriveLink} sx={{ color: '#90ee90' }}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            )}
          </Box>

          {/* Submit Button */}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#0d47a1',
              borderRadius: 8,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '16px',
              textTransform: 'none',
            }}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
      </form>

      {/* REMOVED Snackbar component from the return */}

    </Box>
  );
};

export default ContactForm;