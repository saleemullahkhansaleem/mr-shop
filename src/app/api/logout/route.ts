import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ success: true });

  response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

  return response;
}
