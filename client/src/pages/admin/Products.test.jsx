import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import Products from "./Products.jsx";

vi.mock("../../services/products.service.js", () => {
    const listMock = vi.fn(() =>
        Promise.resolve({
            data: [{ _id: "a", name: "Old", category: "Toffee", price: 10 }],
        })
    );
    const createMock = vi.fn(() =>
        Promise.resolve({
            data: { _id: "b", name: "New", category: "Toffee", price: 100 },
        })
    );
    const removeMock = vi.fn(() => Promise.resolve());

    return {
        default: {
            list: listMock,
            create: createMock,
            remove: removeMock
        },
    };
});

test("creates product via form", async () => {
    await act(async () => {
        render(<Products />);
    });

    // Wait for initial load
    await waitFor(() => screen.getByText("Old"));

    // Find and fill form inputs
    const nameInput = screen.getByLabelText(/🏷️ Product Name/i);
    const categoryInput = screen.getByLabelText(/🎭 Category/i);
    const priceInput = screen.getByLabelText(/💰 Price \(LKR\)/i);

    await act(async () => {
        fireEvent.change(nameInput, { target: { value: "Milk Toffee" } });
        fireEvent.change(categoryInput, { target: { value: "Toffee" } });
        fireEvent.change(priceInput, { target: { value: "350" } });
    });

    // Submit form
    await act(async () => {
        fireEvent.click(screen.getByText(/✨ Add Product ✨/i));
    });

    // Since we moved the mocks inside the factory, we need to import the module to access the mock functions
    const productsService = await import("../../services/products.service.js");

    // Use objectContaining to be more flexible about extra fields
    expect(productsService.default.create).toHaveBeenCalledWith(
        expect.objectContaining({
            name: "Milk Toffee",
            category: "Toffee",
            price: 350,
        })
    );
});
