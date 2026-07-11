import { NextResponse } from "next/server";
import { verifyCredentials, authCookieOptions } from "../index";
export async function POST(req) {
    try {
        const body = await req.json();
        const { username, password } = body;
        if (!username || !password) {
            return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
        }
        if (!verifyCredentials(username, password)) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }
        const opts = authCookieOptions();
        const res = NextResponse.json({ success: true });
        res.cookies.set(opts);
        return res;
    }
    catch {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
}
//# sourceMappingURL=login.js.map