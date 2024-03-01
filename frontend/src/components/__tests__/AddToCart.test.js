import React from "react";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import AddToCart from "../AddToCart";
import { AuthContext } from "../../auth/AuthProvider";
import { Provider } from "react-redux";
import { store } from "../../store/index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

describe("AddToCart component", () => {
    it("dispatches addCart action when clicked and displays loading state", async () => {
        const mockDispatch = jest.fn();
        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useDispatch: () => mockDispatch,
        }));

        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <AddToCart
                    id={1}
                    name="Test Product"
                    image="test.jpg"
                    quantity={1}
                    price={10}
                />
            </Provider>
        );

        const addToCartButton = getByText("Add to Cart");
        fireEvent.click(addToCartButton);

        const loadingText = getByText("Adding..");
        expect(loadingText).toBeInTheDocument();

        // Wait for loading state to finish
        await waitFor(() => {
            const checkCircleIcon = getByTestId("check-circle-icon");
            expect(checkCircleIcon).toBeInTheDocument();
        });
    });
});
