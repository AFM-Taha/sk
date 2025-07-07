
import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "60vh",
        background: "linear-gradient(180deg, #fff 60%, #e6edfa 100%)",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: 'relative',
        overflow: 'hidden',
      }}
      id="about-us"
    >
      {/* bg ellipse */}
      <Box sx={{ position: 'absolute', top: 1, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <img style={{ width: '800px' }} src="/assets/images/service-about-us-ellipse.svg" alt="" />
      </Box>

      {/* Content */}
      <Typography
        variant="h4"
        fontWeight={700}
        align="center"
        mb={3}
        sx={{
          color: "#181818",
          zIndex: 2,
          position: 'relative'
        }}
      >
        About Us Page
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          maxWidth: 800,
          mb: 5,
          color: "#222",
          fontSize: { xs: "1rem", md: "1rem" },
          zIndex: 2,
          position: 'relative'
        }}
      >
        Skillra Technologies was founded with a vision to make quality tech education accessible while offering cutting-edge software solutions. We’re a unique blend of educators, developers, designers, and tech consultants united by one mission: Empower through Innovation.
      </Typography>
      <Box
        component="img"
        src="/assets/images/about-us.png"
        alt="Skillra Team"
        sx={{
          width: "100%",
          maxWidth: 900,
          height: { xs: 220, md: 340 },
          objectFit: "cover",
          borderRadius: 4,
          boxShadow: 2,
          zIndex: 2,
          position: 'relative'
        }}
      />
    </Box>
  );
}