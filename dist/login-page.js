"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Brain } from "lucide-react";
export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (res.ok) {
                window.location.href = "/";
            }
            else {
                setError(data.error || "Login failed");
            }
        }
        catch {
            setError("Network error");
        }
        finally {
            setLoading(false);
        }
    }
    return (_jsx("div", { className: "min-h-[80vh] flex items-center justify-center", children: _jsx("div", { className: "w-full max-w-sm", children: _jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8", children: [_jsxs("div", { className: "flex flex-col items-center mb-6", children: [_jsx(Brain, { className: "w-12 h-12 text-[#58cc02] mb-3" }), _jsx("h1", { className: "text-2xl font-bold text-[#4b4b4b]", children: "Mingli" }), _jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Sign in to continue" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "username", className: "block text-sm font-semibold text-[#4b4b4b] mb-1.5", children: "Username" }), _jsx("input", { id: "username", type: "text", value: username, onChange: (e) => setUsername(e.target.value), className: "w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-[#4b4b4b] focus:border-[#58cc02] focus:outline-none transition-colors", autoComplete: "username", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-semibold text-[#4b4b4b] mb-1.5", children: "Password" }), _jsx("input", { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-[#4b4b4b] focus:border-[#58cc02] focus:outline-none transition-colors", autoComplete: "current-password", required: true })] }), error && (_jsx("div", { className: "text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2", children: error })), _jsx("button", { type: "submit", disabled: loading, className: "w-full py-3 bg-[#58cc02] hover:bg-[#46a302] text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed", children: loading ? "Signing in..." : "Sign In" })] })] }) }) }));
}
//# sourceMappingURL=login-page.js.map