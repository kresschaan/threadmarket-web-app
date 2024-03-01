import React from "react";
import { render } from "@testing-library/react";
import "whatwg-fetch";
import "@testing-library/jest-dom";
import Loader from "../Loader";

describe("Loader component", () => {
    it("renders the loader with correct classes", () => {
        const { container } = render(<Loader />);

        // Check if the loader container is rendered
        const loaderContainer = container.firstChild;
        expect(loaderContainer).toBeInTheDocument();

        // Check if the loader has the correct CSS classes
        const loaderItems = loaderContainer.querySelectorAll(".animate-bounce");
        expect(loaderItems.length).toBe(6); // Ensure there are 6 loader items
        loaderItems.forEach((item, index) => {
            // Check each loader item for the correct classes and animation delays
            expect(item).toHaveClass(
                "m-2",
                "h-10",
                "w-10",
                "rounded-full",
                "bg-gray-700"
            );
        });
    });
});
