import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

// Images
import ecommerceImageBottom from "../assets/Ecommerce.png";
import ecommerceImageTop from "../assets/yhui.png";
import webTop from "../assets/web1.jpg";
import webBottom from "../assets/web2.jpg";
import uiuxTop from "../assets/ui2.jpg";
import uiuxBottom from "../assets/ui1.jpg";
import mobileTop from "../assets/app2.jpg";
import mobileBottom from "../assets/app1.jpg";
import dedicatedTop from "../assets/team1.jpg";
import dedicatedBottom from "../assets/team2.jpg";
import aiTop from "../assets/ai1.jpg";
import aiBottom from "../assets/ai2.jpg";

const tabItems = [
  {
    title: "E-commerce",
    subtitle: "Sell smarter online",
    description:
      "We design and develop high-performing e-commerce platforms tailored to your brand. From storefront to checkout, we build seamless, scalable, and conversion-focused experiences that drive sales and customer loyalty.",
    topImage: ecommerceImageTop,
    bottomImage: ecommerceImageBottom,
  },
  {
    title: "Web Development",
    subtitle: "Fast. Clean. Scalable.",
    description:
      "We craft modern, scalable, and high-performing websites using the latest technologies — optimized for speed, performance, and user experience.",
    topImage: webTop,
    bottomImage: webBottom,
  },
  {
    title: "UI / UX",
    subtitle: "Design with purpose",
    description:
      "Our UI/UX experts design user-centric interfaces that are intuitive, engaging, and optimized for user retention and conversion.",
    topImage: uiuxTop,
    bottomImage: uiuxBottom,
  },
  {
    title: "Mobile App Development",
    subtitle: "Apps that perform",
    description:
      "We build powerful cross-platform mobile applications that offer seamless performance and engaging user experiences across iOS and Android.",
    topImage: mobileTop,
    bottomImage: mobileBottom,
  },
  {
    title: "Dedicated Teams",
    subtitle: "Scale your squad",
    description:
      "Need long-term support? Our dedicated developers integrate with your team to accelerate delivery and provide ongoing innovation.",
    topImage: dedicatedTop,
    bottomImage: dedicatedBottom,
  },
  {
    title: "AI / ML / GenAI",
    subtitle: "Smart tech & real results",
    description:
      "Leverage cutting-edge artificial intelligence, machine learning, and generative AI to unlock business automation, personalization, and insight-driven growth.",
    topImage: aiTop,
    bottomImage: aiBottom,
  },
];

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeContent = tabItems[activeTab];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? tabItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === tabItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box  sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        height: { xs: "auto", md: "900px" },
        bgcolor: "#fff",
        overflow: "hidden",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 0 },
        mx: "auto",
      }}
    >
      {/* Headings */}
      <Box
        sx={{
          maxWidth: "1440px",
          px: { xs: 2, md: 3 },
          // ml: { xs: 0, sm: 2, md: 8, lg: 6, xl: "90px" },
          mx:"0",
          mb: { xs: 2, md: 4 },
        }}
      >
        <Typography
          fontWeight="500"
          gutterBottom
          sx={{
            textAlign: "left",
            mb: 2,
            fontSize: { xs: "28px", sm: "32px", md: "56px" },
            lineHeight: { xs: 1.2, md: 1.3 },
          }}
        >
          What We Do
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: "left",
            mb: { xs: 2, md: 4 },
            fontSize: { xs: "14px", sm: "18px" },
            lineHeight: { xs: 1.4, md: 1.6 },
            fontWeight: "400",
          }}
        >
          We build AI-powered web and mobile apps with innovative design and
          scalable development.
          <br />
          Our team delivers seamless UI/UX and solutions to help your business
          grow smarter and faster.
        </Typography>
      </Box>

      {/* Main Section */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          bgcolor: "#E1ECF9",
          width: "100%",
          maxWidth: { xs: "100%", md:"100%",lg: "1300px" , xl:"1300px"}, // ✅ lock width on large devices
          height: { xs: "auto", lg: "585px" }, // ✅ lock height on large devices
          // mx: "auto",
          borderRadius: { xs: 2, md: 4 },
          px: { xs: 2, sm: 3, md: 6 },
          pt: { xs: 3, sm: 4, md: 8 },
          pb: { xs: "80px", sm: "100px", md: "120px" },
          mt: { xs: 2, md: 4 },
          // ml: { sm: "5px", md: "10px", lg: "75px",xl:"118px" },

          overflow: "hidden",
        }}
      >
        {/* Left Text */}
        <Box
          sx={{
            flex: 1,
            pr: { xs: 0, md: 6 },
            mb: { xs: 3, md: 0 },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Typography
            fontWeight="500"
            gutterBottom
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "40px" },
              lineHeight: { xs: 1.2, md: 1.3 },
              mb: { xs: 1, md: 2 },
            }}
          >
            {activeContent.title}
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: { xs: "16px", sm: "18px", md: "16px" },
              fontWeight: "400",
              mb: { xs: 1, md: 2 },
            }}
          >
            {activeContent.subtitle}
          </Typography>
          <Typography
            color="black"
            sx={{
              mb: { xs: 2, md: 3 },
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontWeight: "400",
              lineHeight: { xs: 1.4, md: 1.6 },
            }}
          >
            {activeContent.description}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.5 },
              borderRadius: "999px",
              textTransform: "none",
              borderColor: "#A8BDD3",
              mb: { xs: 2, md: 3 },
              color: "#000000",
              fontWeight: "500",
              fontSize: { xs: "14px", md: "16px" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Explore Our Portfolio →
          </Button>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Button
              onClick={handlePrev}
              sx={{
                minWidth: { xs: 48, md: 56 },
                height: { xs: 48, md: 56 },
                borderRadius: "50%",
                bgcolor: "#FFFFFFA6",
                boxShadow: 1,
                fontSize: { xs: "18px", md: "20px" },
              }}
            >
              ←
            </Button>
            <Button
              onClick={handleNext}
              sx={{
                minWidth: { xs: 48, md: 56 },
                height: { xs: 48, md: 56 },
                borderRadius: "50%",
                bgcolor: "#FFFFFFA6",
                boxShadow: 1,
                fontSize: { xs: "18px", md: "20px" },
              }}
            >
              →
            </Button>
          </Box>
        </Box>

        {/* Right Image for Desktop */}
        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            position: "relative",
            minHeight: { xs: 250, sm: 300, md: 420 },
            width: "100%",
            mt: { xs: 2, md: 0 },
            display: { xs: "none", md: "block" },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeContent.bottomImage}
              src={activeContent.bottomImage}
              alt="Bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                width: "75%",
                height: "110%",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                top: "-15%",
                right: "5%",
              }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.img
              key={activeContent.topImage}
              src={activeContent.topImage}
              alt="Top"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: "0%",
                left: "0%",
                width: "85%",
                height: "130%",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                zIndex: 1,
              }}
            />
          </AnimatePresence>
        </Box>

        {/* Mobile Single Image */}
        <Box sx={{ display: { xs: "block", md: "none" }, mt: 2 }}>
          <Box
            component="img"
            src={activeContent.bottomImage}
            alt="Mobile View"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: 3,
            }}
          />
        </Box>

        {/* Bottom Tabs */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 10, sm: 15, md: 20 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "calc(100% - 16px)", sm: "95%" },
            backgroundColor: "#FFFFFFBF",
            backdropFilter: "blur(156.9px)",
            borderRadius: { xs: "8px", md: "12px" },
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            zIndex: 2,
            p: { xs: 0.5, md: 1 },
            px: { xs: 1, sm: 2, md: 3 },
            gap: { xs: "5px", md: "10px" },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {tabItems.map((item, index) => {
            const isActive = index === activeTab;
            return (
              <Box
                key={item.title}
                onClick={() => setActiveTab(index)}
                sx={{
                  cursor: "pointer",
                  px: { xs: 1.5, sm: 2, md: 3 },
                  py: { xs: 1, sm: 1.5, md: 2 },
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  bgcolor: isActive ? "#002C6D" : "transparent",
                  color: isActive ? "#ffffff" : "#000000",
                  borderRadius: { xs: "6px", md: "10px" },
                  flexShrink: 0,
                  minWidth: { xs: "auto", sm: "120px" },
                }}
              >
                <Typography
                  fontWeight={isActive ? "600" : "500"}
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: isActive ? "#ffffff" : "#738499",
                    fontSize: { xs: "10px", sm: "11px", md: "13px" },
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeDo;
