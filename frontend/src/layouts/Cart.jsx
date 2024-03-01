import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { useState } from "react";
import { updateQuantity, removeItem } from "../store/index";
import { addTotal } from "../store/index";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [shippingFee, setShippingFee] = useState(30);
    const [shippingOption, setShippingOption] = useState("Delivery");
    const tax = 0;
    let subTotal = 0;
    let total = 0;
    let cartTotal = 0;

    const handleCheckout = (
        subTotal,
        shippingFee,
        tax,
        total,
        shippingOption
    ) => {
        dispatch(
            addTotal({
                subTotal,
                shippingFee,
                tax,
                total,
                shippingOption,
            })
        );
        navigate("/shipping", { state: { authorized: true } });
    };

    const handleBackToShop = () => {
        navigate("/shop");
    };

    const handleMinusQuantity = (productId, currentQuantity) => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            dispatch(updateQuantity({ productId, newQuantity }));
        }
    };

    const handleAddQuantity = (productId, currentQuantity) => {
        const newQuantity = currentQuantity + 1;
        dispatch(updateQuantity({ productId, newQuantity }));
    };

    const handleShippingFee = (value) => {
        setShippingFee(value);
    };

    const removeProd = (productId) => {
        dispatch(removeItem({ productId }));
    };

    const cart = useSelector((state) => state.cart.cart);

    const cartList = cart.map((data) => {
        return (
            <div key={data.id} className="flex flex-row">
                <div className="mt-6 flex h-full w-full flex-col border-b  border-outline bg-white lg:mt-0 lg:h-[420px] lg:flex-row">
                    <div className="flex w-full flex-grow flex-row items-center justify-center lg:w-2/5">
                        <img
                            className="h-72 w-72 border border-outline object-cover"
                            src={data.image}
                            alt={data.name + " - Thread the Market"}
                            draggable="false"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex w-full flex-grow flex-col items-center justify-center lg:w-3/5">
                        <div className="flex w-full flex-row text-center">
                            <div className="flex w-full flex-row justify-between p-10 lg:-translate-y-10">
                                <p className="text-xl">{data.name}</p>
                                <div className="flex flex-row">
                                    <p className="text-xl">{`$${data.price.toFixed(
                                        2
                                    )}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-row items-center justify-center text-center">
                            <div className="flex w-full flex-col items-center justify-center p-10 lg:flex-row">
                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-gray-500 p-3 hover:cursor-pointer"
                                        onClick={() =>
                                            handleMinusQuantity(
                                                data.id,
                                                data.quantity
                                            )
                                        }
                                    >
                                        <PiMinusBold></PiMinusBold>
                                    </button>
                                    <div className="h-10 w-24 border border-outline p-3 text-center text-sm">
                                        {data.quantity}
                                    </div>
                                    <button
                                        className="bg-gray-500 p-3 hover:cursor-pointer"
                                        onClick={() =>
                                            handleAddQuantity(
                                                data.id,
                                                data.quantity
                                            )
                                        }
                                    >
                                        <PiPlusBold></PiPlusBold>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-row items-center justify-center text-center">
                            <div className="flex w-full flex-row lg:w-1/2">
                                <button
                                    className="w-full bg-primary-gray-2 p-4"
                                    onClick={() => removeProd(data.id)}
                                >
                                    REMOVE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    const orderList = cart.map((data) => {
        return (
            <div key={data.id} className="flex flex-row justify-between pb-4">
                <p>{data.name}</p>
                <p>{`$${(data.price * data.quantity).toFixed(2)}`}</p>
            </div>
        );
    });

    cartTotal = cart.reduce((acc, product) => {
        return acc + product.quantity;
    }, 0);

    subTotal = cart.reduce((acc, product) => {
        const subtotal = product.price * product.quantity;
        return acc + subtotal;
    }, 0);

    total = parseFloat(subTotal) + parseFloat(shippingFee);

    return (
        <div className="relative h-screen">
            <div className="flex h-screen flex-col lg:flex-row">
                <div className="flex w-full flex-grow flex-col p-10 font-pt-sans lg:w-3/5">
                    <div
                        className="mb-2 flex w-full flex-row text-center hover:cursor-pointer"
                        onClick={handleBackToShop}
                    >
                        <div className="p-[2px] pr-3">
                            <TfiArrowCircleLeft size={26}></TfiArrowCircleLeft>
                        </div>
                        <h1 className="mb-6 text-2xl text-primary-2">
                            Back to Shop
                        </h1>
                    </div>
                    <div className="flex w-full flex-row text-center">
                        <h1 className="mb-6 text-4xl text-primary-2">CART</h1>
                        <p className="p-2">
                            ({cartTotal} items : ${subTotal.toFixed(2)})
                        </p>
                    </div>
                    <div className="flex flex-row text-center text-lg">
                        <p>HOW TO GET IT</p>
                    </div>
                    <div className="flex flex-col text-lg lg:flex-row">
                        <div className="mb-2 h-[120px] w-full border border-outline p-4 lg:m-2">
                            <input
                                type="radio"
                                id="html"
                                name="delivery"
                                value="HTML"
                                defaultChecked="checked"
                                onClick={() => handleShippingFee(30.0)}
                            ></input>
                            <label className="m-2" htmlFor="html">
                                Delivery
                            </label>
                            <p className="m-2 ml-5">
                                Local or International Shipping $30.00
                            </p>
                            <br></br>
                        </div>
                        <div className="h-[120px] w-full border border-outline p-4 lg:m-2">
                            <input
                                type="radio"
                                id="html"
                                name="delivery"
                                value="HTML"
                                onClick={() => handleShippingFee(0.0)}
                            ></input>
                            <label className="ml-2" htmlFor="html">
                                Pick Up
                            </label>
                            <p className="m-2 ml-5">In Store $0.00</p>
                            <br></br>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="mt-4 w-full border bg-gray-800 p-4 text-white lg:m-2">
                            <h3 className="text-2xl">ORDER ITEMS</h3>
                        </div>
                    </div>
                    {cartList.length === 0 && (
                        <div className="flex flex-row">
                            <div className="mt-4 w-full p-4 lg:m-2">
                                <h3 className="text-2xl">
                                    NO ITEMS ADDED TO CART
                                </h3>
                            </div>
                        </div>
                    )}
                    <div className="overflow-y-scroll">{cartList}</div>
                </div>

                <div className="w-full flex-grow flex-row border-l border-outline p-10 py-20 font-pt-sans lg:w-2/5">
                    <h1 className=" mb-6 text-4xl text-primary-2">
                        ORDER SUMMARY
                    </h1>
                    {cartList.length === 0 && (
                        <h1 className=" mb-6 text-2xl text-primary-2">
                            You have no items in your cart.
                        </h1>
                    )}
                    <div className="flex flex-col text-lg">{orderList}</div>
                    <div className="mt-2 flex flex-col border-y border-outline p-10 text-xl">
                        <div className="flex flex-row justify-between pb-4">
                            <p className="font-bold">SUBTOTAL</p>
                            <p>{`$${subTotal.toFixed(2)}`}</p>
                        </div>
                        <div className="flex flex-row justify-between pb-4">
                            <p className="font-bold">SHIPPING</p>
                            <p>{`$${shippingFee.toFixed(2)}`}</p>
                        </div>
                        <div className="flex flex-row justify-between pb-4">
                            <p className="font-bold">TAX</p>
                            <p>{`$${tax.toFixed(2)}`}</p>
                        </div>
                        <div className="flex flex-row justify-between pb-4">
                            <p className="font-bold">TOTAL</p>
                            <p>{`$${total.toFixed(2)}`}</p>
                        </div>
                    </div>

                    {cartList.length !== 0 && (
                        <div className="mt-8 flex flex-col">
                            <div className="flex flex-row justify-between pb-4">
                                <p className="font-bold">ADD A COUPON CODE</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <input
                                    className="mr-4 h-14 w-full border"
                                    type="text"
                                />
                                <button className="h-14 bg-primary-gray-2 px-10 font-bold text-white">
                                    APPLY
                                </button>
                            </div>
                        </div>
                    )}

                    {cartList.length !== 0 ? (
                        <div className="mt-6 flex flex-col">
                            <button
                                className="h-14 bg-gray-700 px-10 text-xl font-bold text-white"
                                onClick={() =>
                                    handleCheckout(
                                        subTotal,
                                        shippingFee,
                                        tax,
                                        total,
                                        shippingOption
                                    )
                                }
                            >
                                EXPRESS CHECKOUT
                            </button>
                        </div>
                    ) : (
                        <div className="mt-6 flex flex-col">
                            <button
                                className="h-14 bg-gray-700 px-10 text-xl font-bold text-white"
                                onClick={() => handleBackToShop()}
                            >
                                CONTINUE SHOPPING
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
