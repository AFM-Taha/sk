
import React from 'react';
import { Box, Typography, Link, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled image for the main illustration
const CodeIllustration = styled('img')({
    width: '100%',
    height: 'auto',
    maxWidth: '400px',
    borderRadius: '16px',
});

const ServiceWedo = () => {
    return (
        <Box sx={{
            backgroundColor: '#f8f8f8',
            textAlign: 'center',
        }}>
            <Typography variant="h6" component="p" sx={{
                color: '#333',
                marginBottom: '10px',
                fontWeight: 600,
                fontSize: '38px',
            }}>
                Service we do
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                padding: { xs: '40px 20px', md: '80px 40px' },
                gap: { xs: '40px', md: '80px' },
            }}>
                {/* Text Section */}
                <Box sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    maxWidth: '500px',
                }}>
                    <Typography variant="h3" component="h2" sx={{
                        color: '#1a1a1a',
                        fontWeight: 800,
                        marginBottom: '20px',
                        fontSize: { xs: '32px', md: '48px' },
                        lineHeight: 1.2,
                    }}>
                        Web Development
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: '#555',
                        marginBottom: '15px',
                        fontSize: '16px',
                    }}>
                        Custom websites and web apps built with the latest tech stacks.
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: '#555',
                        marginBottom: '30px',
                        fontSize: '16px',
                    }}>
                        From idea to deployment — fast, scalable, and secure.
                    </Typography>
                    <Link href="#" underline="none" sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#6200EE',
                        fontWeight: 600,
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}>
                        Learn more
                        <ArrowForwardIcon sx={{ marginLeft: '8px', fontSize: '18px' }} />
                    </Link>
                </Box>
                {/* Illustration Section */}
                <Box sx={{
                    flexShrink: 0,
                    width: { xs: '100%', sm: '80%', md: 'auto' },
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    overflow: 'hidden', // Prevents ellipse from overflowing
                    minHeight: { xs: 220, sm: 300, md: 340 }, // Ensures enough height for the ellipse
                }}>
                    <CodeIllustration src="/assets/images/servicewedo.svg" alt="Code Illustration" />
                    {/*  bg ellipse */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: { xs: 40, sm: 0 },
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1,
                            width: { xs: '100%', sm: 400, md: 1000 },
                            maxWidth: '100%',
                            pointerEvents: 'none',
                            height: 'auto',
                        }}
                    >
                        <img
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            src="/assets/images/service-about-us-ellipse.svg"
                            alt=""
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ServiceWedo;
