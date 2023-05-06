import dbConnect from "@/Database/dbCoonect";
import User from "@/Models/users_model";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  // console.log("Database Connecting");
  dbConnect();
  console.log("Database Connected");

  // const token = req.cookies.get("token")?.value;
  const body = await req.json();

  const user = await User.findOne({ username: body.username });
  if (!user || user.password != body.password) {
    return NextResponse.json({
      status: false,
      msg: "Bad Credentials!",
    });
  }

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.JWTSECRET,
    {
      expiresIn: "1d",
    }
  );

  return NextResponse.json({
    status: true,
    msg: "Successfully LogIn",
    token: token,
  });
}
