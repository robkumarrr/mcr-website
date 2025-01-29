import * as React from 'react';
import {
    Box,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Button from '@mui/material/Button';
import Placeholder from '../cards/person-placeholder.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProfileCard = (props) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const {
        alt_description, // alt for image
        image_file, // file path for image
        name, // name of person for the profile card
        bio, // bio for person for the profile card
        linkedin, // linkedin URL
        github, // github page URL
    } = props;

    return (
        <Grid
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Stack
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // backgroundColor: 'white',
                    backgroundImage:
                        'linear-gradient(45deg, rgb(20, 20, 20), rgb(60, 60, 60))',
                    border: '3px solid rgb(40, 40, 40)',
                    borderRadius: '20px',
                    position: 'relative',
                    maxWidth: '400px',
                }}
            >
                <Box // IMAGE CONTAINER
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'middle',
                        borderRadius: '20px',
                    }}
                >
                    <img
                        src={Placeholder}
                        alt={alt_description}
                        style={{
                            borderRadius: '100%',
                            width: '200px',
                            height: '200px',
                            paddingTop: '5%',
                        }}
                    ></img>
                </Box>

                <Typography // NAME
                    style={{
                        fontFamily: 'Quantico',
                        color: 'white',
                        marginLeft: '5%',
                        marginBottom: '5%',
                        textAlign: 'center',
                        fontSize: isSmallScreen ? '18px' : '24px',
                    }}
                >
                    {name}
                </Typography>

                <Typography // BIOGRAPHY
                    style={{
                        color: 'lightgrey',
                        marginLeft: '5%',
                        fontSize: isSmallScreen ? '14px' : '18px',
                    }}
                >
                    {bio}
                </Typography>

                <Box // BUTTON CONTAINER
                    style={{
                        margin: '5%',
                    }}
                >
                    <Button href={linkedin} startIcon={<LinkedInIcon />}>
                        LINKEDIN
                    </Button>
                    <Button href={github} startIcon={<GitHubIcon />}>
                        GITHUB
                    </Button>
                </Box>
            </Stack>
        </Grid>
    );
};

export default ProfileCard;
