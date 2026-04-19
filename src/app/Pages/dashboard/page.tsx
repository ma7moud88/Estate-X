"use client";

import Image from "next/image";
import {
  MdCheckCircle,
  MdMail,
  MdRealEstateAgent,
  MdTrendingUp,
  MdVisibility,
} from "react-icons/md";

export default function SellerDashboard() {
  return (
    <main className="flex-1 ml-0 md:ml-64 h-screen overflow-y-auto bg-surface relative">
      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-3xl font-bold font-headline text-on-surface tracking-tight">
              Seller Dashboard Overview
            </h2>

            <p className="text-on-surface-variant mt-2 text-sm">
              Welcome back. Here is what is happening with your properties
              today.
            </p>
          </div>

          <div className="text-sm font-medium text-on-surface-variant bg-surface-container px-4 py-2 rounded-lg border border-outline-variant">
            October 24, 2023
          </div>
        </div>

        {/* Bento Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant relative overflow-hidden group hover:border-primary transition-colors">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-on-surface-variant text-sm font-medium">
                Total Listings
              </span>

              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                <MdRealEstateAgent className="text-xl" />
              </div>
            </div>

            <div className="text-3xl font-bold text-on-surface">12</div>

            <div className="text-xs text-tertiary mt-2 flex items-center gap-1">
              <MdTrendingUp className="text-[14px]" />
              <span>+2 this month</span>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant relative overflow-hidden group hover:border-tertiary-container transition-colors">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-container/5 rounded-full blur-2xl group-hover:bg-tertiary-container/10 transition-colors" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-on-surface-variant text-sm font-medium">
                Active Listings
              </span>

              <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary-container">
                <MdCheckCircle className="text-xl" />
              </div>
            </div>

            <div className="text-3xl font-bold text-on-surface">8</div>

            <div className="text-xs text-on-surface-variant mt-2">
              4 currently pending
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant relative overflow-hidden group hover:border-surface-tint transition-colors">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-tint/5 rounded-full blur-2xl group-hover:bg-surface-tint/10 transition-colors" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-on-surface-variant text-sm font-medium">
                Total Views
              </span>

              <div className="w-10 h-10 rounded-full bg-surface-tint/20 flex items-center justify-center text-surface-tint">
                <MdVisibility className="text-xl" />
              </div>
            </div>

            <div className="text-3xl font-bold text-on-surface">2.4k</div>

            <div className="text-xs text-tertiary mt-2 flex items-center gap-1">
              <MdTrendingUp className="text-[14px]" />
              <span>+15% from last week</span>
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant relative overflow-hidden group hover:border-error transition-colors">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-error/5 rounded-full blur-2xl group-hover:bg-error/10 transition-colors" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-on-surface-variant text-sm font-medium">
                New Messages
              </span>

              <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
                <MdMail className="text-xl" />
              </div>
            </div>

            <div className="text-3xl font-bold text-on-surface">5</div>

            <div className="text-xs text-error mt-2">Requires attention</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* My Listings Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-xl font-bold text-on-surface">
                Recent Listings
              </h3>

              <a
                href="#"
                className="text-sm font-medium text-primary hover:text-primary-container transition-colors flex items-center gap-1"
              >
                View All
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 bg-surface-container relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnIrB_Pg5O5yCqz4n7GKVr8_Ntk5UF9U1HrPLLDY5pjQMZxNa4CRQf5PclMgfAtw-CTp8c83gZchN0spEbApTB2hhjnBplRqyZtl4Pi6HR_B2dNFvgz18MwjLl22PDvDK6F3bMRB_aSLVPro2YWldb7hfojkdnyLiI6NL-su6T80KV9d8p-yOZobdqZ5RAKU89z1y7XPgmY-aCPTWSplfigxf13_ShIHTSEBGbHGRWcyidmF-SB1qOKQ1mV5BE0Xwjktz22RTsROO1"
                    alt="Prime Plot #402"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-3 right-3 bg-tertiary-container text-on-tertiary-container text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Active
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-on-surface mb-1">
                    Prime Plot #402
                  </h4>

                  <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-4">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    New Qena
                  </p>

                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-surface-variant">
                    <span className="font-bold text-primary text-lg">
                      $150,000
                    </span>

                    <div className="flex gap-2 text-on-surface-variant">
                      <button className="p-2 hover:bg-surface-variant rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>

                      <button className="p-2 hover:bg-error-container hover:text-on-error-container rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 bg-surface-container relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwblHBD5cm5VMRm75CvxS85NW_-CE1661Xrzc0COj8AW174hvyJ26pieNKPHkSWnO11URoRFLQ7KHzRibJxPWDtLXyq5ROsBDBdCjUo02B0ZrdvvXkX3Ij-VY47VJYPjgmMqZpbz-bRYyijcXWxpERdaxwWK3oOb2t8Cb_fgLEjCWfsvq5rrlZdbBBS4hExYxfTUE1gf9B-X9un2tI3kTnVEWAql15tcru0wkXjpY7U7-L_15LOLs_D4oduvG149U8VXAT1rUXNPnU"
                    alt="Riverfront Acreage"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-3 right-3 bg-[#eab308] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Pending
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-on-surface mb-1">
                    Riverfront Acreage
                  </h4>

                  <p className="text-sm text-on-surface-variant flex items-center gap-1 mb-4">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    West Bank, Luxor
                  </p>

                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-surface-variant">
                    <span className="font-bold text-primary text-lg">
                      $280,000
                    </span>

                    <div className="flex gap-2 text-on-surface-variant">
                      <button className="p-2 hover:bg-surface-variant rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>

                      <button className="p-2 hover:bg-error-container hover:text-on-error-container rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Add Form (RIGHT SIDE) */}
          <div className="lg:col-span-1">
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-sm sticky top-6">
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-outline-variant pb-4 mb-6">
                <span className="material-symbols-outlined text-primary">
                  add_circle
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Quick Add Land
                </h3>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Desert Oasis Plot"
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                {/* Price + Area */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      placeholder="100,000"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                      Area (sqm)
                    </label>
                    <input
                      type="number"
                      placeholder="500"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Location
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      location_on
                    </span>

                    <input
                      type="text"
                      placeholder="City, Region"
                      className="w-full bg-surface border border-outline-variant rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Land Type
                  </label>

                  <select className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none">
                    <option>Agricultural</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>

                {/* Upload */}
                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                    Image Upload
                  </label>

                  <div className="border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center bg-surface hover:bg-surface-container transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-3">
                      <span className="material-symbols-outlined">
                        cloud_upload
                      </span>
                    </div>

                    <p className="text-sm font-medium text-on-surface mb-1">
                      Click to upload or drag & drop
                    </p>

                    <p className="text-xs text-on-surface-variant text-center">
                      JPG, PNG up to 10MB
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="w-full bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-bold py-3 rounded-lg transition-colors mt-2 shadow-sm flex justify-center items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    publish
                  </span>
                  Publish Listing
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
