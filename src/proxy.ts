import { NextResponse, type NextRequest } from "next/server";
import { refreshAccessToken } from "./lib/refreshAccessToken";

export async function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  // ✅ Access token exists → continue
  if (accessToken) {
    return NextResponse.next();
  }

  // ❌ No refresh token → unauthenticated
  if (!refreshToken) {
    return NextResponse.next();
  }

  try {
    const newAccessToken = await refreshAccessToken();

    if (!newAccessToken) {
      return NextResponse.next();
    }

    const response = NextResponse.next();

    response.cookies.set("access_token", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60, // ✅ 1 minute (seconds)
    });

    return response;
  } catch (error) {
    console.error("Middleware refresh failed:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next|static).*)"],
};
