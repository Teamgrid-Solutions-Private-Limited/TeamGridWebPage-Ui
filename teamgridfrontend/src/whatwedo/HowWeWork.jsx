import React from 'react';
import { Box, Typography } from '@mui/material';
import fstArrow from "../assets/Arrow 1.svg"; // Your arrow image
import secndArrow from "../assets/Vector 2.svg"; // Your arrow image
import thirdArw from "../assets/Arrow 2.svg";
import forthArw from "../assets/Vector 3.svg";
import fifthArw from "../assets/Arrow 3.svg"
const steps = [
    {
        step: '01',
        title: 'Discovery & Requirements',
        desc: 'We define goals, user types, and key screens to ensure alignment before design or development begins.',
    },
    {
        step: '02',
        title: 'Design Handoff & Planning',
        desc: 'We review design files, clarify edge cases, and outline technical scope for smooth project execution.',
    },
    {
        step: '03',
        title: 'Development',
        desc: 'We build responsive, pixel-perfect interfaces using React and modern CSS with clean, scalable code.',
    },
    {
        step: '04',
        title: 'API Integration',
        desc: 'We connect front-end with backend or CMS APIs to handle real-time data and error states reliably.',
    },
    {
        step: '05',
        title: 'QA & Testing',
        desc: 'We test on all screen sizes, ensure WCAG compliance, and validate performance across major browsers.',
    },
    {
        step: '06',
        title: 'Deployment or Handover',
        desc: 'We deliver clean, version-controlled code or coordinate handoff to backend teams for integration.',
    },
];

const HowWeWork = () => {
    return (
         <Box
                    sx={{
                        maxWidth: "1440px",
                        mx: "auto",
                        px: { xs: 2, sm: 4, md: 6, lg: 9.5 },
                        py: { xs: 0, sm: 0, md: 3, lg: 6 },
                    }}
                >
        <Box
            sx={{
                px: { xs: 2, sm: 4, md: 8,lg:8 },
                py: { xs: 6,sm:4, md: 10, lg: 6 },
                backgroundColor: "#0B3C7B",
                borderRadius: "40px",
                maxWidth: "1295px",
                mx: "auto",
                minHeight: "931px"
            }}
        >
            <Typography
                sx={{
                    width: '477px', // optional: apply only if needed
                    height: '40px', // optional: apply only if needed
                    fontFamily: '"PayPal Open", sans-serif',
                    fontWeight: 500, // corresponds to "Medium"
                    fontSize: { xs: "36px", md: "56px" },
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#FFFFFF",
                    mb: 4,
                    mx: "auto", // to center it horizontally if width is set
                }}
            >
                How We Work
            </Typography>


            <Typography
                sx={{
                    fontFamily: '"PayPal Open", sans-serif',
                    fontWeight: 400, // Regular
                    fontSize: "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#B2D2FC", // updated color
                    width: "458px",   // fixed width as per your spec
                    height: "55px",   // optional: generally height is handled by content
                    mx: "auto",       // centers the box horizontally
                    opacity: 1,
                    mb: 6,
                }}
            >
                Our front-end development process is built to deliver speed, quality, and collaboration.
            </Typography>

{/* First row with responsive arrows including the end arrow */}
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: { xs: 'flex-start',sm:"center", md: 'center' },
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 3, md: 2 },
    mb: { xs: 3, md: 4 },
    position: 'relative'
  }}
>
  {steps.slice(0, 2).map((step, index) => (
    <React.Fragment key={index}>
      {/* Card Container */}
      <Box sx={{ 
        textAlign: 'left', 
        position: 'relative',
        width: { xs: '100%', sm: '384px' },
        maxWidth: '384px'
      }}>
        {/* Card content remains exactly the same as before */}
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', lg: '160px' },
            minHeight: '160px',
            backgroundColor: '#005DD5',
            borderRadius: '24px',
            px: { xs: '24px', lg: '27px' },
            py: { xs: '24px', lg: '27px' },
            pl: { xs: '72px', lg: '77px' },
            color: 'white',
            fontFamily: '"PayPal Open", sans-serif',
          }}
        >
          {/* Step Number Badge */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '-24px', lg: '-27px' },
              top: { xs: '-16px', lg: '-20px' },
              backgroundColor: '#30ECAD',
              borderRadius: '24px',
              width: { xs: '72px', lg: '80px' },
              height: { xs: '72px', lg: '80px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: '18px 10px', lg: '20px 11px' },
              opacity: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'PayPal Open',
                fontWeight: 300,
                fontSize: { xs: '36px', lg: '40px' },
                lineHeight: '100%',
                color: '#089767',
                letterSpacing: '0%',
                textAlign: 'center',
              }}
            >
              {step.step}
            </Typography>
          </Box>

          <Typography
            sx={{
              width: '100%',
              maxWidth: '285px',
              fontFamily: 'PayPal Open',
              fontWeight: 500,
              fontSize: { xs: '18px', lg: '20px' },
              lineHeight: '120%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              opacity: 1,
              mb: { xs: 2, lg: 3 },
            }}
          >
            {step.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'PayPal Open',
              fontWeight: 400,
              fontSize: { xs: '14px', lg: '16px' },
              lineHeight: '150%',
              letterSpacing: '0%',
              color: '#B2D2FC',
              opacity: 1,
            }}
          >
            {step.desc}
          </Typography>
        </Box>
      </Box>

      {/* First arrow between Step 01 and Step 02 */}
      {index === 0 && (
        <>
          {/* Mobile (XS) - Down Arrow */}
          <Box sx={{ 
            display: { xs: 'flex', sm: 'flex' },
            justifyContent: 'center',
            width: '100%',
            my: 1,
            transform: 'rotate(90deg)'
          }}>
            <img
              src={fstArrow}
              alt="Down Arrow"
              style={{ width: '56px', height: 'auto' }}
            />
          </Box>
          
          {/* Small (SM) - Right Arrow */}
          <Box sx={{ 
            display: { xs: 'none', sm: 'none', md: 'none' },
            mx: 1,
            mt: '20px'
          }}>
            <img
              src={fstArrow}
              alt="Right Arrow"
              style={{ width: '56px', height: 'auto' }}
            />
          </Box>
          
          {/* Medium (MD) and Large (LG) - Original Arrow */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            mx: 1,
            mt: { md: '20px', lg: '20px' }
          }}>
            <img
              src={fstArrow}
              alt="Right Arrow"
              style={{ width: '56px', height: 'auto' }}
            />
          </Box>
        </>
      )}

      {/* Second arrow after Step 02 */}
      {index === 1 && (
        <>
          {/* Mobile (XS) - Down Arrow */}
          <Box sx={{ 
            display: { xs: 'flex', sm: 'none' },
            justifyContent: 'center',
            width: '100%',
            my: 1,
            transform: 'rotate(90deg)'
          }}>
            <img
              src={secndArrow}
              alt="Down Arrow"
              style={{ width: '56px', height: 'auto' }}
            />
          </Box>
          
          {/* Small (SM) - Right Arrow with special positioning */}
          <Box sx={{ 
            display: { xs: 'none', sm: 'none', md: 'none' },
            ml: 2,
            mt: '72px' // Adjusted for SM screens
          }}>
            <Box
              sx={{
                width: '56px',
                height: 'auto',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              <img
                src={secndArrow}
                alt="Arrow"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
          
          {/* Medium (MD) and Large (LG) - Original Arrow */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            ml: 2,
            mt: '72px' // Original positioning
          }}>
            <Box
              sx={{
                width: '56px',
                height: 'auto',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
            >
              <img
                src={secndArrow}
                alt="Arrow"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
        </>
      )}
    </React.Fragment>
  ))}
</Box>


            {/* Remaining rows (2 per row) */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 4,
                    alignItems: 'center',
                }}
            >
                {/* Forth arrow at the start of the second row */}
                <Box sx={{ mx: 1, mt: 12 }}>
                    <img
                        src={forthArw}
                        alt="Forth Arrow"
                        style={{ width: '56px', height: 'auto', marginBottom: '40px' }}
                    />
                </Box>
                {/* Step 4 */}
                <Box key={3} sx={{ textAlign: 'left', position: 'relative' }}>
                    <Box
                        sx={{
                            width: '384px',
                            height: '160px',
                            backgroundColor: '#005DD5',
                            borderRadius: '24px',
                            px: '27px',
                            py: '27px',
                            pl: '77px',
                            color: 'white',
                            fontFamily: '"PayPal Open", sans-serif',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '-27px',
                                top: '-20px',
                                backgroundColor: '#30ECAD',
                                borderRadius: '24px',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px 11px',
                                opacity: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 300,
                                    fontSize: '40px',
                                    lineHeight: '100%',
                                    color: '#089767',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                }}
                            >
                                {steps[3].step}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                width: '285px',
                                height: '14px',
                                fontFamily: 'PayPal Open',
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '120%',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                                opacity: 1,
                                mb: 3,
                            }}
                        >
                            {steps[3].title}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'PayPal Open',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                letterSpacing: '0%',
                                color: '#B2D2FC',
                                opacity: 1,
                            }}
                        >
                            {steps[3].desc}
                        </Typography>
                    </Box>
                </Box>
                {/* Third arrow in the middle of the second row */}
                <Box sx={{ mx: 1 }}>
                    <img
                        src={thirdArw}
                        alt="Third Arrow"
                        style={{ width: '56px', height: 'auto', marginBottom: '0px' }}
                    />
                </Box>
                {/* Step 3 */}
                <Box key={2} sx={{ textAlign: 'left', position: 'relative' }}>
                    <Box
                        sx={{
                            width: '384px',
                            height: '160px',
                            backgroundColor: '#005DD5',
                            borderRadius: '24px',
                            px: '27px',
                            py: '27px',
                            pl: '77px',
                            color: 'white',
                            fontFamily: '"PayPal Open", sans-serif',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '-27px',
                                top: '-20px',
                                backgroundColor: '#30ECAD',
                                borderRadius: '24px',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px 11px',
                                opacity: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 300,
                                    fontSize: '40px',
                                    lineHeight: '100%',
                                    color: '#089767',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                }}
                            >
                                {steps[2].step}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                width: '285px',
                                height: '14px',
                                fontFamily: 'PayPal Open',
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '120%',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                                opacity: 1,
                                mb: 3,
                            }}
                        >
                            {steps[2].title}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'PayPal Open',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                letterSpacing: '0%',
                                color: '#B2D2FC',
                                opacity: 1,
                            }}
                        >
                            {steps[2].desc}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Third row: steps 5 and 6 with arrow between */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    gap: 3,
                    mt: 4,
                    justifyContent: "flex-start",
                    mx: 13
                }}
            >
                {/* Step 5 */}
                <Box sx={{ textAlign: 'left', position: 'relative' }}>
                    <Box
                        sx={{
                            width: '384px',
                            height: '160px',
                            backgroundColor: '#005DD5',
                            borderRadius: '24px',
                            px: '27px',
                            py: '27px',
                            pl: '77px',
                            color: 'white',
                            fontFamily: '"PayPal Open", sans-serif',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '-27px',
                                top: '-20px',
                                backgroundColor: '#30ECAD',
                                borderRadius: '24px',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px 11px',
                                opacity: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 300,
                                    fontSize: '40px',
                                    lineHeight: '100%',
                                    color: '#089767',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                }}
                            >
                                {steps[4].step}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                width: '285px',
                                height: '14px',
                                fontFamily: 'PayPal Open',
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '120%',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                                opacity: 1,
                                mb: 3,
                            }}
                        >
                            {steps[4].title}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'PayPal Open',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                letterSpacing: '0%',
                                color: '#B2D2FC',
                                opacity: 1,
                            }}
                        >
                            {steps[4].desc}
                        </Typography>
                    </Box>
                </Box>
                {/* Fifth arrow between Step 5 and Step 6 */}
                <Box sx={{ my: 0 }}>
                    <img
                        src={fifthArw}
                        alt="Fifth Arrow"
                        style={{ width: '56px', height: 'auto', marginBottom: '0px' }}
                    />
                </Box>
                {/* Step 6 */}
                <Box sx={{ textAlign: 'left', position: 'relative' }}>
                    <Box
                        sx={{
                            width: '384px',
                            height: '160px',
                            backgroundColor: '#005DD5',
                            borderRadius: '24px',
                            px: '27px',
                            py: '27px',
                            pl: '77px',
                            color: 'white',
                            fontFamily: '"PayPal Open", sans-serif',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '-27px',
                                top: '-20px',
                                backgroundColor: '#30ECAD',
                                borderRadius: '24px',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px 11px',
                                opacity: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 300,
                                    fontSize: '40px',
                                    lineHeight: '100%',
                                    color: '#089767',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                }}
                            >
                                {steps[5].step}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                width: '285px',
                                height: '14px',
                                fontFamily: 'PayPal Open',
                                fontWeight: 500,
                                fontSize: '20px',
                                lineHeight: '120%',
                                letterSpacing: '0%',
                                color: '#FFFFFF',
                                opacity: 1,
                                mb: 3,
                            }}
                        >
                            {steps[5].title}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'PayPal Open',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '150%',
                                letterSpacing: '0%',
                                color: '#B2D2FC',
                                opacity: 1,
                            }}
                        >
                            {steps[5].desc}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>
    );
};

export default HowWeWork;
