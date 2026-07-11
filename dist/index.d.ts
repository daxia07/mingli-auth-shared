declare const COOKIE_NAME = "mingli_auth";
declare const COOKIE_DOMAIN: string | undefined;
export declare function verifyCredentials(user: string, pass: string): boolean;
export declare function validateAuthToken(token: string): boolean;
export declare function authCookieOptions(): {
    name: string;
    value: string;
    path: string;
    maxAge: number;
    httpOnly: boolean;
    sameSite: "lax" | "strict" | "none";
    secure: boolean;
    domain?: string;
};
export declare function isAuthenticated(): Promise<boolean>;
export { COOKIE_NAME, COOKIE_DOMAIN };
//# sourceMappingURL=index.d.ts.map