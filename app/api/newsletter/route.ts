import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    await connectDB();
    const existing = await Subscriber.findOne({ email });
    if (existing) return NextResponse.json({ message: "Already subscribed" }, { status: 200 });

    await Subscriber.create({ email });
    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  const subscribers = await Subscriber.find().sort({ createdAt: -1 });
  return NextResponse.json({ subscribers });
}
