import React from "react";
import { Box, Typography } from "@mui/material";
import send from "../assets/send.png";
import mail from "../assets/mail.png";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#072449",
        color: "#fff",
        px: 2,
        py: 6,
        width: "100%",
      }}
    >
      {/* Inner container with maxWidth */}
      <Box
        sx={{
          maxWidth: "1440px",
          mx: {lg:"70px",xl:"100px"}, // default left offset
          "@media (min-width: 2000px)": {
            mx: "auto", // center if screen is zoomed out / ultra wide
          },
        }}
      >
        {/* Top Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 4,
            mb: 4,
          }}
        >
          {/* Blogs */}
          <Box sx={{ minWidth: 250, flex: 1, mr: 8 }}>
            <Typography sx={{ fontWeight: 500, mb: 2, fontSize: 20 }}>
              Blogs
            </Typography>
            {[
              "How AI Is Transforming Web & Mobile App Development in 2025",
              "Choosing the Right Tech Stack for Scalable Product Development",
              "Design Smarter: Why UI/UX Matters More Than Ever in AI-Powered Apps",
              "Fixed-Cost vs. Dedicated Teams: What Works Best for Your Next Project?",
            ].map((text, idx) => (
              <Typography
                key={idx}
                sx={{
                  mb: 1,
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: "#A8B6C5",
                  fontWeight: 400,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* Quick Links */}
          <Box sx={{ minWidth: 180, flex: 1, mr: 4 }}>
            <Typography sx={{ fontWeight: 500, mb: 2, fontSize: 20 }}>
              Quick Links
            </Typography>
            {[
              "Home",
              "About Us",
              "What We Do",
              "Technologies We Use",
              "How We Work",
              "Let’s Talk",
            ].map((link, idx) => (
              <Typography
                key={idx}
                sx={{
                  mb: 1,
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  cursor: "pointer",
                  color: "#A8B6C5",
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          {/* Services */}
          <Box sx={{ minWidth: 200, flex: 1, mr: 4 }}>
            <Typography sx={{ fontWeight: 500, mb: 2, fontSize: 20 }}>
              Services
            </Typography>
            {[
              "Web Development",
              "Mobile App Development",
              "UI/UX Design",
              "AI/ML & GenAI Solutions",
              "E-commerce",
              "WordPress & Shopify",
            ].map((service, idx) => (
              <Typography
                key={idx}
                sx={{
                  mb: 1,
                  fontSize: 16,
                  lineHeight: 1.5,
                  fontWeight: 400,
                  color: "#A8B6C5",
                }}
              >
                {service}
              </Typography>
            ))}
          </Box>

          {/* Policies */}
          <Box sx={{ minWidth: 200, flex: 1 }}>
            <Typography sx={{ fontWeight: 500, mb: 2, fontSize: 20 }}>
              Policies
            </Typography>
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "NDA Available on Request",
            ].map((policy, idx) => (
              <Typography
                key={idx}
                sx={{
                  mb: 1,
                  fontSize: 16,
                  lineHeight: 1.5,
                  fontWeight: 400,
                  color: "#A8B6C5",
                }}
              >
                {policy}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Middle Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderTop: "1px solid #2E4B7D",
            pt: 4,
            pb: 4,
            rowGap: 4,
          }}
        >
          {/* Contact */}
          <Box sx={{ minWidth: 300, flex: 1, pr: 4 }}>
            <Typography sx={{ fontWeight: 500, mb: 1, fontSize: 20 }}>
              Need Assistance? Call Us!
            </Typography>
            <Typography
              sx={{
                mb: 2,
                lineHeight: 1.5,
                fontWeight: 500,
                fontSize: 16,
                color: "#A8B6C5",
              }}
            >
              Our experts are here to help. Contact us for personalised guidance
              <br />
              or any queries about your project or digital solution.
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 500, mb: 1 }}>
              +91 - 98304 42666
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#A8B6C5" }}>
              Mail us at info@teamgrid.com
            </Typography>
          </Box>

          {/* Newsletter */}
          <Box sx={{ minWidth: 300, flex: 1 }}>
            <Typography sx={{ fontWeight: 500, mb: 1, fontSize: 20 }}>
              Stay Connected with Our Newsletter
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                mb: 2,
                lineHeight: 1.5,
                fontWeight: 500,
                color: "#A8B6C5",
              }}
            >
              Stay updated with expert insights, smart development tips, and
              exclusive <br /> Teamgrid news—delivered straight to your inbox.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#2E4B7D",
                  borderRadius: "30px",
                  px: 2,
                  flex: 1,
                  height: 56,
                }}
              >
                <Box sx={{ pr: 1 }}>
                  <img src={mail} alt="Mail Icon" height={24} width={24} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <input
                    type="email"
                    placeholder="Your email ID"
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: 400,
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ cursor: "pointer" }}>
                <img src={send} alt="Send Icon" height={24} width={24} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Row */}
        <Box sx={{ borderTop: "1px solid #2E4B7D", pt: 2 }}>
          <Typography
            sx={{
              fontSize: 16,
              color: "#A8B6C5",
              fontWeight: 700,
              mb: 1,
            }}
          >
            <strong>Disclaimer:</strong> Content and services on this site are for
            general information only and may change. Teamgrid is not liable for
            outcomes influenced by third-party tools or evolving technologies.
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "#A8B6C5",
              fontWeight: 700,
            }}
          >
            © 2025 Teamgrid. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
