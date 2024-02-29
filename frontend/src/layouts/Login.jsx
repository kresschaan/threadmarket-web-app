import React from "react";
import FormLogin from "../components/FormLogin";

function Login() {
    return (
        <div className="login-section">
            <div className="flex flex-1 items-center">
                <img
                    className="relative h-full w-full object-cover"
                    src="/images/login/login.jpg"
                    alt="Login - Thread the Market"
                    draggable="false"
                    loading="lazy"
                />
            </div>

            <div className="login-form">
                <FormLogin></FormLogin>
            </div>
        </div>
    );
}

export default Login;
