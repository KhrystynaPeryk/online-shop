"use client"
import Button from '@mui/material/Button';
import { useState } from 'react';
import SnackbarComponent from '../common/Snackbar';
import { getCart, setCart } from '@/libs/cookies';

interface ProductAddToCartProps {
    inStock: boolean,
    selectedProduct: SelectedProduct
}

const ProductAddToCart = ({inStock, selectedProduct}: ProductAddToCartProps) => {
    const [isSnackbarOpenSuccess, setIsSnackbarOpenSuccess] = useState(false)
    const [isSnackbarOpenError, setIsSnackbarOpenError] = useState(false) 

    const addToCart = (selectedProduct: SelectedProduct) => {
        if (selectedProduct.selectedColor && selectedProduct.selectedSize) {
            let cart = getCart()
            // Check if a product with the same productId, color, and size exists
            const existingProduct = cart.find((product: SelectedProduct) =>
                product.productId === selectedProduct.productId &&
                product.selectedColor === selectedProduct.selectedColor &&
                product.selectedSize === selectedProduct.selectedSize
            );

            if (existingProduct) {
                // Increment the quantity if it already exists
                existingProduct.quantity += 1;
            } else {
                // Otherwise, add the selected product to the cart
                cart.push(selectedProduct);
            }

            // Save the updated cart
            setCart(cart)
            setIsSnackbarOpenSuccess(true)
        } else {
            setIsSnackbarOpenError(true)
        }     
    }
    return (
    <>      
        <Button 
            variant="contained" 
            disabled={!inStock} 
            sx={{
                backgroundColor: '#8884FF', 
                px: 8, 
                fontFamily: 'inherit', 
                fontSize: 'small', 
                my: 3,
                border: "1px solid transparent",
                '&:hover': {backgroundColor: 'white', color: '#8884FF', border: '1px solid #8884FF'}
            }}

            onClick={() => addToCart(selectedProduct)}
        >ADD TO CART</Button>
        <SnackbarComponent severity='success' message='Item has been added to your cart!' isSnackbarOpen={isSnackbarOpenSuccess} setIsSnackbarOpen={setIsSnackbarOpenSuccess} />
        <SnackbarComponent severity='error' message='Please select color and size!' isSnackbarOpen={isSnackbarOpenError} setIsSnackbarOpen={setIsSnackbarOpenError} />
    </> 
    )
}

export default ProductAddToCart