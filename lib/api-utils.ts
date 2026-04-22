import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { signToken, verifyToken } from "./jwt";

export async function createAuthCookie(res: NextResponse, user: any) {
  const token = await signToken({
    id: user._id,
    email: user.email,
    name: user.name,
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return res;
}

export async function getSession() {
  const cookieStore = await cookies();   // ✅ FIXED
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    return await verifyToken(token);
  } catch {
    return null;
  }
}