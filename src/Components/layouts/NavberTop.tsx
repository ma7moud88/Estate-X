import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
export default function NavbarTop() {
  return (
    <>
      {/* Navbar */}
      <nav className="docked full-width top-0 border-b border-slate-100 bg-white z-50 sticky">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link
              className="text-2xl font-black tracking-tight text-primary-container"
              href="#"
            >
              EstateX
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:text-primary-container transition-colors hidden md:flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low">
              <FiGlobe className="text-lg" />
            </button>
            <Link
              href="#"
              className="text-sm font-medium text-slate-600 hover:text-primary-container hidden md:inline-block"
            >
              Login
            </Link>
            <Link
              href="#"
              className="text-sm font-medium bg-primary-container text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
