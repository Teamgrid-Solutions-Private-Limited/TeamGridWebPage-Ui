// middlewares/upload.js
const multer = require("multer");
const path = require("path");

// Helper: sanitize filename (remove special characters)
const sanitizeFileName = (name) => {
  return name.replace(/[^a-zA-Z0-9_\-]/g, "_"); // replaces anything not alphanumeric, underscore, or dash
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const safeName = sanitizeFileName(baseName); // sanitize base name
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
