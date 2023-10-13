import { userOnboard } from "@/services/user/onboard";
import { UserClass } from "@/types/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, phone } = await req.json();
  const postUser = new UserClass({
    Email: email,
    Password: password,
    Phone: phone,
  });
  const newUser = await userOnboard(postUser);
  if (newUser === null) {
    return NextResponse.json({ error: "User creation error" }, { status: 400 });
  }
  return NextResponse.json(newUser);
}
