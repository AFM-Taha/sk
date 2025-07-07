
import { Box, Typography } from "@mui/material";
import React from "react";

const Success = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
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

            <Box
                sx={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    zIndex: 2,
                    width: '100%',
                }}
            >
                <Box
                    component="img"
                    src="/assets/images/success.gif"
                    alt=""
                    sx={{
                        width: { xs: 120, sm: 180, md: 220 },
                        mb: 2,
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: '18px', sm: '22px', md: '24px' },
                        lineHeight: { xs: '32px', sm: '48px', md: '69.12px' },
                        letterSpacing: 0,
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        color: '#222',
                        px: 1,
                    }}
                >
                    Congrats we will get back to you
                </Typography>
            </Box>
        </Box>
    );
};

export default Success