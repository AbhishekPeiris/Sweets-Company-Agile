import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import ordersService from "../../services/orders.service.js";

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [orderForm, setOrderForm] = useState({
        contactName: "",
        contactPhone: "",
        address: "",
        notes: ""
    });
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        if (!user) {
            navigate("/login");
            return;
        }

        setIsPlacingOrder(true);

        try {
            const orderData = {
                customerId: user._id,
                items: cartItems.map(item => ({
                    productId: item._id,
                    name: item.name,
                    qty: item.quantity,
                    priceAtOrder: item.price
                })),
                contactName: orderForm.contactName,
                contactPhone: orderForm.contactPhone,
                address: orderForm.address,
                notes: orderForm.notes
            };

            await ordersService.create(orderData);

            clearCart();
            alert("🎉 Order placed successfully! We'll contact you soon! ✨");
            navigate("/");

        } catch (error) {
            console.error("Order placement failed:", error);
            alert("❌ Failed to place order. Please try again.");
        } finally {
            setIsPlacingOrder(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen overflow-hidden bg-gradient-sweet">
                <div className="relative px-6 py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8 text-8xl animate-bounce-gentle">🛒</div>
                        <h1 className="mb-6 text-6xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
                            Your Cart is Empty
                        </h1>
                        <p className="mb-8 text-2xl font-modern text-dark-base/70">
                            Time to fill it with some magical sweets! ✨
                        </p>
                        <a
                            href="/catalog"
                            className="inline-block px-12 py-6 font-fancy font-black text-2xl text-white bg-gradient-to-r from-primary-accent to-secondary-accent rounded-[2rem] shadow-2xl hover:shadow-primary-accent/50 transform hover:scale-110 transition-all duration-500 animate-glow"
                        >
                            🛍️ Start Shopping ✨
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen overflow-hidden bg-gradient-magic">
            {/* Floating Decorations */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute w-24 h-24 rounded-full top-20 left-16 bg-rose/30 animate-float blur-xl"></div>
                <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-lavender/40 animate-bounce-gentle blur-2xl"></div>
            </div>

            {/* Header */}
            <div className="relative px-6 py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center px-8 py-4 mb-8 border rounded-full shadow-2xl bg-white/20 backdrop-blur-xl border-white/30 animate-glow">
                        <span className="text-xl font-elegant text-dark-base">🛒 Sweet Cart 🛒</span>
                    </div>
                    <h1 className="mb-8 font-black text-transparent font-fancy text-8xl bg-clip-text bg-gradient-to-r from-secondary-accent via-primary-accent to-rose">
                        Your Sweet
                        <span className="block text-6xl font-elegant text-tertiary-accent animate-bounce-gentle">
                            Selections ✨
                        </span>
                    </h1>
                </div>
            </div>

            {/* Cart Content */}
            <div className="relative px-6 py-20 bg-white/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-3">

                        {/* Cart Items */}
                        <div className="space-y-6 lg:col-span-2">
                            {cartItems.map((item) => (
                                <div key={item._id} className="p-6 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center justify-center w-20 h-20 text-4xl rounded-full bg-gradient-to-br from-tertiary-accent/30 to-light-base/30 animate-bounce-gentle">
                                            🍬
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="mb-2 text-2xl font-bold font-fancy text-dark-base">
                                                {item.name}
                                            </h3>
                                            <div className="text-lg text-transparent font-modern bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                                                LKR {item.price} each
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                className="flex items-center justify-center w-10 h-10 text-xl font-bold transition-all duration-300 rounded-full bg-gradient-to-r from-secondary-accent/20 to-lavender/20 text-dark-base hover:from-secondary-accent/40 hover:to-lavender/40"
                                            >
                                                −
                                            </button>
                                            <span className="px-4 py-2 text-xl font-bold border-2 font-modern text-dark-base bg-white/70 rounded-xl border-primary-accent/30">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                className="flex items-center justify-center w-10 h-10 text-xl font-bold transition-all duration-300 rounded-full bg-gradient-to-r from-primary-accent/20 to-rose/20 text-dark-base hover:from-primary-accent/40 hover:to-rose/40"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item._id)}
                                                className="px-4 py-2 ml-4 font-semibold text-red-700 transition-all duration-300 bg-red-500/20 rounded-xl hover:bg-red-500/40 font-modern"
                                            >
                                                🗑️ Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-right">
                                        <span className="text-xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
                                            Subtotal: LKR {item.price * item.quantity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary & Form */}
                        <div className="space-y-8">
                            {/* Order Summary */}
                            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl">
                                <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                                    🧾 Order Summary
                                </h3>

                                <div className="mb-6 space-y-4">
                                    <div className="flex items-center justify-between font-modern">
                                        <span className="text-dark-base">Items ({cartItems.reduce((total, item) => total + item.quantity, 0)}):</span>
                                        <span className="font-bold text-dark-base">LKR {getTotalPrice()}</span>
                                    </div>
                                    <div className="flex items-center justify-between font-modern">
                                        <span className="text-dark-base">Delivery:</span>
                                        <span className="font-semibold text-green-600">FREE ✨</span>
                                    </div>
                                    <div className="pt-4 border-t-2 border-primary-accent/20">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold font-fancy text-dark-base">Total:</span>
                                            <span className="text-2xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                                                LKR {getTotalPrice()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Form */}
                            <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-xl">
                                <h3 className="mb-6 text-3xl font-bold text-center font-fancy text-dark-base">
                                    📝 Delivery Details
                                </h3>

                                <form onSubmit={handlePlaceOrder} className="space-y-4">
                                    <div>
                                        <label className="block mb-2 font-semibold font-stylish text-dark-base">
                                            Contact Name ✨
                                        </label>
                                        <input
                                            type="text"
                                            value={orderForm.contactName}
                                            onChange={(e) => setOrderForm({ ...orderForm, contactName: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 transition-all duration-300 border-2 rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                                            placeholder="Your name..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-semibold font-stylish text-dark-base">
                                            Phone Number 📞
                                        </label>
                                        <input
                                            type="tel"
                                            value={orderForm.contactPhone}
                                            onChange={(e) => setOrderForm({ ...orderForm, contactPhone: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 transition-all duration-300 border-2 rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                                            placeholder="070-0000000"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-semibold font-stylish text-dark-base">
                                            Delivery Address 🏠
                                        </label>
                                        <textarea
                                            value={orderForm.address}
                                            onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                                            required
                                            rows="3"
                                            className="w-full px-4 py-3 transition-all duration-300 border-2 resize-none rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                                            placeholder="Your delivery address..."
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-semibold font-stylish text-dark-base">
                                            Special Notes 💭
                                        </label>
                                        <textarea
                                            value={orderForm.notes}
                                            onChange={(e) => setOrderForm({ ...orderForm, notes: e.target.value })}
                                            rows="2"
                                            className="w-full px-4 py-3 transition-all duration-300 border-2 resize-none rounded-2xl bg-white/70 border-primary-accent/30 focus:border-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent/20 font-modern"
                                            placeholder="Any special requests..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isPlacingOrder}
                                        className="w-full px-8 py-4 text-xl font-bold text-white transition-all duration-300 transform shadow-xl font-fancy bg-gradient-to-r from-primary-accent to-secondary-accent rounded-2xl hover:shadow-2xl hover:scale-105 animate-glow disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isPlacingOrder ? "Placing Order... 🌟" : "✨ Place Order ✨"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
