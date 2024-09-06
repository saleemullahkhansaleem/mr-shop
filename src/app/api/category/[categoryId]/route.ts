import { connectDb } from "@/helper/db";
import { Category } from "@/models/model.productSchema";
import { NextRequest, NextResponse } from "next/server";

connectDb();

// GET a specific category by ID
export async function GET(request: NextRequest, { params }: any) {
  const { categoryId } = params;
  try {
    const category = await Category.findById(categoryId);
    if (category) {
      return NextResponse.json({
        success: true,
        data: category,
      });
    } else {
      return NextResponse.json({
        success: true,
        data: "Category not found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error fetching category",
    });
  }
}

// UPDATE a specific category by ID
export async function PUT(request: NextRequest, { params }: any) {
  const { categoryId } = params;
  const data = await request.json();
  try {
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, data, { new: true });
    if (updatedCategory) {
      return NextResponse.json({
        success: true,
        message: "Category updated successfully!",
        data: updatedCategory,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Category not found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error updating category",
    });
  }
}

// DELETE a specific category by ID, including deleting its subcategories
export async function DELETE(request: NextRequest, { params }: any) {
  const { categoryId } = params;
  try {
    // First, delete the category itself
    const category = await Category.findByIdAndDelete(categoryId);
    if (category) {
      // Then, if it's a parent category, delete all its subcategories
      if (!category.isSubCategory) {
        await Category.deleteMany({ parentCategory: categoryId });
      }
      return NextResponse.json({
        message: "Category and subcategories deleted successfully",
        success: true,
      });
    } else {
      return NextResponse.json({
        message: "Category not found",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error deleting category",
      success: false,
    });
  }
}
