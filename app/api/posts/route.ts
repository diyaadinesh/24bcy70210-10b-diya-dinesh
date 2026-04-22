import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Post from "@/models/Post";
import { getSession } from "@/lib/api-utils";

export async function POST(req: Request) {
  const session = await getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const { title, description } = await req.json();

  // ✅ Fix: properly type session
  const userId = (session as { id: string }).id;

  const post = await Post.create({
    userId,
    title,
    description,
  });

  return NextResponse.json(post);
}