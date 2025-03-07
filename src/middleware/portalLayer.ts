import { MiddlewareInterface } from "@/middleware";
import { NextResponse } from "next/server";

export default function ({
  pathname,
  loggedIn,
  origin,
}: MiddlewareInterface): NextResponse | void {
  if (!pathname.startsWith("/portal")) return;

  console.log(`[middleware/portalLayer] pathname: ${pathname}`);

  if (!loggedIn) return NextResponse.redirect(new URL("/", origin));
  return NextResponse.next();
}
