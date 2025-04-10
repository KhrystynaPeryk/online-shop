"use client";
import { useState } from "react";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductAddToCart from "./ProductAddToCart";
import ProductPrice from "./ProductPrice";
import { v4 as uuidv4 } from 'uuid';

interface ProductControlsProps {
    id: string;
    price: number;
    size: string[];
    color: string[];
    inStock: boolean;
    };

export default function ProductControls({
    id,
    price,
    size,
    color,
    inStock,
    }: ProductControlsProps) {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleSizeChange = (item: string) => {
        setSelectedSize(item);
    };

    const handleColorChange = (item: string) => {
        setSelectedColor(item);
    };

    const selectedProduct: SelectedProduct = {
        id: uuidv4(),
        productId: id,
        quantity: 1,
        selectedColor,
        selectedSize,
    };

    const tagStyle = {
        fontWeight: "bold",
        fontFamily: "inherit",
        fontSize: "small",
        padding: "20px 0 3px 0",
    };

    return (
        <>
            <ProductSize
                tagStyle={tagStyle}
                size={size}
                addProductSize={handleSizeChange}
                containerStyle="flex flex-col gap-3"
            />

            <ProductColor
                tagStyle={tagStyle}
                color={color}
                addProductColor={handleColorChange}
                containerStyle="flex flex-col gap-3"
            />

            <ProductPrice tagStyle={tagStyle} price={price}/>

            <ProductAddToCart inStock={inStock} selectedProduct={selectedProduct} />

        </>
    );
}
