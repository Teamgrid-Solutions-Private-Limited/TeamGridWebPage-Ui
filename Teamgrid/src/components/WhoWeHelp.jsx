import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import img1 from "../assets/Rectangle-40.png";
import img2 from "../assets/Rectangle-41.png";
import img3 from "../assets/Rectangle-45.png";
import img4 from "../assets/Rectangle-46.png";

const WhoWeHelp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        bgcolor: "#fff",
        display: "flex",
        maxWidth: "1700px",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 12 },
        py: { xs: 5, md: 10 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          width: "100%",
        }}
      >


                                            {/* LEFT TEXT SECTION */}


        <Box sx={{ maxWidth: 500 }}>
          <Typography
            fontSize={{ xs: "28px", sm: "34px", md: "40px" }}
            fontWeight={700}
            mb={1}
          >
            Who We Help
          </Typography>
          <Typography
            sx={{ fontSize: "16px" }}
            variant="subtitle1"
            color="#000"
            mb={2}
          >
            A Trusted Partner for Growing Teams
          </Typography>
          <Typography
            fontSize={{ xs: "15px", sm: "16px", md: "17px" }}
            variant="body1"
            color="#000"
            mb={5}
          >
            We work with agencies, startups, and businesses of all sizes —
            helping them extend their capacity, speed up delivery, and stay
            focused on what matters most.
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: "15px", sm: "20px", md: "1.1rem" },
              borderRadius: "50px",
              backgroundColor: "#05408E",
              textTransform: "none",
              px: { xs: 3, sm: 3.5, md: 4 },
              py: { xs: 1, sm: 1.2, md: 1.5 },
              minHeight: "52px",
              "&:hover": {
                backgroundColor: "#0043aa",
              },
            }}
          >
            Explore Services →
          </Button>
        </Box>

        {/* RIGHT IMAGE GRID */}
        <Box sx={{  }}>
          <Grid container spacing={2}>
            {" "}
           
            <Grid item xs={6}>
              {" "}
              
              <Box
                sx={{
                  mb: { xs: 2, md: 3 },
                  mt: { xs: 2, md: 6 },
                  height: { xs: "170px", sm: "200px", md: "320px" }, 
                }}
              >
                <Box
                  component="img"
                  src={img1}
                  alt="img1"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box sx={{ height: { xs: "170px", sm: "200px", md: "320px" } }}>
                <Box
                  component="img"
                  src={img2}
                  alt="img2"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            {/* Column 2 */}
            <Grid item xs={6}>
              {" "}
              {/* Always take 6 columns (half width) even on mobile */}
              <Box
                sx={{
                  mb: { xs: 2, md: 3 },
                  height: { xs: "170px", sm: "200px", md: "320px" },
                }}
              >
                <Box
                  component="img"
                  src={img3}
                  alt="img3"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box sx={{ height: { xs: "170px", sm: "200px", md: "320px" } }}>
                <Box
                  component="img"
                  src={img4}
                  alt="img4"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 6,
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeHelp;
