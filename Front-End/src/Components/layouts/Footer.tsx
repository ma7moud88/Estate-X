import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-white border-t border-slate-100 font-inter text-sm antialiased text-slate-600 w-full"
    >
      <h2 className="sr-only" id="footer-heading">
        Footer
      </h2>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
          <Link
            href="#"
            className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded w-fit"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-primary group-hover:opacity-80 transition-opacity"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              landscape
            </span>
            EstateX
          </Link>

          <p className="text-slate-500 max-w-xs leading-relaxed">
            Trusted land marketplace in New Qena. Find your perfect plot for
            residential, commercial, or agricultural needs.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4 tracking-wide uppercase text-xs">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-blue-600 font-semibold focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/explore"
                className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block"
              >
                Explore Lands
              </Link>
            </li>

            <li>
              <Link
                href="/wishlist"
                className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block"
              >
                Wishlist
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4 tracking-wide uppercase text-xs">
            Explore
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                href="/residential"
                className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block"
              >
                Residential Lands
              </Link>
            </li>

            <li>
              <Link
                href="/commercial"
                className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block"
              >
                Commercial Lands
              </Link>
            </li>

            <li>
              <Link
                href="/agricultural"
                className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block"
              >
                Agricultural Lands
              </Link>
            </li>

            <li>
              <Link
                href="/listings"
                className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm w-fit inline-block flex items-center gap-1"
              >
                Recent Listings
                <span className="inline-flex items-center rounded-full bg-surface-container-high px-1.5 py-0.5 text-[10px] font-medium text-primary">
                  New
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-slate-900 mb-2 tracking-wide uppercase text-xs">
            Contact Us
          </h3>

          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-slate-500">
              <span className="material-symbols-outlined text-[18px] mt-0.5 text-primary">
                mail
              </span>
              <a
                href="mailto:hello@estatex.com"
                className="hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
              >
                hello@estatex.com
              </a>
            </li>

            <li className="flex items-start gap-2 text-slate-500">
              <span className="material-symbols-outlined text-[18px] mt-0.5 text-primary">
                call
              </span>
              <a
                href="tel:+201234567890"
                className="hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
              >
                +20 123 456 7890
              </a>
            </li>

            <li className="flex items-start gap-2 text-slate-500">
              <span className="material-symbols-outlined text-[18px] mt-0.5 text-primary">
                location_on
              </span>
              <span>New Qena City, Egypt</span>
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-slate-50">
            <div className="flex items-center gap-4">
              <a
                aria-label="Facebook"
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
              >
                <span className="material-symbols-outlined">public</span>
              </a>

              <a
                aria-label="Instagram"
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
              >
                <span className="material-symbols-outlined">share</span>
              </a>

              <a
                aria-label="LinkedIn"
                href="#"
                className="text-slate-400 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
              >
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">
          © 2026 EstateX. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs">
          <Link
            href="/privacy"
            className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
          >
            Privacy Policy
          </Link>

          <span className="text-slate-300">|</span>

          <Link
            href="/terms"
            className="text-slate-500 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
