import React from "react";
import FooterNav from "../components/FooterNav";
import Social from "../components/Social";

function Footer() {
    return (
        <div className="footer-section">
            <div className="mb-6 flex flex-col lg:mx-5 lg:flex-row">
                {/* Navigation and Contact */}
                <div className="flex grow flex-col">
                    <div className="mx-12 mb-2 mt-8 flex flex-col justify-between lg:flex-row">
                        <FooterNav isLink={false}></FooterNav>

                        <div className="justify-center">
                            <button className="h-12 rounded-[14px] border-2 bg-secondary-1 px-16 text-black">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <hr className="mx-auto w-full items-center py-2"></hr>

                    {/* Social Icons and Phone Number */}
                    <div className="mx-8 flex flex-row justify-between">
                        <Social></Social>

                        <div className="pr-2">
                            <p>Give us a Call (023) 456-2312</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
