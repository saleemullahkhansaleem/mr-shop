import { connectDb } from "@/helper/db";
import { Category } from "@/models/model.productSchema";
import { NextRequest, NextResponse } from "next/server";

connectDb();

// Fetch all parent categories with only name and _id fields
export async function GET() {
  try {
    const categories = await Category.find({ isSubCategory: false }).select(
      "name"
    );

    return NextResponse.json({
      message: "Categories fetched successfully!",
      success: true,
      data: categories,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error fetching categories!",
      success: false,
    });
  }
}
