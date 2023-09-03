import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  console.log("Requested user id -", content.params.userId);
  const usersDetails = users.filter((d) => d.id == content.params.userId);
  return NextResponse.json(
    usersDetails.length == 0
      ? { result: "No Data Found", success: false }
      : { result: usersDetails, success: true },
    { status: 200 }
  );
}
