'use client'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useState } from "react";

interface ProductColorProps {
    tagStyle: {},
    containerStyle: string,
    color: string[],
    addProductColor: (item: string) => void,
    selectedColor?: string
}

const ProductColor = ({tagStyle, containerStyle, color, addProductColor, selectedColor}: ProductColorProps) => {

    const [pickedColor, setPickedColor] = useState(selectedColor ? selectedColor : '')

    const handleClick = (item: string) => {
        setPickedColor(item)
        addProductColor(item)
    }

    return (
        <div className={containerStyle}>
            <Typography sx={tagStyle}>COLOR:</Typography>
            <Stack direction="row" spacing={1}>
                {color.map((item) => (
                    <Box 
                        key={item} 
                        sx={{
                            border: pickedColor === item ? '3px solid black' : '1px solid grey', 
                            width: '20px', 
                            height: '20px', 
                            backgroundColor: `${item}`, 
                            '&:hover': {cursor: 'pointer'}
                        }}
                        onClick={() => handleClick(item)}
                    />
                ))}
            </Stack>
        </div>
    )
}

export default ProductColor