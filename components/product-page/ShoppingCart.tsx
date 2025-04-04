"use client"
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cookies from "js-cookie";
import { v4 as uuidv4 } from 'uuid';

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
        const cartCookie = Cookies.get("cart");
        let cart = cartCookie ? JSON.parse(cartCookie) : [];

        // Check if a product with the same productId, color, and size exists
        const existingProduct = cart.find((product: SelectedProduct) =>
                product.productId === productId &&
                product.selectedColor === productColor[0] &&
                product.selectedSize === productSize[0]
        );

        if (existingProduct) {
                // Increment the quantity if it already exists
                existingProduct.quantity += 1;
        } else {
                // Otherwise, add the selected product to the cart
                const autoSelectedProduct: SelectedProduct = {
                    id: uuidv4(),
                    productId,
                    selectedColor: productColor[0],
                    selectedSize: productSize[0],
                    quantity: 1
                }
                cart.push(autoSelectedProduct);
        }

        // Save the updated cart
        Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Expires in 7 days
        window.dispatchEvent(new Event("cart-updated"));

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
