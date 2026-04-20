"use client";

import Image from "next/image";
import Link from "next/link";
import { MdLock, MdMail, MdRealEstateAgent } from "react-icons/md";

export default function loginPage() {
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

      {/* Decorative blobs */}
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

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button
              className="w-full flex items-center justify-center gap-3 py-3 px-4
  bg-white border border-gray-200 rounded-xl
  text-sm font-medium text-gray-700
  hover:bg-gray-50 hover:border-gray-300
  hover:shadow-md hover:-translate-y-[1px]
  active:scale-[0.99]
  transition-all duration-200"
            >
              {/* Google Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92
      c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57
      c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77
      c-.98.66-2.23 1.06-3.71 1.06
      -2.86 0-5.29-1.93-6.16-4.53H2.18v2.84
      C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09
      s.13-1.43.35-2.09V7.07H2.18
      C1.43 8.55 1 10.22 1 12
      s.43 3.45 1.18 4.93l2.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64
      l3.15-3.15C17.45 2.09 14.97 1 12 1
      7.7 1 3.99 3.47 2.18 7.07l3.66 2.84
      C6.71 7.31 9.14 5.38 12 5.38z"
                />
              </svg>
              Continue with Google
            </button>

            <button
              className="w-full flex items-center justify-center gap-3 py-3 px-4
  bg-white border border-gray-200 rounded-xl
  text-sm font-medium text-gray-700
  hover:bg-gray-50 hover:border-gray-300
  hover:shadow-md hover:-translate-y-[1px]
  active:scale-[0.99]
  transition-all duration-200"
            >
              {/* Facebook SVG Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                <path
                  d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5
      c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2
      c-1.2 0-1.6.7-1.6 1.5V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z"
                />
              </svg>
              Continue with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center py-2 mb-6">
            <div className="grow border-t border-outline-variant" />
            <span className="mx-4 text-xs uppercase text-outline">
              Or continue with email
            </span>
            <div className="grow border-t border-outline-variant" />
          </div>

          {/* Form */}
          <form className="space-y-5">
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
                  className="w-full pl-10 pr-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface focus:border-primary focus:ring-primary"
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
                  className="w-full pl-10 pr-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-sm text-on-surface-variant">
                <input type="checkbox" className="accent-primary" />
                Remember me
              </label>

              <Link
                href="#"
                className="text-sm text-primary hover:text-on-primary-fixed-variant"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-on-primary-fixed-variant transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-on-surface-variant">
          Don it have an account?{" "}
          <a
            href="#"
            className="text-primary hover:text-on-primary-fixed-variant"
          >
            Register
          </a>
        </p>
      </main>
    </div>
  );
}
