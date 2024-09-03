import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { success: false, message: "No token provided" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (decoded && typeof decoded === "object" && decoded.role) {
      const isAdmin = decoded.role === "admin";

      return NextResponse.json({
        success: true,
        user: decoded,
        isAdmin: isAdmin,
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid token structure" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid token" },
      { status: 401 }
    );
  }
}
