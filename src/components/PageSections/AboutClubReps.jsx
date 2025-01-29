import {
    Typography,
    Grid,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import ProfileCard from '../cards/ProfileCard';
import MSALogo from '../cards/msa-logo.png';
import MohawkLogo from '../cards/mohawkCollegeLogo.png';

const AboutClubReps = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid // Section Grid
            container
            style={{
                justifyContent: 'center',
            }}
        >
            <Stack // Stack for section to organize text above the club rep images and biographies
                direction='row'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography // Heading for sub-section
                    sx={{
                        fontFamily: 'Quantico',
                        fontSize: isSmallScreen ? '20px' : '40px',
                        fontWeight: '700',
                        textAlign: 'center',
                        mb: 2,
                    }}
                >
                    Club Representatives
                </Typography>
                <Grid // Grid for the profile photos
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 2, sm: 2, md: 2 }}
                    sx={{ px: { xs: 1, md: 8 } }}
                >
                    <Grid item xs={12} sm={6} md={4}>
                        {/* FIRST PHOTO */}
                        <ProfileCard
                            name='Nishkarsh Dubb'
                            bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
                            image_file=''
                            alt_description='FirstName LastName'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileCard
                            name='Jaskaran Singh Malhotra'
                            bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
                            image_file=''
                            alt_description='FirstName LastName'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileCard
                            name='Jasmeet ............'
                            bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
                            image_file=''
                            alt_description='FirstName LastName'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileCard
                            name='Jasmin ............'
                            bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
                            image_file=''
                            alt_description='FirstName LastName'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileCard
                            name='Pal Patel'
                            bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
                            image_file=''
                            alt_description='FirstName LastName'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileCard
                            name='FirstName LastName'
                            bio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
                            image_file=''
                            alt_description='FirstName LastName'
                        />
                    </Grid>
                </Grid>
                <Typography // Heading for sub-section
                    style={{
                        fontFamily: 'Quantico',
                        fontSize: isSmallScreen ? '20px' : '40px',
                        fontWeight: '700',
                        textAlign: 'center',
                        paddingTop: '1em',
                    }}
                >
                    In Association With:
                </Typography>
                <Grid // Grid for the associations
                    container
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Grid item xs={0} md={2}></Grid> {/* Spacer grid item*/}
                    <Grid
                        item
                        xs={12}
                        md={4} // Mohawk Logo
                        sx={{
                            display: 'flex',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '1vw',
                            padding: '1vw',
                            transition: 'transform 0.2s', // Add transition property
                            '&:hover': {
                                transform: 'scale(1.1)', // Scale up on hover
                                cursor: 'pointer', // Change cursor on hover
                            },
                        }}
                        onClick={() =>
                            window.open(
                                'https://www.mohawkcollege.ca/',
                                '_blank'
                            )
                        }
                    >
                        <img
                            src={MohawkLogo}
                            style={{
                                width: '85%',
                            }}
                            alt='Mohawk College Logo'
                            title='Mohawk College Logo'
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4} // MSA Logo
                        sx={{
                            display: 'flex',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '1vw',
                            padding: '1vw',
                            transition: 'transform 0.2s', // Add transition property
                            '&:hover': {
                                transform: 'scale(1.1)', // Scale up on hover
                                cursor: 'pointer', // Change cursor on hover
                            },
                        }}
                        onClick={() =>
                            window.open(
                                'https://www.mohawkstudents.ca/',
                                '_blank'
                            )
                        }
                    >
                        <img
                            src={MSALogo}
                            style={{
                                width: 'auto',
                                maxHeight: '100px',
                                // padding: "5vw"
                            }}
                            alt='MSA Logo'
                            title='MSA Logo'
                        />
                    </Grid>
                    <Grid item xs={0} md={2}></Grid> {/* Spacer grid item*/}
                </Grid>
            </Stack>
        </Grid>
    );
};

export default AboutClubReps;
