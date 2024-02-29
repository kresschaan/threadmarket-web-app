import React from "react";
import NavBarItems from "./NavBarItems";

function NavBar() {
    return (
        <div className="fixed top-0 z-30 flex w-screen justify-between bg-primary-4/40 backdrop-blur-lg lg:px-8">
            <div className="bg-white-100 flex hover:cursor-pointer">
                {/* <img
                    className="ml-2 h-16 w-16 md:h-24 md:w-24"
                    src={navlogo}
                    alt=""
                /> */}
            </div>
            <NavBarItems></NavBarItems>
        </div>
    );
}

export default NavBar;
