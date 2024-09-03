import mongoose, { Schema } from "mongoose";

// Product Schema is below

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, default: 0 },
  tags: [{ type: String }],
  images: [{ type: String }],
  thumbnail: { type: String, required: true },
  stock: { type: Number, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// Review Schema is below

const reviewSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
  comment: { type: String },
  date: { type: Date, default: Date.now, required: true },
  reviewerName: { type: String, required: true },
  reviewerEmail: { type: String, required: true },
});

export const Review =
  mongoose.models.Review || mongoose.model("Review", reviewSchema);

// Category Schema is below

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  parentCategory: { type: Schema.Types.ObjectId, ref: "Category" }, // For subcategories
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
