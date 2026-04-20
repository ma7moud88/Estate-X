import Image from "next/image";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { MdMenu, MdRealEstateAgent } from "react-icons/md";
export default function NavbarTop() {
  return (
    <>
      {/* Navbar */}
      {/* <nav className="docked full-width top-0 border-b border-slate-100 bg-white z-50 sticky">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-black tracking-tight text-primary-container"
            >
              <MdRealEstateAgent
                aria-hidden="true"
                className="text-primary group-hover:opacity-80 transition-opacity"
              />
              EstateX
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:text-primary-container transition-colors hidden md:flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low">
              <FiGlobe className="text-lg" />
            </button>
            <Link
              href="/Pages/login"
              className="text-sm font-medium text-slate-600 hover:text-primary-container hidden md:inline-block"
            >
              Login
            </Link>
            <Link
              href="/Pages/register"
              className="text-sm font-medium bg-primary-container text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </nav> */}
      {/* after login or register */}
      <nav>
        <div className="bg-surface text-on-surface">
          {/* TopNavBar */}
          <nav className="bg-surface-container-lowest border-b border-outline-variant h-[64px] flex items-center fixed top-0 w-full z-40 transition-colors">
            <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
              {/* Left */}
              <div className="flex items-center gap-4">
                <button className="text-on-surface hover:text-primary p-2 rounded-full hover:bg-surface-container-low">
                  <MdMenu className="text-[24px]" />
                </button>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-2xl font-black tracking-tight text-primary-container"
                >
                  <MdRealEstateAgent
                    aria-hidden="true"
                    className="text-primary group-hover:opacity-80 transition-opacity"
                  />
                  EstateX
                </Link>
              </div>

              {/* Center */}
              <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <Link href="#" className="border-b-2 border-[#C9A857] pb-1">
                  Home
                </Link>
                <Link href="#" className="text-outline hover:text-primary">
                  Explore
                </Link>
                <Link href="#" className="text-outline hover:text-primary">
                  Recent Listings
                </Link>
                <Link href="#" className="text-outline hover:text-primary">
                  Wishlist
                </Link>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4">
                <button className="text-outline hover:text-primary p-2 rounded-full hover:bg-surface-container-low">
                  <span className="material-symbols-outlined">search</span>
                </button>

                <div className="relative group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT3Kv7_PYwkJ7nn4C8roMlFb7Zbc12_k53xRgqem5q1smVZOs7LfTR-OHF4QN_QEBM9SvxAAedNIKfV9t-EiBsh4f8221M8clqj3wwpwNwR-UyDiwdoM7bHS62eoMSnELuSQsOMN3DGGldq_QE-d9wwOk7yguTb_HQQ-tDQ2nFl3nxByMdIprsXHSvBWLOGoVQ-KOD0z5RE59ao246qgp2V0KvvKY7FLE76Wd37LC1h_IeW56ysZRZtFKjFvpLHz8a3tmSWQ9Z9oLs"
                    alt="Profile"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover cursor-pointer"
                  />

                  {/* Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant py-2 hidden group-hover:block">
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-surface-container-low"
                    >
                      Profile
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-surface-container-low"
                    >
                      Wishlist
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-surface-container-low"
                    >
                      Dashboard
                    </Link>
                    <div className="h-px bg-outline-variant my-1"></div>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-error hover:bg-error-container"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}
