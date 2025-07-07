
import { Box, Typography, Card, CardContent } from "@mui/material";
import React from "react";

const WCSHome = () => {
    const features = [
        {
            icon: '/assets/images/wcs/icon_1.svg',
            title: "Placement Support",
            description: "Complete support from our dedicated placement team until you get a job",
        },
        {
            icon: '/assets/images/wcs/icon_2.svg',
            title: "Resume Building",
            description: "Resume sharing in our network of 1200+ hiring partners",
        },
        {
            icon: '/assets/images/wcs/icon_3.svg',
            title: "Mock Interviews",
            description: "Professional mock interviews assistance",
        },
        {
            icon: '/assets/images/wcs/icon_4.svg',
            title: "Capstone Projects",
            description: "Undertake industry certified Capstone Projects from companies like Zomato & BookMyShow",
        },
        {
            icon: '/assets/images/wcs/icon_5.svg',
            title: "100% Job Assurance",
            description: "Get all the support to crack your dream tech job.",
        },
        {
            icon: '/assets/images/wcs/icon_6.svg',
            title: "Growth Champion",
            description: "Know learning strategies and get mentorship from our top Alumni",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                position: "relative",
                overflow: "hidden",
                px: 2,
                pb: 6,
            }}
        >
            {/* Background Ellipse */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                    width: { xs: '100%', sm: 500, md: 700, lg: 800 },
                    maxWidth: '100vw',
                }}
            >
                <img
                    style={{ width: '100%', display: 'block' }}
                    src="/assets/images/success-ellipse.svg"
                    alt=""
                />
            </Box>

            {/* Title */}
            <Typography
                sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '28px', sm: '36px', md: '42px' },
                    lineHeight: 1.2,
                    textAlign: 'center',
                    color: '#222',
                    mb: 1,
                    zIndex: 2,
                    mt: 6,
                }}
            >
                Why Choose Skillra
            </Typography>

            {/* Description */}
            <Box
                sx={{
                    maxWidth: 1000,
                    zIndex: 2,
                    mb: 4,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: '14px', sm: '16px' },
                        textAlign: 'center',
                        color: '#444',
                    }}
                >
                    Launch your career in Tech with Skillra Academy's premier training programs in Web Development, Game Development, Blockchain, and more. Learn directly from top engineers and real-world experts.
                </Typography>
            </Box>

            {/* Features using Flexbox */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 4,
                    maxWidth: 1200,
                    zIndex: 2,
                }}
            >
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: '1 1 calc(33.33% - 32px)', // 3 per row on large, auto-wrap on small
                            minWidth: '280px', // ensures card doesn't shrink too much on small screens
                            maxWidth: '350px',
                        }}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                boxShadow: 'none',
                                textAlign: 'center',
                                p: 2,
                                borderRadius: 4,
                                transition: 'transform 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <CardContent>
                                <Box
                                    component="img"
                                    src={feature.icon}
                                    alt={feature.title}
                                    sx={{ height: 50, mb: 2 }}
                                />
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ fontWeight: 600, mb: 1 }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#666', fontSize: '14px' }}
                                >
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default WCSHome;