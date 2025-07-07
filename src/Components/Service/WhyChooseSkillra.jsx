import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const features = [
    {
        title: 'Expert Team',
        desc: 'Learn from and work with seasoned developers and instructors with real industry experience.',
    },
    {
        title: 'Practical Learning',
        desc: 'Gain hands-on experience through real-world projects that prepare you for the tech industry.',
    },
    {
        title: 'Complete Solutions',
        desc: 'We handle everything from design to deployment for web, game, and blockchain projects.',
    },
    {
        title: 'Personalized Support',
        desc: 'Get one-on-one mentorship and dedicated guidance tailored to your goals.',
    },
    {
        title: 'Innovation & Quality',
        desc: 'We stay ahead with the latest tech, ensuring high-quality learning and development outcomes.',
    },
    {
        title: 'Career-Focused Approach',
        desc: 'Our programs and services are designed to help you grow — whether it’s landing a job or scaling your business.',
    },
];

export default function WhyChooseSkillra() {
    return (
        <Box
            sx={{
                background: 'radial-gradient(circle at 100% 100%, #2575FC -40%, #fff 30%)',
                px: { xs: 2, md: 8 },
                py: { xs: 4, md: 8 },
            }}
        >
            <Typography variant="h4" fontWeight={700} mb={4} align="center">
                Why Choose Skillra
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: { xs: 'stretch', lg: 'center' },
                    gap: { xs: 4, lg: 0 },
                }}
            >
                {/* Left Side */}
                <Box
                    sx={{
                        width: { xs: '100%', lg: '45%' },
                        pr: { md: 8 },
                        mb: { xs: 4, md: 0 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                >
                    <Typography
                        sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        variant="body1"
                        color="text.secondary"
                        fontSize={20}
                    >
                        At Skillra Technologies, we combine expert guidance, hands-on learning, and full-cycle digital solutions to help individuals grow their careers and businesses scale their impact. With a strong focus on innovation, quality, and personalized support, we’re here to turn potential into performance.
                    </Typography>
                </Box>

                {/* Right Side */}
                <Box sx={{ width: { xs: '100%', lg: '55%' } }}>
                    <Grid container spacing={2} justifyContent="center">
                        {features.map((item, idx) => (
                            <Grid item xs={12} sm={6} md={4} key={idx} display="flex" justifyContent="center">
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        border: '1px solid #e0e0e0',
                                        height: { xs: 'auto', sm: 166 },
                                        maxWidth: 250,
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.95)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Typography fontWeight={700} fontSize={16} mb={0.5}>
                                        {item.title}
                                    </Typography>
                                    <Typography color="text.secondary" fontSize={15}>
                                        {item.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}