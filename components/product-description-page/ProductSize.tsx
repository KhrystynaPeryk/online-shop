'use client'
import { useState } from "react";

import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface ProductSizeProps {
    tagStyle: {},
    size: string[],
    addProductSize: (item: string) => void
}

const ProductSize = ({tagStyle, size, addProductSize}: ProductSizeProps) => {
    const [selectedSize, setSelectedSize] = useState('')

    const handleClick = (item: string) => {
        setSelectedSize(item)
        addProductSize(item)
        console.log(`clicked on ${item}`)
    }

    return (
        <>
            <Typography sx={tagStyle}>SIZE:</Typography>
            <Stack direction="row" spacing={1}>
                {size.map((item) => (
                    <Box 
                        key={item} 
                        sx={{
                            border: '1px solid black', 
                            width: '30px', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '4px',
                            backgroundColor: selectedSize === item ? 'black' : 'white',
                            color: selectedSize === item ? 'white' : 'black',
                            '&:hover': {cursor: 'pointer'}
                        }}
                        onClick={() => handleClick(item)}
                    >
                        <Typography sx={{fontSize: 'small', textAlign: 'center'}}>{item.toUpperCase()}</Typography>
                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default ProductSize