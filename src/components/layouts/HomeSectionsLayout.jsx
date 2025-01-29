import NavigateButton from '../buttons/NavigateButton';

import React from 'react';
import {
    Container,
    Grid,
    Button,
    Box,
    Typography,
    Stack,
    Hidden,
} from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import '@fontsource/quantico';

const HomeSectionsLayout = (props) => {
    const {
        heading,
        body,
        gif,
        link,
        buttonText,
        buttonVisible = false,
    } = props;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ py: 5, px: 5 }}>
            <Grid container sx={{ color: 'white' }}>
                <Grid item sm={12} md={6}>
                    <Typography
                        style={{
                            fontFamily: 'Quantico',
                            fontSize: isSmallScreen ? '30px' : '50px',
                            fontWeight: '700',
                        }}
                    >
                        {heading}
                    </Typography>
                    <Stack
                        sx={{
                            ml: isSmallScreen ? '1em' : '3em',
                            mr: isSmallScreen ? '2em' : '5em',
                            // mt: isSmallScreen ? '1em' : '2em',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: 'left',
                                color: 'white',
                                fontFamily: 'Quantico',
                                fontWeight: '400',
                                fontStyle: 'italic',
                                fontSize: isSmallScreen ? '15px' : '25px',
                                mb: '1em',
                            }}
                        >
                            {body}
                        </Typography>
                        {buttonVisible ? (
                            <NavigateButton text={buttonText} link={link} />
                        ) : null}
                    </Stack>
                </Grid>
                <Grid item sm={12} md={6} alignSelf='center'>
                    <Hidden mdDown>
                        <img src={gif} alt='image' style={{ width: '100%' }} />
                    </Hidden>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeSectionsLayout;
