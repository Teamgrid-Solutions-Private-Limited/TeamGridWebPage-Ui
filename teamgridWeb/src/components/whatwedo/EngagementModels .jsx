import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import verify from "../../assets/verifyy.png";

const models = [
  {
    title: "Flexible Time & Material Model for Evolving Needs",
    points: [
      "Only pay for the work you need — no fixed cost, no idle time",
      "Ideal for ongoing or evolving tasks",
      "Transparent weekly timesheets",
    ],
  },
  {
    title: "Dedicated Front-End Developer",
    points: [
      "Full-time resource working under your brand",
      "Monthly fixed cost",
      "Flexible replacement or scaling",
    ],
  },
  {
    title: "Fixed-Cost Model for Defined Scopes",
    points: [
      "Ideal for defined scopes like landing pages or small apps",
      "Detailed estimate upfront",
      "Milestone-based delivery & billing",
    ],
  },
];

const EngagementModels = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 15, lg: 11, xl: 10 }, // Horizontal padding
        py: { xs: 6, md: 10 }, // Vertical padding
        mx: "auto", // Center horizontally
        maxWidth: "1440px", // Optional: restrict width on large screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          mb: 4,
        }}
      >
        <Box>
          <Typography
            fontWeight={500}
            sx={{ fontSize: { xs: 28, md: 48 }, mb: 1, color: "#140E13" }}
          >
            Engagement Models
          </Typography>
          <Typography
            sx={{ color: "#000000", fontSize: "18px", fontWeight: "500" }}
          >
            Choose the engagement model that best suits your project needs
          </Typography>
        </Box>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: "16px",
            color: "#140E13",
            width: "246px",
            height: "59px",
            px: 3,
            mt: { xs: 2, md: 0 },
            borderColor: "#CACACA",
            textTransform: "none",
            fontWeight: 400,
            mr: { lg: 2 },
          }}
        >
          Explore Services
        </Button>
      </Box>

      <Grid container spacing={5}>
        {models.map((model, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#F3F3F6",
                borderRadius: "24px",
                height: "322px",
                width: { xs:"375px", sm:"375px" , md:"375px",lg: "375px", xl: "395px" },
                py: 2,
                px: 2,
                border:"none",
                boxShadow:"none"
              }}
            >
              <CardContent>
                <Typography
                  fontWeight={500}
                  fontSize="24px"
                  color="#05408E"
                  mb={2}
                >
                  {model.title}
                </Typography>
                <Stack spacing={1} mb={3}>
                  {model.points.map((point, i) => (
                    <Box
                      key={i}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <Box
                        component="img"
                        src={verify}
                        alt="Check icon"
                        sx={{ height: 20, width: 20 }}
                      />
                      <Typography fontSize="16px" fontWeight={400}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      backgroundColor: "#05408E",
                      height: "48px",
                      width: "143px",
                      fontWeight: 400,
                      color: "#FAFAFA",
                      fontSize: "16px",
                    }}
                  >
                    Reach us
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      fontWeight: 400,
                      height: "48px",
                      width: "144px",
                      borderColor: "#D7D7D7",
                      color: "#140E13",
                      fontSize: "16px",
                    }}
                  >
                    Know more...
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EngagementModels;
