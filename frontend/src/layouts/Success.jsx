import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { clearState, useFetchOrdersByIDQuery } from "../store/index";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";

function Success() {
    let customerInfo = "";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();

    const clearPersistedData = async () => {
        dispatch(clearState());
    };

    if (!searchParams.get("id")) {
        navigate("/home");
    }

    const { data, error, isLoading } = useFetchOrdersByIDQuery(
        searchParams.get("id")
    );

    const handleConfirm = () => {
        clearPersistedData();
        navigate("/shop");
    };

    if (isLoading) {
        return <Loader></Loader>;
    }

    if (!isLoading) {
        const {
            firstName,
            lastName,
            email,
            phone,
            streetAdd1,
            streetAdd2,
            tax,
            total,
            shipping,
            shippingOption,
        } = data;

        customerInfo = (
            <div className="w-full px-4 pb-14 font-pt-sans lg:px-20" action="">
                <div className="p-10 lg:mb-10 lg:border lg:border-outline">
                    <div className="mb-8 text-2xl">
                        <p>Customer Information</p>
                    </div>
                    <div className="mb-10">
                        <p>
                            Your order is confirmed and we are getting it ready.
                            A confirmation email has been sent to {email}. Check
                            your email for updates on your order status.
                        </p>
                    </div>
                    <div className="flex w-full flex-col justify-evenly xl:flex-row">
                        <div className="flex flex-col">
                            <h2>Shipping Address:</h2>
                            <p>{`${firstName} ${lastName}`}</p>
                            <p>{streetAdd1}</p>
                            <p>{streetAdd2}</p>
                            <p>Phone: {phone}</p>
                            <p>Shipping Method: {shippingOption}</p>
                        </div>
                        <div className="flex flex-col ">
                            <h2>Payment Method:</h2>
                            <p>VISA ending with 4242</p>

                            <div className="mt-5 flex flex-row justify-between">
                                <h2>Shipping:</h2>
                                <p>{`$${parseFloat(shipping).toFixed(2)}`}</p>
                            </div>

                            <div className="flex flex-row justify-between">
                                <h2>Tax:</h2>
                                <p>{`$${parseFloat(tax).toFixed(2)}`}</p>
                            </div>

                            <div className="flex flex-row justify-between">
                                <h2>Total:</h2>
                                <p>{`$${parseFloat(total).toFixed(2)}`}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <button
                        className="rounded-[8px] border-2 bg-gray-700 p-4 font-pt-sans text-xl font-bold text-white hover:cursor-pointer"
                        onClick={() => handleConfirm()}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center md:flex-row">
                <div className="shadow-md lg:shadow-none absolute z-10 flex flex-1 flex-col items-center justify-center rounded-xl bg-white/90 text-justify lg:relative lg:rounded-none">
                    <div className="mt-20 flex flex-row">
                        <FaCheckCircle className="mx-2 mt-1 text-3xl text-tertiary-1"></FaCheckCircle>
                        <h1 className="font-pt-sans text-2xl tracking-wider md:text-4xl lg:mb-16 lg:text-4xl">
                            Thank you for your order!
                        </h1>
                    </div>

                    {customerInfo}
                </div>

                <div className="flex h-full w-screen flex-1 items-center">
                    <img
                        className="relative h-full w-full object-cover"
                        src="/images/checkout/checkout.jpg"
                        alt="Success - Thread the Market"
                        draggable="false"
                        loading="lazy"
                    />
                </div>
            </div>
        </>
    );
}

export default Success;
