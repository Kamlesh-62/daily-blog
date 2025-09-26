import { createClient } from "./server";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = await createClient();

  //   don't add any code here
  const {  data: { user } } = await supabase.auth.getUser();
  const { pathname } = request.nextUrl;

  // --- NEW LOGIC ADDED HERE ---
  // If the user is logged in and tries to access the login, signup, or root page
  if (
    user &&
    (pathname === "/login" || pathname === "/signup")
  ) {
    // Redirect them to the dashboard.
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (
  //   !user &&
  //   !request.nextUrl.pathname.startsWith("/login") &&
  //   !request.nextUrl.pathname.startsWith("/auth") &&
  //   !request.nextUrl.pathname.startsWith("/error")
  // ) {
  //   // no user, potentially respond by redirecting the user to the login page
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }

  return supabaseResponse;
}
