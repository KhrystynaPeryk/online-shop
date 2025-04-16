"use client"
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { v4 as uuidv4 } from 'uuid';
import { addProductToCart } from '@/libs/cookies';

interface ShoppingCartProps {
    inStock: boolean;
    mediaHeight: number;
    productId: string;
    productColor: string[],
    productSize: string[],
}   

const ShoppingCart = ({ productId, productColor, productSize, inStock, mediaHeight }: ShoppingCartProps) => {
    const circleSize = 40;

    const addToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        const autoSelectedProduct: SelectedProduct = {
            id: uuidv4(),
            productId,
            selectedColor: productColor[0],
            selectedSize: productSize[0],
            quantity: 1
        }

        // Save the updated cart
        addProductToCart(autoSelectedProduct)
}

    return (
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
                    opacity: 0,  // Hidden by default
                    transition: 'opacity 0.3s ease-in-out',
                    zIndex: 3,
                }}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <ShoppingCartIcon sx={{ color: 'white' }} onClick={addToCart}/>
            </Box>
        )
    );
};

export default ShoppingCart;
