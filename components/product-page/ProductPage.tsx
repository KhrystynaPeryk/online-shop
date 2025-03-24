"use client";
import { useSearchParams } from 'next/navigation';
import data from '../../data/data.json';
import ProductPageCard from './ProductPageCard';

const ProductPage = () => {
    const searchParams = useSearchParams();  // REDUX NEEDED FOR SSR
    const category = searchParams.get('category');

    const filteredData = category
        ? data.filter((item) => item.category === category)
        : data;

    return (
        <ul className="flex flex-wrap justify-center">
            {filteredData.map((item) => (
                <li key={item.id} className="px-6 py-5">
                    <ProductPageCard {...item}/>
                </li>
            ))}
        </ul>
    );
};

export default ProductPage;
