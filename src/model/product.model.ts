import mongoose, { Document, Schema, Types } from "mongoose";

export interface ProductInput {
  name: string;
  description: string;
  price: number;
  soldout: "SOLDOUT" | "ONSALE";
  stores: StoreInput[];
  // stores: Schema.Types.DocumentArray;
  // stores: Types.DocumentArray<StoreInput>;
  inventory: number;
}

export interface ProductDocument
  extends Omit<ProductInput, "stores">,
    Document {
  stores: Types.DocumentArray<StoreInput>;
  createdAt: Date;
  updatedAt: Date;
}
export interface StoreInput {
  store: string;
}
const storeSchema = new Schema<StoreInput>({
  store: { type: String, required: false },
});
const productSchema = new mongoose.Schema<ProductDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    soldout: {
      type: String,
      enum: ["SOLDOUT", "ONSALE"],
      required: false,
      default: "ONSALE",
    },
    stores: [storeSchema],
  },
  {
    timestamps: true,
  }
);
const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
