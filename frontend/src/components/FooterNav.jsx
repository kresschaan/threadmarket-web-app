function FooterNav() {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col">
                <div className="footer-nav-item ">
                    <div className="ml-2 hover:cursor-pointer hover:text-primary-4">
                        Home
                    </div>
                </div>
                <div className="footer-nav-item">
                    <div className="ml-2 hover:cursor-pointer hover:text-primary-4">
                        About
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:mx-24 xl:mx-36">
                <div className="footer-nav-item">
                    <div className="ml-2 hover:cursor-pointer hover:text-primary-4">
                        Shop
                    </div>
                </div>
                <div className="footer-nav-item">
                    <div className="ml-2 hover:cursor-pointer hover:text-primary-4">
                        Sign Up
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="footer-nav-item">
                    <div className="ml-2 hover:cursor-pointer hover:text-primary-4">
                        Log In
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterNav;
