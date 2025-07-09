import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const faqs = [
  {
    question: "Can I hire a front-end developer for just a week or two?",
    answer:
      "Yes, we offer short-term engagements perfectly suited for urgent UI needs, one-off tasks, or overflow support when your internal team is at capacity.",
  },
  {
    question:
      "Do your developers follow responsive and accessibility guidelines?",
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
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleChange = (index) => (_, isExpanded) => {
    setExpandedIndex(isExpanded ? index : false);
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
          Clear responses to common questions about how we <br /> work and what
          we deliver.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedIndex === index}
              onChange={handleChange(index)}
              sx={{
                mb: 2,
                borderRadius: "16px",
                boxShadow: "none",
                backgroundColor: "#fff",
                width: "100%",
                maxWidth: "588px",
                border: "1px solid #D2E6FF",
                overflow:"hidden"
              }}
            >
              <AccordionSummary
                expandIcon={
                  expandedIndex === index ? (
                    <RemoveIcon sx={{ color: "#05408E" }} />
                  ) : (
                    <AddIcon sx={{ color: "#05408E" }} />
                  )
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  fontWeight={400}
                  color="#05408E"
                  fontSize="18px"
                  sx={{ mr: 2 }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="#140E13" fontSize="16px" fontWeight={400}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
