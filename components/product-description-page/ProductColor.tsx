'use client'
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useState } from "react";

interface ProductColorProps {
    tagStyle: {},
    color: string[],
    addProductColor: (item: string) => void
}

const ProductColor = ({tagStyle, color, addProductColor}: ProductColorProps) => {

    const [selectedColor, setSelectedColor] = useState('')

    const handleClick = (item: string) => {
        setSelectedColor(item)
        addProductColor(item)
    }

    return (
        <>
            <Typography sx={tagStyle}>COLOR:</Typography>
            <Stack direction="row" spacing={1}>
                {color.map((item) => (
                    <Box 
                        key={item} 
                        sx={{
                            border: selectedColor === item ? '3px solid black' : '1px solid grey', 
                            width: '20px', 
                            height: '20px', 
                            backgroundColor: `${item}`, 
                            '&:hover': {cursor: 'pointer'}
                        }}
                        onClick={() => handleClick(item)}
                    />
                ))}
            </Stack>
        </>
    )
}

export default ProductColor