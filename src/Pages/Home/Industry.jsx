import { Box, Typography, Card, CardContent } from "@mui/material";
import React from "react";

const Industry = () => {
    const mentors = [
        {
            image: '/assets/images/ind_1.jpeg',
        },
        {
            image: '/assets/images/ind_2.jpeg',
        },
        {
            image: '/assets/images/ind_3.jpeg',
        },

    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // minHeight: "100vh",
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
                    top: -1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                    width: { xs: '100%', sm: 500, md: 700, lg: 800 },
                    // maxWidth: '100vw',
                }}
            >
                <img
                    style={{ width: '100%', display: 'block' }}
                    src="/assets/images/success-ellipse.svg"
                    alt=""
                />
            </Box>



            {/* Our Mentor's from Industry */}
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
                Our Mentor's from Industry
            </Typography>
            <Box
                sx={{
                    maxWidth: 1200,
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
                        mb: 4,
                    }}
                >
                    Launch your career in Tech with Skillra Academy's premier training programs in Web Development, Game Development, Blockchain, and more. Learn directly from top engineers and real-world experts.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    {mentors.map((mentor, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '100%', sm: '45%', md: '22%' },
                                borderRadius: 2,
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                style={{ width: '100%', display: 'block' }}
                                src={mentor.image}
                                alt="Mentor"
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Industry