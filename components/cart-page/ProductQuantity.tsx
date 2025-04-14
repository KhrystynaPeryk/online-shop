"use client";
interface ProductQuantityProps {
    currentQuantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    }

    const ProductQuantity = ({
        currentQuantity,
        onIncrement,
        onDecrement,
    }: ProductQuantityProps) => {
    return (
        <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold">QUANTITY:</h4>
            <div className="w-14 flex justify-between items-center">
                <button
                        type="button"
                        onClick={onDecrement}
                        className="flex justify-center items-center rounded-full w-5 h-5 border border-gray-300 hover:bg-gray-200"
                    >
                    –
                    </button>
                    <p className="text-sm">{currentQuantity}</p>
                    <button
                        type="button"
                        onClick={onIncrement}
                        className="flex justify-center items-center rounded-full w-5 h-5 border border-gray-300 hover:bg-gray-200"
                    >
                    +
                    </button>
            </div>
        </div>
    );
};

export default ProductQuantity;
