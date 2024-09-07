import { z } from "zod";

export const categorySchema = z
  .object({
    _id: z.number().optional(),
    name: z.string().min(1, { message: "Category name is required." }),
    iconName: z.string().min(1, { message: "Icon name is required." }),
    description: z
      .string()
      .min(8, {
        message: "Category description must be at least 8 characters long.",
      })
      .max(400, {
        message: "Category description must be less than 400 characters long.",
      }),
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
