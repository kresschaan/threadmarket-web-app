import React from "react";
import NavBarItems from "./NavBarItems";

function NavBar() {
    return (
        <div className="fixed top-0 z-30 flex w-screen justify-between bg-primary-4/40 backdrop-blur-lg lg:px-8">
            <div className="bg-white-100 flex hover:cursor-pointer"></div>
            <NavBarItems></NavBarItems>
        </div>
    );
}

export default NavBar;
