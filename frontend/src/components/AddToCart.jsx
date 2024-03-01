import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { addCart } from "../store/index";

function AddToCart({ id, name, image, quantity, price }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.stopPropagation();

        dispatch(
            addCart({
                id,
                name,
                image,
                quantity,
                price,
            })
        );

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <button
            className="mt-4 flex h-[60px] w-full items-center justify-center bg-gray-700 py-4 text-base leading-none text-white"
            onClick={handleSubmit}
        >
            {isLoading ? (
                <FaCheckCircle
                    className="m-2"
                    size={20}
                    data-testid="check-circle-icon"
                ></FaCheckCircle>
            ) : (
                <FaShoppingCart
                    className="m-2"
                    size={20}
                    data-testid="check-circle-icon"
                ></FaShoppingCart>
            )}
            {isLoading ? "Adding.." : "Add to Cart"}
        </button>
    );
}

export default AddToCart;
