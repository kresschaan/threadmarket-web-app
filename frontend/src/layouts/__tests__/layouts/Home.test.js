import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../Home";

describe("Home component", () => {
    it("renders correctly", () => {
        const { getByText } = render(<Home />);
        expect(getByText("Thread")).toBeInTheDocument();
        expect(getByText("the")).toBeInTheDocument();
        expect(getByText("Market")).toBeInTheDocument();
    });
});
