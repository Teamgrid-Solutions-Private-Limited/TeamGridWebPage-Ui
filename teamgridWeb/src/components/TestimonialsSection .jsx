import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// Testimonials Data
const testimonials = [
  {
    name: "Amit Shaw",
    title: "CEO, Nexora Labs",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Working with their team was a game-changer. They translated our product vision into a seamless web app with AI-powered features that impressed our investor.",
  },
  {
    name: "Lisa Monroe",
    title: "Creative Director, PixelRiver",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "They've become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch.",
  },
  {
    name: "Jonas Malik",
    title: "Co-Founder, LoopRides",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "We needed a cross-platform app fast, and they delivered in record time—beautiful UI, flawless performance, and full alignment with our brand.",
  },
  {
    name: "Amelia Jen",
    title: "Product Manager, BrightIdeas",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "Reliable, fast, and talented. The team nailed it across the board. We'll be working together again soon!",
  },
  {
    name: "Shawn Lee",
    title: "Lead Engineer, FinPay",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "Absolutely top-notch execution. We had weekly updates and on-time delivery. Couldn't be happier.",
  },
  {
    name: "Priya Nair",
    title: "UX Head, EduSphere",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    text: "Their designs are user-centric and sharp. The feedback loop was instant, and it felt like they were part of our own team.",
  },
];

const TestimonialRow = ({ testimonials, direction = "left", delay = 0 }) => (
  <Box
    sx={{
      overflow: "hidden",
      width: "100%",
      py: { xs: 1, sm: 1.5, md: 2 },
      px: { xs: 0, sm: 1 },
    }}
  >
    <Box
      className="scroll-track"
      sx={{
        display: "flex",
        gap: { xs: 2, sm: 3, md: 4 },
        width: "max-content",
        animation: `${
          direction === "left" ? "scrollLeft" : "scrollRight"
        } ${40}s linear infinite`,
        animationDelay: `${delay}s`,
        "&:hover": {
          animationPlayState: "paused",
        },
        // Slower animation on mobile for better readability
        "@media (max-width: 600px)": {
          animation: `${
            direction === "left" ? "scrollLeft" : "scrollRight"
          } 60s linear infinite`,
          animationDelay: `${delay}s`,
        },
      }}
    >
      {[...testimonials, ...testimonials].map((item, index) => (
        <Paper
          key={index}
          sx={{
            flex: "0 0 auto",
            width: {
              xs: "280px",
              sm: "320px",
              md: "350px",
              lg: "384px",
            },
            minWidth: { xs: "280px", sm: "320px" },
            maxWidth: { xs: "280px", sm: "320px", md: "384px" },
            p: { xs: 2, sm: 2.5, md: 3 },
            borderRadius: { xs: 2, sm: 3 },
            height: "auto",
            minHeight: { xs: "180px", sm: "200px", md: "220px" },
            backgroundColor: "#F9FAFB",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.04)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <FormatQuoteIcon
              sx={{
                color: "#0b63e5",
                fontSize: { xs: 24, sm: 26, md: 28 },
                mb: { xs: 1.5, sm: 2 },
              }}
            />
            <Typography
              sx={{
                mb: { xs: 2, sm: 2.5, md: 3 },
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: 400,
                lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                color: "#000000",
                display: "-webkit-box",
                WebkitLineClamp: { xs: 4, sm: 5 },
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {item.text}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              mt: "auto",
            }}
          >
            <Avatar
              src={item.avatar}
              sx={{
                height: { xs: 44, sm: 48, md: 53 },
                width: { xs: 44, sm: 48, md: 53 },
                border: "2px solid #E2E8F0",
              }}
            />
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                fontWeight={700}
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  fontWeight: 700,
                  color: "#000000",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                color="#858585"
                sx={{
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  fontWeight: 400,
                  fontFamily: "PayPalOpen, Sans-serif",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  </Box>
);

const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: "#fff",
        overflow: "hidden",
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px", // ← updated from 1200px
          mx: "auto", // ← centers the section horizontally
          mb: { xs: 4, sm: 5, md: 6 },
          px: { xs: 2, sm: 3, md: 4 }, // responsive horizontal padding
        }}
      >
        <Typography
          align="center"
          fontWeight="500"
          gutterBottom
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "56px" },
            lineHeight: { xs: 1.2, sm: 1.3 },
            color: "#1A202C",
            mb: { xs: 1, sm: 2 },
          }}
        >
          What Our Clients Say
        </Typography>
        <Typography
          align="center"
          color="#140E13"
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: 1.4, sm: 1.5 },
            maxWidth: "600px",
            mx: "auto",
            px: { xs: 1, sm: 0 },
          }}
        >
          Trusted by teams for smart ideas and reliable execution.
        </Typography>
      </Box>

      <Box
        sx={{
          mx: { xs: -2, sm: -3, md: -4 }, // Negative margin to allow full-width scrolling
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <TestimonialRow
          testimonials={testimonials}
          direction="left"
          delay={0}
        />
        <TestimonialRow
          testimonials={testimonials}
          direction="right"
          delay={2}
        />
      </Box>

      <style>
        {`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Pause animation on touch devices for better UX */
        @media (hover: none) and (pointer: coarse) {
          .scroll-track:active {
            animation-play-state: paused !important;
          }
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .scroll-track {
            animation-duration: 120s !important;
          }
        }
        `}
      </style>
    </Box>
  );
};

export default TestimonialsSection;
