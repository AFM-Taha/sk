import { Box, Typography, GlobalStyles } from "@mui/material";
import React from "react";

const HiringPartners = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    width: { xs: "100%", sm: 500, md: 700, lg: 800 },
                    maxWidth: "100vw",
                }}
            >
                <img
                    style={{ width: "100%", display: "block" }}
                    src="/assets/images/success-ellipse.svg"
                    alt="background ellipse"
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
                Hiring Partners
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
                    Launch your career in Tech with Skillra Academy's premier
                    training programs in Web Development, Game Development,
                    Blockchain, and more. Learn directly from top engineers and
                    real-world experts.
                </Typography>
            </Box>

            {/* Global CSS for animation keyframes */}
            <GlobalStyles
                styles={{
                    "@keyframes infiniteScroll": {
                        "0%": { transform: "translateX(0%)" },
                        "100%": { transform: "translateX(-50%)" },
                    },
                }}
            />

            {/* Marquee Section */}
            <Box
                sx={{
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: "100vw",
                    zIndex: 2,
                    py: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        animation: "infiniteScroll 30s linear infinite",
                        width: "max-content",
                    }}
                >
                    {/* Container holds two full sets of the image for looping */}
                    <Box sx={{ display: "flex" }}>
                        <Box
                            component="img"
                            src="/assets/images/hiring_partners.png"
                            alt="Hiring Partners"
                            sx={{
                                height: { xs: 80, sm: 100, md: 120, lg: 150 },
                                width: "auto",
                                display: "inline-block",
                                mr: 4,
                            }}
                        />
                        <Box
                            component="img"
                            src="/assets/images/hiring_partners.png"
                            alt="Hiring Partners"
                            sx={{
                                height: { xs: 80, sm: 100, md: 120, lg: 150 },
                                width: "auto",
                                display: "inline-block",
                                mr: 4,
                            }}
                        />
                    </Box>

                    {/* Duplicate set for seamless transition */}
                    <Box sx={{ display: "flex" }}>
                        <Box
                            component="img"
                            src="/assets/images/hiring_partners.png"
                            alt="Hiring Partners"
                            sx={{
                                height: { xs: 80, sm: 100, md: 120, lg: 150 },
                                width: "auto",
                                display: "inline-block",
                                mr: 4,
                            }}
                        />
                        <Box
                            component="img"
                            src="/assets/images/hiring_partners.png"
                            alt="Hiring Partners"
                            sx={{
                                height: { xs: 80, sm: 100, md: 120, lg: 150 },
                                width: "auto",
                                display: "inline-block",
                                mr: 4,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HiringPartners;