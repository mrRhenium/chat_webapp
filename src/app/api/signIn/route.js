import dbConnect from "@/Database/dbCoonect";
import User from "@/Models/users_model";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // console.log("Database Connecting");
  dbConnect();
  console.log("Database Connected");

  const body = await req.json();

  const exist_user = await User.findOne({
    $or: [{ username: body.username }, { email: body.email }],
  });

  if (exist_user) {
    //
    if (exist_user.username === body.username) {
      return NextResponse.json({ msg: "This username already Exist!" });
    } else if (exist_user.email === body.email) {
      return NextResponse.json({ msg: "This Email-Id already Exist!" });
    }

    //
  } else {
    //
    const user = await User.create(body);
    return NextResponse.json(user);
    //
  }
}
