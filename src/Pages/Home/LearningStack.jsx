import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import React from "react";

const LearningStack = () => {
    const features = [
        { name: "HTML5", icon: "/assets/images/learning/01.svg" },
        { name: "CSS3", icon: "/assets/images/learning/02.svg" },
        { name: "JavaScript", icon: "/assets/images/learning/03.svg" },
        { name: "React JS", icon: "/assets/images/learning/04.svg" },
        { name: "Next JS", icon: "/assets/images/learning/05.svg" },
        { name: "Tailwind CSS", icon: "/assets/images/learning/06.svg" },
        { name: "NodeJs", icon: "/assets/images/learning/07.svg" },
        { name: "MongoDB", icon: "/assets/images/learning/08.svg" },
        { name: "Git", icon: "/assets/images/learning/09.svg" },
        { name: "GitHub", icon: "/assets/images/learning/10.svg" },
        { name: "Nginx", icon: "/assets/images/learning/11.svg" },
        { name: "Jenkins", icon: "/assets/images/learning/12.svg" },
        { name: "Docker", icon: "/assets/images/learning/13.svg" },
        { name: "AWS", icon: "/assets/images/learning/14.svg" },
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
                Learning stack
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

            {/* Features grid */}


            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    maxWidth: 1200,
                    zIndex: 2,
                }}
            >
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: {
                                xs: '0 1 47%',     // ~2 per row on mobile
                                sm: '0 1 30%',     // ~3 per row on small
                                md: '0 1 22%',     // ~4 per row on medium
                                lg: '0 1 14.28%',  // exactly 7 per row on large
                            },
                            maxWidth: {
                                xs: '47%',
                                sm: '30%',
                                md: '22%',
                                lg: '14.28%',      // exactly 7 per row
                            },
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 4,
                        }}
                    >
                        <Card
                            sx={{
                                width: 100,
                                height: 120,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 'none',
                                backgroundColor: 'transparent',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    mb: 1,
                                    bgcolor: '#000',
                                    p: 1.5,
                                    borderRadius: '5px',
                                }}
                            >
                                <img
                                    src={feature.icon}
                                    alt={feature.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500,
                                    color: '#222',
                                    textAlign: 'center',
                                }}
                            >
                                {feature.name}
                            </Typography>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default LearningStack;