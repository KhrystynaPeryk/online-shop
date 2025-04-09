"use client"
import { Drawer, Button } from "@mui/material";
import MiniCartProduct from "./MiniCartProduct";
import {Typography, Box} from "@mui/material";
import data from '@/data/data.json'
import { calculateTotal } from "@/libs/helpers";
import { useRouter } from 'next/navigation'

interface DrawerMiniCart {
    isDrawerOpen: boolean,
    setIsDrawerOpen: () => void,
    products: SelectedProduct[]
}

const DrawerMiniCart = ({isDrawerOpen, setIsDrawerOpen, products}: DrawerMiniCart) => {
    const router = useRouter()
    return (
        <Drawer anchor="right" open={isDrawerOpen} onClose={setIsDrawerOpen}>
            <Typography sx={{fontSize: 'large', fontWeight: 'bold', fontFamily: 'inherit', textAlign: 'center', marginTop: '10px'}}>My Bag, {products.reduce((acc, currVal) => acc + currVal.quantity, 0)} items</Typography>
            {products.map((product) => <MiniCartProduct key={product.id} product={product}/>)}
            <Box
                sx={{
                    borderTop: '1px solid black', 
                    margin: '0 10px 10px 10px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Typography sx={{fontSize: 'large', margin: '0.5em 0 0 5px', fontFamily: 'inherit', fontWeight: 'bold'}}>Total:</Typography>
                <Typography sx={{fontSize: 'large', margin: '0.5em 0 0 5px', fontFamily: 'inherit', fontWeight: 'bold'}}>${calculateTotal(products, data)}.00</Typography>
            </Box>
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
            <Button 
                variant="contained" 
                sx={{
                    backgroundColor: '#c26d6dee', 
                    px: 4, 
                    fontFamily: 'inherit', 
                    fontSize: 'small', 
                    mx: 3,
                    marginBottom: '2em',
                    border: "1px solid transparent",
                    '&:hover': {backgroundColor: 'white', color: '#c26d6dee', border: '1px solid #c26d6dee'}
                }}
                onClick={() => {setIsDrawerOpen(); router.push('/cart')}}
            >EDIT CART</Button>
        </Drawer>

    );
}

export default DrawerMiniCart