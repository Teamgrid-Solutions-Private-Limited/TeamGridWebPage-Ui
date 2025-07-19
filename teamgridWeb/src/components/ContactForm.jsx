import React from "react";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import rect from "../assets/rect.png";
const services = ["Web Development", "UI/UX Design", "Mobile App", "Other"];
import { useState } from "react";
import axios from "axios";
// Import your planet images at the top of your component
import planet1 from "../assets/planet2 (1).png";
import planet2 from "../assets/planet2 (2).png";
import planet3 from "../assets/planet3.png";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: 20,
  padding: "6px 16px",
}));

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
    file: null,
    requestType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      // Append all fields
      data.append("name", formData.name);
      data.append("company", formData.company);
      data.append("email", formData.email);
      data.append("service", formData.service);
      data.append("message", formData.message);
      data.append("requestType", formData.requestType);

      if (formData.file) {
        data.append("file", formData.file);
      }

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Thanks for contacting us, we will get back to you soon");

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        service: "",
        message: "",
        file: null,
        requestType: "",
      });
    } catch (err) {
      console.error("Form submit error:", err);
      alert("Something went wrong!");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
      file: null,
    });
  };

  const handleRequestType = (type) => {
    setFormData((prev) => ({ ...prev, requestType: type }));
  };

  return (
    <Box
      sx={{
        width: "1200px",
        height: "748px",
        bgcolor: "#fff",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        boxShadow: 6,
        // top:"100px",
        // left :"150px"
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 10,
          bgcolor: "#f1f1f1",
          "&:hover": { bgcolor: "#e0e0e0" },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Grid container sx={{ height: "100%" }}>
        {/* Left Panel */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "#002c6a",
            color: "#fff",
            px: { xs: 3, md: 6 },
            py: { xs: 6, md: 10 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Let’s Build <br />
            Something{" "}
            <Box component="span" color="#1AE0AE">
              Together
            </Box>
          </Typography>

          <Typography mt={2} maxWidth="400px">
            We’re here to answer questions, scope projects, and help you find
            the right talent.
          </Typography>

          {/* ORBITS WITH PLANETS + WHITE DOTS */}
          {[338, 588, 814].map((size, index) => {
            const positions = [
              { top: "20%", left: "10%", dotTop: "0%", dotLeft: "50%" },
              { top: "40%", left: "2%", dotTop: "30%", dotLeft: "4%" },
              { top: "35%", left: "2%", dotTop: "50%", dotLeft: "0%" },
            ];
            const planetImg = [planet1, planet2, planet3][index];
            const pos = positions[index];

            return (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "90%",
                  width: `${size}px`,
                  height: `${size}px`,
                  border: "1px dashed rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Planet Image */}
                <Box
                  component="img"
                  src={planetImg}
                  alt={`planet-${index + 1}`}
                  sx={{
                    width: "65px",
                    height: "65px",
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* White Dot */}
                <Box
                  sx={{
                    width: "11.55px",
                    height: "11.55px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: pos.dotTop,
                    left: pos.dotLeft,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </Box>
            );
          })}

          {/* Team image */}
          <Box
            component="img"
            src={rect}
            alt="team"
            sx={{
              position: "absolute",
              bottom: 40,
              left: 0,
              width: "100%",
              maxHeight: "240px",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        </Grid>

        {/* Right Panel */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 6 }, overflowY: "auto" }}
        >
          <Typography variant="h6" fontWeight={600}>
            Contact us
          </Typography>
          <Typography mt={1} color="text.secondary" maxWidth="90%">
            Let’s connect and bring your ideas to life — we’re just a message
            away.
          </Typography>

          <Stack spacing={2} mt={3}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <TextField
              label="Type of Service You Need"
              name="service"
              select
              value={formData.service}
              onChange={handleChange}
              fullWidth
            >
              {services.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Describe Your Project / Requirements"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                color: "#333",
                borderColor: "#ccc",
              }}
            >
              {formData.file ? formData.file.name : "Upload File"}
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
          </Stack>

          {/* Buttons */}
          {/* Buttons */}
          <Stack direction="row" spacing={2} mt={3}>
            <StyledButton
              variant={
                formData.requestType === "Free Consultation"
                  ? "contained"
                  : "outlined"
              }
              sx={{
                bgcolor:
                  formData.requestType === "Free Consultation"
                    ? "#0070F3"
                    : "transparent",
                color:
                  formData.requestType === "Free Consultation"
                    ? "#fff"
                    : "#000",
                borderColor: "#0070F3",
                "&:hover": {
                  bgcolor: "#005BD1",
                  color: "#fff",
                },
              }}
              onClick={() => handleRequestType("Free Consultation")}
            >
              Free Consultation
            </StyledButton>

            <StyledButton
              variant={
                formData.requestType === "Request a Talent Match"
                  ? "contained"
                  : "outlined"
              }
              sx={{
                bgcolor:
                  formData.requestType === "Request a Talent Match"
                    ? "#0070F3"
                    : "transparent",
                color:
                  formData.requestType === "Request a Talent Match"
                    ? "#fff"
                    : "#000",
                borderColor: "#0070F3",
                "&:hover": {
                  bgcolor: "#005BD1",
                  color: "#fff",
                },
              }}
              onClick={() => handleRequestType("Request a Talent Match")}
            >
              Request a Talent Match
            </StyledButton>

            <StyledButton
              variant={
                formData.requestType === "NDA Required"
                  ? "contained"
                  : "outlined"
              }
              sx={{
                bgcolor:
                  formData.requestType === "NDA Required"
                    ? "#0070F3"
                    : "transparent",
                color:
                  formData.requestType === "NDA Required" ? "#fff" : "#000",
                borderColor: "#0070F3",
                "&:hover": {
                  bgcolor: "#005BD1",
                  color: "#fff",
                },
              }}
              onClick={() => handleRequestType("NDA Required")}
            >
              NDA Required
            </StyledButton>
          </Stack>

          {/* Submit / Reset */}
          <Stack direction="row" spacing={2} mt={3}>
            <StyledButton
              variant="contained"
              sx={{ bgcolor: "#0070F3" }}
              onClick={handleSubmit}
            >
              Submit
            </StyledButton>
            <StyledButton variant="outlined" onClick={handleReset}>
              Reset
            </StyledButton>
          </Stack>

          {/* Footer */}
          <Divider sx={{ my: 2 }} />
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
