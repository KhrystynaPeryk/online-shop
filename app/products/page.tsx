import ProductPage from "@/components/product-page/ProductPage";

export default function Home() {
    return (
        <div className="">
            <ProductPage />
        </div>
    );
}

//HOW TO RETRIEVE COOKIES ON A SERVER SIDE

// import { cookies } from "next/headers";

// export default function ProductsPage() {
//   const cookieStore = cookies();
//   const cartCookie = cookieStore.get("cart");
//   const cart = cartCookie ? JSON.parse(cartCookie.value) : [];