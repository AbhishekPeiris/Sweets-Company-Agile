import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    quantity: { type: Number, default: 0, min: 0, required: true },
    lowStockThreshold: { type: Number, default: 10, min: 0 },
  },
  { timestamps: true }
);

inventorySchema.virtual("isLow").get(function () {
  return this.quantity <= this.lowStockThreshold;
});

export default mongoose.model("Inventory", inventorySchema);
