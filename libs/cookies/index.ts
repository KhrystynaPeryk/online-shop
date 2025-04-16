import Cookies from "js-cookie";

export function getCart() {
    const cartCookie = Cookies.get("cart");
    return cartCookie ? JSON.parse(cartCookie) : [];
}
        
export function setCart(cart: SelectedProduct[]) {
    Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Expires in 7 days
    window.dispatchEvent(new Event("cart-updated"));
}

export function addProductToCart(selectedProduct: SelectedProduct) {
    let cart = getCart()
    // Check if a product with the same productId, color, and size exists
    const existingProduct = cart.find((product: SelectedProduct) =>
        product.productId === selectedProduct.productId &&
        product.selectedColor === selectedProduct.selectedColor &&
        product.selectedSize === selectedProduct.selectedSize
    );

    if (existingProduct) {
        // Increment the quantity if it already exists
        existingProduct.quantity += 1;
    } else {
        // Otherwise, add the selected product to the cart
        cart.push(selectedProduct);
    }
    setCart(cart)
}

export function removeProductCart(id: string) {
    const cart = getCart()
    const filteredCart = cart.filter((product: SelectedProduct) => product.id !== id ) 
    setCart(filteredCart)
}

/**
 * updateProductCart:
 *  - Finds the product with the given id (current item to update).
 *  - Checks if another item (different id) already exists with the same productId, selectedColor, and selectedSize as the new parameters.
 *    - If yes, it removes the current item and increments the quantity of the matching item.
 *    - If no, it updates the current item.
 *  - If the current product is not found, you may choose to add the updated product as a new item.
 */
export function updateProductCart(
    id: string,
    size: string,
    color: string,
    quantity: number
    ) {
        const cart = getCart();
    
        // Find index of the current product by its unique id
        const currentIndex = cart.findIndex((product: SelectedProduct) => product.id === id);
        if (currentIndex === -1) {
            console.warn("Product not found in cart. Adding product as new item.");
            // Optionally add the updated product as a new item if needed.
            // For now, we just return.
            return;
        }
    
        // Get the current product
        const currentProduct = cart[currentIndex];
    
        // Check for another product (with different id) that already has the same updated properties
        const matchingIndex = cart.findIndex((product: SelectedProduct) =>
        product.id !== id &&
        product.productId === currentProduct.productId &&
        product.selectedColor === color &&
        product.selectedSize === size
        );
    
        if (matchingIndex !== -1) {
            // Matching product exists.
            cart[matchingIndex].quantity = cart[matchingIndex].quantity + quantity;
            // Remove the current (updated) product from the cart.
            cart.splice(currentIndex, 1);
        } else {
            // No matching product exists, update the current product's properties.
            currentProduct.selectedSize = size;
            currentProduct.selectedColor = color;
            currentProduct.quantity = quantity;
    }

    setCart(cart);
}