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

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = +content.params.userId; // converting to number
  console.log(payload);

  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Request data is not valid", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}
