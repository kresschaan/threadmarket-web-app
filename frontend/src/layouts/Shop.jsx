import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import ProductItem from "../components/ProductItem";

function Shop() {
    const navigate = useNavigate();
    const [totalProd, setTotalProd] = useState("");
    const [loadProd, setLoadProd] = useState(3);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("default");

    const cart = useSelector((state) => state.cart.cart);
    let cartTotal = 0;

    const handleLoadProd = () => {
        if (loadProd < totalProd) {
            setLoadProd(loadProd + 3);
        } else {
            setLoadProd(totalProd);
        }
    };

    const handleTotalProd = (total) => {
        setTotalProd(total);
    };

    const handleSearch = (val) => {
        setSearch(val);
        setFilter("search");
    };

    const handleCategoryVal = (val) => {
        setCategory(val);
        setFilter("category");
    };

    const handleSortVal = (val) => {
        setSortBy(val);
        setFilter("sort");
    };

    const navSection = (section) => {
        navigate(`/${section}`, { replace: true });
    };

    cartTotal = cart.reduce((acc, product) => {
        return acc + product.quantity;
    }, 0);

    return (
        <div className="relative h-full py-10">
            <div className="flex flex-row pl-10 text-center">
                <FaAngleLeft
                    className="h-8 w-8 mt-1 mr-4 group-hover:text-primary-1 hover:cursor-pointer"
                    onClick={() => navSection("home")}
                ></FaAngleLeft>
                <h1 className="mb-6 font-pt-sans text-4xl text-primary-1">
                    SHOP
                </h1>
            </div>

            <div className="flex flex-col justify-between px-10 font-pt-sans md:flex-row md:px-14">
                <div className="flex flex-col lg:w-4/5 lg:flex-row">
                    <div className="w-full p-2 md:w-72">
                        <label
                            className="pb-2 text-lg font-bold text-primary-2"
                            htmlFor="search"
                        >
                            Search
                        </label>
                        <input
                            type="text"
                            className="mt-4 w-full border p-[14px] text-primary-gray-3"
                            name="search"
                            id="search"
                            placeholder="Search Product"
                            onChange={(e) => handleSearch(e.target.value)}
                        ></input>
                    </div>
                    <div className="w-full p-2 md:w-72">
                        <label
                            className="pb-2 text-lg font-bold text-primary-2"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <select
                            className="mt-4 w-full border p-4 text-primary-gray-3"
                            name="category"
                            id="category"
                            onChange={(e) => handleCategoryVal(e.target.value)}
                        >
                            <option value="all">All Category</option>
                            <option value="jeans">Jeans</option>
                            <option value="hoodie">Hoodie</option>
                            <option value="jacket">Jacket</option>
                            <option value="joggers">Joggers</option>
                            <option value="shirt">Shirt</option>
                            <option value="socks">Socks</option>
                        </select>
                    </div>
                    <div className="w-full p-2 md:w-72">
                        <label
                            className="pb-2 text-lg font-bold text-primary-2"
                            htmlFor="sort"
                        >
                            Sort By
                        </label>
                        <select
                            className="mt-4 w-full border bg-primary-gray-5 p-4 text-primary-gray-3"
                            name="sort"
                            id="sort"
                            onChange={(e) => handleSortVal(e.target.value)}
                        >
                            <option value="all">Default Sorting</option>
                            <option value="Low to High">Low to High</option>
                            <option value="High to Low">High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="w-full p-2 md:w-72 flex justify-end">
                    <div className="group font-bold hover:cursor-pointer ">
                        {cartTotal > 0 && (
                            <div className="absolute h-6 w-6 -translate-y-3 translate-x-4 rounded-full bg-red-400 text-center">
                                {cartTotal}
                            </div>
                        )}

                        <FaCartShopping
                            className="h-8 w-8 group-hover:text-primary-1"
                            onClick={() => navSection("cart")}
                        ></FaCartShopping>
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center font-pt-sans">
                <ProductItem
                    loadProd={loadProd}
                    filter={filter}
                    category={category}
                    search={search}
                    sortBy={sortBy}
                    handleTotalProd={handleTotalProd}
                ></ProductItem>
            </div>
            <div className="my-10 flex flex-row items-center justify-center py-10">
                {loadProd < totalProd && (
                    <div
                        className="w-72 border bg-primary-gray-4 p-4 text-center text-black border-black hover:cursor-pointer"
                        onClick={() => handleLoadProd()}
                    >
                        LOAD MORE
                    </div>
                )}
            </div>
            {/* <div className="flex items-center justify-center">
                <Navigation isLink={true}></Navigation>
            </div> */}
        </div>
    );
}

export default Shop;
