import { MiddlewareInterface } from "@/middleware";
import { NextResponse } from "next/server";

export default function ({
  pathname,
  loggedIn,
  origin,
}: MiddlewareInterface): NextResponse | void {
  if (pathname !== "/") return;

  console.log(`[middleware/authLayer] pathname: ${pathname}`);

  if (loggedIn)
    return NextResponse.redirect(new URL("/portal/onboard", origin));
  return NextResponse.next();
}
