const nodemailer = require("nodemailer");

const sendMail = async (subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thesufian0@gmail.com", // replace with your email
        pass: "qbos snac aakc ogwz",    // replace with your Gmail App Password
      },
    });

    const mailOptions = {
      from: '"TeamGrid Notification" <your_email@gmail.com>',
      to: "thesufian0@gmail.com", // ✅ receiver
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

module.exports = sendMail;
