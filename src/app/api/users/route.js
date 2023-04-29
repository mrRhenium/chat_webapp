import dbConnect from "@/Database/dbCoonect";
import User from "@/Models/users_model";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const data = await User.find({});
  return NextResponse.json(data);
}

export async function POST(req, res) {
  // console.log("Database Connecting");
  dbConnect();
  // console.log("Database Connected");

  const body = await req.json();

  const u = await User.findOne({ name: body.name });
  if (u) {
    return NextResponse.json("Already Exits");
  }

  const user = await User.create(body);

  return NextResponse.json(user);
}
