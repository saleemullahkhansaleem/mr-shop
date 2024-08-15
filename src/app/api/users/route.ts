import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectDb();

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

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, role } = await request.json();
    const user = await new User({ name, email, password, role }).save();
    return NextResponse.json({
      message: "User created successfully!",
      succcess: true,
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
