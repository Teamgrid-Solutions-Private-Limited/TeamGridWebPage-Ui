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
import rightArrow from "../assets/ci_arrow-right-lg (1).svg"
import leftArrow from "../assets/ci_arrow-right-lg.svg"
import topIcon from "../assets/fluent_people-team-28-regular.svg"
const offerings = [
  {
    title: "Design-to-Code Conversion",
    desc: "Pixel-perfect UI from Figma, Sketch, or PSD files.",
    highlight: true,
  },
  {
    title: "Responsive Web Design",
    desc: "Optimized layouts for mobile, tablet, and desktop.",
  },
  {
    title: "React Component Development",
    desc: "Reusable components using modern frameworks.",
  },
  {
    title: "API-Driven Integration Service",
    desc: "Seamless UI integration with RESTful or headless APIs.",
  },
  {
    title: "Performance Optimisation",
    desc: "Fast-loading, efficient front-end experiences.",
  },
  {
    title: "Cross-Browser Compatibility",
    desc: "Consistent rendering across Chrome, Safari, Firefox.",
  },
];

const WhyTeamgrid2 = () => {
  // const scrollRef = useRef(null);
  // Mouse drag scroll logic
  const isDragging = useRef(false);
  const startX = useRef(0);
  // const scrollLeft = useRef(0);
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  // Scroll handlers (optional, keep for horizontal scroll)
 // Scroll handlers (optional, keep for horizontal scroll)
  const scrollLeft = () => {
    setActiveTab((prev) => (prev === 0 ? offerings.length - 1 : prev - 1));
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    setActiveTab((prev) => (prev === offerings.length - 1 ? 0 : prev + 1));
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
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
        position: 'relative' // Added for positioning arrows
      }}
    >
      {/* LEFT BOX */}
      <Box
        sx={{
          width: { xs: '100%', md: '588px' },
          minHeight: {xs:"160px",sm:"260px",md:"360px",lg:"360px"},
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          mb: { xs: 4, md: 0 },
          my: { xs: 2, md: 6, lg: 8 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"PayPal Open", sans-serif',
              fontWeight: 500,
              fontSize: { xs: '32px', sm: '40px', md: '56px' },
              lineHeight: '100%',
              letterSpacing: '0px',
              opacity: 1,
              width: { xs: '100%', md: '477px' },
              height: 'auto',
              mb: 2,
            }}
          >
            What We Offer
          </Typography>

          <Typography
            sx={{
              fontFamily: '"PayPal Open", sans-serif',
              fontWeight: 500,
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              color: '#000000',
              opacity: 1,
              width: { xs: '100%', md: '486px' },
              height: 'auto',
              my: 2,
            }}
          >
            Pixel-Perfect Front-End Development, Aligned with Your Designs and Deadlines
          </Typography>

          <Box
            sx={{
              width: { xs: '100%', md: '486px' },
              height: 'auto',
              opacity: 1,
              overflow: 'hidden',
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"PayPal Open", sans-serif',
                fontWeight: 400,
                fontSize: { xs: '13px', sm: '15px', md: '16px' },
                lineHeight: '150%',
                color: 'text.secondary',
              }}
            >
              We help web and digital agencies deliver high-quality user interfaces that are responsive, accessible, and fast.
              Whether you're building a simple landing page or a complex web app, our front-end developers work as an extension
              of your team to bring your vision to life.
            </Typography>
          </Box>

        </Box>

        <Button
          variant="contained"
          sx={{
            width: { xs: '90%', sm: '90%',  md: '246px'},
            height: '59px',
            padding: { xs: '12px 0', sm: '16px 40px' },
            borderRadius: '40px',
            backgroundColor: '#05408E',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '16px',
            letterSpacing: '0px',
            gap: '10px',
            opacity: 1,
          
            '&:hover': {
              backgroundColor: '#003E79',
            },
            mt: 2,
            ml:{xs:2,sm:4,md:0}
                    }}
        >
          Explore Services →
        </Button>
      </Box>

      {/* RIGHT SCROLLABLE OFFERINGS */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          height: 'auto',
          overflowX: 'auto', // Enable horizontal scroll
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          pb: {xs:6,sm:4,md:2,lg:1}, // Optional: add padding-bottom for scroll bar space
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: 'grid',
            gridTemplateRows: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gridAutoFlow: 'column',
            gap: '24px',
            overflowX: 'auto',
            overflowY: 'visible',
            cursor: 'grab',
            width: '100%',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleMouseDown} // Alias for touch
          onTouchMove={handleMouseMove} // Alias for touch
        >
          {offerings.map((item, index) => (
            <Card
              key={index}
              onClick={() => setActiveTab(index)}
              sx={{
                width: { xs: '90vw', sm: '282px' },
                minWidth: { xs: '220px', sm: '282px' },
                height: { xs: 'auto', sm: '242px' },
                borderRadius: '24px',
                p: { xs: 2, sm: '24px' },
                bgcolor: index === activeTab ? '#05408E' : '#F3F3F6',
                color: index === activeTab ? '#fff' : '#000',
                boxShadow: 'none',
                transition: '0.3s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                opacity: 1,
                gap: '24px',
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
                    backgroundColor: index === activeTab ? '#1777F6' : '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4,
                    gap: '10px',
                    opacity: 1,
                  }}
                >
                  <img
                    src={topIcon}
                    alt="icon"
                    style={{
                      width: 32,
                      height: 32,
                      opacity: 1,
                      filter: index === activeTab
                        ? 'brightness(0) invert(1)'
                        : 'invert(27%) sepia(99%) saturate(7476%) hue-rotate(202deg) brightness(97%) contrast(101%)'
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"PayPal Open", sans-serif',
                    fontWeight: 500, // Medium
                    fontSize: '20px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: index === activeTab ? '#FFFFFF' : "#05408E",
                    width: '234px',
                    // height: '38px',
                    opacity: 1,
                    mb:1
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: '"PayPal Open", sans-serif',
                    fontWeight: 400,            // Regular = 400
                    fontSize: '16px',
                    lineHeight: '150%',         // Equals 1.5
                    letterSpacing: '0%',
                   color: index === activeTab ? '##EBF4FF' : "#3E393E",     // Or set a specific color like '#000'
                  }}
                >
                  {item.desc}
                </Typography>

              </CardContent>
            </Card>
          ))}
        </Box>
        {/* Arrow navigation - move outside the box but visually aligned */}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 25,sm:40, md: 0, lg: 0 },
          bottom: 4,
          display: 'flex',
          gap: 1,
          zIndex: 2,
          ml: { md: 'calc(588px + 124px)' }, // align with right section start
          my: 1
        }}
      >
        <IconButton
          onClick={scrollLeft}
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: '#F5F7FA',
            '&:hover': {
              backgroundColor: '#E6E9ED'
            }
          }}
        >
          <img src={leftArrow} alt="Scroll left" style={{ width: 24, height: 24 }} />
        </IconButton>
        <IconButton
          onClick={scrollRight}
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: '#05408E',
            '&:hover': {
              backgroundColor: '#003087'
            }
          }}
        >
          <img src={rightArrow} alt="Scroll right" style={{ width: 24, height: 24, filter: 'brightness(0) invert(1)' }} />
        </IconButton>
      </Box>
    </Box>
  );
};


export default WhyTeamgrid2;
