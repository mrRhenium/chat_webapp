import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default async function middleware(req, res) {
  const token = req.cookies.get("token")?.value;

  if (req.url.includes("/chats")) {
    try {
      //
      if (token != null) return NextResponse.next();
      else return NextResponse.redirect("http://localhost:3000/");

      //
    } catch (err) {
      //
      console.log("Nitesh_Yadav" + err);
      return NextResponse.redirect("http://localhost:3000/");
      //
    }
  }

  return NextResponse.next();
}
