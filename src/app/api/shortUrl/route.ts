import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const backendRes = await fetch(`${process.env.API_URL}/api/urlShort`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: req.headers.get("cookie") || "",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  const data = await backendRes.json();

  const response = NextResponse.json(data, {
    status: backendRes.status,
  });

  // ⭐ Forward Set-Cookie headers
  const setCookie = backendRes.headers.get("set-cookie");
  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }

  return response;
}
