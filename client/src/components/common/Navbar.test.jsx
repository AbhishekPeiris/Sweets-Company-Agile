import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar.jsx";

// mock useAuth to simulate logged out
vi.mock("../../context/AuthContext.jsx", () => ({
    useAuth: () => ({ user: null, logout: vi.fn() }),
}));

// mock useCart
vi.mock("../../context/CartContext.jsx", () => ({
    useCart: () => ({ getTotalItems: () => 0 }),
}));

test("shows Login/Register when not authenticated", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    expect(screen.getByText(/🔑 Login/i)).toBeInTheDocument();
    expect(screen.getByText(/✨ Join Us/i)).toBeInTheDocument();
});
