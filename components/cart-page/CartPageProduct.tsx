import data from '@/data/data.json'
import Image from 'next/image'
import ProductSize from '../product-description-page/ProductSize'
import ProductColor from '../product-description-page/ProductColor'

interface CartPageProductProps {
    product: SelectedProduct
}

const CartPageProduct = ({product}: CartPageProductProps) => {
    const filteredProduct = data.filter((item) => item.id === product.productId)

    if (filteredProduct.length === 0) {
        return <p>No product found</p>
    }

    const displayedProduct = filteredProduct[0]

    const tagStyle = {
        fontWeight: "bold",
        fontFamily: "inherit",
        fontSize: "small",
        padding: "0 0 3px 0",
    };
    return (
        <div className='p-4 font-raleway flex gap-2 justify-between items-center max-md:flex-col max-md:items-start lg:w-3/6'>
    
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'> {displayedProduct.name} </h3>
                <p className=''>${displayedProduct.price}.00</p>

                <div className='flex items-center gap-2'>
                    <h4 className='text-xs font-bold'> CATEGORY: </h4>
                    <p className='text-sm'> {displayedProduct.category} </p>
                </div>

                <ProductSize tagStyle={tagStyle} containerStyle={"flex flex-row items-center gap-2"} size={displayedProduct.size} addProductSize={() => {}} selectedSize={product.selectedSize}/>   
                <ProductColor tagStyle={tagStyle} containerStyle={"flex flex-row items-center gap-2"} color={displayedProduct.color} addProductColor={() => {}} selectedColor={product.selectedColor} />

                <div className='flex items-center gap-2'>
                    <h4 className='text-xs font-bold'> QUANTITY: </h4>
                    <p className='text-sm'> {product.quantity} </p>
                </div>
            </div>
            
    
            <div className=''>
                <Image
                    src={displayedProduct.subImages[0]}
                    alt={displayedProduct.name}
                    loading="lazy"
                    width={400}
                    height={400}
                    style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </div>   
                
        </div>
    )
}

export default CartPageProduct