const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./Database/db');
const contactRoutes = require('./Route/route');
const adminRoute = require('./Route/adminRoute');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ CORS configuration
const allowedOrigins = ["https://teamgridhomeui.netlify.app"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// ✅ Handle preflight requests explicitly
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/contact", contactRoutes);
app.use("/api", adminRoute);

app.get("/", (req, res) => {
  res.send("✅ Backend is live and working!");
});

app.get("/test-cors", (req, res) => {
  res.json({ msg: "CORS test passed!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
