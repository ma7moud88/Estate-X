import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRulerCombined } from "react-icons/fa6";
import { MdExpandMore, MdLocationOn, MdRefresh } from "react-icons/md";

export default function page() {
  return (
    <>
      <main className="grow pt-24 pb-16 px-6 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-on-surface mb-2 font-headline">
              Recent Listings
            </h1>
            <p className="text-on-surface-variant text-lg">
              Discover the latest lands added to EstateX.
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full md:w-auto">
            <select className="appearance-none w-full md:w-48 bg-surface-container text-on-surface border border-outline-variant rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary font-medium cursor-pointer shadow-sm">
              <option>Sort: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Area: Largest</option>
            </select>
            <MdExpandMore className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
          </div>
        </div>

        {/* Grid Layout (FIXED spacing & clean) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-outline-variant transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA3zIhfhc010jMiwmA4xPpVD4hvlczK1q5EjMsY194VQ21svOU2wDMpNTr9oIFBdnAA2B4OQI2CL_i6gLRkwyD4w71SOB1EbYOnYhqMwH7wrmxS8a83XBvg3BeiFLKirvV3w-kHV7PKzHgXfTemkoqR3xn-w4aye2MOqm1mQzUQTQD1JbEJed-H7dbVjqn86ZRLN1CcWcqvkSp3nOrxGMf4bjxS65dxH8LH5J07l1LV7WgEc8GvLmdZ57rWRHmJUgypzDRNdVDvHFk"
                alt="Scenic view of a lush green agricultural land with gentle rolling hills under a bright blue sky"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>

              <button className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-white transition-colors shadow-sm">
                <FaHeart className="text-xl" />
              </button>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-primary">$450,000</h3>

                <span className="bg-surface-variant text-on-surface px-2.5 py-1 rounded-md text-sm font-medium">
                  Agricultural
                </span>
              </div>

              <div className="flex items-center text-on-surface-variant mb-4">
                <MdLocationOn className="text-lg mr-1" />
                <span className="text-sm">Napa Valley, California</span>
              </div>

              <div className="flex items-center justify-between border-t border-outline-variant pt-4 mt-auto mb-6">
                <div className="flex items-center text-on-surface">
                  <FaRulerCombined className="mr-1.5 text-secondary" />
                  <span className="font-medium">12,500 sqm</span>
                </div>
              </div>

              <Link
                href="/Pages/details"
                className="mt-auto inline-block text-center bg-primary-container/10 text-color-primary py-2 rounded-lg hover:bg-primary-container hover:text-white transition"
              >
                View Details
              </Link>
            </div>
          </div>

          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-outline-variant transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhg4jzA6FpoKGoWTUfyP_P1IjTJRkZNNqF7eTZEeNXZOeK9o01gN5wkKcfYmhMdjUBTIYSi4P0ot_w114p0oRJlUFYBskri4YLH1O0-KjmDHqwM7s1L2sB4FYhfIZLHFd3EvZ7Y7-hn0IA-sPpKsknWJ39fSdwsLULS2XzX_xaTaIZzTH5A0DVhhqv-K3RTuzw6YX2bKeVfw5frBDVUcyLwENCYruyPQ5BMujVvDw8TTO6drtmaPKQzsghshidh0xhSNtd-uztVeBG"
                alt="Flat residential plot surrounded by mature pine trees in a quiet suburban neighborhood with sunlight filtering through branches"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>

              <button className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-white transition-colors shadow-sm">
                <FaHeart className="text-xl" />
              </button>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-primary">$125,000</h3>

                <span className="bg-surface-variant text-on-surface px-2.5 py-1 rounded-md text-sm font-medium">
                  Residential
                </span>
              </div>

              <div className="flex items-center text-on-surface-variant mb-4">
                <MdLocationOn className="text-lg mr-1" />
                <span className="text-sm">Napa Valley, California</span>
              </div>

              <div className="flex items-center justify-between border-t border-outline-variant pt-4 mt-auto mb-6">
                <div className="flex items-center text-on-surface">
                  <FaRulerCombined className="mr-1.5 text-secondary" />
                  <span className="font-medium">850 sqm</span>
                </div>
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
          <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-outline-variant transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAVgDx0200GZlbdaTCouEn5Z-o5PxQ2bDXdqRmtSpan8JpcIgO6m3LzoAh-SIYu6PEd0EMRgxzxv8f0rYPXg0cJpZq0TgVh_TryCXaxh-AUyMWVs9HW0bePLABZdDjeljMYWwXSEG8B_StdE2DbeN-lXdDK7YTLkIQzIR7Pfy5QpySdHw9KNPujLjtgniAtXurAXNQOt6g_2ue9b6p4_nHKjeqGxotIdpza4XTWabjeWCFbEn-TaYBv3B9F0enZ_Q4MuUa19gH1Ddr"
                alt="Expansive commercial plot near a highway intersection with clear skies and distant mountains in the background"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <button className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-white transition-colors shadow-sm">
                <FaHeart className="text-xl" />
              </button>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-primary">$1,200,000</h3>
                <span className="bg-surface-variant text-on-surface px-2.5 py-1 rounded-md text-sm font-medium">
                  Commercial
                </span>
              </div>

              <div className="flex items-center text-on-surface-variant mb-4">
                <MdLocationOn className="text-lg mr-1" />
                <span className="text-sm">Napa Valley, California</span>
              </div>

              <div className="flex items-center justify-between border-t border-outline-variant pt-4 mt-auto mb-6">
                <div className="flex items-center text-on-surface">
                  <FaRulerCombined className="mr-1.5 text-secondary" />
                  <span className="font-medium">45,000 sqm</span>
                </div>
              </div>

              <Link
                href="/Pages/details"
                className="mt-auto inline-block text-center bg-primary-container/10 text-color-primary py-2 rounded-lg hover:bg-primary-container hover:text-white transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 bg-surface text-primary border border-outline-variant rounded-full font-semibold hover:bg-surface-container transition-all shadow-sm flex items-center gap-2">
            Load More
            <MdRefresh className="text-xl" />
          </button>
        </div>
      </main>
    </>
  );
}
