
import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
    { label: "Course", href: "/service/#course-offered" },
    { label: "Services", href: "/service" },
    { label: "About us", href: "/service#about-us" },
    { label: "Blog", href: "/blog" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => setMenuOpen(true);
    const handleClose = () => setMenuOpen(false);

    const handleNavClick = (href) => {
        setMenuOpen(false);
    };

    return (
        <Box
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                background: "transparent",
                py: 3,

            }}
        >
            <Box
                sx={{
                    width: { xs: "95%", md: "80%" },
                    maxWidth: 1200,
                    background: "#181828",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, md: 4 },
                    py: 1,
                    boxShadow: "0 2px 12px 0 rgba(80,80,120,0.10)",
                    position: "relative",
                }}
            >
                {/* Logo */}
                <Box component="a"
                    href="/" sx={{ display: "flex", alignItems: "center", mr: 4, textDecoration: "none" }}>
                    <img
                        src="/assets/images/logo.svg"
                        alt="Skillra Logo"
                        style={{ width: 40, height: 40, marginRight: 12 }}
                    />
                    <Typography
                        variant="h6"

                        sx={{
                            color: "#fff",
                            fontWeight: 700,
                            letterSpacing: 1,
                            fontSize: { xs: 16, md: 18 },
                            textDecoration: "none",
                        }}
                    >
                        SKILLRA TECHNOLOGIES
                    </Typography>
                </Box>

                {/* Desktop Nav */}
                <Box
                    sx={{
                        display: { xs: "none", lg: "flex" },
                        flex: 1,
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    {navLinks.map((link) => (
                        <Typography
                            key={link.label}
                            component="a"
                            href={link.href}
                            sx={{
                                color: "#fff",
                                textDecoration: "none",
                                fontWeight: 400,
                                fontSize: 16,
                                mx: 1,
                                transition: "color 0.2s",
                                "&:hover": { color: "#E14FFF" },
                                cursor: "pointer",
                            }}
                        >
                            {link.label}
                        </Typography>
                    ))}
                </Box>

                {/* Desktop Button */}
                <Button
                    variant="contained"
                    component='a'
                    href='/contact-us'
                    sx={{
                        textDecoration: "none",
                        display: { xs: "none", lg: "inline-flex" },
                        background: "linear-gradient(90deg, #7B3FE4 0%, #3F7AE4 100%)",
                        color: "#fff",
                        borderRadius: "30px",
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        fontSize: 16,
                        textTransform: "none",
                        ml: 2,
                        boxShadow: "none",
                        "&:hover": {
                            background: "linear-gradient(90deg, #7B3FE4 0%, #3F7AE4 100%)",
                            opacity: 0.9,
                        },
                    }}
                >
                    Contact Us
                </Button>

                {/* Hamburger Icon for Mobile */}
                <IconButton
                    onClick={handleMenuClick}
                    sx={{
                        display: { xs: "flex", lg: "none" },
                        color: "#fff",
                        ml: "auto",
                    }}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>

                {/* Mobile Drawer */}
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        height: "100vh",
                        width: "50vw",
                        maxWidth: 320,
                        bgcolor: "#181828",
                        zIndex: 2000,
                        boxShadow: "-2px 0 16px 0 rgba(80,80,120,0.10)",
                        display: { xs: "block", lg: "none" },
                        transform: menuOpen ? "translateX(0)" : "translateX(1000px)",
                        transition: "transform 0.4s cubic-bezier(.77,0,.18,1)",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                        <IconButton onClick={handleClose} sx={{ color: "#fff" }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", px: 4, gap: 3 }}>
                        {navLinks.map((link) => (
                            <Typography
                                key={link.label}
                                component="a"
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                sx={{
                                    color: "#fff",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    fontSize: 20,
                                    py: 0.5,
                                    cursor: "pointer",
                                    width: "100%",
                                    "&:hover": { color: "#E14FFF" },
                                }}
                            >
                                {link.label}
                            </Typography>
                        ))}
                        <Button
                            component='a'
                            href='/contact-us'
                            variant="contained"
                            onClick={handleClose}
                            sx={{
                                textDecoration: "none",
                                mt: 1,
                                background: "linear-gradient(90deg, #7B3FE4 0%, #3F7AE4 100%)",
                                color: "#fff",
                                borderRadius: "30px",
                                px: 1.5,
                                py: 1,
                                fontWeight: 600,
                                fontSize: 16,
                                textTransform: "none",
                                boxShadow: "none",
                                width: "100%",
                                "&:hover": {
                                    background: "linear-gradient(90deg, #7B3FE4 0%, #3F7AE4 100%)",
                                    opacity: 0.9,
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar