import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

const WhyChooseSkillraForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        degree: "",
        location: "",
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // minHeight: "100vh",
                position: "relative",
                overflow: "hidden",
                px: 2,
            }}
        >
            {/* bg ellipse */}
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
                Why Choose Skillra
            </Typography>

            {/* Description - now outside the form box */}
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1000,
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
                        width: '100%',
                    }}
                >
                    Launch your career in Tech with Skillra Academy’s premier training programs in Web Development, Game Development, Blockchain, and more. Learn directly from top engineers and real-world experts.
                </Typography>
            </Box>

            {/* Form */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 2,
                    width: '100%',
                    maxWidth: 500,
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Enter Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 2, background: "#fff" } }}
                    />
                    <TextField
                        label="Enter Your Email-id"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 2, background: "#fff" } }}
                    />
                    <TextField
                        label="Enter Your Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 2, background: "#fff" } }}
                    />
                    <TextField
                        label="Enter Your Degree Details"
                        name="degree"
                        value={form.degree}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 2, background: "#fff" } }}
                    />
                    <TextField
                        label="Enter Your Location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 2, background: "#fff" } }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 2,
                            borderRadius: 99,
                            background: 'linear-gradient(90deg, #6A11CB 3.29%, #6913CC 27.47%, #2575FC 98.73%, #6913CC 5.15%)',
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "16px",
                            textTransform: "none",
                            py: 1.2,
                            width: "150px",
                            alignSelf: "center",
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default WhyChooseSkillraForm