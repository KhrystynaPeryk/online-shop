
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const pages = ['Women', 'Men', 'Kids'];

const MenuNavbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Mobile Menu Icon (visible on xs) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="open navigation menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography sx={{ textAlign: 'center', color: category === page ? '#8884FF' : 'inherit'  }}><Link href={`/products?category=${page}`}>{page}</Link></Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
    
            {/* Desktop Categories (visible on md and up) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block', textAlign: 'center', color: category === page ? '#8884FF' : 'black' }} href={`/products?category=${page}`}>
                        {page}
                    </Button>
                ))}
            </Box>
        </Box>
    )
}

export default MenuNavbar