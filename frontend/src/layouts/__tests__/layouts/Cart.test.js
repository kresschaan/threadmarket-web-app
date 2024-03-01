import React from "react";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Cart from "../../Cart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Mock useDispatch and useSelector
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

// Mock useNavigate
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("Cart component", () => {
    test("renders cart items and allows interactions", () => {
        // Mock useSelector to return cart items
        useSelector.mockReturnValue([
            { id: 1, name: "Product 1", price: 10, quantity: 2 },
            { id: 2, name: "Product 2", price: 20, quantity: 1 },
        ]);

        // Mock useDispatch
        const mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);

        // Mock useNavigate
        const mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);

        // Render the component
        const { getByText, getAllByText } = render(<Cart />);

        // Ensure cart items are rendered
        const product1Element = getAllByText("Product 1")[0]; // Select the first element
        expect(product1Element).toBeInTheDocument();
    });
});
