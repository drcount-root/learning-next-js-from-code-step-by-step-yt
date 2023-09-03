import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json({ name: "Subh", age: 25, address: "Earth" }, {status:200});
}
