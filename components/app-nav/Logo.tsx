import LocalMall from '@mui/icons-material/LocalMall';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface LogoProps {
    xs: string,
    md: string
}

const Logo = ({ xs, md }: LogoProps) => {

    return (
    
        <Box
            sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': { cursor: 'pointer'},
                }}
            >
                
                <LocalMall sx={{ display: { xs, md }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        mr: 2,
                        display: { xs, md },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <Link href={'/products'}>Online Shop</Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default Logo
