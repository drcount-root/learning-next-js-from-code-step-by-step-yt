import { users } from "@/utils/db";
import { NextResponse } from "next/server";

// GET
export function GET() {
  const data = users;
  return NextResponse.json(data, { status: 200 });
}

// POST
export async function POST(request) {
  let payload = await request.json();
  console.log(payload.name);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Require field not found", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { result: "New user created", success: true },
    { status: 201 }
  );
}
