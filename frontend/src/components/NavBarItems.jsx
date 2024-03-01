import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../auth/AuthProvider";

function NavBarItems() {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token); // Decode the JWT token
                const currentTime = Date.now() / 1000; // Convert current time to seconds
                const expirationTime = currentTime + 5 * 60;
                if (decodedToken.exp < expirationTime) {
                    // Token has expired
                    setIsLoggedIn("false");
                    logout();
                }
            } catch (error) {
                console.error("Error decoding JWT token:", error);
                logout(); // Log out the user in case of decoding error
            }
        } else {
            setIsLoggedIn("false");
        }
    }, [token]);

    const navToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const checkNav = (section) => {
        navigate(`/${section}`, { replace: true });
    };

    const logoutHome = () => {
        setIsLoggedIn(false);
        logout();
    };

    return !isMenuOpen ? (
        <div className="nav-menu">
            <div
                id="menu-btn"
                className={`mr-4 mt-2 h-12 w-12 text-white hover:cursor-pointer md:hidden ${
                    isMenuOpen ? "open" : ""
                }`}
                onClick={() => navToggle()}
            >
                <span className="hamburger-top mb-4"></span>
                <span className="hamburger-middle mb-4"></span>
                <span className="hamburger-bottom mb-4"></span>
            </div>

            <div className="hidden justify-evenly p-10 text-sm text-white md:flex">
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    data-testid="navbar-items"
                    onClick={() => checkNav("home")}
                >
                    Home
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    data-testid="navbar-items"
                    onClick={() => checkNav("shop")}
                >
                    Shop
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    data-testid="navbar-items"
                    onClick={() => checkNav("register")}
                >
                    Sign Up
                </div>
                {isLoggedIn ? (
                    <div
                        className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                        data-testid="navbar-items"
                        onClick={() => checkNav("login")}
                    >
                        Log In
                    </div>
                ) : (
                    <div
                        className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                        data-testid="navbar-items"
                        onClick={() => logoutHome()}
                    >
                        Log Out
                    </div>
                )}
            </div>
        </div>
    ) : (
        <div className="absolute bottom-0 left-0 top-0 flex min-h-fit w-full flex-col bg-black text-lg uppercase text-white">
            <div className="flex flex-row justify-end px-4 py-2">
                {/* <MdMenu className="h-12 w-12 text-white"></MdMenu> */}

                <div
                    id="menu-btn"
                    className={`mr-4 mt-2 h-12 w-12 text-white hover:cursor-pointer ${
                        isMenuOpen ? "open" : ""
                    }`}
                    onClick={() => navToggle()}
                >
                    <span className="hamburger-top mb-4"></span>
                    <span className="hamburger-middle mb-4"></span>
                    <span className="hamburger-bottom mb-4"></span>
                </div>
            </div>

            <div className="space-y-3 py-24 pl-12">
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    data-testid="navbar-items"
                    onClick={() => checkNav("home")}
                >
                    Home
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    data-testid="navbar-items"
                    onClick={() => checkNav("shop")}
                >
                    Shop
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    data-testid="navbar-items"
                    onClick={() => checkNav("register")}
                >
                    Sign Up
                </div>
                {isLoggedIn ? (
                    <div
                        className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                        data-testid="navbar-items"
                        onClick={() => checkNav("login")}
                    >
                        Log In
                    </div>
                ) : (
                    <div
                        className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                        data-testid="navbar-items"
                        onClick={() => logoutHome()}
                    >
                        Log Out
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBarItems;
