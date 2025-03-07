import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import apiLayer from "./middleware/api/apiLayer";
import authLayer from "./middleware/authLayer";
import portalLayer from "./middleware/portalLayer";
import publicLayer from "./middleware/publicLayer";

const { auth } = NextAuth(authConfig);

/**
 * Approach
 * 1. Blocked unless explicitly allowed (whitelist approach)
 * 2. Individual middleware layer in charge of returning either
 *    `NextResponse.next()` or `NextResponse.redirect()`. Request will flow
 *    through this middleware.
 * 3. Ends with redirect to "/" if not logged in
 */

export interface MiddlewareInterface {
  request: NextRequest;
  pathname: string;
  origin: string;
  loggedIn: boolean;
}

export default auth((req) => {
  const { pathname, origin } = req.nextUrl;
  const d: MiddlewareInterface = {
    request: req,
    pathname,
    origin,
    loggedIn: !!req.auth,
  };

  try {
    return (
      publicLayer(d) ||
      apiLayer(d) ||
      authLayer(d) ||
      portalLayer(d) ||
      Response.redirect(`${origin}/`)
    );
  } catch (e) {
    try {
      console.error(JSON.stringify(e));
    } catch (e) {
      console.error(e);
    }
    Response.redirect(`${origin}/404`);
  }
});
