import { connectDb } from "@/helper/db";
import { User } from "@/models/model.userSchema";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb();

export async function POST(request: NextRequest) {
  const bcrypt = require("bcryptjs");

  try {
    const { email, password } = await request.json();

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT
    const secretKey = process.env.JWT_SECRET;

    if (!secretKey) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      secretKey, // Secret key from your .env file
      { expiresIn: "1h" } // Token expiration time
    );

    // Set the JWT as an HttpOnly cookie
    const response = NextResponse.json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        role: user.role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Send cookie over HTTPS only in production
      maxAge: 60 * 60 * 24 * 7, // 1 hour in seconds
      path: "/", // Cookie will be accessible across the entire app
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({
      success: false,
      message: "Error logging in user",
    });
  }
}
