const Contact = require("../Model/model");
const sendMail = require("../utils/sendMail");

const submitContactForm = async (req, res) => {
  try {
    const { name, company, email, service, message, requestType } = req.body;
    const file = req.file;

    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const contact = new Contact({
      name,
      company,
      email,
      service,
      message,
      requestType,
      fileName: file?.originalname,
      fileType: file?.mimetype,
      filePath: file ? `/uploads/${file.originalname}` : undefined,
    });

    await contact.save();

    await sendMail(
      "New Contact Query",
      `<h3>New Query Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Request Type:</strong> ${requestType || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message}</p>`
    );

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error in controller:", err.message, err);
    res.status(500).json({ error: "Server error" });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    console.error("Error fetching contacts:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { submitContactForm , getContacts};
