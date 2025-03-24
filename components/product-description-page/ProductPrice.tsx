import Typography from '@mui/material/Typography';

interface ProductPriceProps {
    tagStyle: {},
    price: number
}

const ProductPrice = ({tagStyle, price}: ProductPriceProps) => {
    return (
        <>
            <Typography sx={tagStyle}>PRICE:</Typography>
            <Typography sx={{fontWeight: 'bold', fontFamily: 'inherit'}}>${price}</Typography>
        </>
    )
}

export default ProductPrice