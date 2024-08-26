import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export async function GET(request: NextRequest, { params }: any) {
  const { userId } = params;
  try {
    const user = await User.findById(userId);
    if (user) {
      return NextResponse.json({
        success: true,
        data: user,
      });
    } else {
      return NextResponse.json({
        success: true,
        data: "user not found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error fetching user",
    });
  }
}

export async function PUT(request: NextRequest, { params }: any) {
  const { userId } = params;
  const data = await request.json();
  try {
    const user = await User.findByIdAndUpdate(userId, data);
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error updating user",
    });
  }
}

export async function DELETE(request: NextRequest, { params }: any) {
  const { userId } = params;
  try {
    await User.findByIdAndDelete(userId);
    return NextResponse.json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error deleting user",
      success: false,
    });
  }
}
