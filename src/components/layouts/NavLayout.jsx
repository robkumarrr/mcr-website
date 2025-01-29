import React, { useState } from 'react';
import {
    Grid,
    Box,
    Typography,
    Stack,
    Link,
    Hidden,
    IconButton,
    Toolbar,
    AppBar,
    ListItem,
    List,
    Drawer,
    Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '@fontsource/quantico';
import { Link as RouterLink } from 'react-router-dom';
import App from '../../App';

const NavLayout = () => {
    const navItems = {
        home: '<MCR>',
        events: '<Events>',
        aboustUs: '<About Us>',
        social: '<Social Media>',
    };

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const mobileDrawer = (
        <div>
            <Stack
                style={{
                    backgroundColor: '#D9D9D9',
                    height: '100vh',
                    width: '30vw',
                }}
                p={2}
                spacing={1}
            >
                <RouterLink
                    to='/aboutus'
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        width: '100%',
                        fontFamily: 'Quantico',
                        fontSize: '20px',
                        padding: '15px 0',
                    }}
                    onClick={handleDrawerToggle}
                >
                    About us
                </RouterLink>
                <Divider />
                <RouterLink
                    to='/events'
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        width: '100%',
                        fontFamily: 'Quantico',
                        fontSize: '20px',
                        padding: '15px 0',
                    }}
                    onClick={handleDrawerToggle}
                >
                    Events
                </RouterLink>
                <Divider />
                <RouterLink
                    to='/.#socials'
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        width: '100%',
                        fontFamily: 'Quantico',
                        fontSize: '20px',
                        padding: '15px 0',
                    }}
                    onClick={handleDrawerToggle}
                >
                    Socials
                </RouterLink>
                <Divider />
            </Stack>
        </div>
    );
    return (
        <Box position='fixed' width='100vw' zIndex={200}>
            <AppBar position='sticky' style={{ backgroundColor: '#D9D9D9' }}>
                <Hidden mdDown>
                    <Grid>
                        <Stack
                            direction='row'
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: '1em',
                            }}
                        >
                            <RouterLink
                                to='/'
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    font: '50px Quantico ',
                                }}
                            >
                                {navItems.home}
                            </RouterLink>
                            <Stack
                                direction='row'
                                sx={{
                                    justifyItems: 'space-between',
                                    px: '0.5em',
                                }}
                                alignItems='center'
                                spacing={3}
                            >
                                <RouterLink
                                    to='/aboutus'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        font: '20px Quantico ',
                                    }}
                                >
                                    {navItems.aboustUs}
                                </RouterLink>

                                <RouterLink
                                    to='/events'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        font: '20px Quantico ',
                                    }}
                                >
                                    {navItems.events}
                                </RouterLink>
                                <RouterLink
                                    to='/.#socials'
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        font: '20px Quantico ',
                                    }}
                                >
                                    {navItems.social}
                                </RouterLink>
                            </Stack>
                        </Stack>
                    </Grid>
                </Hidden>
            </AppBar>

            <Hidden mdUp>
                <Grid>
                    <AppBar
                        position='sticky'
                        style={{ backgroundColor: '#D9D9D9' }}
                    >
                        <Toolbar sx={{ justifyContent: 'space-between' }}>
                            <RouterLink
                                to='/'
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    font: '50px Quantico ',
                                }}
                            >
                                <Typography
                                    fontSize={'30px'}
                                    fontFamily={'Quantico'}
                                    fontWeight='700'
                                >
                                    {navItems.home}
                                </Typography>
                            </RouterLink>
                            <IconButton
                                aria-label='open drawer'
                                onClick={handleDrawerToggle}
                                edge='end'
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant='temporary'
                        anchor='right'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{ pr: 2, width: '100vw' }}
                    >
                        {mobileDrawer}
                    </Drawer>
                </Grid>
            </Hidden>
        </Box>
    );
};

export default NavLayout;
