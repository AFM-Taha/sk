
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                px: { xs: 2, md: 6 },
                py: 4,
                gap: { xs: 4, md: 8 },
                bgcolor: "#f8f9fa",
            }}
        >
            {/* Left Side - Image and Text */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: { xs: "center", md: "flex-start" },
                }}
            >
                <img
                    src="/assets/images/contact-us.png"
                    alt="Contact Us"
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        marginBottom: "2rem",
                    }}
                />
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "28px", sm: "36px", md: "42px" },
                        color: "#222",
                        mb: 2,
                    }}
                >
                    Get in Touch
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: { xs: "14px", sm: "16px" },
                        color: "#666",
                        maxWidth: "500px",
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    Have questions about our programs or want to learn more?
                    We're here to help! Fill out the form and our team will
                    get back to you shortly.
                </Typography>
            </Box>

            {/* Right Side - Form */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: "100%",
                        maxWidth: "600px",
                        mx: "auto",
                        p: { xs: 3, sm: 4 },
                        bgcolor: "#fff",
                        borderRadius: 2,
                        boxShadow: "0 0 20px rgba(0,0,0,0.05)",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontWeight: 600,
                            mb: 3,
                            color: "#222",
                        }}
                    >
                        Send us a message
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2.5,
                        }}
                    >
                        <TextField
                            label="Full Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                        />
                        <TextField
                            label="Email Address"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                        />
                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                        />
                        <TextField
                            label="Subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            InputProps={{ sx: { borderRadius: 1 } }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 1,
                                borderRadius: 2,
                                background: "linear-gradient(90deg, #6A11CB 0%, #2575FC 100%)",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "16px",
                                textTransform: "none",
                                py: 1.5,
                                "&:hover": {
                                    background: "linear-gradient(90deg, #6620d0 0%, #d64390 100%)",
                                },
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs