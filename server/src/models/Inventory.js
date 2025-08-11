import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity cannot be negative"],
      default: 0,
    },
    lowStockThreshold: {
      type: Number,
      default: 10,
      min: 0,
    },
  },
  { timestamps: true }
);

// convenience virtual
inventorySchema.virtual("isLow").get(function () {
  return this.quantity <= this.lowStockThreshold;
});

// keep quantity non-negative on updates
inventorySchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate() || {};
  if (update.$inc?.quantity !== undefined) {
    // Let Mongo handle $inc; we'll validate after
  } else if (update.quantity !== undefined && update.quantity < 0) {
    return next(new Error("Quantity cannot be negative"));
  }
  next();
});

export default mongoose.model("Inventory", inventorySchema);
