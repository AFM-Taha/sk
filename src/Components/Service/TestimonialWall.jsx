

import React from "react";
import { Box, Typography, Avatar, Paper, Stack } from "@mui/material";


const testimonials = [
    {
        name: "Jon",
        username: "@oleg_nykolyn",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Yo, @framer is sick AF. Mind-blowing tbh.",
    },
    {
        name: "Miguel Ventura",
        username: "@migdvv",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        text: "Learned some basics of @framer yesterday, and today I delivered a landing page for a client. It's so unreal how small the learning curve is from Figma to @framer. Absolutely loving it.",
    },
    {
        name: "DANNe",
        username: "@DannPetty",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
        text: "I learned how to build a website in @Framer! My goal was to learn the basic tools in about 20 minutes a day last week. Nothing fancy. No special design. Just randomness elements that's responsive.",
    },
    {
        name: "Daniël van der Winden",
        username: "@dvdwinden",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg",
        text: "I've built pretty handy sites powered by Craft or WordPress in the past, but seeing @framer tackle CMS stuff so effortlessly is mind-boggling",
    },
    {
        name: "Lauren Waller",
        username: "@waller_texas",
        avatar: "https://randomuser.me/api/portraits/women/36.jpg",
        text: "Honestly the @framer publish time is insanely fast. Just published 2 weeks of changes in 5 seconds. Like it’s almost too fast for such a big moment 😂",
    },
    {
        name: "Parker",
        username: "@_prkr",
        avatar: "https://randomuser.me/api/portraits/men/37.jpg",
        text: "I was enjoying @framer a lot but I am BLOWN AWAY by their Figma plug-in.",
    },
    {
        name: "Jon",
        username: "@oleg_nykolyn",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Yo, @framer is sick AF. Mind-blowing tbh.",
    },
    {
        name: "Miguel Ventura",
        username: "@migdvv",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        text: "Learned some basics of @framer yesterday, and today I delivered a landing page for a client. It's so unreal how small the learning curve is from Figma to @framer. Absolutely loving it.",
    },
    {
        name: "DANNe",
        username: "@DannPetty",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
        text: "I learned how to build a website in @Framer! My goal was to learn the basic tools in about 20 minutes a day last week. Nothing fancy. No special design. Just randomness elements that's responsive.",
    },
    {
        name: "Daniël van der Winden",
        username: "@dvdwinden",
        avatar: "https://randomuser.me/api/portraits/men/35.jpg",
        text: "I've built pretty handy sites powered by Craft or WordPress in the past, but seeing @framer tackle CMS stuff so effortlessly is mind-boggling",
    },
    {
        name: "Lauren Waller",
        username: "@waller_texas",
        avatar: "https://randomuser.me/api/portraits/women/36.jpg",
        text: "Honestly the @framer publish time is insanely fast. Just published 2 weeks of changes in 5 seconds. Like it’s almost too fast for such a big moment 😂",
    },
    {
        name: "Parker",
        username: "@_prkr",
        avatar: "https://randomuser.me/api/portraits/men/37.jpg",
        text: "I was enjoying @framer a lot but I am BLOWN AWAY by their Figma plug-in.",
    },

];


// Paste testimonials array here

function splitIntoColumns(arr, columns) {
    // Split testimonials into N columns for masonry effect
    const cols = Array.from({ length: columns }, () => []);
    arr.forEach((item, i) => cols[i % columns].push(item));
    return cols;
}

export default function TestimonialWall() {
    const columns = 5; // Number of columns visible
    const testimonialsPerCol = 2; // Cards per column (for height)
    const allTestimonials = [...testimonials, ...testimonials]; // Duplicate for seamless loop
    const colData = splitIntoColumns(allTestimonials, columns);

    return (
        <Box
            sx={{
                background: "#fff",
                py: 6,
                overflow: "hidden",
                position: "relative",
            }}
        >
            <Typography
                variant="h4"
                fontWeight={700}
                align="center"
                mb={4}
                sx={{ letterSpacing: "-1px" }}
            >
                What our student say’s
            </Typography>
            <Box
                sx={{
                    width: "100vw",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        animation: "scrollLeft 60s linear infinite",
                        "@keyframes scrollLeft": {
                            "0%": { transform: "translateX(0)" },
                            "100%": { transform: "translateX(-50%)" },
                        },
                        width: "200vw", // Double width for seamless loop
                    }}
                >
                    {/* Render two sets of columns for seamless loop */}
                    {[...Array(2)].map((_, loopIdx) =>
                        colData.map((col, colIdx) => (
                            <Stack
                                key={colIdx + loopIdx * columns}
                                spacing={2}
                                sx={{
                                    minWidth: 260,
                                    mx: 1,
                                }}
                            >
                                {col.slice(0, testimonialsPerCol).map((t, idx) => (
                                    <Paper
                                        key={idx}
                                        elevation={2}
                                        sx={{
                                            p: 2,
                                            borderRadius: 3,
                                            minHeight: 120,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 1,
                                        }}
                                    >
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <Avatar src={t.avatar} alt={t.name} sx={{ width: 32, height: 32 }} />
                                            <Box>
                                                <Typography fontWeight={700} fontSize={15}>
                                                    {t.name}
                                                </Typography>
                                                <Typography color="text.secondary" fontSize={13}>
                                                    {t.username}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography fontSize={15} mt={1}>
                                            {t.text}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        ))
                    )}
                </Box>
            </Box>
        </Box>
    );
}
