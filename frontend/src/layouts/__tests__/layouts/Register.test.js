import React from "react";
import "whatwg-fetch";
import { render } from "@testing-library/react";
import Register from "../../Register";
import "@testing-library/jest-dom";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../store/index"; // Update the path to your Redux store

// Mocking useLocation hook
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn(),
}));

describe("Register component", () => {
    test("renders registration form", () => {
        // Mock the location state
        const mockState = {
            price: "10",
            plan: "premium",
        };
        useLocation.mockReturnValue({ state: mockState });

        // Render the Register component within a Router and Provider
        const { getByLabelText, getByText } = render(
            <Router>
                <Provider store={store}>
                    <Register />
                </Provider>
            </Router>
        );

        // Ensure that registration form elements are present
        expect(getByLabelText("USERNAME")).toBeInTheDocument();
        expect(getByLabelText("EMAIL")).toBeInTheDocument();
        expect(getByLabelText("PASSWORD")).toBeInTheDocument();
        expect(getByText("Get Started")).toBeInTheDocument();
    });
});
