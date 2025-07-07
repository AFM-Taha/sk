import { Box, Typography } from "@mui/material";
import React from "react";

const TeachingTrack = () => {
    const modules = [
        {
            number: "01",
            title: "Introduction to Web Development",
            addon: "Add-On : Pair Programming using GitHub AI CoPilot"
        },
        {
            number: "02",
            title: "Design and Analysis of Algorithms",
            addon: "Add-On : Coding mastery with ChatGPT"
        },
        {
            number: "03",
            title: "Front-end Development",
            addon: "Add-On : Creating Intelligent Frontend Solutions with AI Technologies"
        },
        {
            number: "04",
            title: "Backend Development",
            addon: "Add-On : Developing applications with LangChain.js"
        },
        {
            number: "05",
            title: "Practical Software Engineering and Cloud Computing with Microsoft Azure",
            addon: "Add-On : Automate CI/CD processes using ChatGPT"
        }
    ];

    const topics = [
        "Basics of Web Development",
        "Building E-Commerce with WordPress",
        "Advanced WordPress Customization",
        "HTML Basics",
        "HTML Advanced",
        "CSS Fundamentals",
        "Advanced CSS Techniques",
        "Bootstrap Essentials",
        "Getting Started with Programming"
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
                background: "linear-gradient(to right, #fff 0%, #f0e6ff 100%)"
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
                Our Teaching track
            </Typography>

            {/* Description */}
            <Box
                sx={{
                    maxWidth: 1000,
                    zIndex: 2,
                    mb: 6,
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

            {/* Bottom Section Using Flex */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 6,
                    zIndex: 2,
                    maxWidth: 1200,
                    width: '100%',
                }}
            >
                {/* Left: Modules List */}
                <Box sx={{ flex: 1 }}>
                    {modules.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                gap: 2,
                                mb: 3,
                                backgroundColor: index === 0 ? "#fff" : "transparent",
                                boxShadow: index === 0 ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
                                borderRadius: 2,
                                p: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    color: "#8a2be2",
                                    minWidth: 30,
                                }}
                            >
                                {item.number}
                            </Typography>
                            <Box>
                                <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>{item.title}</Typography>
                                <Typography sx={{ fontSize: "14px", color: "#555", mt: 0.5 }}>
                                    {item.addon}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Right: Topics */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: '18px',
                            mb: 2,
                            fontFamily: 'Inter, sans-serif',
                            color: '#222',
                        }}
                    >
                        Topic
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                        {topics.map((topic, idx) => (
                            <Box
                                key={idx}
                                component="li"
                                sx={{
                                    fontSize: '15px',
                                    lineHeight: '1.8',
                                    color: '#444',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            >
                                {topic}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TeachingTrack