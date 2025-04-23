import data from '@/data/data.json'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'
import Image from 'next/image'
import DeleteIcon from "@mui/icons-material/Delete";
import { removeProductCart } from '@/libs/cookies';
import SnackbarComponent from '@/components/common/Snackbar';
import { useState } from 'react';

interface MiniCartProduct {
    product: SelectedProduct
}

const MiniCartProduct = ({product}: MiniCartProduct) => {
    const [isSnackbarOpenInfo, setIsSnackbarOpenInfo] = useState(false) 
    const filteredProduct = data.filter((item) => item.id === product.productId)

    if (filteredProduct.length === 0) {
        return <p>No product found</p>
    }

    const displayedProduct = filteredProduct[0]

    const removeProduct = () => {
        setIsSnackbarOpenInfo(true);
        setTimeout(() => {
            removeProductCart(product.id);
            }, 2050);
        }

    return (
        <div className='p-4 font-raleway flex gap-4'>
            <div>
                <Typography sx={{fontSize: 'medium', fontWeight: '700', fontFamily: 'inherit', paddingBottom: '0.3em'}}>{displayedProduct.name}</Typography>
                <Typography sx={{fontSize: 'small', fontFamily: 'inherit', paddingBottom: '5px'}}>${displayedProduct.price}.00</Typography>
                <Typography sx={{fontSize: 'small', fontWeight: '600', fontFamily: 'inherit'}}>Category:</Typography>
                <Typography sx={{fontSize: 'small', fontFamily: 'inherit', paddingBottom: '5px'}}>{displayedProduct.category}</Typography>
                    <Typography sx={{fontSize: 'small', fontWeight: '600', fontFamily: 'inherit'}}>Size:</Typography>
                    <Box 
                        sx={{
                            border: '1px solid black', 
                            width: '30px', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            padding: '4px',
                            marginBottom: '5px',
                            backgroundColor: 'white',
                            color: 'black',
                            }}
                    >
                        <Typography sx={{fontSize: 'x-small', textAlign: 'center', fontFamily: 'inherit'}}>{product.selectedSize.toUpperCase()}</Typography>
                    </Box>
                    <Typography sx={{fontSize: 'small', fontWeight: '600', fontFamily: 'inherit'}}>Color:</Typography>
                    <Box 
                        sx={{
                            border: '1px solid black', 
                            width: '20px', 
                            height: '20px', 
                            backgroundColor: `${product.selectedColor}`, 
                        }}
                    />
                    <Typography sx={{fontSize: 'small', fontWeight: '600', fontFamily: 'inherit', paddingTop: '5px'}}>Quantity:</Typography>
                    <Typography sx={{fontSize: 'small', fontFamily: 'inherit'}}>{product.quantity}</Typography>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <DeleteIcon sx={{ color: '#c26d6dee', cursor: 'pointer' }} onClick={removeProduct} />
                <Image
                    src={displayedProduct.subImages[0]}
                    alt={displayedProduct.name}
                    loading="lazy"
                    width={150}
                    height={150}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </div>
            <SnackbarComponent severity='info' message='Item will be removed from the cart' isSnackbarOpen={isSnackbarOpenInfo} setIsSnackbarOpen={setIsSnackbarOpenInfo} />
        </div>
    )
}

export default MiniCartProduct