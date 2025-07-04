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

const models = [
  {
    title: "Flexible Time & Material Model for Evolving Needs",
    points: [
      "Pay only for hours worked",
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
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 6, md: 10 } }}>
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
          <Typography variant="h4" fontWeight={600} sx={{ fontSize: { xs: 28, md: 40 }, mb: 1 }}>
            Engagement Models
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Choose the engagement model that best suits your project needs
          </Typography>
        </Box>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: "12px",
            height: 48,
            px: 3,
            mt: { xs: 2, md: 0 },
            borderColor: "#cbd5e1",
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Explore Services
        </Button>
      </Box>

      <Grid container spacing={3}>
        {models.map((model, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#F6F7FA",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography fontWeight={600} fontSize="16px" color="#003057" mb={2}>
                  {model.title}
                </Typography>
                <Stack spacing={1} mb={3}>
                  {model.points.map((point, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleIcon sx={{ color: "#00B67A", fontSize: 20 }} />
                      <Typography fontSize="14px">{point}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      backgroundColor: "#05408E",
                      fontWeight: 500,
                    }}
                  >
                    Reach us
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      fontWeight: 500,
                      color: "#000",
                      borderColor: "#cbd5e1",
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
