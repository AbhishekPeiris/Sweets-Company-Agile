import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: { type: String }, // snapshot (optional)
    priceAtOrder: { type: Number, required: true, min: 0 },
    qty: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    items: {
      type: [orderItemSchema],
      validate: [(v) => v.length > 0, "Order must have at least one item"],
      required: true,
    },
    total: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "processing", "dispatched", "delivered", "cancelled"],
      default: "pending",
      index: true,
    },
    notes: { type: String },
    // optional simple shipping/contact fields for MVP
    contactName: { type: String },
    contactPhone: { type: String },
    address: { type: String },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid",
    },
  },
  { timestamps: true }
);

// Recompute/verify total before save if not provided by service layer
orderSchema.pre("validate", function (next) {
  if (!this.items?.length) return next();
  const calc = this.items.reduce(
    (sum, it) => sum + it.priceAtOrder * it.qty,
    0
  );
  if (this.total === undefined || this.total === null) this.total = calc;
  next();
});

export default mongoose.model("Order", orderSchema);
