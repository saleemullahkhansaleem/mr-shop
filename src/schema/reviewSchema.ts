import { z } from "zod";

export const reviewSchema = z.object({
  productId: z.string().min(1, { message: "Product ID is required." }),
  rating: z
    .number()
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),
  comment: z.string().optional(),
  date: z.date().default(() => new Date()),
  reviewerName: z.string().min(1, { message: "Reviewer name is required." }),
  reviewerEmail: z.string().email({ message: "Reviewer email must be valid." }),
});
