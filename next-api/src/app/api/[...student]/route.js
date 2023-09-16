import { NextResponse } from "next/server";
import { users } from "../../../utils/db";

export async function GET(request, content) {
  const req = content.params.student;
  console.log(req.join("/"));
  return NextResponse.json({ result: users, success: true }, { status: 200 });
}
