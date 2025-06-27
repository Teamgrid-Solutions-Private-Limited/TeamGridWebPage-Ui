import React from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const testimonials = [
  {
    quote:
      "Working with their team was a game-changer. They translated our product vision into a seamless web app with AI-powered features that impressed our investor.",
    name: "Amit Shaw",
    title: "CEO, Nexora Labs",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "They’ve become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch. We trust them with every sprint.",
    name: "Lisa Monroe",
    title: "Creative Director, PixelRiver",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "We needed a cross-platform app fast, and they delivered in record time—beautiful UI, flawless performance, and full alignment with our brand.",
    name: "Jonas Malik",
    title: "Co-Founder, LoopRides",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    quote:
      "They’ve become an extension of our team. From design to delivery, their process is smooth, and their quality is consistently top-notch. We trust them with every sprint.",
    name: "Amelia Jen",
    title: "Creative Director, PixelRiver",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialCard = ({ quote, name, title, avatar }) => {
  return (
    <Box
      sx={{
        bgcolor: "#F3F3F6",
        borderRadius: 5,
        p: { xs: 2, sm: 3 },
        width: { xs: 270, sm: 300, md: 340 },
        height: { xs: 260, sm: 280 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        m: { xs: 1.5, sm: 2 },
        boxShadow: 1,
        textAlign: "left",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          color="primary"
          fontWeight={700}
          fontSize={{ xs: "28px", sm: "32px" }}
        >
          <BiSolidQuoteSingleLeft />
          <BiSolidQuoteSingleLeft />
        </Typography>
        <Typography
          variant="body2"
          mt={1}
          fontSize={{ xs: "13.5px", sm: "15px" }}
        >
          {quote}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
        <Avatar src={avatar} alt={name} sx={{ width: 36, height: 36, mr: 2 }} />
        <Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            fontSize={{ xs: "13px", sm: "14px" }}
          >
            {name}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            fontSize={{ xs: "11px", sm: "12px" }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: { xs: 0, sm: 0, md: 0 },
        py: { xs: 6, sm: 10 },
        bgcolor: "#fff",
        textAlign: "center",
        maxWidth: "1700px",
        margin: "0 auto",
      }}
    >
      <Typography
        fontSize={{ xs: "28px", sm: "34px", md: "40px" }}
        fontWeight={700}
        mb={1}
      >
        What Our Clients Say
      </Typography>
      <Typography
        fontSize={{ xs: "14px", sm: "16px", md: "17px" }}
        color="#140E13"
        mb={6}
      >
        Trusted by teams for smart ideas and reliable execution.
      </Typography>

      {/* Top Marquee (Right to Left) */}
      <Marquee speed={isMobile ? 25 : 30} gradient={false} pauseOnHover>
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </Marquee>

      {/* Bottom Marquee (Left to Right) */}
      <Marquee
        speed={isMobile ? 25 : 30}
        gradient={false}
        direction="right"
        pauseOnHover
      >
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i + 100} {...testimonial} />
        ))}
      </Marquee>

      <Box mt={6}>
        <Button
          variant="outlined"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 999,
            borderColor: "#CACACA",
            fontSize: { xs: "14px", sm: "16px" },
            textTransform: "none",
            color: "#140E13",
          }}
        >
          Explore Testimonials →
        </Button>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
