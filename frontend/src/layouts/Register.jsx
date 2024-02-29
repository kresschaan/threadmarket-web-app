import React from "react";
import Form from "../components/Form";
import { useLocation } from "react-router-dom";

function Register() {
    const { state } = useLocation();

    return (
        <>
            <div className="flex h-screen flex-col md:flex-row">
                <div className="flex flex-1 items-center">
                    <div className="mb-52 hidden lg:flex">
                        <h1 className="absolute z-10 ml-10 font-serif text-5xl font-bold text-white md:text-3xl lg:text-4xl">
                            Sign Up
                        </h1>
                    </div>

                    <img
                        className="h-full w-full object-cover"
                        src="/images/register/register.jpg"
                        alt="Sign Up - Thread the Market"
                        draggable="false"
                        loading="lazy"
                    />
                </div>

                <div className="absolute flex h-screen w-full flex-1 flex-col items-center justify-center overflow-auto lg:relative lg:mt-10 xl:mt-0">
                    {state ? (
                        <Form
                            priceVal={state.price}
                            planVal={state.plan}
                        ></Form>
                    ) : (
                        <Form></Form>
                    )}
                </div>
            </div>
        </>
    );
}

export default Register;
