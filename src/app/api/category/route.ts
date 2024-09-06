import { connectDb } from "@/helper/db";
import { Category } from "@/models/model.productSchema";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export async function POST(request: NextRequest) {
  try {
    const categoryData = await request.json();
    const category = await new Category(categoryData).save();
    return NextResponse.json({
      message: "Category created successfully!",
      success: true,
      data: category,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error creating category!",
      success: false,
    });
  }
}

export async function GET() {
  try {
    // Fetch all categories and populate their subCategories
    const categories = await Category.find({ isSubCategory: false })
      .populate("subCategories")
      .exec();

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
