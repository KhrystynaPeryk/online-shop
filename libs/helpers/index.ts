export function calculateTotal(products: SelectedProduct[], data: Product[]) {
    const totalPrice = products.reduce((acc, item) => {
        const matchedProduct = data.find((product) => product.id === item.productId);
        if (!matchedProduct) return acc; // Skip if no match
        return acc + matchedProduct.price * item.quantity;
    }, 0);

    return totalPrice
}