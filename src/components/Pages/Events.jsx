import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import NavLayout from '../layouts/NavLayout';

const Events = () => {
    const TypographyWithGlow = styled('div')(() => ({
        fontFamily: 'Quantico',
        color: 'white',
        fontSize: '200px',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        animation: 'glow 2s ease-in-out infinite',
        '@keyframes glow': {
            '0%': {
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            },
            '50%': {
                textShadow: '0 0 15px rgba(255, 255, 255, 1)',
            },
            '100%': {
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            },
        },
    }));

    return (
        <Box
            container
            style={{
                backgroundImage: 'linear-gradient(to left, #0208A1, #1A071A',
                height: '100vh',
            }}
        >
            <NavLayout />
            <Stack
                sx={{ pt: 8, maxWidth: '100vw', minHeight: '80vh' }}
                justifyContent='center'
                alignItems='center'
            >
                <TypographyWithGlow>Coming soon</TypographyWithGlow>
            </Stack>
        </Box>
    );
};

export default Events;
