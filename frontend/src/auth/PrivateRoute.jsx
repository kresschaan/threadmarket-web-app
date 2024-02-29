import React, { useContext, useEffect } from "react";
import { Route, redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token); // Decode the JWT token
                const currentTime = Date.now() / 1000; // Convert current time to seconds
                const expirationTime = currentTime + 5 * 60;
                if (decodedToken.exp < expirationTime) {
                    // Token has expired
                    logout(); // Log out the user
                    navigate("/login"); // Redirect to login page
                }
            } catch (error) {
                console.error("Error decoding JWT token:", error);
                logout(); // Log out the user in case of decoding error
                navigate("/login"); // Redirect to login page
            }
        } else {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return <Component {...rest} />;
};

export default PrivateRoute;
