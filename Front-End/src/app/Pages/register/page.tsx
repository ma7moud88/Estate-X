"use client";

import Link from "next/link";
import {
  MdBadge,
  MdCloudUpload,
  MdLock,
  MdMail,
  MdPerson,
  MdPhone,
  MdVisibilityOff,
} from "react-icons/md";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col antialiased text-on-background">
      <main className="grow flex items-center justify-center p-6 relative">
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl border border-outline-variant shadow-lg overflow-hidden relative z-10">
          {/* Header */}
          <div className="px-8 pt-10 pb-6 text-center border-b border-surface-container-highest">
            <a className="inline-block mb-6" href="#">
              <span className="text-3xl font-black tracking-tighter text-primary">
                EstateX
              </span>
            </a>

            <h1 className="text-3xl font-bold font-headline text-on-surface mb-2">
              Create Your Account
            </h1>

            <p className="text-on-surface-variant font-body">
              Join EstateX and start your real estate journey
            </p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-3 text-outline text-[20px]" />
                    <input
                      type="text"
                      placeholder="Real EState"
                      className="w-full pl-10 py-3 border border-outline-variant rounded-lg bg-surface text-on-surface focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <MdMail className="absolute left-3 top-3 text-outline text-[20px]" />
                    <input
                      type="email"
                      placeholder="realestate@estate.com"
                      className="w-full pl-10 py-3 border border-outline-variant rounded-lg bg-surface text-on-surface focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <MdPhone className="absolute left-3 top-3 text-outline text-[20px]" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 py-3 border border-outline-variant rounded-lg bg-surface text-on-surface focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* National ID */}
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">
                    National ID Number
                  </label>
                  <div className="relative">
                    <MdBadge className="absolute left-3 top-3 text-outline text-[20px]" />
                    <input
                      type="text"
                      placeholder="Enter ID Number"
                      className="w-full pl-10 py-3 border border-outline-variant rounded-lg bg-surface text-on-surface focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">
                  Password
                </label>
                <div className="relative">
                  <MdLock className="absolute left-3 top-3 text-outline text-[20px]" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 border border-outline-variant rounded-lg bg-surface text-on-surface focus:ring-2 focus:ring-primary"
                  />
                  <MdVisibilityOff className="absolute right-3 top-3 text-outline cursor-pointer text-[20px]" />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">
                  Must be at least 8 characters long.
                </p>
              </div>

              {/* Upload */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">
                  Upload ID Document
                </label>

                <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 text-center bg-surface hover:bg-surface-container-low cursor-pointer">
                  <MdCloudUpload className="text-4xl text-outline" />
                  <p className="text-sm text-on-surface-variant mt-2">
                    Upload a file or drag and drop
                  </p>
                  <p className="text-xs text-outline">
                    PNG, JPG, PDF up to 10MB
                  </p>

                  <input type="file" className="hidden" />
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-primary" />
                <p className="text-sm text-on-surface-variant">
                  I agree to the{" "}
                  <a className="text-primary">Terms of Service</a> and{" "}
                  <a className="text-primary">Privacy Policy</a>.
                </p>
              </div>

              {/* Submit */}
              <button className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition">
                Create Account
              </button>
            </form>

            {/* Social */}
            <div className="mt-8 text-center text-sm text-on-surface-variant">
              Or continue with
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-surface-container-highest text-center">
            <p className="text-sm text-on-surface-variant">
              Already have an account?{" "}
              <Link href="/Pages/login" className="text-primary font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
