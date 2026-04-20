"use client";

import Image from "next/image";
import { MdArrowForward, MdLandscape } from "react-icons/md";

export default function PreFooter() {
  return (
    <section className="w-full py-24 px-6 lg:px-8 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-8">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
            Own Your Land Today
          </h2>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant font-medium max-w-lg">
            Simple steps. Trusted sellers. Smart investment.
          </p>
          <button className="mt-4 px-8 py-4 bg-primary-container text-on-primary-container rounded-lg font-label font-semibold text-lg hover:bg-primary transition-colors duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
            Explore Lands
            <MdArrowForward className="text-[16px]" />
          </button>
        </div>

        {/* Right Side: Image/Map Grid */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="aspect-4/3 rounded-xl overflow-hidden shadow-xl bg-surface-container-high relative group">
            <Image
              alt="Aerial view of land"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9LG1NPqHKo4fTd-rbW6ehW1064BOCeEnh64Ir0u6YxIKNxeN9wQavjiWdTwuudkXAkQVHxTMCmpSvtuaPxbgE4WMTxoTyzYOTuSOz6uHl7H9XE58rCE_NLMESfTBffaOB84BmzIPZ7fN1Loa8GKd6D2nTfaz6O3O5wLqCHvI89E4jvm2Pq0OAOuD1LNqjLZaXDztLDVyRGPz4Z9wRtpm2AB39hKO-MpUYZYfT3B8kTVU02TcU5dNkBp2wyRkP31Pj9-Ycm0qjxyhr"
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              unoptimized
            />
            {/* Subtle Light Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-on-surface/5 to-transparent mix-blend-overlay pointer-events-none"></div>
            {/* Decorative Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            ></div>
          </div>

          {/* Floating Decorative Element */}
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-lg shadow-lg border border-outline-variant/30 flex items-center gap-3 animate-pulse">
            <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
              <MdLandscape className="text-primary-container text-[16px]" />
            </div>
            <div>
              <p className="font-label text-sm font-semibold text-on-surface">
                Verified Plots
              </p>
              <p className="font-body text-xs text-on-surface-variant">
                Available Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
