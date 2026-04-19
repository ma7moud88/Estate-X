"use client";

import { MdChatBubble, MdMap, MdSearch } from "react-icons/md";

export default function HowEstateGoldWorks() {
  return (
    <main className="grow pt-24 pb-20 px-6 sm:px-12 lg:px-24 flex items-center justify-center">
      <section className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface mb-4 tracking-tight">
            How EstateGold Works
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            Find and secure your land in just a few simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-11.25 left-[15%] right-[15%] h-0.5 bg-outline-variant/50 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-[120px] font-black text-surface-container-low opacity-50 select-none transition-transform group-hover:scale-110">
                01
              </div>

              <div className="w-24 h-24 rounded-full bg-primary-fixed flex items-center justify-center mb-6 relative z-10">
                <MdSearch className="text-4xl text-primary-container" />
              </div>

              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 relative z-10">
                Search
              </h3>

              <p className="font-body text-on-surface-variant relative z-10">
                Find lands using smart filters like location, price, and area
              </p>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-[120px] font-black text-surface-container-low opacity-50 select-none transition-transform group-hover:scale-110">
                02
              </div>
              <div className="w-24 h-24 rounded-full bg-primary-fixed flex items-center justify-center mb-6 relative z-10">
                <MdMap className="text-4xl text-primary-container" />
              </div>

              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 relative z-10">
                Choose
              </h3>

              <p className="font-body text-on-surface-variant relative z-10">
                Explore details and pick the best land for you
              </p>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-[120px] font-black text-surface-container-low opacity-50 select-none transition-transform group-hover:scale-110">
                03
              </div>

              <div className="w-24 h-24 rounded-full bg-primary-fixed flex items-center justify-center mb-6 relative z-10">
                <MdChatBubble className="text-4xl text-primary-container" />
              </div>

              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 relative z-10">
                Contact
              </h3>

              <p className="font-body text-on-surface-variant relative z-10">
                Connect directly with sellers بسهولة
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
