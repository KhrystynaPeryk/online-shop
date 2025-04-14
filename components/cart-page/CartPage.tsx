"use client"
import { useEffect, useState } from "react"
import { getCart } from "@/libs/cookies"
import CartPageProduct from "./CartPageProduct"
import { calculateTotal } from "@/libs/helpers"
import data from '@/data/data.json'
import { Button } from "@mui/material"

const CartPageComponent = () => {
    const [products, setProducts] = useState<SelectedProduct[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Mark the component as mounted so that we can safely read cookies
        setIsMounted(true);
        // Function to update the cart state from cookies
        const updateCart = () => {
            const cart = getCart()
            setProducts(cart);
        };

        // Initial load
        updateCart();

        // Listen for the custom event
        window.addEventListener("cart-updated", updateCart);
        return () => {
            window.removeEventListener("cart-updated", updateCart);
        };
    }, []);

    // Until the component is mounted, render nothing (or a placeholder)
    if (!isMounted) {
        return null;
    }

    return (
        <div className="m-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center">My Cart</h1>
            {products.map((product) => <CartPageProduct key={product.id} product={product}/>)}
            <div className="flex justify-between w-1/2 my-10">
                <p className="font-bold text-2xl">Total:</p>
                <p className="text-2xl">${calculateTotal(products, data)}.00</p>
            </div>
            <Button 
                variant="contained" 
                sx={{
                    backgroundColor: '#8884FF', 
                    px: 4, 
                    fontFamily: 'inherit', 
                    fontSize: 'small', 
                    mx: 3,
                    my: 2,
                    border: "1px solid transparent",
                    '&:hover': {backgroundColor: 'white', color: '#8884FF', border: '1px solid #8884FF'}
                }}
            >CHECKOUT</Button>
        </div>
    )
}

export default CartPageComponent