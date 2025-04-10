'use client'
import { useState } from "react";

import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface ProductSizeProps {
    tagStyle: {},
    containerStyle: string,
    size: string[],
    addProductSize: (item: string) => void
    selectedSize?: string
}

const ProductSize = ({tagStyle, containerStyle, size, addProductSize, selectedSize}: ProductSizeProps) => {
    const [pickedize, setPickedSize] = useState(selectedSize ? selectedSize : '')

    const handleClick = (item: string) => {
        setPickedSize(item)
        addProductSize(item)
    }

    return (
        <div className={containerStyle}>
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
                            backgroundColor: pickedize === item ? 'black' : 'white',
                            color: pickedize === item ? 'white' : 'black',
                            '&:hover': {cursor: 'pointer'}
                        }}
                        onClick={() => handleClick(item)}
                    >
                        <Typography sx={{fontSize: 'small', textAlign: 'center'}}>{item.toUpperCase()}</Typography>
                    </Box>
                ))}
            </Stack>
        </div>
    )
}

export default ProductSize