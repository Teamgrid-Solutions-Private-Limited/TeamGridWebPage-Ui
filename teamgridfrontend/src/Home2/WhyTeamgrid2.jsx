import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent, IconButton
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code"; // replace with actual icons
import leftImg from "../assets/Mask group (1).svg"
import rightArrow from "../assets/ci_arrow-right-lg (3).svg";
import teamLogo from "../assets/fluent_people-team-28-regular (1).svg";
import leftArrow from "../assets/ci_arrow-right-lg.svg";
import flex from "../assets/material-symbols-light_handshake-outline-rounded.svg";
import trust from "../assets/hugeicons_document-code.svg";
import project from "../assets/streamline-ultimate_performance-increase.svg";

const WhyTeamgrid2 = () => {
  // Removed unused refs and variables
  // Removed unused activeTab state
  // Scroll handlers (optional, keep for horizontal scroll)
  // Removed unused scrollRight and drag handler functions

  // Custom drag-to-slide logic for card row
  const [translateX, setTranslateX] = useState(0);
  const dragStartX = useRef(0);
  const dragStartTranslate = useRef(0);
  const isDragging = useRef(false);
  const cardRowRef = useRef(null);

  // Helper to clamp translateX so cards can't be dragged too far
  const clampTranslateX = (x) => {
    if (!cardRowRef.current) return x;
    const containerWidth = cardRowRef.current.parentElement.offsetWidth;
    const contentWidth = cardRowRef.current.scrollWidth;
    const minTranslate = Math.min(0, containerWidth - contentWidth);
    return Math.max(minTranslate, Math.min(0, x));
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX;
    dragStartTranslate.current = translateX;
    document.body.style.cursor = 'grabbing';
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.pageX - dragStartX.current;
    setTranslateX(clampTranslateX(dragStartTranslate.current + dx));
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = '';
  };
  // Touch drag handlers
  const handleTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].pageX;
    dragStartTranslate.current = translateX;
  };
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].pageX - dragStartX.current;
    setTranslateX(clampTranslateX(dragStartTranslate.current + dx));
  };
  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const iconBgColors = ['#FDE658', '#FFDDF9', '#DADAFD', '#CBEFFF'];
  const cardBgColors = ['#FFF7C7', '#FFEFFC', '#EAEAFF', '#ECF9FF'];

  return (
    <Box
      sx={{
        maxWidth: '1440px',
        width: '100%',
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        // pl: { xs: 2, sm: 3, md: 6, lg: 10 },
        py: { xs: 4, sm: 6, md: 10 },
        gap: { xs: 4, md: 6 },
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        position: 'relative' // Added for positioning arrows
      }}
    >
      {/* <Box sx={{ maxWidth: '1440px', mx: 'auto', px: { xs: 2, md: 4 }, py: 6 }}> */}
      <Box
        sx={{
          maxWidth: '1440px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          pl: { xs: 2, sm: 3, md: 6, lg: 10 },
          py: { xs: 4, sm: 6, md: 10 },
          gap: { xs: 4, md: 6 },
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          position: 'relative'
        }}
      >
        {/* Left Side - Stylized G with images */}
        <Box sx={{ width: '557px', height: '841.27px', opacity: 1, transform: 'rotate(0deg)', mb: { xs: 4, md: 0 } }}>
          <img src={leftImg} alt="Stylized G" width="100%" />
        </Box>

        {/* Right Side - Text and Cards */}
        <Box sx={{ flex: { xs: 'none', md: 1 }, width: { xs: '100%', md: '50%' }, py: 10 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Typography
              sx={{
                width: '379px',
                opacity: 1,
                fontFamily: '"PayPal Open", sans-serif', // Fallback to sans-serif
                fontWeight: 500, // Medium weight
                fontSize: '56px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#140E13',
                m: 0 // Remove margin
              }}
            >
              Why Teamgrid
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#F5F7FA',
                  '&:hover': {
                    backgroundColor: '#E6E9ED'
                  }
                }}
              >
                <img src={leftArrow} alt="Scroll left" style={{ width: 20, height: 20 }} />
              </IconButton>
              <IconButton
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#F5F7FA',
                  '&:hover': {
                    backgroundColor: '#E6E9ED'
                  }
                }}
              >
                <img src={rightArrow} alt="Scroll right" style={{ width: 20, height: 20, }} />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Flexible Talent. Reliable Delivery. Scalable Results.
          </Typography>
          <Box
            sx={{
              width: '100%',
              overflowX: 'hidden',
              pb: { xs: 6, sm: 4, md: 2, lg: 1 },
              userSelect: isDragging.current ? 'none' : 'auto',
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Box
              ref={cardRowRef}
              sx={{
                display: 'grid',
                gridTemplateRows: 'repeat(2, 1fr)',
                gridAutoFlow: 'column',
                gap: '24px',
                width: 'max-content',
                minWidth: '100%',
                overflowY: 'visible',
                cursor: isDragging.current ? 'grabbing' : 'grab',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                transform: `translateX(${translateX}px)`,
                transition: isDragging.current ? 'none' : 'transform 0.3s',
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {[
                {
                  title: "Right Talent, Matched Your Needs",
                  description: "We align expertise with your business objectives and workflows.",
                  icon: teamLogo
                },
                {
                  title: "Trustworthy and Confidential",

                  description: "NDA-backed, process-driven, and fully aligned with your brand.",
                  icon: trust
                },
                {
                  title: "Flexible Engagement Models",
                  description: "Work the way you prefer — retainers, hourly, or fixed-cost projects.",

                  icon: flex
                },
                {
                  title: "Optional Project Oversight",
                  description: "NDA-backed, process-driven, and fully aligned with your brand.",
                  icon: project
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    width: '384px',
                    height: '218px',
                    gap: '24px',
                    borderRadius: '24px',
                    p: 3, // 24px
                    bgcolor: cardBgColors[index],
                    color: '#000',
                    boxShadow: 'none',
                    transition: '0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    opacity: 1,
                    '&:hover': {
                      boxShadow: '0px 6px 16px rgba(0,0,0,0.08)',
                    },
                    cursor: 'pointer',
                  }}
                >
                  <CardContent sx={{ p: 0, width: '100%' }}>
                    <Box
                      sx={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '14px',
                        padding: '16px',
                        backgroundColor: iconBgColors[index],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        gap: '10px',
                        opacity: 1,
                      }}
                    >

                      <img
                        src={item.icon}
                        alt="icon"
                        style={{ width: "32px", height: "32px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        width: '336px',
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 500, // Medium
                        fontSize: '20px',
                        lineHeight: '120%',
                        letterSpacing: '0%',
                        color: '#05408E',
                        opacity: 1,
                        mb: 1,
                        // Optional: Add text truncation for long titles
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 400, // Regular
                        fontSize: '16px',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                        color: '#140E13',
                        // Optional: Add responsive behavior if needed
                        // fontSize: { xs: '14px', md: '16px' }
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
          <Box mt={4}>
            <Button variant="contained" sx={{ borderRadius: '999px' }}>
              Explore Services →
            </Button>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}

    </Box>
  );
};


export default WhyTeamgrid2;
