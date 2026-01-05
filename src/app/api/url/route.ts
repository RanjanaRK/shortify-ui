export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch("http://localhost:8000/api/urlShort", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: req.headers.get("cookie") ?? "",
    },
    body: JSON.stringify(body),
  });

  return new Response(await res.text(), { status: res.status });
}
