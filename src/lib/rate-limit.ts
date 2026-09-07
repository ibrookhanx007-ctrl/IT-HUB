interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory rate limiting keyed by IP. This resets whenever the server
// process restarts — every redeploy, and on serverless platforms
// potentially between invocations too — so it's a best-effort deterrent,
// not a durable limit. If abuse becomes a real problem, replace this
// with Upstash Redis (or similar shared store) so counts survive across
// instances and redeploys.
const submissions = new Map<string, RateLimitEntry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;
const MAX_TRACKED_IPS = 10_000;

function pruneExpired(now: number) {
  if (submissions.size < MAX_TRACKED_IPS) return;
  for (const [ip, entry] of submissions) {
    if (now > entry.resetAt) {
      submissions.delete(ip);
    }
  }
}

export function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfterSeconds?: number;
} {
  const now = Date.now();
  pruneExpired(now);

  const entry = submissions.get(ip);

  if (!entry || now > entry.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count += 1;
  return { allowed: true };
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}
