import React from "react";
import { useNavigate } from "react-router-dom";

function Collection() {
    const navigate = useNavigate();

    const handleNav = (section) => {
        navigate(`/${section}`, { replace: true });
    };

    return (
        <div className="py-10">
            <div className="collection-container">
                <div className="collection-background" />
                <div className="absolute h-full w-full bg-gradient-to-r from-gray-900 via-gray-900/70 to-black">
                    <div className="collection-content-container">
                        <div className="collection-image">
                            <img
                                className="h-[450px] w-full object-cover object-top"
                                src="/images/collections/collection-blazer.jpg"
                                alt="Blazer - Thread the Market"
                                draggable="false"
                                loading="lazy"
                            />
                        </div>
                        <div className="collection-item">
                            <h3 className="text-center text-3xl lg:text-left">
                                Blazer
                            </h3>
                            <p className="mt-6 text-center lg:text-left">
                                A workwear blazer that is perfect for formal
                                events and casual styles.
                            </p>
                            <div
                                className="collection-shop-stack hover:cursor-pointer"
                                onClick={() => handleNav("shop")}
                            >
                                <p className="shop-item">SHOP THIS LOOK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collection-container">
                <div className="collection-background" />
                <div className="absolute h-full w-full ">
                    <div className="collection-content-container">
                        <div className="collection-item">
                            <h3 className="text-center text-3xl lg:text-left">
                                Acme Jeans
                            </h3>
                            <p className="mt-6 text-center lg:text-left">
                                These jeans from acme are sure to make your
                                outfit look amazing and great along with its
                                heat tech.
                            </p>
                            <div
                                className="collection-shop-stack hover:cursor-pointer"
                                onClick={() => handleNav("shop")}
                            >
                                <p className="shop-item">SHOP THIS LOOK</p>
                            </div>
                        </div>
                        <div className="collection-image">
                            <img
                                className="h-[450px] w-full object-cover object-top"
                                src="/images/collections/collection-jeans.jpg"
                                alt="Acme Jeans - Thread the Market"
                                draggable="false"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="collection-container">
                <div className="collection-background" />
                <div className="absolute h-[500px] w-full bg-gradient-to-r from-gray-900 via-gray-900/70 to-black">
                    <div className="collection-content-container">
                        <div className="collection-image">
                            <img
                                className="h-[450px] w-full object-cover object-top"
                                src="/images/collections/collection-joggers.jpg"
                                alt="Joggers - Thread the Market"
                                draggable="false"
                                loading="lazy"
                            />
                        </div>
                        <div className="collection-item">
                            <h3 className="text-center text-3xl lg:text-left">
                                Joggers
                            </h3>
                            <p className="mt-6 text-center lg:text-left">
                                Lifestyle work and workout joggers will make you
                                comfy and stylish.
                            </p>
                            <div
                                className="collection-shop-stack hover:cursor-pointer"
                                onClick={() => handleNav("shop")}
                            >
                                <p className="shop-item">SHOP THIS LOOK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
