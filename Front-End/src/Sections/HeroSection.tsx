import Image from "next/image";
import {
  FiMapPin,
  FiChevronDown,
  FiHome,
  FiDollarSign,
  FiSearch,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Find Your Next Land, <br className="hidden lg:block" />
              </h1>

              <p className="text-lg lg:text-xl text-slate-500 max-w-lg leading-relaxed">
                Search, compare, and connect with trusted sellers in New Qena.
                Your perfect plot is just a few clicks away.
              </p>
            </div>

            {/* Search */}

            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Location */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-semibold text-slate-900 uppercase tracking-wider pl-1">
                    Location
                  </label>

                  <div className="relative flex items-center">
                    <FiMapPin className="absolute left-3 text-slate-400 text-xl" />

                    <input
                      type="text"
                      placeholder="e.g. New Qena"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border-transparent focus:border-primary-container focus:bg-white focus:ring-0 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Type */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-semibold text-slate-900 uppercase tracking-wider pl-1">
                    Property Type
                  </label>

                  <div className="relative flex items-center">
                    <FiHome className="absolute left-3 text-slate-400 text-xl" />

                    <select className="w-full pl-10 pr-8 py-3 bg-slate-50 border-transparent focus:border-primary-container focus:bg-white focus:ring-0 rounded-xl text-sm font-medium text-slate-900 appearance-none cursor-pointer">
                      <option value="">Select Type</option>
                      <option>Residential Land</option>
                      <option>Commercial Plot</option>
                      <option>Agricultural</option>
                      <option>Industrial Space</option>
                    </select>

                    <FiChevronDown className="absolute right-3 text-slate-400 text-lg pointer-events-none" />
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-semibold text-slate-900 uppercase tracking-wider pl-1">
                    Budget
                  </label>

                  <div className="relative flex items-center">
                    <FiDollarSign className="absolute left-3 text-slate-400 text-xl" />

                    <select className="w-full pl-10 pr-8 py-3 bg-slate-50 border-transparent focus:border-primary-container focus:bg-white focus:ring-0 rounded-xl text-sm font-medium text-slate-900 appearance-none cursor-pointer">
                      <option value="">Any Price</option>
                      <option>Under 500k EGP</option>
                      <option>500k - 1M EGP</option>
                      <option>1M - 5M EGP</option>
                      <option>Over 5M EGP</option>
                    </select>

                    <FiChevronDown className="absolute right-3 text-slate-400 text-lg pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="w-full bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:-translate-y-0.5">
                <FiSearch />
                Search Properties
              </button>
            </div>

            {/* Trust */}

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <FiCheckCircle className="text-primary-container" />
                <span className="text-sm font-medium">Verified Listings</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <FiShield className="text-primary-container" />
                <span className="text-sm font-medium">Secure Deals</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <FiZap className="text-primary-container" />
                <span className="text-sm font-medium">Easy Process</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative w-full h-150 rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3e_Us2ihIC72sd-Ab4-kvFLKlO-H2EfOnB0t6uEK5Gr7O6GvVEiipUyVzwH74uMB6-w2gByJAhppOoqQVxBOx4PvirfMdM_0BDUp2Hlr1R64T2bd92sFzqIyHPCM3MD7KwsA9yxH6-LlmYm2cg2BR-xnMWvrpsCOeHhk7KBOwXrUJRIC9EwNXXsPObdkdBz7s_CNZG5uzXTTkWmy3mgYZRxY__ihr6fTaopBS-l3xXnKbp4ocxtZP69S_00t6AB6tYt2P5kEG1hCu"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              alt=""
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Explore Area
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Interactive Map View
                  </p>
                </div>
              </div>

              <button className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-container transition-colors">
                <FiArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
