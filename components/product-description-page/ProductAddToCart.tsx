"use client"
import Button from '@mui/material/Button';
import { useState } from 'react';
import SnackbarComponent from '../common/Snackbar';

interface ProductAddToCartProps {
    inStock: boolean,
    selectedProduct: SelectedProduct
}

const ProductAddToCart = ({inStock, selectedProduct}: ProductAddToCartProps) => {
    const [isSnackbarOpenSuccess, setIsSnackbarOpenSuccess] = useState(false)
    const [isSnackbarOpenError, setIsSnackbarOpenError] = useState(false) 

    const addToCart = (selectedProduct: SelectedProduct) => {

        if (selectedProduct.selectedColor && selectedProduct.selectedSize) {
            console.log(selectedProduct)
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