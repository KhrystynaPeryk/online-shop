"use client";
import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerMiniCart from "./mini-cart/DrawerMiniCart";
import { getCart } from "@/libs/cookies";

const Cart = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [products, setProducts] = useState<any[]>([]);
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
        <>
            <div
                className="ml-3 hover:cursor-pointer relative"
                onClick={() => setIsDrawerOpen(true)}
            >
                {products.length > 0 && (
                <div className="absolute text-black flex items-center justify-center text-xs right-[-14px] top-[-8px] w-5 h-5">
                    {products.reduce((acc, currVal) => acc + currVal.quantity, 0)}
                </div>
                )}
                <ShoppingCartIcon />
            </div>
            <DrawerMiniCart isDrawerOpen={isDrawerOpen} setIsDrawerOpen={() =>setIsDrawerOpen (false)} products={products} />
        </>
    );
};

export default Cart;
