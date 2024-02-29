import React from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
    CardElement,
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useAddOrderMutation } from "../store";

const CheckoutForm = ({ clientSecret, stripePromise, paymentID }) => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [order, results] = useAddOrderMutation();

    const { subtotal, shipping, tax, total, shippingOption } = useSelector(
        (state) => state.cart.total[0]
    );

    const { firstName, lastName, email, streetAdd1, streetAdd2, phone } =
        useSelector((state) => state.cart.address[0]);

    const orderData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        streetAdd1: streetAdd1,
        streetAdd2: streetAdd2,
        phone: phone,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        shippingOption: shippingOption,
    };

    const isRegistered = () => {
        localStorage.setItem("isRegistered", true);
    };

    const submitSpinner = () => {
        setIsSubmitted((prevState) => !prevState);
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        submitSpinner();

        try {
            const stripe = await stripePromise;

            if (!stripe || !elements) {
                // Stripe.js hasn't yet loaded.
                // Make sure to disable form submission until Stripe.js has loaded.
                return;
            }

            isRegistered();
            const returnData = await order(orderData);

            console.log(returnData.data.Message._id);

            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `http://localhost:5173/success?id=${returnData.data.Message._id}`,
                },
            });

            if (result.error) {
                // Show error to your customer (for example, payment details incomplete)
                console.log(result.error.message);
            } else {
                submitSpinner();
            }
        } catch (error) {
            // Handle errors here
            console.error("Mutation error:", error);
        }
    };

    return (
        <form className="form-checkout-container" onSubmit={handlePayment}>
            <h2 className="mb-10 text-2xl text-primary-2">Payment Method</h2>
            <PaymentElement />
            <div className="mt-16 flex flex-col p-10 text-xl">
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">SUBTOTAL</p>
                    <p>{`$${subtotal.toFixed(2)}`}</p>
                </div>
                <div className="flex flex-row justify-between pb-4">
                    <p className="font-bold">SHIPPING</p>
                    <p>{`$${shipping.toFixed(2)}`}</p>
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

            <div className="mt-6 text-sm text-gray-500">
                <p>Demo</p>
                <p>Card Number: 4242 4242 4242 4242</p>
                <p>Expiration: 12/25</p>
                <p>CVC: 242</p>
                <p>Country: Any</p>
            </div>

            <button
                className="mt-10 flex h-12 w-full items-center justify-center rounded-[8px] border-2 bg-primary-2 px-16 text-white bg-gray-800 border-gray-500 hover:cursor-pointer"
                disabled={!stripe}
            >
                {isSubmitted ? (
                    <ImSpinner3 className="animate-spin text-2xl"></ImSpinner3>
                ) : (
                    "Checkout"
                )}
            </button>
        </form>
    );
};

export default CheckoutForm;
