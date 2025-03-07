import { MiddlewareInterface } from "@/middleware";
import { NextResponse } from "next/server";

/**
 * Handles all API routes
 */
export default function ({
  pathname,
  loggedIn,
}: MiddlewareInterface): NextResponse | Response | void {
  if (!pathname.startsWith("/api")) return;

  console.log(`[middleware/apiLayer] pathname: ${pathname}`);

  if (loggedIn) return NextResponse.next();
  return NextResponse.error();
}
