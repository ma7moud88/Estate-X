"use client"; // إذا كنت تستخدم Next.js 13 App Router

import Image from "next/image";
import Link from "next/link";
import {
  MdDashboard,
  MdExplore,
  MdFavorite,
  MdLogout,
  MdMail,
  MdPerson,
  MdSettings,
  MdVerified,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 h-full flex flex-col p-4 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-sm w-64 border-r rounded-none z-50">
      {/* Brand / Header Profile */}
      <div className="mb-8 flex items-center gap-3 p-2">
        <div className="relative">
          <Image
            alt="User profile picture with verified badge"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2n_Gotvmwh6_-53KwOmkIoGewoLtOWpCj1yOJtUuGyX08MYs8Kk_0pHb79FAGifQgw2JRn83kJYwycekaXRzCB7fm5bb0arl9djRLQ2EFzB2fHV8tofiQsaniKZVNY2SdGMZNgYGbAH0fNsXvhhYWQR1c4Eamtb4BKd4ye6s_3CUaY1JjOTLtwsmc5FsjLLoDvANruk5YRylPwD67zWvLaMJkueTGwpO9FOuWZEoKWWQocZ5vLZoCdVhdIVoQTV0Zi9qN7gkNiUpE"
            width={48} // w-12 = 12*4 = 48px
            height={48} // h-12 = 12*4 = 48px
            className="rounded-full object-cover border-2 border-surface-container-lowest"
          />
          <span className="absolute bottom-0 right-0 bg-primary-container text-on-primary-container rounded-full p-0.5 border-2 border-surface-container-lowest">
            <MdVerified
              className="text-[10px] leading-none"
              style={{ fontVariationSettings: `'FILL' 1` }}
            />
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline font-bold text-sm text-on-surface">
            EstateX User
          </span>
          <span className="font-body text-xs text-on-surface-variant">
            user@estatex.com
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-1 grow">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg border-r-4 border-blue-600 font-inter text-sm font-medium transition-all duration-200 ease-in-out active:scale-95"
        >
          <MdExplore />
          <span>Explore Lands</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors  dark:hover:text-slate-100 font-inter text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 hover:text-blue-600"
        >
          <MdFavorite className="text-[16px] text-white " />
          <span>Wishlist</span>
        </Link>

        <Link
          href="/Pages/dashboard"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors  dark:hover:text-slate-100 font-inter text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 hover:text-blue-600"
        >
          <MdDashboard className="text-[16px]" />
          <span>Dashboard</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors  dark:hover:text-slate-100 font-inter text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 hover:text-blue-600"
        >
          <MdPerson className="text-[16px]" />
          <span>Profile</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors  dark:hover:text-slate-100 font-inter text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 hover:text-blue-600"
        >
          <MdMail className="text-[16px]" />
          <span>Messages</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors  dark:hover:text-slate-100 font-inter text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 hover:text-blue-600"
        >
          <MdSettings className="text-[16px]" />
          <span>Settings</span>
        </Link>
      </div>

      {/* Footer / Logout */}
      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors  dark:hover:text-slate-100 font-inter text-sm font-medium transition-all duration-200 ease-in-out active:scale-95 hover:text-blue-600"
        >
          <MdLogout className="text-[16px]" />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
