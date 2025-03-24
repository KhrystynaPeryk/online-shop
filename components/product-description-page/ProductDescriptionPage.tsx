'use client' // think what to do to it
import { useParams } from "next/navigation"
import data from '@/data/data.json'
import ProductInfo from "./ProductInfo"
import ProductImages from "./ProductImages"
import Box from "@mui/material/Box"

const ProductDescriptionPage = () => {

    const {productId} = useParams()
    const filteredData = data.filter((item) => item.id === productId)
    const filteredItem = filteredData[0]

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            my: 9,
            flexDirection: { xs: "column", lg: "row" },
        }}>  
            <ProductImages {...filteredItem} />
            <ProductInfo {...filteredItem} />
        </Box>
    )
}

export default ProductDescriptionPage