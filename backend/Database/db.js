const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database successfully connected");
  } catch (error) {
    console.error(" Database connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
