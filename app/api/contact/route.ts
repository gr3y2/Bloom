import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();
    await Contact.create(body);
    return NextResponse.json({ message: "Message sent" });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
