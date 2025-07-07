
import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: 6,
                mb: 2,
            }}
        >
            <Box
                sx={{
                    width: { xs: "98%", md: "90%" },
                    borderRadius: "28px",
                    background: "linear-gradient(90deg, #7b2ff2 0%, #1e90ff 100%)",
                    color: "#fff",
                    px: { xs: 3, md: 8 },
                    py: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: { xs: 4, md: 0 },
                }}
            >
                {/* Left Side */}
                <Box sx={{ flex: 2 }}>
                    <Typography variant="h5" fontWeight={600} mb={1}>
                        Skillra Academy
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                        Feel free to reach out if you want to collaborate with us, or simply have a chat.
                    </Typography>
                </Box>
                {/* Right Side */}
                <Box
                    sx={{
                        flex: 3,
                        display: "flex",
                        justifyContent: { xs: "flex-start", md: "flex-end" },
                        gap: { xs: 6, md: 10 },
                        mt: { xs: 3, md: 0 },
                    }}
                >
                    <Stack spacing={1}>
                        <Typography fontWeight={600} mb={0.5}>
                            Our projects
                        </Typography>
                        <Link href="#" color="inherit" underline="hover">WingRiders</Link>
                        <Link href="#" color="inherit" underline="hover">Trackee</Link>
                        <Link href="#" color="inherit" underline="hover">Worldcoin</Link>
                        <Link href="#" color="inherit" underline="hover">Audience+</Link>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontWeight={600} mb={0.5}>
                            Follow us
                        </Typography>
                        <Link href="#" color="inherit" underline="hover">Facebook</Link>
                        <Link href="#" color="inherit" underline="hover">Instagram</Link>
                        <Link href="#" color="inherit" underline="hover">Dribbble</Link>
                        <Link href="#" color="inherit" underline="hover">Linkedin</Link>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}