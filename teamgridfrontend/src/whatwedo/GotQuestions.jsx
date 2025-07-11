import React, { useState } from "react";
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const questions = [
  {
    question: "Can I hire a front-end developer for just a week or two?",
    answer:
      "Yes, we offer short-term engagements perfectly suited for urgent UI needs, one-off tasks, or overflow support when your internal team is at capacity.",
  },
  {
    question: "Do your developers follow responsive and accessibility guidelines?",
    answer: "",
  },
  {
    question: "Can you work with our in-house backend team?",
    answer: "",
  },
];

const GotQuestions = () => {
  const [openIndex, setOpenIndex] = useState(0); // default open 1st

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F4F9FF",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        maxWidth: "100%",
        mx: "auto",
      }}
    >
      {/* Centered content container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // centers child box
        }}
      >
        {/* Heading box */}
        <Box
          sx={{
            width: { xs: '100%', sm: '90%', md: '477px' },
            height: { xs: 'auto', md: '104px' },
            opacity: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              width: { xs: '100%', sm: '90%', md: '328px' },
              height: { xs: 'auto', md: '34px' },
              fontFamily: '"PayPal Open", sans-serif',
              fontSize: { xs: '28px', sm: '36px', md: '48px' },
              fontWeight: 500,
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#000000",
              textAlign: "center",
              opacity: 1,
              mb:1
            }}
          >
            Got Questions
          </Typography>


          <Typography
            sx={{
              width: { xs: '100%', sm: '90%', md: '477px' },
              height: { xs: 'auto', md: '54px' },
              fontFamily: '"PayPal Open", sans-serif',
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              fontWeight: 500,
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "#140E13",
              textAlign: "center",
              opacity: 1,
            }}
          >
            Clear responses to common questions about how we work and what we deliver.
          </Typography>

        </Box>

        {/* Accordion List */}
        <Box
          sx={{
            width: { xs: '100%', sm: '95%', md: '588px' },
            // height: "382px",
            opacity: 1,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            mt: 5
          }}
        >
          {questions.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  mb: 2,
                  border: isOpen ? "1px solid #D2E6FF" : "1px solid #D2E6FF",
                }}
              >
                <Box
                  sx={{
                    px: 3,
                    py: 2.5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggle(index)}
                >
                  <Typography
                    sx={{
                      fontFamily: '"PayPal Open", sans-serif',
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      color: "#05408E",
                      textAlign: "left",
                    }}
                  >
                    {item.question}
                  </Typography>

                  <IconButton>{isOpen ? <RemoveIcon /> : <AddIcon />}</IconButton>
                </Box>
                <Collapse in={isOpen}>
                  {/* <Divider /> */}
                  <Box
                    sx={{
                      px: 3,
                      pb: 2,
                      textAlign: "left",
                      fontFamily: '"PayPal Open", sans-serif',
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                      letterSpacing: "0%",
                      color: "#140E13",
                      opacity: 1,
                    }}
                  >
                    {item.answer ? (
                      item.answer
                    ) : (
                      <Typography
                        // component="em"
                        sx={{
                          // fontFamily: '"PayPal Open", sans-serif',
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "150%",
                          letterSpacing: "0%",
                          // fontStyle: "italic",
                          color: "#140E13",
                           // remove default em margin if needed
                        }}
                      >
                        This information will be updated soon.
                      </Typography>
                    )}
                  </Box>

                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>

  );
};

export default GotQuestions;
