import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FooterNav from "../FooterNav";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const authContextValue = {
    login: jest.fn(), // Mock login function
};

describe("FooterNav component", () => {
    it("navigates to the correct section when clicked", () => {
        const { getByText } = render(
            <Router>
                <Provider store={store}>
                    <AuthContext.Provider value={authContextValue}>
                        <FooterNav />
                    </AuthContext.Provider>
                </Provider>
            </Router>
        );

        const homeLink = getByText("Home");
        fireEvent.click(homeLink);
        expect(window.location.pathname).toBe("/home");
    });
});
