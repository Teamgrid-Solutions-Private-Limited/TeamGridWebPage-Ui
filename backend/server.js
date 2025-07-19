const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./Database/db');
const contactRoutes = require('./Route/route')
const path = require('path');
const adminRoute = require('./Route/adminRoute')



// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for file uploads (if needed)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/contact", contactRoutes);
app.use("/api", adminRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
