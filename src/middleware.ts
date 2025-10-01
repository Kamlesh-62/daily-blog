import { type NextRequest } from "next/server";
import { updateSession } from "@/libs/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.css$|.*\\.js$|.well-known).*)",
  ],
};
