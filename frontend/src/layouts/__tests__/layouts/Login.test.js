import React from "react";
import { render } from "@testing-library/react";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Login from "../../Login"; // Update the path to the Login component
import { AuthContext } from "../../../auth/AuthProvider";
import { Provider } from "react-redux";
import { store } from "../../../store/index"; // Update the path to your Redux store

const authContextValue = {
    login: jest.fn(), // Mock login function
};

describe("Login component", () => {
    test("renders login form", () => {
        // Render the Login component
        const { getByLabelText, getByAltText } = render(
            <Router>
                <Provider store={store}>
                    <AuthContext.Provider value={authContextValue}>
                        <Login />
                    </AuthContext.Provider>
                </Provider>
            </Router>
        );

        // Assert that the login form elements are present
        expect(getByAltText("Login - Thread the Market")).toBeInTheDocument();
        expect(getByLabelText("USERNAME")).toBeInTheDocument();
        expect(getByLabelText("PASSWORD")).toBeInTheDocument();
    });
});
