import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function NavBarItems({ isLink }) {
    const navigate = useNavigate();
    //const dispatch = useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const isRegistered = () => {
    //     localStorage.setItem("isRegistered", false);
    // };

    const navToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const checkNav = (section) => {
        navigate(`/${section}`, { replace: true });
    };

    return !isMenuOpen ? (
        <div className="nav-menu">
            {/* <div className="md:hidden py-2 px-4">
                <MdMenu className="h-12 w-12 text-white"></MdMenu>
            </div> */}

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
                    onClick={() => checkNav("home")}
                >
                    Home
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    onClick={() => checkNav("shop")}
                >
                    Shop
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    onClick={() => checkNav("register")}
                >
                    Sign Up
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    onClick={() => checkNav("login")}
                >
                    Log In
                </div>
            </div>
        </div>
    ) : (
        <div className="absolute bottom-0 left-0 top-0 flex min-h-fit w-full flex-col self-end bg-black text-lg uppercase text-white">
            <div className="flex flex-row justify-end px-4 py-2 md:hidden">
                {/* <MdMenu className="h-12 w-12 text-white"></MdMenu> */}

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
            </div>

            <div className="space-y-3 py-24 pl-12">
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    onClick={() => checkNav("home")}
                >
                    Home
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    onClick={() => checkNav("shop")}
                >
                    Shop
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    onClick={() => checkNav("register")}
                >
                    Sign Up
                </div>
                <div
                    className="cursor-pointer pr-5 font-serif font-semibold hover:text-primary-5"
                    onClick={() => checkNav("login")}
                >
                    Log In
                </div>
            </div>
        </div>
    );
}

export default NavBarItems;
