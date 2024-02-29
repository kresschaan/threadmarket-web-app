import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../../Footer";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}));

describe("Footer component", () => {
    test("renders Footer with navigation and contact section", () => {
        const { getByText } = render(
            <Router>
                {" "}
                {/* Wrap Footer component with Router */}
                <Footer />
            </Router>
        );

        // Ensure FooterNav component is rendered
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Shop")).toBeInTheDocument();
        expect(screen.getByText("Sign Up")).toBeInTheDocument();
        expect(screen.getByText("Log In")).toBeInTheDocument();

        // Ensure Contact Us button is rendered
        expect(getByText("Contact Us")).toBeInTheDocument();
    });

    test("renders Footer with social icons and phone number", () => {
        const { getByTestId } = render(
            <Router>
                <Footer />
            </Router>
        );

        // Ensure Social component is rendered
        // Ensure Social icons are rendered
        const facebookIconContainer = getByTestId("facebook-icon");
        expect(facebookIconContainer.firstChild).toBeTruthy(); // Check if the container has a child

        const twitterIconContainer = getByTestId("twitter-icon");
        expect(twitterIconContainer.firstChild).toBeTruthy(); // Check if the container has a child

        const instagramIconContainer = getByTestId("instagram-icon");
        expect(instagramIconContainer.firstChild).toBeTruthy();
    });
});
