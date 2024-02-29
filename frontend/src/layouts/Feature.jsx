import React from "react";
import { useNavigate } from "react-router-dom";

function Feature() {
    const navigate = useNavigate();

    const handleNav = (section) => {
        navigate(`/${section}`, { replace: true });
    };

    return (
        <div className="relative h-4/5 bg-primary-gray-1 py-20">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="mb-6 font-pt-sans text-4xl">
                    Thread the Market
                </h1>
                <h2 className="p-6 font-pt-sans text-3xl font-bold tracking-widest text-primary-1 md:text-4xl lg:text-5xl xl:p-0">
                    FEATURED COLLECTION
                </h2>
            </div>

            <div className="align-center flex flex-col justify-center p-4 lg:flex-row lg:justify-around">
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/products/hoodie/hoodie-main.jpg"
                        alt="Hoodie - Thread the Market"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        Rib Knit Hoodie
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:h-auto lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/products/denim-jacket/denim-jacket-main.jpg"
                        alt="Denim Jacket - Thread the Market"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        Denim Jacket
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:h-auto lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/products/socks/socks-main.jpg"
                        alt="Socks - Thread the Market"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        Cozy Socks
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
                <div className="position relative mb-6 h-[800px] w-full border lg:m-4 lg:mb-0 lg:h-auto lg:w-4/12">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/products/shirts/shirts-main.jpg"
                        alt="Shirts - Thread the Market"
                        draggable="false"
                        loading="lazy"
                    />
                    <h2 className="absolute bottom-0 z-30 w-full p-10 text-center font-pt-serif text-4xl tracking-widest text-white">
                        Daily Shirts
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-feature"></div>
                </div>
            </div>

            <div className="flex flex-row justify-center p-10 text-black">
                <button
                    className="bottom-0 mb-8 h-16 w-72 border border-black"
                    onClick={() => handleNav("shop")}
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default Feature;
