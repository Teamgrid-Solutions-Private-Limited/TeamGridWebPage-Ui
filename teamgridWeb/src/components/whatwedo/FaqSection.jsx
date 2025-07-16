import React, { useState } from "react";
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  Container,
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
    answer:
      "Absolutely. Our developers are trained to follow best practices for responsiveness and WCAG-compliant accessibility.",
  },
  {
    question: "Can you work with our in-house backend team?",
    answer:
      "Yes, we often collaborate with in-house backend teams to build seamless front-end integrations with your existing systems and APIs.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#F4F9FF" }}>
      <Container maxWidth="md">
        <Typography
          fontWeight={500}
          textAlign="center"
          sx={{ mb: 2, color: "#140E13", fontSize: "48px" }}
        >
          Got Questions
        </Typography>
        <Typography
          textAlign="center"
          sx={{ mb: 6, color: "#000000", fontSize: "18px", fontWeight: 500 }}
        >
          Clear responses to common questions about how we <br /> work and what we deliver.
        </Typography>

        {/* FAQ Items */}
        <Box
          sx={{
            width: { xs: '100%', sm: '95%', md: '588px' },
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            mt: 5,
            mx: "auto",
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
                  border: "1px solid #D2E6FF",
                }}
              >
                {/* Question Header */}
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
                      color: "#05408E",
                      textAlign: "left",
                    }}
                  >
                    {item.question}
                  </Typography>

                  <IconButton>
                    {isOpen ? (
                      <RemoveIcon sx={{ color: "#05408E" }} />
                    ) : (
                      <AddIcon sx={{ color: "#05408E" }} />
                    )}
                  </IconButton>
                </Box>

                {/* Answer Collapse */}
                <Collapse in={isOpen}>
                  <Box
                    sx={{
                      px: 3,
                      pb: 2,
                      textAlign: "left",
                      fontFamily: '"PayPal Open", sans-serif',
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "150%",
                      color: "#140E13",
                      opacity: 1,
                    }}
                  >
                    {item.answer ? (
                      item.answer
                    ) : (
                      <Typography>
                        This information will be updated soon.
                      </Typography>
                    )}
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
