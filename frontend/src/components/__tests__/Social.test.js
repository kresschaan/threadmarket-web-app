import React from "react";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Social from "../Social";
import { AuthContext } from "../../auth/AuthProvider";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const authContextValue = {
    login: jest.fn(), // Mock login function
};

beforeEach(() => {
    window.open = jest.fn();
});

describe("Social component", () => {
    it("renders social media icons", () => {
        const { getByTestId } = render(
            <Router>
                <Provider store={store}>
                    <AuthContext.Provider value={authContextValue}>
                        <Social />
                    </AuthContext.Provider>
                </Provider>
            </Router>
        );
        const facebookIcon = getByTestId("facebook-icon");
        const twitterIcon = getByTestId("twitter-icon");
        const instagramIcon = getByTestId("instagram-icon");

        expect(facebookIcon).toBeInTheDocument();
        expect(twitterIcon).toBeInTheDocument();
        expect(instagramIcon).toBeInTheDocument();
    });
});
