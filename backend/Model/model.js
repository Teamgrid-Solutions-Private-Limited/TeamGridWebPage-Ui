const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true },
    service: { type: String },
    message: { type: String },
    requestType: {
      type: String,
      enum: ["Free Consultation", "Request a Talent Match", "NDA Required", ""],
    },
    fileName: { type: String },
    fileType: { type: String },
    filePath: { type: String }, // ✅ Make it a plain string
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
