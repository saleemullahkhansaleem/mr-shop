import { connectDb } from "@/helper/db";
import { User } from "@/models/model.userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();

// API to get all users
export async function GET(request: NextRequest) {
  try {
    const users = await User.find();
    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Faild to get users",
      success: false,
    });
  }
}

// API to create a user
export async function POST(request: NextRequest) {
  try {
    const { password, ...userData } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new User({
      password: hashedPassword,
      ...userData,
    }).save();
    return NextResponse.json({
      message: "User created successfully!",
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error creating user!",
      success: false,
    });
  }
}
