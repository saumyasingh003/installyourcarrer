import { normaliseEnquiry, validateEnquiry } from "@/lib/enquiry";

/**
 * Admission enquiry endpoint.
 *
 * The project has no database yet, so this is the integration point: set
 * ENQUIRY_WEBHOOK_URL (e.g. a CRM, Google Apps Script, Zapier/Make webhook or your own
 * backend) and every valid enquiry is POSTed there as JSON. To store enquiries in a
 * database instead, replace `deliver()` below.
 *
 * Until a destination is configured the endpoint returns 503, so the form shows an
 * honest error (with a WhatsApp fallback) instead of a fake success.
 */

async function deliver(payload: object) {
  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return { ok: false as const, status: 503, error: "Online enquiries are not set up yet." };

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.ENQUIRY_WEBHOOK_SECRET) headers.Authorization = `Bearer ${process.env.ENQUIRY_WEBHOOK_SECRET}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return { ok: false as const, status: 502, error: "We couldn't save your enquiry." };
    return { ok: true as const };
  } catch {
    return { ok: false as const, status: 502, error: "We couldn't save your enquiry." };
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const enquiry = normaliseEnquiry(body);
  const errors = validateEnquiry(enquiry);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  const result = await deliver({
    ...enquiry,
    source: "course-page",
    submittedAt: new Date().toISOString(),
  });

  if (!result.ok) return Response.json({ error: result.error }, { status: result.status });
  return Response.json({ ok: true }, { status: 201 });
}
