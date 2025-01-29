import {
    Typography,
    Grid,
    useMediaQuery,
    useTheme,
    Stack,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import NavLayout from '../layouts/NavLayout';
import AboutClubReps from '../PageSections/AboutClubReps';
import NavigateNext from '@mui/icons-material/NavigateNext';

const AboutUs = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack
            style={{
                backgroundImage: 'linear-gradient(to left, #0208A1, #1A071A',
                color: 'white',
            }}
            spacing={9}
        >
            <NavLayout />

            <Grid container sx={{ pt: 8, px: 4 }} alignItems='center'>
                <Grid item xs={12} md={6}>
                    <Typography variant='h2' sx={{ fontFamily: 'Quantico' }}>
                        Mohawk Code Ready
                    </Typography>
                    <Typography
                        variant='h5'
                        sx={{ fontFamily: 'Quantico', mb: 5 }}
                    >
                        Welcomes you to know more about us
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ font: '20px Quantico' }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
            </Grid>
            <Typography
                sx={{
                    font: '50px Quantico',
                    textAlign: 'center',
                    textShadow: '12px 12px 12px rgba(0, 0, 0, 1)',
                }}
            >
                "Some Quote Quote "
            </Typography>
            <Grid container sx={{ px: 4 }} alignItems='center'>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ font: '40px Quantico', mb: 2 }}>
                        What do you achieve as a member of this club?
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <List style={{ font: '20px Quantico' }}>
                        <ListItem>
                            <NavigateNext />
                            Create a Coding Curriculum
                        </ListItem>
                        <ListItem>
                            <NavigateNext />
                            Organize Weekly Coding Workshops
                        </ListItem>
                        <ListItem>
                            <NavigateNext />
                            Develop Coding Projects
                        </ListItem>
                        <ListItem>
                            <NavigateNext />
                            Host Coding Competitions
                        </ListItem>
                        <ListItem>
                            <NavigateNext />
                            Collaborate on Open Source Projects
                        </ListItem>
                    </List>
                </Grid>
            </Grid>

            <AboutClubReps />
        </Stack>
    );
};

export default AboutUs;
