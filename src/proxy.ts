import { NextRequest, NextResponse } from "next/server";

const proxy = async (req: NextRequest) => {
  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;

  // ✅ If access token exists → allow request
  if (accessToken) {
    return NextResponse.next();
  }

  // ❌ No access + no refresh → unauthenticated
  if (!refreshToken) {
    return NextResponse.next();
  }

  // 🔁 Try refreshing access token
  try {
    const refreshResponse = await fetch(`${process.env.API_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        Cookie: `refresh_token=${refreshToken}`,
      },
      credentials: "include",
    });

    // If refresh failed → continue without auth
    if (!refreshResponse.ok) {
      return NextResponse.next();
    }

    // ✅ Backend sets new access_token cookie
    const response = NextResponse.next();

    // Forward Set-Cookie header to browser
    const setCookie = refreshResponse.headers.get("set-cookie");
    if (setCookie) {
      response.headers.set("set-cookie", setCookie);
    }

    return response;
  } catch (err) {
    console.error("Middleware refresh error:", err);
    return NextResponse.next();
  }
};

export default proxy;
