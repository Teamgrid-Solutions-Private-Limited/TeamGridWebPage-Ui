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

// ✅ Allow only Netlify frontend to access
app.use(cors({
  origin: "https://teamgridhomeui.netlify.app", // ✅ frontend URL
  credentials: true,
}));

// ✅ Add this manual header middleware (important for credentials)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://teamgridhomeui.netlify.app");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

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
  res.setHeader("Access-Control-Allow-Origin", "https://teamgridhomeui.netlify.app");
  res.json({ msg: "CORS test passed!" });
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
