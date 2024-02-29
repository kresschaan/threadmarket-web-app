import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "../../Feature";

// Mocking useNavigate hook
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}));

describe("Feature component", () => {
    test('navigates to /shop when "Shop Now" button is clicked', () => {
        const { getByText } = render(
            <Router>
                <Feature />
            </Router>
        );

        fireEvent.click(getByText("Shop Now"));
        expect(mockedUseNavigate).toHaveBeenCalledWith("/shop", {
            replace: true,
        });
    });
});
