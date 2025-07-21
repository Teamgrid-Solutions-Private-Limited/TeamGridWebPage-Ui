// components/Login.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import rect from "../../assets/rect.png"; // Replace with actual image path
import planet1 from "../../assets/planet2 (1).png";
import planet2 from "../../assets/planet2 (2).png";
import planet3 from "../../assets/planet3.png";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: 20,
  padding: "6px 16px",
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://teamgridwebpage-ui.onrender.com/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: 1200,
          width: "100%",
          height: { xs: "auto", md: 600 },
          boxShadow: 3,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
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
          {/* TEXT CONTAINER ABOVE PLANETS */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography variant="h4" fontWeight={700}>
              Welcome Back,
              <br />
              <Box component="span" color="#1AE0AE">
                Admin!
              </Box>
            </Typography>
            <Typography mt={2} maxWidth="400px">
              Please login to access the TeamGrid admin dashboard and manage
              contact queries efficiently.
            </Typography>
          </Box>

          {/* ORBITS WITH PLANETS + WHITE DOTS */}
          {[338, 588, 814].map((size, index) => {
            const positions = [
              { top: "5%", left: "25%", dotTop: "0%", dotLeft: "50%" },
              { top: "50%", left: "0%", dotTop: "30%", dotLeft: "4%" },
              { top: "17%", left: "12%", dotTop: "50%", dotLeft: "0%" },
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
                  zIndex: 0, // BELOW text
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

          {/* Team image (on top of orbits but below text) */}
          <Box
            component="img"
            src={rect}
            alt="team"
            sx={{
              position: "absolute",
              bottom: 0,
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
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 4, md: 25 },
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 1000 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              Admin Login
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Use your credentials to sign in.
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="large"
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                size="large"
              />
              <StyledButton
                variant="contained"
                sx={{ bgcolor: "#0070F3", fontSize: "16px", py: 1.5 }}
                fullWidth
                onClick={handleLogin}
              >
                Login
              </StyledButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
