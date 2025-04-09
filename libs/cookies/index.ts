import Cookies from "js-cookie";

export function getCart() {
    const cartCookie = Cookies.get("cart");
    return cartCookie ? JSON.parse(cartCookie) : [];
}
        
export function setCart(cart: SelectedProduct[]) {
    Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Expires in 7 days
    window.dispatchEvent(new Event("cart-updated"));
}

export function removeProductCart(id: string) {
    const cart = getCart()
    const filteredCart = cart.filter((product: SelectedProduct) => product.id !== id ) 
    setCart(filteredCart)
}

