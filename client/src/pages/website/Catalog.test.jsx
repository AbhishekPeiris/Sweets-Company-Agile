import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "./Catalog.jsx";

// mock api client used inside Catalog
vi.mock("../../services/apiClient", () => ({
    default: {
        get: vi.fn(() =>
            Promise.resolve({
                data: {
                    data: [
                        { _id: "1", name: "Milk Toffee", category: "Toffee", price: 350 },
                        { _id: "2", name: "Kokis", category: "Traditional", price: 120 },
                    ],
                },
            })
        ),
    },
}));

// mock useCart
vi.mock("../../context/CartContext.jsx", () => ({
    useCart: () => ({
        addToCart: vi.fn(),
    }),
}));

test("catalog shows products", async () => {
    render(<Catalog />);
    await waitFor(() => {
        expect(screen.getByText("Milk Toffee")).toBeInTheDocument();
        expect(screen.getByText("Kokis")).toBeInTheDocument();
    });
});
