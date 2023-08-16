import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");
  if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
