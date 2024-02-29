import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutForm from "../components/CheckoutForm";
import Loader from "../components/Loader";

function Checkout() {
    const [clientSecret, setClientSecret] = useState("");
    const [paymentID, setPaymentID] = useState("");
    const [loading, setLoading] = useState(true);

    const stripePromise = loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );

    const baseURL = "http://localhost:3000/api/payment/";

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                axios
                    .post(`${baseURL}create-payment-intent`, {
                        amount: 50,
                    })
                    .then((response) => {
                        setClientSecret(response.data.client_secret);
                        setPaymentID(response.data.id);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchClientSecret();
    }, []);

    const options = {
        // passing the client secret obtained from the server
        clientSecret: clientSecret,
    };

    return (
        <div className="flex w-full flex-col font-pt-sans lg:py-20">
            <div className="flex w-full flex-row pl-10 pt-8 text-center">
                <h1 className="text-4xl text-primary-2">EXPRESS CHECKOUT</h1>
            </div>
            {/* {loading ? (
                <Loader></Loader>
            ) : (
                clientSecret && (
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm
                            clientSecret={clientSecret}
                            stripePromise={stripePromise}
                            paymentID={paymentID}
                        ></CheckoutForm>
                    </Elements>
                )
            )} */}
            {loading ? (
                <Loader></Loader>
            ) : (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm
                        clientSecret={clientSecret}
                        stripePromise={stripePromise}
                        paymentID={paymentID}
                    ></CheckoutForm>
                </Elements>
            )}
        </div>
    );
}

export default Checkout;
