"use client";

import Image from "next/image";
import Link from "next/link";
import { FiBriefcase, FiFilter, FiLayers, FiMaximize2 } from "react-icons/fi";
import { MdArrowForward } from "react-icons/md";

export default function LandsPage() {
  return (
    <main className="bg-color-surface-bright text-color-on-surface min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto w-full font-[Inter]">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Available Lands in New Qena
        </h1>
        <p className="text-color-on-surface-variant text-lg">
          Explore verified lands and find the best deal.
        </p>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-color-surface-bright/90 backdrop-blur-md rounded-xl p-4 mb-8 shadow-sm border border-white/10 flex flex-col md:flex-row gap-4 items-end">
        {/* Location */}
        <div className="w-full md:w-1/4">
          <label className="block text-sm font-medium text-color-on-surface-variant mb-1">
            Location
          </label>
          <select className="w-full px-4 py-2 rounded-lg border border-color-outline-variant bg-white text-color-on-surface text-sm">
            <option>New Qena</option>
            <option>Qena City</option>
            <option>West Qena</option>
          </select>
        </div>

        {/* Type */}
        <div className="w-full md:w-1/4">
          <label className="block text-sm font-medium text-color-on-surface-variant mb-1">
            Land Type
          </label>
          <select className="w-full px-4 py-2 rounded-lg border border-color-outline-variant bg-white text-color-on-surface text-sm">
            <option>All Types</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Agricultural</option>
          </select>
        </div>

        {/* Area */}
        <div className="w-full md:w-1/4">
          <label className="block text-sm font-medium text-color-on-surface-variant mb-1">
            Area (sqm)
          </label>
          <select className="w-full px-4 py-2 rounded-lg border border-color-outline-variant bg-white text-color-on-surface text-sm">
            <option>Any Size</option>
            <option>Under 500</option>
            <option>500 - 1000</option>
            <option>Over 1000</option>
          </select>
        </div>

        {/* Price + Button */}
        <div className="w-full md:w-1/4 flex gap-4">
          <div className="grow">
            <label className="block text-sm font-medium text-color-on-surface-variant mb-1">
              Price Range
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-color-outline-variant bg-white text-color-on-surface text-sm">
              <option>Any Price</option>
              <option>Under 1M EGP</option>
              <option>1M - 3M EGP</option>
              <option>Over 3M EGP</option>
            </select>
          </div>

          <button className="bg-primary-container text-white px-6 py-2 rounded-lg font-medium hover:bg-color-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2 self-end h-9.5">
            <FiFilter />
            Filter
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="group bg-white rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
          {" "}
          <div className="relative h-48 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNPhdj2Bg3mgRz8sc0ie70C7C1-LuHJYv6ojqa7wxkLF3rDjJWsne8j6iM6OmeaijLTMrjWIt2pnEkuUvrSlh4W5M2jemy_ZoYqmDpcGb6PvhQPKM_iKw47YPXK5qpSjOc_YZ-Ql8-iK3funsREX54ShS3PVWL-BJOXHaBsKXIitDgYwsWDF_DCiLVUmEN1Ei8fSGcVmZ_z2Dsz0ljL1GuEi6A8Ml5vWO43j-pg4j94xJ-iyzBE-DQPfUFK0vG9jfFdfT2-X1AkmxM"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              alt=""
            />

            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
              Verified
            </div>

            <div className="absolute top-3 right-3 bg-white text-color-on-surface font-bold px-3 py-1 rounded-full text-sm">
              1,250,000 EGP
            </div>
          </div>
          <div className="p-5 flex flex-col grow">
            <h3 className="font-semibold text-lg">Premium Corner Plot</h3>
            <p className="text-sm text-color-on-surface-variant mt-1">
              District 4, New Qena
            </p>
            <div className="flex justify-between text-sm text-color-on-surface-variant py-3 mt-4">
              <span className="flex items-center gap-2">
                <FiMaximize2 className="text-base text-slate-500" />
                600 sqm
              </span>

              <span className="flex items-center gap-2">
                <FiLayers className="text-base text-slate-500" />
                Residential
              </span>
            </div>
            <Link
              href="/Pages/details"
              className="mt-auto inline-block text-center bg-primary-container/10 text-color-primary py-2 rounded-lg hover:bg-primary-container hover:text-white transition"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
          {" "}
          <div className="relative h-48 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB21sCVXzr1NTNOWxLUjx7pNUvmGhRHWgmwTbOTKFiT0kpJiZ0DjjKTuVWqMehFl-kvccHYm1a8GVGEikfnBKl543dv9veo3PYx0tvwYFHrww8Y6XNCCVSXyOgjAKs_jUPtjD_JJLXzPB-jfwUEYOtdcMy5Kcahhyjag2J6VaEQLZ4EiRqXfJx-KBbnHKP03380_bk6BqQQHCjQXe7J9af3sjfAm9hQsQfVOQEwmQBisZ_bXTzXfNFLiganPG9M38YD-w6Ihhl4XuBO"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              alt=""
            />

            <div className="absolute top-3 right-3 bg-white text-color-on-surface font-bold px-3 py-1 rounded-full text-sm">
              3,500,000 EGP
            </div>
          </div>
          <div className="p-5 flex flex-col grow">
            <h3 className="font-semibold text-lg">Main Street Frontage</h3>
            <p className="text-sm text-color-on-surface-variant mt-1">
              Commercial Center, New Qena
            </p>

            <div className="flex justify-between text-sm text-color-on-surface-variant py-3 mt-4">
              <span className="flex items-center gap-2">
                <FiMaximize2 className="text-base text-slate-500" />
                1,200 sqm
              </span>

              <span className="flex items-center gap-2">
                <FiBriefcase className="text-base text-slate-500" />
                Commercial
              </span>
            </div>
            <Link
              href="/Pages/details"
              className="mt-auto inline-block text-center bg-primary-container/10 text-color-primary py-2 rounded-lg hover:bg-primary-container hover:text-white transition"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
          {" "}
          <div className="relative h-48 overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4vFHGFcRnOX1QsUilJ5La-elWr8j4tJOHR4gviz8YiVG7HcmBpkixXjzG6jpw2jaiPKweUoH_f45ywHQLqLvQO0c2cdT9nTsKtXLq7p6t7J5ALiT_jFOXlh33gIGbdORw8hHunJ0fNzGzeaD6J97VhRSxHDJRFYziL22IEvi8I1AmbTuTvmGW8yNXrRDMpVc0DUK1_Ff158OQLfENEyTekB4IbG4qgcJ130Ihpasddhf_qnauUjAyb-l6pUD7hjOKI3vZGBGm0DaI"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              fill
              alt=""
            />

            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
              Verified
            </div>

            <div className="absolute top-3 right-3 bg-white text-color-on-surface font-bold px-3 py-1 rounded-full text-sm">
              850,000 EGP
            </div>
          </div>
          <div className="p-5 flex flex-col grow">
            <h3 className="font-semibold text-lg">Quiet Neighborhood Plot</h3>
            <p className="text-sm text-color-on-surface-variant mt-1">
              District 2, New Qena
            </p>

            <div className="flex justify-between text-sm text-color-on-surface-variant py-3 mt-4">
              <span className="flex items-center gap-2">
                <FiMaximize2 />
                450 sqm
              </span>

              <span className="flex items-center gap-2">
                <FiLayers />
                Residential
              </span>
            </div>

            <Link
              href="/Pages/dashboard"
              className="mt-auto inline-block text-center bg-primary-container/10 text-color-primary py-2 rounded-lg hover:bg-primary-container hover:text-white transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-b border-outline-variant pb-4 gap-2 mt-10">
        <h3 className="text-xl font-bold text-on-surface text-center">
          Recent Listings
        </h3>

        <Link
          href="/Pages/recent-listings"
          className="text-sm font-medium text-primary hover:text-primary-container transition-colors flex items-center gap-1"
        >
          View All
          <MdArrowForward className="text-[16px]" />
        </Link>
      </div>
    </main>
  );
}
