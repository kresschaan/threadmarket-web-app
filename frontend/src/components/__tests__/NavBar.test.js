import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../NavBar";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import { AuthContext } from "../../auth/AuthProvider";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const authContextValue = {
    login: jest.fn(), // Mock login function
};

describe("NavBar component", () => {
    it("renders without crashing", () => {
        render(
            <Router>
                <Provider store={store}>
                    <AuthContext.Provider value={authContextValue}>
                        <NavBar />
                    </AuthContext.Provider>
                </Provider>
            </Router>
        );
    });

    it("renders NavBarItems component", () => {
        const { getAllByTestId } = render(
            <Router>
                <Provider store={store}>
                    <AuthContext.Provider value={authContextValue}>
                        <NavBar />
                    </AuthContext.Provider>
                </Provider>
            </Router>
        );
        const navBarItems = getAllByTestId("navbar-items");

        expect(navBarItems.length).toBeGreaterThan(0);
    });

    it("applies the correct CSS classes", () => {
        const { container } = render(
            <Router>
                <Provider store={store}>
                    <AuthContext.Provider value={authContextValue}>
                        <NavBar />
                    </AuthContext.Provider>
                </Provider>
            </Router>
        );
        const navBar = container.firstChild;

        expect(navBar).toHaveClass(
            "fixed",
            "top-0",
            "z-30",
            "flex",
            "w-screen",
            "justify-between",
            "bg-primary-4/40",
            "backdrop-blur-lg",
            "lg:px-8"
        );
    });
});
