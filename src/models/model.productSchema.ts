import mongoose, { Schema } from "mongoose";

// Product Schema
const productSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: false },
    toObject: { virtuals: false },
  }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// Review Schema
const reviewSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    comment: { type: String },
    date: { type: Date, default: Date.now, required: true },
    reviewerName: { type: String, required: true },
    reviewerEmail: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: false },
    toObject: { virtuals: false },
  }
);

export const Review =
  mongoose.models.Review || mongoose.model("Review", reviewSchema);

// Category Schema
const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, unique: true },
    iconName: { type: String, default: "CircleSlash" },
    description: { type: String },
    isSubCategory: { type: Boolean, default: false },
    parentCategory: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: false },
    toObject: { virtuals: false },
  }
);

// Virtual field for subCategories
categorySchema.virtual("subCategories", {
  ref: "Category", // The model to use
  localField: "_id", // Find subcategories where `parentCategory` matches this category's _id
  foreignField: "parentCategory",
  justOne: false, // Will return an array of subcategories
});

// Ensure virtual fields are serialized
categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });

export const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
