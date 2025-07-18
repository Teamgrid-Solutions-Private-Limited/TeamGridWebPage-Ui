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
                    px: { xs: 2, sm: 4, md: 8, lg: 8 },
                    py: { xs: 6, sm: 4, md: 10, lg: 6 },
                    backgroundColor: "#0B3C7B",
                    borderRadius: "40px",
                    maxWidth: "1295px",
                    mx: "auto",
                    minHeight: "931px"
                }}
            >
                <Typography
                    sx={{
                        width: { xs: '100%', md: '477px' },
                        height: { xs: 'auto', md: '40px' },
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: "24px", md: "56px" },
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                        color: "#FFFFFF",
                        mb: { xs: 2, md: 4 },
                        mx: "auto",
                    }}
                >
                    How We Work
                </Typography>


                <Typography
                    sx={{
                        fontFamily: '"PayPal Open", sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: "13px", md: "16px" },
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        textAlign: "center",
                        color: "#B2D2FC",
                        width: { xs: '100%', md: '458px' },
                        height: { xs: 'auto', md: '55px' },
                        mx: "auto",
                        opacity: 1,
                        mb: { xs: 3, md: 6 },
                    }}
                >
                    Our front-end development process is built to deliver speed, quality, and collaboration.
                </Typography>

                {/* First row with responsive arrows including the end arrow */}
                {/* First row with arrow between cards */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 2,
                        mb: 4,
                    }}
                >
                    {/* Step 1 */}
                    <Box
                        sx={{
                            textAlign: 'left',
                            position: 'relative',
                            width: { xs: '90%', sm: '80%', md: '384px' },
                            mx: 'auto',
                            mb: { xs: 2, sm: 2, md: 0 },
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
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
                                    {steps[0].step}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: { xs: '100%', md: '285px' },
                                    height: { xs: 'auto', md: '14px' },
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', md: '20px' },
                                    lineHeight: '120%',
                                    letterSpacing: '0%',
                                    color: '#FFFFFF',
                                    opacity: 1,
                                    mb: { xs: 0.5, md: 3 },
                                }}
                            >
                                {steps[0].title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '16px' },
                                    lineHeight: '150%',
                                    letterSpacing: '0%',
                                    color: '#B2D2FC',
                                    opacity: 1,
                                    width: '100%',
                                    wordBreak: 'break-word',
                                }}
                            >
                                {steps[0].desc}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Arrow between Step 1 and Step 2, hidden on xs/sm */}
                    <Box
                        sx={{
                            mx: 1,
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                        }}
                    >
                        <img
                            src={fstArrow}
                            alt="First Arrow"
                            style={{
                                width: '56px',
                                height: 'auto',
                                marginTop: '20px',
                            }}
                        />
                    </Box>

                    {/* Step 2 */}
                    <Box
                        sx={{
                            textAlign: 'left',
                            position: 'relative',
                            width: { xs: '90%', sm: '80%', md: '384px' },
                            mx: 'auto',
                            mb: { xs: 0, sm: 0, md: 0 },
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
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
                                    {steps[1].step}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: { xs: '100%', md: '285px' },
                                    height: { xs: 'auto', md: '14px' },
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', md: '20px' },
                                    lineHeight: '120%',
                                    letterSpacing: '0%',
                                    color: '#FFFFFF',
                                    opacity: 1,
                                    mb: { xs: 0.5, md: 3 },
                                }}
                            >
                                {steps[1].title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '16px' },
                                    lineHeight: '150%',
                                    letterSpacing: '0%',
                                    color: '#B2D2FC',
                                    opacity: 1,
                                    width: '100%',
                                    wordBreak: 'break-word',
                                }}
                            >
                                {steps[1].desc}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Arrow after Step 2, hidden on xs/sm */}
                    <Box
                        sx={{
                            ml: 2,
                            mt: 9,
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                        }}
                    >
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
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row', lg: 'row' },
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        mt: { xs: 4, sm: 2, md: 8, lg: 6 },
                    }}
                >
                    {/* Forth arrow at the start of the second row */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block' },
                            mx: 1,
                            mt: { xs: 0, md: 12 },
                        }}
                    >
                        <img
                            src={forthArw}
                            alt="Forth Arrow"
                            style={{ width: '56px', height: 'auto', marginBottom: '40px' }}
                        />
                    </Box>

                    {/* Step 4 (order changes by breakpoint) */}
                    <Box
                        key={3}
                        sx={{
                            textAlign: 'left',
                            position: 'relative',
                            width: { xs: '90%', sm: '80%', md: '384px' },
                            order: { xs: 3, sm: 3, md: 3, lg: 1 },
                        }}
                    >
                        <Box
                            sx={{
                                height: '160px',
                                backgroundColor: '#005DD5',
                                borderRadius: '24px',
                                px: '27px',
                                py: '27px',
                                pl: '77px',
                                color: 'white',
                                fontFamily: '"PayPal Open", sans-serif',
                                position: 'relative',
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
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: '40px',
                                        color: '#089767',
                                        textAlign: 'center',
                                    }}
                                >
                                    {steps[3].step}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: { xs: '100%', md: '285px' },
                                    height: { xs: 'auto', md: '14px' },
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', md: '20px' },
                                    lineHeight: '120%',
                                    letterSpacing: '0%',
                                    color: '#FFFFFF',
                                    opacity: 1,
                                    mb: { xs: 0.5, md: 3 },
                                }}
                            >
                                {steps[3].title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: '#B2D2FC',
                                    width: '100%',
                                    wordBreak: 'break-word',
                                }}
                            >
                                {steps[3].desc}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Third arrow in the middle (order changes by breakpoint) */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block' },
                            mx: 1,
                            order: { xs: 2, sm: 2, md: 2, lg: 2 },
                        }}
                    >
                        <img
                            src={thirdArw}
                            alt="Third Arrow"
                            style={{ width: '56px', height: 'auto', marginBottom: '0px' }}
                        />
                    </Box>

                    {/* Step 3 (order changes by breakpoint) */}
                    <Box
                        key={2}
                        sx={{
                            textAlign: 'left',
                            position: 'relative',
                            width: { xs: '90%', sm: '80%', md: '384px' },
                            order: { xs: 1, sm: 1, md: 1, lg: 3 },
                        }}
                    >
                        <Box
                            sx={{
                                height: '160px',
                                backgroundColor: '#005DD5',
                                borderRadius: '24px',
                                px: '27px',
                                py: '27px',
                                pl: '77px',
                                color: 'white',
                                fontFamily: '"PayPal Open", sans-serif',
                                position: 'relative',
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
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: '40px',
                                        color: '#089767',
                                        textAlign: 'center',
                                    }}
                                >
                                    {steps[2].step}
                                </Typography>
                            </Box>
                            <Typography
                             sx={{
  width: { xs: '100%', md: '285px' },
  height: { xs: 'auto', md: '14px' },
  fontFamily: 'PayPal Open',
  fontWeight: 500,
  fontSize: { xs: '14px', md: '20px' },
  lineHeight: '120%',
  letterSpacing: '0%',
  color: '#FFFFFF',
  opacity: 1,
  mb: { xs: 0.5, md: 3 },
}}
                            >
                                {steps[2].title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: '#B2D2FC',
                                    width: '100%',
                                    wordBreak: 'break-word',
                                }}
                            >
                                {steps[2].desc}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Last row with responsive arrows between cards (steps 5 and 6) */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        flexWrap: 'wrap',
                        justifyContent: { xs: 'center', md: 'center', lg: 'flex-end' },
                        alignItems: 'center',
                        gap: 2,
                        mt: { xs: 4, sm: 4, md: 8, lg: 6 },

                        mx: { xs: 0, sm: 0, md: 0, lg: 0 },
                        mr: { lg: 8 },
                    }}
                >
                    {/* Step 5 */}
                    <Box
                        sx={{
                            textAlign: 'left',
                            position: 'relative',
                            width: { xs: '90%', sm: '80%', md: '384px' },
                            mx: 'auto',
                            mb: { xs: 2, sm: 2, md: 0 },
                        }}
                    >
                        <Box
                            sx={{
                                height: '160px',
                                backgroundColor: '#005DD5',
                                borderRadius: '24px',
                                px: '27px',
                                py: '27px',
                                pl: '77px',
                                color: 'white',
                                fontFamily: '"PayPal Open", sans-serif',
                                position: 'relative',
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
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: '40px',
                                        color: '#089767',
                                        textAlign: 'center',
                                    }}
                                >
                                    {steps[4].step}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: { xs: '100%', md: '285px' },
                                    height: { xs: 'auto', md: '14px' },
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', md: '20px' },
                                    lineHeight: '120%',
                                    letterSpacing: '0%',
                                    color: '#FFFFFF',
                                    opacity: 1,
                                    mb: { xs: 0.5, md: 3 },
                                }}
                            >
                                {steps[4].title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: '#B2D2FC',
                                    width: '100%',
                                    wordBreak: 'break-word',
                                }}
                            >
                                {steps[4].desc}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Arrow between Step 5 and Step 6, responsive for all sizes */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            my: { xs: 2, md: 0 },
                        }}
                    >
                        <img
                            src={fifthArw}
                            alt="Fifth Arrow"
                            style={{ width: '56px', height: 'auto' }}
                        />
                    </Box>

                    {/* Step 6 */}
                    <Box
                        sx={{
                            textAlign: 'left',
                            position: 'relative',
                            width: { xs: '90%', sm: '80%', md: '384px' },
                            mx: 'auto',
                            mb: { xs: 2, sm: 2, md: 0 },
                        }}
                    >
                        <Box
                            sx={{
                                height: '160px',
                                backgroundColor: '#005DD5',
                                borderRadius: '24px',
                                px: '27px',
                                py: '27px',
                                pl: '77px',
                                color: 'white',
                                fontFamily: '"PayPal Open", sans-serif',
                                position: 'relative',
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
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: '40px',
                                        color: '#089767',
                                        textAlign: 'center',
                                    }}
                                >
                                    {steps[5].step}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    width: { xs: '100%', md: '285px' },
                                    height: { xs: 'auto', md: '14px' },
                                    fontFamily: 'PayPal Open',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', md: '20px' },
                                    lineHeight: '120%',
                                    letterSpacing: '0%',
                                    color: '#FFFFFF',
                                    opacity: 1,
                                    mb: { xs: 0.5, md: 3 },
                                }}
                            >
                                {steps[5].title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', md: '16px' },
                                    color: '#B2D2FC',
                                    width: '100%',
                                    wordBreak: 'break-word',
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
