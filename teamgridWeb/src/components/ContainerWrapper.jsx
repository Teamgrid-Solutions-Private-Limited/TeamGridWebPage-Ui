// components/ContainerWrapper.jsx
import React from 'react';
import { Box } from '@mui/material';

const ContainerWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1440px",
        mx: "auto",
        ml: { xs: 2, sm: 4, md: 8, lg: 15 }, // Same as Teamgrid logo margin
        px: { xs: 2, sm: 4, md: 0 }, // Optional inner padding
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerWrapper;
