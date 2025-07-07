
import { Box, Typography, Grid, Card, Container } from "@mui/material";
import React from "react";

const AboutUs = () => {
    // Sample team data - replace with your actual team data
    const teamMembers = [
        {
            name: "John Smith",
            position: "CEO & Founder",
            image: "/assets/images/team/member1.jpg",
        },
        {
            name: "Sarah Johnson",
            position: "CTO",
            image: "/assets/images/team/member2.jpg",
        },
        {
            name: "Michael Brown",
            position: "Head of Design",
            image: "/assets/images/team/member3.jpg",
        },
        {
            name: "Emily Davis",
            position: "Lead Developer",
            image: "/assets/images/team/member4.jpg",
        },
    ];

    // Sample achievement data
    const achievements = [
        {
            number: "10K+",
            label: "Students Trained",
        },
        {
            number: "95%",
            label: "Success Rate",
        },
        {
            number: "100+",
            label: "Expert Mentors",
        },
        {
            number: "50+",
            label: "Global Partners",
        },
    ];

    return (
        <Box sx={{ bgcolor: "#fff" }}>
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: "#f8f9fa",
                    py: { xs: 8, md: 12 },
                    textAlign: "center",
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                            fontWeight: 700,
                            mb: 3,
                            color: "#1a1a1a",
                        }}
                    >
                        About Our Company
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            color: "#666",
                            maxWidth: "800px",
                            mx: "auto",
                        }}
                    >
                        We're on a mission to transform education and empower the next generation
                        of technology leaders through innovative learning solutions.
                    </Typography>
                </Container>
            </Box>

            {/* Story Section */}
            <Container maxWidth="lg">
                <Box sx={{ py: { xs: 6, md: 10 } }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <img
                                src="/assets/images/about-story.jpg"
                                alt="Our Story"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "12px",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    fontWeight: 700,
                                    mb: 3,
                                }}
                            >
                                Our Story
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#666",
                                    mb: 3,
                                    lineHeight: 1.8,
                                }}
                            >
                                Founded in 2020, our company started with a simple idea: make
                                quality education accessible to everyone. What began as a small
                                startup has grown into a global education platform, helping
                                thousands of students achieve their dreams.
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#666",
                                    lineHeight: 1.8,
                                }}
                            >
                                Today, we continue to innovate and expand our offerings,
                                partnering with industry leaders to provide cutting-edge
                                curriculum and real-world learning experiences.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Mission & Vision */}
                <Box sx={{ py: { xs: 6, md: 10 } }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    borderRadius: 3,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: "1.75rem",
                                        fontWeight: 700,
                                        mb: 2,
                                        color: "#1a1a1a",
                                    }}
                                >
                                    Our Mission
                                </Typography>
                                <Typography sx={{ color: "#666", lineHeight: 1.8 }}>
                                    To provide accessible, high-quality education that empowers
                                    individuals to pursue their passions and build successful
                                    careers in technology.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    borderRadius: 3,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: "1.75rem",
                                        fontWeight: 700,
                                        mb: 2,
                                        color: "#1a1a1a",
                                    }}
                                >
                                    Our Vision
                                </Typography>
                                <Typography sx={{ color: "#666", lineHeight: 1.8 }}>
                                    To be the world's leading platform for technology education,
                                    creating a global community of skilled professionals who drive
                                    innovation and progress.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Achievements Section */}
                <Box
                    sx={{
                        py: { xs: 6, md: 10 },
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            fontWeight: 700,
                            mb: 6,
                        }}
                    >
                        Our Achievements
                    </Typography>
                    <Grid container spacing={4}>
                        {achievements.map((achievement, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "2rem", md: "3rem" },
                                            fontWeight: 700,
                                            color: "#7B2FF2",
                                            mb: 1,
                                        }}
                                    >
                                        {achievement.number}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#666",
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        {achievement.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Team Section */}
                <Box sx={{ py: { xs: 6, md: 10 } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            fontWeight: 700,
                            mb: 6,
                            textAlign: "center",
                        }}
                    >
                        Meet Our Team
                    </Typography>
                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        textAlign: "center",
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 200,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ p: 3 }}>
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: "1.1rem",
                                                mb: 1,
                                            }}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography sx={{ color: "#666" }}>
                                            {member.position}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutUs