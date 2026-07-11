import { createHash } from "crypto";
import { cookies } from "next/headers";
const AUTH_USER = "ming";
const AUTH_PASS = "ping";
const COOKIE_NAME = "mingli_auth";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;
const AUTH_SECRET = process.env.AUTH_SECRET || "tutor-local-dev";
const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || undefined;
function createToken() {
    return createHash("sha256")
        .update(`${AUTH_USER}:${AUTH_PASS}:${AUTH_SECRET}`)
        .digest("hex");
}
const VALID_TOKEN = createToken();
export function verifyCredentials(user, pass) {
    return user === AUTH_USER && pass === AUTH_PASS;
}
export function validateAuthToken(token) {
    return token === VALID_TOKEN;
}
export function authCookieOptions() {
    return {
        name: COOKIE_NAME,
        value: VALID_TOKEN,
        path: "/",
        maxAge: COOKIE_MAX_AGE,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.VERCEL === "1",
        domain: COOKIE_DOMAIN,
    };
}
export async function isAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token)
        return false;
    return validateAuthToken(token);
}
export { COOKIE_NAME, COOKIE_DOMAIN };
//# sourceMappingURL=index.js.map