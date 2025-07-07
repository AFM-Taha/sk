import React from 'react';
import './Banner.css';
import { Box, Button, Typography } from '@mui/material';
import Navbar from '../../Components/Navbar/Navbar';

const Banner = () => {
    return (
        <Box
            sx={{
                minHeight: { xs: '95dvh', sm: '100vh' },
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
                    textAlign: "center",
                    zIndex: 1,
                    pt: { xs: 4, md: 0 }
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "stretch" }, // stretch for full height
                        justifyContent: "space-between",
                        // gap: { xs: 4, md: 8 },
                        height: "100%",
                    }}
                >
                    {/* Left Side: Text Content */}
                    <Box sx={{
                        px: { xs: 2, md: 3, lg: 8 },
                        py: { xs: 6, md: 3, lg: 10 },
                        flex: 1,
                        textAlign: { xs: "left", md: "left" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <Typography variant="h4" fontWeight={700} mb={3}>
                            Certification In Full Stack Development
                        </Typography>
                        <Box component="ul" sx={{ pl: { xs: 2, md: 3 }, mb: 4, color: "#444", fontSize: 18 }}>
                            <li>6 months part-time program with online classes</li>
                            <li>Revised curriculum for post Chat-GPT era</li>
                            <li>No prior coding experience required</li>
                            <li>Suitable for final years, graduates and early professionals.</li>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                background: "linear-gradient(90deg, #7B3FE4 0%, #E14FFF 100%)",
                                color: "#fff",
                                borderRadius: "30px",
                                width: "200px",
                                px: 4,
                                py: 1.5,
                                fontWeight: 600,
                                fontSize: 18,
                                textTransform: "none",
                                boxShadow: "0 2px 8px 0 rgba(123,63,228,0.15)",
                                '&:hover': {
                                    background: "linear-gradient(90deg, #7B3FE4 0%, #E14FFF 100%)",
                                    opacity: 0.9,
                                }
                            }}
                        >
                            Enroll Now
                        </Button>
                    </Box>

                    {/* Right Side: Image */}
                    <Box sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        height: "100%",
                        minHeight: 320,
                    }}>
                        <img
                            src="/assets/images/banner.svg"
                            alt="Full Stack Developer"
                            style={{
                                height: "110%",
                                width: "auto",
                                maxWidth: "110%",
                                objectFit: "contain",
                                display: "block",
                                borderRadius: "40px"
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default Banner;