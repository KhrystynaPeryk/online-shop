"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from './Logo';
import AvatarNavbar from './AvatarNavbar';
import MenuNavbar from './MenuNavbar';
import Cart from './Cart';

function Navbar() {

    return (
        <AppBar position="static" sx={{ backgroundColor: '#ececec', color: '#8884FF' }}>
            <Container maxWidth="xl">
                {/* Make Toolbar relative so we can absolutely center the logo */}
                <Toolbar disableGutters sx={{ position: 'relative' }}>
                    {/* Left Section: Categories/Mobile Menu */ }
                    <MenuNavbar />

                    {/* Center Section: Logo (absolutely centered) */}
                    <Logo xs="flex" md="flex" />

                    {/* Right Section: Avatar */}
                    <AvatarNavbar />
                    <Cart />

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
