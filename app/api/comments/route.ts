import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Comment from "@/models/Comment";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    await Comment.create({ ...body, approved: false });
    return NextResponse.json({ message: "Comment submitted for review" });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  await connectDB();
  const comments = await Comment.find({ page, approved: true }).sort({ createdAt: -1 });
  return NextResponse.json({ comments });
}
