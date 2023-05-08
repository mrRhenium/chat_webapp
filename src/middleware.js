import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  if (req.url.includes("/chats")) {
    const token = req.cookies.get("token")?.value;

    if (token != null) return NextResponse.next();
    else return NextResponse.redirect("http://localhost:3000/");
  }

  return NextResponse.next();
}
