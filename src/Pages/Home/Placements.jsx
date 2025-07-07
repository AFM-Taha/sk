
import { Box, Typography, Card, CardContent } from "@mui/material";
import React from "react";

const Placements = () => {
    const stats = [
        { number: "200 +", label: "Student" },
        { number: "10 +", label: "Mentors" },
        { number: "160 +", label: "Students Placed" },
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
                    position: "absolute",
                    bottom: -1,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    width: { xs: "100%", sm: 500, md: 700, lg: 800 },
                    maxWidth: "100vw",
                }}
            >
                <img
                    style={{ width: "100%", display: "block" }}
                    src="/assets/images/success-ellipse-b.svg"
                    alt=""
                />
            </Box>

            {/* Title */}
            <Typography
                sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "28px", sm: "36px", md: "42px" },
                    lineHeight: 1.2,
                    textAlign: "center",
                    color: "#222",
                    mb: 1,
                    zIndex: 2,
                    mt: 6,
                }}
            >
                Industry-Leading Placements with Skillra Academy
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
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: { xs: "14px", sm: "16px" },
                        textAlign: "center",
                        color: "#444",
                    }}
                >
                    Launch your career in Tech with Skillra Academy's premier training
                    programs in Web Development, Game Development, Blockchain, and more.
                    Learn directly from top engineers and real-world experts.
                </Typography>
            </Box>

            {/* Features using Flexbox */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",   // phones
                        sm: "repeat(2, 1fr)",   // small tablets
                        md: "repeat(3, 1fr)",   // 3 in a row from md (≥900px)
                    },
                    gap: { xs: 8, md: 12, lg: 20 },
                    placeItems: "center",      // center contents inside each cell
                    maxWidth: 1200,
                    zIndex: 2,
                    mt: { xs: 6, sm: 8, md: 10 },
                    pb: { xs: 4, md: 8 },
                }}
            >
                {stats.map((stat, index) => (
                    <Box
                        key={index}
                        sx={{
                            textAlign: "center",
                            width: "100%",        // each grid cell already takes full width
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 700,
                                fontSize: { xs: "48px", sm: "60px" },
                                lineHeight: 1,
                                color: "#222",
                                mb: 0.5,
                            }}
                        >
                            {stat.number}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 400,
                                fontSize: { xs: "16px", sm: "18px" },
                                color: "#444",
                            }}
                        >
                            {stat.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Placements