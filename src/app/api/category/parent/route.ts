import { connectDb } from "@/helper/db";
import { Category } from "@/models/model.productSchema";
import { NextResponse } from "next/server";

connectDb();

// Fetch all parent categories with only name fields
export async function GET() {
  try {
    const categories = await Category.find({ isSubCategory: false }).select(
      "name iconName"
    );

    return NextResponse.json(
      {
        message: "Categories fetched successfully!",
        success: true,
        data: categories,
      },
      {
        headers: {
          "Cache-Control": "no-store", // Prevent server-side caching
        },
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error fetching categories!",
      success: false,
    });
  }
}
