import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    ButtonBase,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const faqs = [
    {
        question: "What kind of courses do you offer at Skillra??",
        answer:
            "We offer practical, project-based courses in web development, game development, blockchain, UI/UX design, and more — all designed to make you job-ready.",
    },
    {
        question: "Do I need any prior experience to join your courses",
        answer:
            "No prior experience is required for most of our beginner courses. We also offer advanced tracks for experienced learners.",
    },
    {
        question: "Will I get a certificate after completing a course?",
        answer:
            "Yes, you will receive a certificate upon successful completion of any course.",
    },
    {
        question: "Do you provide placement assistance?",
        answer:
            "Yes, we offer placement support, including resume reviews, interview prep, and job referrals.",
    },
    {
        question: "Can I hire Skillra to build a website or app for my business?",
        answer:
            "Absolutely! We offer custom development services for businesses of all sizes.",
    },
    {
        question: "How do I know which course or service is right for me?",
        answer:
            "Our team is happy to guide you. Contact us for a free consultation to find the best fit for your goals.",
    },
    {
        question: "Are your services available remotely or only in specific locations?",
        answer:
            "All our courses and services are available online, so you can join from anywhere in the world.",
    },
];



export default function FAQSectionFlex() {
    const [selected, setSelected] = useState(0);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: 'radial-gradient(circle at 100% 100%, #2575FC -40%, #fff 30%)',
                px: { xs: 2, md: 8 },
                py: { xs: 6, md: 10 },
            }}
        >

            <Typography
                variant="h4"
                fontWeight={700}
                align="center"
                mb={4}
                sx={{ letterSpacing: "-1px" }}
            >
                Why Choose Skillra
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                {/* Left: FAQ List */}
                <Box sx={{ flex: 1, minWidth: 320 }}>
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        sx={{ mb: 2, color: "#181818" }}
                    >
                        FAQs.
                    </Typography>
                    <Box>
                        {faqs.map((faq, idx) => (
                            <ButtonBase
                                key={idx}
                                onClick={() => setSelected(idx)}
                                sx={{
                                    width: "100%",
                                    mb: 1.5,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    background:
                                        selected === idx
                                            ? "linear-gradient(90deg, #7b2ff2 0%, #f357a8 100%)"
                                            : "linear-gradient(90deg, #fff 60%, #e6edfa 100%)",
                                    color: selected === idx ? "#fff" : "#181818",
                                    boxShadow:
                                        selected === idx
                                            ? "0 2px 8px 0 rgba(123,47,242,0.08)"
                                            : "none",
                                    border:
                                        selected === idx
                                            ? "none"
                                            : "1px solid rgba(123,47,242,0.08)",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    px: 2,
                                    py: 1.5,
                                    textAlign: "left",
                                    fontWeight: selected === idx ? 700 : 500,
                                    fontSize: 17,
                                    transition: "all 0.2s",
                                    display: "flex",
                                }}
                            >
                                {faq.question}
                                {selected === idx && (
                                    <StarIcon sx={{ ml: 1, color: "#fff" }} />
                                )}
                            </ButtonBase>
                        ))}
                    </Box>
                </Box>
                {/* Right: Answer */}
                <Box sx={{ flex: 1.5, minWidth: 320 }}>
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        sx={{ mb: 2, color: "#181818" }}
                    >
                        Ans.
                    </Typography>
                    <Paper
                        elevation={0}
                        sx={{
                            background: "linear-gradient(120deg, #e6edfa 80%, #cbe5ff 100%)",
                            borderRadius: 4,
                            p: 4,
                            minHeight: 220,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                        }}
                    >
                        <StarIcon sx={{ color: "#181818", mt: 0.5 }} />
                        <Typography fontSize={20} color="#181818">
                            {faqs[selected].answer}
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}