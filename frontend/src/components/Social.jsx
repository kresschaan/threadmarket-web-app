import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Social() {
    const navigate = useNavigate();

    const redirectToExternalURL = (externalUrl) => {
        window.open(externalUrl, "_blank");
    };

    return (
        <div className="flex flex-row">
            <div className="pr-2" data-testid="facebook-icon">
                <FaFacebook
                    className="footer-social-icon hover:cursor-pointer hover:text-primary-4"
                    onClick={() =>
                        redirectToExternalURL("https://www.facebook.com")
                    }
                />
            </div>
            <div className="pr-2" data-testid="twitter-icon">
                <FaTwitter
                    className="footer-social-icon hover:cursor-pointer hover:text-primary-4"
                    onClick={() =>
                        redirectToExternalURL("https://www.twitter.com")
                    }
                />
            </div>
            <div className="pr-2" data-testid="instagram-icon">
                <FaInstagram
                    className="footer-social-icon hover:cursor-pointer hover:text-primary-4"
                    onClick={() =>
                        redirectToExternalURL("https://www.instagram.com")
                    }
                />
            </div>
        </div>
    );
}

export default Social;
