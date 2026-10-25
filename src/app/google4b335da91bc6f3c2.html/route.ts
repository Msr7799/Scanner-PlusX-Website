export const dynamic = "force-static";

export function GET() {
  return new Response("google-site-verification: google4b335da91bc6f3c2.html\n", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
