import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import ProductControls from "./ProductControls";

const ProductInfo = ({id, name, description, price, size, color, inStock} : Product) => {

    return (
        <Box component="section" sx={{ p: 4 }}>
            <Typography variant="h5" sx={{fontWeight: 'bold', fontFamily: 'inherit'}}>{name}</Typography>

            <ProductControls id={id} price={price} size={size} color={color} inStock={inStock} />

            <Typography sx={{fontFamily: 'inherit'}}>{description}</Typography>
        </Box>
    )
}

export default ProductInfo