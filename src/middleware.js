import { NextResponse } from "next/server";

export function middleware(request) {
  // console.log("middleware executed");
  // if (request.nextUrl.pathname != "/login") {
  // the above logic is about, if the requested endpoint is not equal to /login, then redirect to /login
  return NextResponse.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  matcher: ["/about/:path*", "/studentlist/:page*", "/study/:path*"],
};

// Now the about config sets -
// if the requested endpoint is equal to - /about, /about/anythihng, /studentlist, /studentlist/anything, /study, /study/anything then, those routes should immediately redirected to /login route.

// ###############################################

// trying to access any nested route of /about should redirect to /login

// import { NextResponse } from "next/server";

// export function middleware(request) {
//     const { pathname } = request.nextUrl;

//     // Check if the current page is any nested page under /about
//     if (pathname.startsWith("/about/")) {
//         return NextResponse.redirect(new URL("/login", request.url));
//     }
// }

// export const config = {
//     matcher: '/about/:path*',
// };
