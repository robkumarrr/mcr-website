import React from 'react';
import SocialMedia from '../../assests/GIF/SocialMedia.gif';
import DiscordLogo from '../socials/DiscordLogo';
import GitHubLogo from '../socials/GitHubLogo';
import InstagramLogo from '../socials/InstagramLogo';
import LinkedInLogo from '../socials/LinkedInLogo';
import EmailLogo from '../socials/EmailLogo';
import YouTubeLogo from '../socials/YouTubeLogo';
import IconButton from '@mui/material/IconButton';
import '@fontsource/quantico';
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

const SocialsSection = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            sx={{
                py: 5,
                px: 5,
            }}
            id='socials'
        >
            {/* Contains the HEADING/TEXT and SOCIAL MEDIA GRAPHICS */}
            <Grid
                container
                sx={{
                    // p: isSmallScreen ? 2 : 5,
                    color: 'white',
                }}
            >
                {/* Contains the HEADING and TEXT */}
                <Grid item sm={12} md={6}>
                    <Typography
                        style={{
                            fontFamily: 'Quantico',
                            fontSize: isSmallScreen ? '30px' : '50px',
                            fontWeight: '700',
                        }}
                    >
                        Social Media
                    </Typography>

                    <Stack
                        sx={{
                            ml: isSmallScreen ? '1em' : '3em',
                            mr: isSmallScreen ? '2em' : '5em',
                            mt: isSmallScreen ? '1em' : '2em',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '80%',
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
                            }}
                        >
                            Check out our social media here. Click on the icons
                            to reach us on each of the respective platforms.
                        </Typography>
                    </Stack>
                </Grid>

                {/* Contains the SOCIAL MEDIA GIF and ICONS */}
                <Grid
                    item
                    sm={12}
                    md={6}
                    alignSelf='center'
                    position='relative'
                    width='100%'
                    sx={{
                        mt: '5em',
                    }}
                >
                    <Hidden mdDown>
                        {/* SOCIAL MEDIA GIF */}
                        <img
                            src={SocialMedia}
                            alt='social media'
                            style={{
                                width: '60%',
                                position: 'relative',
                                top: '5%',
                                left: '20%',
                            }}
                        />

                        {/* GITHUB ICON */}
                        <IconButton
                            sx={{
                                position: 'absolute',
                                left: '15%',
                                top: '55%',
                                width: '15%',
                                transition: 'top .5s ease',
                                '&:hover': {
                                    top: '50%',
                                },
                            }}
                        >
                            <GitHubLogo />
                        </IconButton>

                        {/* DISCORD ICON */}
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '-25%',
                                left: '40%',
                                width: '20%',
                                transition: 'top .5s ease',
                                '&:hover': {
                                    top: '-30%',
                                },
                            }}
                        >
                            <DiscordLogo />
                        </IconButton>

                        {/* INSTAGRAM ICON */}
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '12%',
                                right: '10%',
                                width: '15%',
                                transition: 'top .5s ease',
                                '&:hover': {
                                    top: '5%',
                                },
                            }}
                        >
                            <InstagramLogo />
                        </IconButton>

                        {/* LINKED IN ICON */}
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '7%',
                                left: '5%',
                                width: '15%',
                                transition: 'top .5s ease',
                                '&:hover': {
                                    top: '2%',
                                },
                            }}
                        >
                            <LinkedInLogo />
                        </IconButton>

                        {/* EMAIL ICON */}
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '70%',
                                right: '20%',
                                width: '15%',
                                transition: 'top .5s ease',
                                '&:hover': {
                                    top: '65%',
                                },
                            }}
                        >
                            <EmailLogo />
                        </IconButton>

                        {/* YOUTUBE ICON */}
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '45%',
                                right: '10%',
                                width: '15%',
                                transition: 'top .5s ease',
                                '&:hover': {
                                    top: '40%',
                                },
                            }}
                        >
                            <YouTubeLogo />
                        </IconButton>
                    </Hidden>
                    <Hidden mdUp>
                        <Box display={'flex'} flexDirection='column'>
                            <Box>
                                <IconButton
                                    sx={{
                                        width: '33.3%',
                                    }}
                                >
                                    <GitHubLogo />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        width: '33.3%',
                                    }}
                                >
                                    <DiscordLogo />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        width: '33.3%',
                                    }}
                                >
                                    <InstagramLogo />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton
                                    sx={{
                                        width: '33.3%',
                                    }}
                                >
                                    <LinkedInLogo />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        width: '33.3%',
                                    }}
                                >
                                    <EmailLogo />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        width: '33.3%',
                                    }}
                                >
                                    <YouTubeLogo />
                                </IconButton>
                            </Box>
                        </Box>
                    </Hidden>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SocialsSection;
