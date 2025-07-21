import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  AppBar,
  Toolbar,
  Button,
  Divider,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Chip,
  CircularProgress,
  Snackbar,
  Alert,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Search,
  FilterList,
  Download,
  PictureAsPdf,
  Image,
  InsertDriveFile,
  Logout,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  Close,
  Refresh,
  Visibility,
  Cancel,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/LogoDark.png";
const BASE_URL = "https://teamgridwebpage.onrender.com"; // Live backend URL

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
          backgroundColor: "#f5f5f5",
        },
        root: {
          padding: "12px 16px",
        },
      },
    },
  },
});

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const isMobile = useMediaQuery("(max-width:900px)");

  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchTerm, contacts]);

  const fetchContacts = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/api/contact`)
      .then((res) => {
        setContacts(res.data.data);
        setFilteredContacts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setError("Failed to fetch contacts. Please try again.");
        setLoading(false);
        showSnackbar("Failed to fetch contacts");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    showSnackbar("Logged out successfully");
    navigate("/login");
  };

  const handleFilterMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorEl(null);
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePreviewOpen = (contact) => {
    setSelectedContact(contact);
    setPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setPreviewOpen(false);
  };

  const renderFileCell = (item) => {
    if (!item.filePath) return "No file";

    const fileUrl = `${BASE_URL}${item.filePath}`;

    const fileName = item.filePath.split("/").pop();

    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {item.fileType?.startsWith("image/") ? (
          <Image color="primary" />
        ) : item.fileType === "application/pdf" ? (
          <PictureAsPdf color="error" />
        ) : (
          <InsertDriveFile color="action" />
        )}
        <Box>
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", color: theme.palette.primary.main }}
          >
            View
          </a>
          {/* <a
            href={fileUrl}
            download
            style={{
              display: "block",
              color: theme.palette.primary.main,
              fontSize: "0.8rem",
            }}
          >
            Download
          </a> */}
        </Box>
      </Box>
    );
  };

  const renderRequestType = (type) => {
    const colorMap = {
      quote: "primary",
      consultation: "secondary",
      partnership: "success",
      other: "default",
    };

    return (
      <Chip
        label={type}
        color={colorMap[type.toLowerCase()] || "default"}
        size="small"
      />
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        {/* Sidebar - Desktop */}
        <Box
          sx={{
            width: 240,
            bgcolor: "#ffffff",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "space-between",
            p: 3,
            boxShadow: 3,
            position: "fixed",
            height: "100vh",
            zIndex: 10,
          }}
        >
          <Box>
            <Box sx={{ mb: 3 }}>
              <img
                src={logo}
                alt="logo"
                style={{ height: "48px", width: "148px" }}
              />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Admin Panel
            </Typography>
            <Button
              startIcon={<DashboardIcon />}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                // bgcolor: theme.palette.primary.light,
                color: theme.palette.primary.dark,
              }}
            >
              Dashboard
            </Button>
          </Box>

          <Button
            variant="outlined"
            color="grey"
            onClick={handleLogout}
            startIcon={<Logout />}
            sx={{ mt: 2 }}
          >
            Logout
          </Button>
        </Box>

        {/* Mobile Sidebar */}
        {mobileOpen && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: 240,
              height: "100vh",
              bgcolor: "#ffffff",
              zIndex: 1200,
              p: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "48px", width: "148px" }}
                />
                <IconButton onClick={handleDrawerToggle}>
                  <Close />
                </IconButton>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
                Admin Panel
              </Typography>
              <Button
                startIcon={<DashboardIcon />}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.dark,
                }}
              >
                Dashboard
              </Button>
            </Box>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              startIcon={<Logout />}
              sx={{ mt: 2 }}
            >
              Logout
            </Button>
          </Box>
        )}

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            ml: { md: "240px" },
            width: { md: "calc(100% - 240px)" },
          }}
        >
          {/* Topbar */}
          <AppBar
            position="static"
            elevation={1}
            sx={{
              bgcolor: "white",
              color: "text.primary",
              position: "sticky",
              top: 0,
              zIndex: 1100,
            }}
          >
            <Toolbar>
              {isMobile && (
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Contact Queries
              </Typography>
              <IconButton onClick={fetchContacts} color="inherit">
                <Refresh />
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Content Area */}
          <Box sx={{ p: 3 }}>
            {/* Filters and Search */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ minWidth: 250 }}
              />
              <Box>
                <Button
                  variant="outlined"
                  startIcon={<FilterList />}
                  onClick={handleFilterMenuOpen}
                >
                  Filters
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleFilterMenuClose}
                >
                  <MenuItem onClick={handleFilterMenuClose}>All</MenuItem>
                  <MenuItem onClick={handleFilterMenuClose}>Quotes</MenuItem>
                  <MenuItem onClick={handleFilterMenuClose}>
                    Consultations
                  </MenuItem>
                  <MenuItem onClick={handleFilterMenuClose}>
                    Partnerships
                  </MenuItem>
                </Menu>
              </Box>
            </Box>

            {/* Table */}
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <CircularProgress />
              </Box>
            ) : error ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography color="error">{error}</Typography>
                <Button
                  variant="contained"
                  onClick={fetchContacts}
                  startIcon={<Refresh />}
                >
                  Retry
                </Button>
              </Box>
            ) : (
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "calc(100vh - 200px)",
                  overflow: "auto",
                  "& .MuiTable-root": {
                    minWidth: 800,
                  },
                }}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Company</TableCell>
                      <TableCell>Service</TableCell>
                      <TableCell>Request Type</TableCell>
                      <TableCell>Message</TableCell>
                      <TableCell>File</TableCell>
                      <TableCell>Submitted On</TableCell>
                      <TableCell>Preview</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredContacts.length > 0 ? (
                      filteredContacts.map((item) => (
                        <TableRow
                          key={item._id}
                          hover
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell sx={{ fontWeight: 500 }}>
                            {item.name}
                          </TableCell>
                          <TableCell>
                            <a
                              href={`mailto:${item.email}`}
                              style={{
                                color: theme.palette.primary.main,
                                textDecoration: "none",
                                "&:hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              {item.email}
                            </a>
                          </TableCell>
                          <TableCell>{item.company}</TableCell>
                          <TableCell>{item.service}</TableCell>
                          <TableCell>
                            {renderRequestType(item.requestType)}
                          </TableCell>
                          <TableCell sx={{ maxWidth: 200 }}>
                            <Typography
                              noWrap
                              sx={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                              }}
                            >
                              {item.message}
                            </Typography>
                          </TableCell>
                          <TableCell>{renderFileCell(item)}</TableCell>
                          <TableCell>
                            {new Date(item.createdAt).toLocaleDateString()}
                            <br />
                            <Typography variant="caption">
                              {new Date(item.createdAt).toLocaleTimeString()}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => handlePreviewOpen(item)}
                              color="primary"
                              size="small"
                            >
                              <Visibility />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={9} align="center">
                          No contacts found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Box>

        {/* Preview Dialog */}
        <Dialog
          open={previewOpen}
          onClose={handlePreviewClose}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Contact Details</Typography>
              <IconButton onClick={handlePreviewClose}>
                <Cancel />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent dividers>
            {selectedContact && (
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 3,
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Name
                    </Typography>
                    <Typography variant="body1">
                      {selectedContact.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      <a href={`mailto:${selectedContact.email}`}>
                        {selectedContact.email}
                      </a>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Company
                    </Typography>
                    <Typography variant="body1">
                      {selectedContact.company}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Service
                    </Typography>
                    <Typography variant="body1">
                      {selectedContact.service}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Request Type
                    </Typography>
                    <Typography variant="body1">
                      {renderRequestType(selectedContact.requestType)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Submitted On
                    </Typography>
                    <Typography variant="body1">
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Message
                  </Typography>
                  <Paper
                    variant="outlined"
                    sx={{ p: 2, bgcolor: "background.default" }}
                  >
                    <Typography>{selectedContact.message}</Typography>
                  </Paper>
                </Box>

                {selectedContact.filePath && (
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      Attached File
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {selectedContact.fileType?.startsWith("image/") ? (
                        <>
                          <Avatar
                            src={`${BASE_URL}${selectedContact.filePath}`
}
                            alt="Uploaded"
                            sx={{ width: 100, height: 100 }}
                            variant="rounded"
                          />
                          <Box>
                            <Button
                              variant="contained"
                              startIcon={<Download />}
                              href={`${BASE_URL}${selectedContact.filePath}`
}
                              download
                              sx={{ mr: 2 }}
                            >
                              Download
                            </Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          {selectedContact.fileType === "application/pdf" ? (
                            <PictureAsPdf color="error" sx={{ fontSize: 48 }} />
                          ) : (
                            <InsertDriveFile
                              color="action"
                              sx={{ fontSize: 48 }}
                            />
                          )}
                          <Box>
                            <Button
                              variant="contained"
                              startIcon={<Download />}
                              href={`${BASE_URL}${selectedContact.filePath}`
}
                              download={
                                selectedContact.originalFileName || "download"
                              }
                              sx={{ mr: 2 }}
                            >
                              Download
                            </Button>
                            <Button
                              variant="outlined"
                              href={`${BASE_URL}${selectedContact.filePath}`
}
                              target="_blank"
                            >
                              View
                            </Button>
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePreviewClose}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
