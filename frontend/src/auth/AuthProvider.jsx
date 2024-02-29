import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);

        // Decode the JWT token to extract expiration time
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp + 5 * 60 * 1000; // Convert expiration time to milliseconds

        // Store the token expiration time in localStorage
        localStorage.setItem("tokenExpiration", expirationTime);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
