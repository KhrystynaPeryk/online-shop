import data from '@/data/data.json'
import Image from 'next/image'
import ProductSize from '../product-description-page/ProductSize'
import ProductColor from '../product-description-page/ProductColor'
import CartPageProductControls from './CartPageProductControls'
import { useState, useEffect } from 'react'
import ProductQuantity from './ProductQuantity'
import { removeProductCart, updateProductCart } from '@/libs/cookies'
import SnackbarComponent from '../common/Snackbar'

interface CartPageProductProps {
    product: SelectedProduct
    }

    const CartPageProduct = ({ product }: CartPageProductProps) => {
        // Local states initialized with the product's original values
        const [currentSize, setCurrentSize] = useState(product.selectedSize)
        const [currentColor, setCurrentColor] = useState(product.selectedColor)
        const [currentQuantity, setCurrentQuantity] = useState(product.quantity)
        const [isSnackbarOpenInfo, setIsSnackbarOpenInfo] = useState(false) 
        const [areParamsChanged, setAreParamsChanged] = useState(false)

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
        }

            // Update local state whenever the product prop changes
        useEffect(() => {
            setCurrentSize(product.selectedSize)
            setCurrentColor(product.selectedColor)
            setCurrentQuantity(product.quantity)
            setAreParamsChanged(false)
        }, [product])

        // Helper function to check if any parameter changed compared to the original product
        const checkIfChanged = (size: string, color: string, quantity: number) => {
            return (
            size !== product.selectedSize ||
            color !== product.selectedColor ||
            quantity !== product.quantity
            )
        }

        const handleSizeChange = (newSize: string) => {
            setCurrentSize(newSize)
            setAreParamsChanged(checkIfChanged(newSize, currentColor, currentQuantity))
        }

        const handleColorChange = (newColor: string) => {
            setCurrentColor(newColor)
            setAreParamsChanged(checkIfChanged(currentSize, newColor, currentQuantity))
        }

        const handleIncrement = () => {
            setCurrentQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1
            setAreParamsChanged(checkIfChanged(currentSize, currentColor, newQuantity))
            return newQuantity
            })
        }

        const handleDecrement = () => {
            setCurrentQuantity((prevQuantity) => {
            // Do not allow the quantity to fall below 0
            const newQuantity = prevQuantity > 0 ? prevQuantity - 1 : 0
            setAreParamsChanged(checkIfChanged(currentSize, currentColor, newQuantity))
            return newQuantity
            })
        }
    
        const removeProduct = () => {
            setIsSnackbarOpenInfo(true);
            setTimeout(() => {
                removeProductCart(product.id);
                }, 2050);
            }

        const updateProduct = () => {
            if (areParamsChanged) {
                if (currentQuantity === 0) {
                    removeProduct()
                } else {
                    updateProductCart(product.id, currentSize, currentColor, currentQuantity)
                }
                setAreParamsChanged(false)
            }
        }

    return (
        <div className='p-4 font-raleway flex gap-4 justify-between items-center max-md:flex-col max-md:items-start'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'>{displayedProduct.name}</h3>
                <p>${displayedProduct.price}.00</p>

                <div className='flex items-center gap-2'>
                <h4 className='text-xs font-bold'>CATEGORY:</h4>
                <p className='text-sm'>{displayedProduct.category}</p>
                </div>

                {/* Pass the new callbacks along with the current value */}
                <ProductSize
                    tagStyle={tagStyle}
                    containerStyle={"flex flex-row items-center gap-2"}
                    size={displayedProduct.size}
                    addProductSize={handleSizeChange}
                    selectedSize={currentSize}
                />
                <ProductColor
                    tagStyle={tagStyle}
                    containerStyle={"flex flex-row items-center gap-2"}
                    color={displayedProduct.color}
                    addProductColor={handleColorChange}
                    selectedColor={currentColor}
                />

                <ProductQuantity
                    currentQuantity={currentQuantity}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
                <CartPageProductControls areParamsChanged={areParamsChanged} removeProduct={removeProduct} updateProduct={updateProduct}/>
            </div>

            <div className='w-[400px] h-[400px] max-sm:w-[300px] max-sm:h-[300px] relative'>
                <Image
                src={displayedProduct.subImages[0]}
                alt={displayedProduct.name}
                loading='lazy'
                fill
                sizes="(max-width: 400px) 100vw"
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

export default CartPageProduct
