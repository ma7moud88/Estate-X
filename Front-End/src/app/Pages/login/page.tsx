"use client";

import Link from "next/link";
import { MdLock, MdMail, MdRealEstateAgent } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

     
      login(data.user);

      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
        }}
      />

      <div className="absolute top-[-10%] right-[-5%] w-100 h-100 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-75 h-75 bg-tertiary/5 rounded-full blur-[60px] pointer-events-none" />

      <main className="w-full max-w-md px-6 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <MdRealEstateAgent className="text-primary text-3xl" />
            <span className="font-headline font-bold text-2xl tracking-tight">
              EstateX
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-8 w-full">
          <div className="text-center mb-8">
            <h1 className="font-headline font-semibold text-2xl mb-2">
              Welcome Back
            </h1>
            <p className="text-on-surface-variant text-sm font-label">
              Login to access your account and explore lands
            </p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email address
              </label>
              <div className="relative">
                <MdMail className="absolute left-3 top-2.5 text-outline text-[20px]" />
                <input
                  type="email"
                  placeholder="realesate@estate.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <MdLock className="absolute left-3 top-2.5 text-outline text-[20px]" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-on-primary-fixed-variant transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-on-surface-variant">
          Don it have an account?{" "}
          <Link
            href="/Pages/register"
            className="text-primary hover:text-on-primary-fixed-variant"
          >
            Register
          </Link>
        </p>
      </main>
    </div>
  );
}
