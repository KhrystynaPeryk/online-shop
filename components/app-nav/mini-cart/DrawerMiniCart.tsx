"use client"
import { Drawer } from "@mui/material";
import MiniCartProduct from "./MiniCartProduct";
import {Typography, Box} from "@mui/material";

interface DrawerMiniCart {
    isDrawerOpen: boolean,
    setIsDrawerOpen: () => void,
    products: SelectedProduct[]
}

const DrawerMiniCart = ({isDrawerOpen, setIsDrawerOpen, products}: DrawerMiniCart) => {
    return (
        <Drawer anchor="right" open={isDrawerOpen} onClose={setIsDrawerOpen}>
            <Typography sx={{fontSize: 'large', fontWeight: 'bold', fontFamily: 'inherit', textAlign: 'center'}}>My Bag, {products.reduce((acc, currVal) => acc + currVal.quantity, 0)} items</Typography>
            {products.map((product) => <MiniCartProduct key={product.id} product={product}/>)}
            <Box
                sx={{
                    borderTop: '1px solid black', 
                    margin: '0 10px 10px 10px',
                    display: 'flex'
                }}
            >
                <Typography sx={{fontSize: 'large', marginLeft: '5px', fontFamily: 'inherit', fontWeight: 'bold'}}>Total:</Typography>
                {/* <Typography sx={{fontSize: 'large', marginLeft: '5px', fontFamily: 'inherit', fontWeight: 'bold'}}>{products.reduce((acc, currVal) => acc + currVal.quantity, 0)}</Typography> */}
            </Box>
        </Drawer>

    );
}

export default DrawerMiniCart