import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function ServiceBanner() {
    return (

        <Box
            sx={{
                minHeight: { xs: '100dvh', sm: '100vh' },
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: { xs: 4, md: 8 },
                backgroundImage: { xs: 'url(/assets/images/service-banner.png)', lg: 'url(/assets/images/service-banner.svg)' },
                backgroundSize: 'cover',
                position: 'relative',
                mt: -14,

            }}
        >
            <Box sx={{ position: 'absolute', bottom: 0, }}>
                <img style={{ width: '100%' }} src="/assets/images/service-banner-buttom-ellipse.svg" alt="" />
            </Box>

            <Box
                sx={{
                    width: { xs: "100%", md: "90%" },
                    maxWidth: 1200,
                    background: "#fff",
                    borderRadius: "40px",
                    boxShadow: "0 4px 24px 0 rgba(80,80,120,0.08)",
                    px: { xs: 2, md: 8 },
                    py: { xs: 6, md: 10 },
                    textAlign: "center",
                    zIndex: 1
                }}
            >
                <Typography
                    variant="h2"
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: "2.2rem", md: "4rem" },
                        mb: 2,
                        color: "#181818",
                    }}
                >
                    Empowering Tech Talent
                </Typography>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    sx={{
                        fontSize: { xs: "1.3rem", md: "2.5rem" },
                        mb: 4,
                        color: "#555",
                    }}
                >
                    Building Future-Ready Software
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "1rem", md: "1rem" },
                        color: "#444",
                        mb: 5,
                        maxWidth: 700,
                        mx: "auto",
                    }}
                >
                    At Skillra Academy, we blend cutting-edge education with real-world software solutions.

                    Learn in-demand tech skills, work on live projects, and launch your future with confidence.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        background: "linear-gradient(90deg, #6a5af9 0%, #b16cea 100%)",
                        color: "#181818",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        px: 4,
                        py: 1.5,
                        borderRadius: "30px",
                        boxShadow: "0 4px 16px 0 rgba(120,80,255,0.10)",
                        textTransform: "none",
                        transition: "0.2s",
                        "&:hover": {
                            background: "linear-gradient(90deg, #b16cea 0%, #6a5af9 100%)",
                            color: "#fff",
                        },
                    }}
                >
                    Explore Courses
                </Button>
            </Box>
        </Box >
    );
}