import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import ShoppingCart from './ShoppingCart';
import Link from 'next/link';

const ProductPageCard = ({ id, image, name, price, inStock, color, size }: Product) => {
    const cardWidth = 345;
    const mediaHeight = 345;

    return (
        <Card
            sx={{
                width: cardWidth,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' },
            }}
        >
            <Link href={`/products/${id}`}>
                <CardActionArea
                    sx={{
                        position: 'relative',
                        '&:hover .shoppingCartContainer': { opacity: 1 }, // Correct way to apply hover
                    }}
                >
                    <CardMedia
                        component="div"
                        sx={{
                            height: mediaHeight,
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            margin: '10px 10px 0 10px',
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

                    {/* ShoppingCart is now a direct child of CardActionArea */}
                    <ShoppingCart inStock={inStock} productId={id} productColor={color} productSize={size} mediaHeight={mediaHeight} />

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
