import { createClient } from "./server";
import { NextResponse, type NextRequest } from "next/server";
import { UserResponse } from "@supabase/supabase-js";

export async function updateSession(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = await createClient();

  // Check if we have a session
  const {
    data: { user },
  }: UserResponse = await supabase.auth.getUser();
  
  const authed = !!user;
  res.cookies.set("sb-logged-in", authed ? "1" : "0", {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
  });
  
  const { pathname } = request.nextUrl;
  if (authed && (pathname === "/login" || pathname === "/signup")) {
    const redirect = NextResponse.redirect(new URL("/", request.url));
    redirect.cookies.set("sb-logged-in", "1", {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    });
    return redirect;
  }
  return res;
}
