import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, Modal } from "@mui/material";

import theme from "./components/theme.js";
import NavBar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Whatwedo from "./components/whatwedo/whatwedo.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Login from "./components/Admin/Login.jsx"; // fixed path
import Dashboard from "./components/Admin/Dashboard.jsx";
import PrivateRoute from "./components/privateRoute.jsx";

function App() {
  const [openContactModal, setOpenContactModal] = useState(false);
  const location = useLocation(); // get current route

  const handleOpenContact = () => setOpenContactModal(true);
  const handleCloseContact = () => setOpenContactModal(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Show NavBar only if route is not /login */}
      {location.pathname !== "/login" && location.pathname !== "/dashboard" && (
        <NavBar onContactClick={handleOpenContact} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>

      <Modal open={openContactModal} onClose={handleCloseContact}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            p: 2,
          }}
        >
          <ContactForm onClose={handleCloseContact} />
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default App;
