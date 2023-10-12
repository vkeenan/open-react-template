import { userOnboard } from "@/services/user/onboard";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, phone } = await req.json();
  const user = await userOnboard(email, phone, password);
  if (user === null) {
    return NextResponse.json({ error: "User creation error" }, { status: 400 });
  }
  return NextResponse.json(user);
}
