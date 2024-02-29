import React from "react";
import { useNavigate } from "react-router-dom";

function FooterNav() {
    const navigate = useNavigate();

    const navSection = (section) => {
        navigate(`/${section}`, { replace: true });
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col">
                <div className="footer-nav-item ">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => navSection("home")}
                    >
                        Home
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:ml-10 lg:mr-24 xl:mr-0">
                <div className="footer-nav-item">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => navSection("home")}
                    >
                        Shop
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:mx-24 xl:mx-12">
                <div className="footer-nav-item">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => navSection("home")}
                    >
                        Sign Up
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="footer-nav-item">
                    <div
                        className="ml-2 hover:cursor-pointer hover:text-primary-4"
                        onClick={() => navSection("home")}
                    >
                        Log In
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterNav;
