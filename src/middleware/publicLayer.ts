import { MiddlewareInterface } from "@/middleware";
import { NextResponse } from "next/server";

export default function ({
  pathname,
}: MiddlewareInterface): NextResponse | void {
  if (pathname.startsWith("/_next/static")) return NextResponse.next();
  if (pathname.startsWith("/_next/image")) return NextResponse.next();
  if (pathname == "/favicon.ico") return NextResponse.next();
  if (pathname == "/sitemap.xml") return NextResponse.next();
  if (pathname == "/robots.txt") return NextResponse.next();
}
