import { Box, Grid } from '@mui/material';

import AboutSection from '../PageSections/AboutSection';
import EventsSection from '../PageSections/EventsSection';
import SocialsSection from '../PageSections/SocialsSection';
import AboutClub from '../PageSections/AboutClub';
import NavLayout from '../layouts/NavLayout';

const HomePage = () => {
    return (
        <Grid
            container
            rowSpacing={3}
            style={{
                backgroundImage: 'linear-gradient(to left, #0208A1, #1A071A',
            }}
        >
            <Grid item xs={12} sx={{ mb: 5 }}>
                <NavLayout />
            </Grid>
            <Grid item xs={12}>
                <AboutClub />
            </Grid>
            <Grid item xs={12}>
                <AboutSection />
            </Grid>
            <Grid item xs={12}>
                <EventsSection />
            </Grid>
            <Grid item xs={12}>
                <SocialsSection />
            </Grid>
        </Grid>
    );
};

export default HomePage;
