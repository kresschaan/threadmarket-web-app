import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchProductsQuery } from "../store";
import AddToCart from "./AddToCart";
// import Reviews from "./Reviews";

function ProductItem({
    loadProd,
    filter,
    search,
    category,
    sortBy,
    handleTotalProd,
}) {
    const { data, error, isLoading } = useFetchProductsQuery();
    const navigate = useNavigate();
    let sortedAndFilteredData = "";
    let productList = "";
    let displayList = "";
    const [productsFound, setProductsFound] = useState(true);

    const handleProductView = (id) => {
        navigate("/product-details", { state: { id: id } });
    };

    useEffect(() => {
        if (data) {
            handleTotalProd(data.length);
        }
    }, [data]);

    if (!isLoading) {
        sortedAndFilteredData = [...data];

        if (search) {
            sortedAndFilteredData = sortedAndFilteredData.filter((product) => {
                return product.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });
        }

        if (category !== "all") {
            sortedAndFilteredData = sortedAndFilteredData.filter((product) => {
                return product.category === category;
            });
        }

        if (filter !== "all") {
            if (sortBy === "Low to High") {
                sortedAndFilteredData.sort((a, b) => a.price - b.price);
            } else if (sortBy === "High to Low") {
                sortedAndFilteredData.sort((a, b) => b.price - a.price);
            }
        }

        productList = sortedAndFilteredData
            .slice(0, loadProd)
            .map((product) => {
                return (
                    <div
                        key={product._id}
                        className="relative m-4 h-[570px] w-72 bg-white p-4 shadow-3xl"
                    >
                        <img
                            className="w-[400px] h-[350px] object-cover"
                            src={
                                product.image.length > 0
                                    ? product.image[0]
                                    : product.image
                            }
                            alt={product.name + " - Thread the Market"}
                            draggable="false"
                            loading="lazy"
                        />
                        <div className="mt-4 flex flex-col items-center justify-center text-center">
                            <p className="text-xl">{product.name}</p>
                            {/* <Reviews review={product.review}></Reviews> */}

                            <div className="absolute mt-10 bottom-0 w-full p-4">
                                <div className="py-2 text-center">
                                    <p className="text-xl">
                                        {"$" + product.price.toFixed(2)}
                                    </p>
                                </div>
                                <AddToCart
                                    id={`${product._id}${product.name}`}
                                    name={product.name}
                                    image={product.image[0]}
                                    quantity={1}
                                    price={product.price}
                                ></AddToCart>
                            </div>
                        </div>
                    </div>
                );
            });

        const noProducts = (
            <div className="mt-10">
                <h1 className="text-2xl">
                    No Products Found. Changed your filters for more results.
                </h1>
            </div>
        );

        if (productList.length > 0) {
            displayList = productList;
        } else {
            displayList = noProducts;
        }
    }

    useEffect(() => {
        handleTotalProd(sortedAndFilteredData.length);
    }, [sortedAndFilteredData]);

    return displayList;
}

export default ProductItem;
