const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { submitContactForm, getContacts } = require("../Controller/controller");

router.post("/", upload.single("file"), submitContactForm);

router.get("/", getContacts);

module.exports = router;
