

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

const ProductPageCard = ({ id, image, name, price, inStock }: Product) => {
    // Define dimensions for consistency
    const cardWidth = 345;
    const mediaHeight = 345;
    const circleSize = 40;

    return (
        <Card
            sx={{
                width: cardWidth,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'},
            }}
        >   
            <Link href={`/products/${id}`}>
                <CardActionArea
                    sx={{
                        position: 'relative',
                        '&:hover .shoppingCartContainer': { opacity: 1 },
                    }}
                >
                    <CardMedia
                        component="div"
                        sx={{
                            height: mediaHeight,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            margin: '10px 10px 0 10px'
                        }}
                        title={name}
                    />
                    {!inStock && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 4,
                            }}
                        >
                            <Typography variant="h6" sx={{ color: 'white' }}>OUT OF STOCK</Typography>
                        </Box>
                    )}

                    {/* Shopping Cart in a circle, positioned at the border between the image and the content */}
                    {
                        inStock && (
                            <Box
                            className="shoppingCartContainer"
                            sx={{
                                position: 'absolute',
                                top: mediaHeight - circleSize / 2,
                                right: 16,
                                width: circleSize,
                                height: circleSize,
                                borderRadius: '50%',
                                backgroundColor: '#8884FF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.3s ease-in-out',
                                zIndex: 3,
                            }}
                        >
                            <ShoppingCartIcon sx={{ color: 'white' }} />
                        </Box>
                        )
                    }

                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">{name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>${price}</Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default ProductPageCard;
