import { render, screen } from "@testing-library/react";
import Protected from "./Protected.jsx";
import { MemoryRouter } from "react-router-dom";

// mock useAuth: no token
vi.mock("../../context/AuthContext.jsx", () => ({
    useAuth: () => ({ token: null }),
}));

test("Protected redirects to /login when not authenticated", () => {
    render(
        <MemoryRouter>
            <Protected>
                <div>Secret</div>
            </Protected>
        </MemoryRouter>
    );

    // Check that the authentication required message is shown
    expect(screen.getByText("Authentication Required")).toBeInTheDocument();
    // Use a more flexible matcher for the text with emoji
    expect(screen.getByText(/Redirecting to login page/i)).toBeInTheDocument();
});
