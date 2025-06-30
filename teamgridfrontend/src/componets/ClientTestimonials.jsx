import React from "react";
import { Box, Typography, Avatar, Paper, Button } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// Row 1 testimonials
const testimonialsRow1 = [
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

// Row 2 testimonials
const testimonialsRow2 = [
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
];

const TestimonialRow = ({ testimonials, direction = "left", delay = 0 }) => (
  <Box sx={{ overflow: "hidden", width: "100%", py: 2 }}>
    <Box
      className="scroll-track"
      sx={{
        display: "flex",
        gap: 3,
        width: "max-content",
        animation: `${direction === "left" ? "scrollLeft" : "scrollRight"} 30s linear infinite`,
        animationDelay: `${delay}s`,
        "&:hover": {
          animationPlayState: "paused",
        },
      }}
    >
      {[...testimonials, ...testimonials].map((item, index) => (
        <Paper
          key={index}
          sx={{
            flex: { xs: "0 0 260px", sm: "0 0 300px", md: "0 0 320px" },
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            backgroundColor: "#F3F3F6",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#e6ebf5",
              transform: "scale(1.04)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <FormatQuoteIcon sx={{ color: "#0b63e5", fontSize: 28, mb: 2 }} />
          <Typography
            sx={{
              fontFamily: '"Paypal Open", Arial, Sharif',
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#000000",
              mb: 3,
            }}
          >
            {item.text}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src={item.avatar}
              sx={{
                width: { xs: 44, sm: 48, md: 53 },
                height: { xs: 44, sm: 48, md: 53 },
                bgcolor: "#D9D9D9",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: '"Paypal Open", Arial, Sharif',
                  fontWeight: 700,
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#000",
                }}
              >
                {item.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: '"Paypal Open", Arial, Sharif',
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  letterSpacing: "0%",
                  color: "#858585",
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

const ClientTestimonials = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff", overflow: "hidden" }}>
     <Typography
  sx={{
    fontFamily: '"Paypal Open", Arial, Sharif',
    fontWeight: 500,
    fontSize: { xs: "32px", sm: "40px", md: "56px" }, // smaller on mobile
    lineHeight: "120%", // increase to prevent vertical crowding
    textAlign: "center",
    color: "#140E13",
    mb: { xs: 2, md: 3 }, // add spacing below
  }}
  gutterBottom
>
  What Our Clients Say
</Typography>

<Typography
  variant="subtitle1"
  align="center"
  sx={{
    fontFamily: '"Paypal Open", Arial, Sharif',
    fontWeight: 400,
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    lineHeight: "150%",
    color: "#140E13",
    mb: 6,
  }}
>
  Trusted by teams for smart ideas and reliable execution.
</Typography>


      <TestimonialRow testimonials={testimonialsRow1} direction="left" delay={0} />
      <TestimonialRow testimonials={testimonialsRow2} direction="right" delay={2} />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}>
        <Button
          variant="outlined"
          sx={{
            fontFamily: '"Paypal Open", Arial, Sharif',
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "27px",
            letterSpacing: "0%",
            color: "#140E13",
            borderColor: "#140E13",
            borderRadius: "999px",
            px: 4,
            py: 1.5,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(20, 14, 19, 0.1)",
            },
          }}
        >
          Explore more testimonials →
        </Button>
      </Box>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </Box>
  );
};

export default ClientTestimonials;
