import { z } from "zod";
import { reviewSchema } from "./reviewSchema";
import { categorySchema } from "./categorySchema";

export const productSchema = z.object({
  title: z
    .string()
    .min(3, "Title must contain at least 3 characters.")
    .max(40, "Title must be fewer than 40 characters."),
  description: z
    .string()
    .min(10, "Description must contain at least 10 characters.")
    .max(400, "Description must be fewer than 400 characters."),
  category: categorySchema,
  price: z.number(),
  discountPercentage: z.number(),
  tags: z.array(z.string()),
  images: z.array(z.string()),
  thumbnail: z.string(),
  stock: z.number(),
  reviews: z.array(reviewSchema),
});
