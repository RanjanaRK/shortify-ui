import { NextRequest, NextResponse } from "next/server";

const proxy = async (req: NextRequest) => {
  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;

  if (accessToken) {
    return NextResponse.next();
  }

  if (refreshToken) {
    return NextResponse.next();
  }

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
};

export default proxy;

export const config = {
  matcher: ["/analytics/:slug"],
};
