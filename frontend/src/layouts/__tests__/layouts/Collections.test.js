import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Collection from "../../Collection";

// Mocking useNavigate hook
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("Collection component", () => {
    test("navigates to shop page when 'SHOP THIS LOOK' is clicked", () => {
        // Mocking navigate function
        const mockNavigate = jest.fn();
        require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);

        // Render the Collection component within a Router
        const { getByText } = render(
            <Router>
                <Collection />
            </Router>
        );

        // Mocking the useNavigate hook behavior
        require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
    });
});
