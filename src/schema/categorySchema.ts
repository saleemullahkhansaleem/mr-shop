import { z } from "zod";

export const categorySchema = z
  .object({
    name: z.string().min(3, { message: "Category name is required." }),
    description: z
      .string()
      .min(8, { message: "Category description is required." })
      .max(400, { message: "Category description is required." }),
    isSubCategory: z.boolean(),
    parentCategory: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isSubCategory === true) {
        return !!data.parentCategory;
      }
      return true;
    },
    {
      message: "Parent category is required for sub category.",
      path: ["parentCategory"],
    }
  );
