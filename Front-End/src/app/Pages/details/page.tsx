"use client";

import Image from "next/image";
import {
  FaRulerCombined,
  FaMapMarkedAlt,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import { MdPhotoLibrary, MdRealEstateAgent, MdShield } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";

export default function DetailsPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 md:pb-32">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-2">
              Premium Corner Plot in District 5
            </h1>

            <div className="flex items-center text-outline mb-5">
              <MdLocationOn className="text-lg mr-1" />
              <span>District 5, New Qena</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button className="p-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center">
              <FaShareAlt />
            </button>

            <button className="p-2 rounded-full border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors flex items-center justify-center">
              <FaHeart />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 mb-10 h-128 md:h-153.5">
          {/* Main Image */}
          <div className="md:col-span-3 md:row-span-2 rounded-xl overflow-hidden relative group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmn7osycUx6K-YbzBCM3E_QTsis6duZbbk76whByHeuIEGx2_Y254GZE_Zx5mYbYe-KZKXWm73CAguY5CLJpgEK7DSw3WN2z2IMJmKOHpp-iyTv6UaqcvyQW4HvrDSZHuOyZnVML3gl5R9W5n6nDbSM0bsI1ggJo9iiqnaS6QlFpwuD1flvelfLpC8BkEM3qmhy046LUnEUy4IuWTE5zojsETLRRPQAdAVcxW-jJKkp84AmQZtEIfCb7nAgLaflIJZHZzwePLQJJ-5"
              alt="Aerial view of land plot"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-md">
                <MdVerified className="text-sm mr-1" />
                Verified
              </span>

              <span className="bg-surface/90 text-on-surface px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm shadow-md">
                Residential
              </span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="hidden md:block rounded-xl overflow-hidden relative group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD--BDV-x5-vI_Koqn11wpR50IVoJ4v3mwdmkPQDtW4X14RJ_oDwVWMIXeAMK8_lXruQ5Iyt8Xy9ZNLSiFqq4RzeNuTvbQ_JYfptNcZk5HWU5sqG2U37Ka7rkLUi4QdtW7PwaP4l9pFlEKaOa3yMGAiJPBX4seTa5a208EjhXCz5tEpOwff4M7NDIO6kWfVp02tX4qbTha02hjwRYCqoz_Brvi2ys_FduAqvqb9cZvtEsc9U0KB8rRneDQWIvUqxPBaKKik-8ViZrbX"
              alt="Surrounding area"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Image 3 */}
          <div className="hidden md:block rounded-xl overflow-hidden relative group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRz-dTOTIxi-tdPemR2yMAsIpGrVTX0nMoXGialBo4crY9v5sdoktQzUBFSIcBb2VqaQAPcCykQcJeIrHt03jBhou-UncvZR6GBsfiN5rj-x5c8j8uHyIisivd6rcL12ynsL1k3rxTYwKTx3LgsaVJ3BeAqIpIv2l7UjduhlX-IpSM77RoF_F8GsDnpgt9GvZD2phiDS-3Q013TNRBgCvq3x27eUR5BJtBFv8daHbuS8R6Rbjig1cSsTWy8xvqMvfiJdaAXym9jIzN"
              alt="Development plan"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <button className="absolute inset-0 bg-black/40 flex items-center justify-center text-white hover:bg-black/50 transition-colors">
              <div className="flex items-center font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                <MdPhotoLibrary className="mr-2 text-lg" />
                See all photos
              </div>
            </button>
          </div>
        </div>
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Details */}
          <div className="w-full lg:w-2/3">
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 py-6 border-y border-outline-variant/30 mb-8">
              {/* Area */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mr-4">
                  <FaRulerCombined className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-outline font-medium">Area</p>
                  <p className="text-lg font-bold text-on-surface">800 sqm</p>
                </div>
              </div>

              {/* Type */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mr-4">
                  <MdRealEstateAgent className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-outline font-medium">Type</p>
                  <p className="text-lg font-bold text-on-surface">
                    Residential
                  </p>
                </div>
              </div>

              {/* Zone */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mr-4">
                  <FaMapMarkedAlt className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-outline font-medium">Zone</p>
                  <p className="text-lg font-bold text-on-surface">
                    Villa Zone A
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-2/3">
            {/* About */}
            <section className="mb-10">
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
                About this property
              </h2>

              <p className="text-on-surface-variant leading-relaxed mb-6">
                An exceptional opportunity to acquire a premium corner plot in
                the highly sought-after District 5 of New Qena. This 800 square
                meter residential parcel is perfectly positioned for building a
                luxury villa with a spacious garden. The plot benefits from a
                dual frontage, overlooking a 20m wide main street and a quiet
                12m side street, ensuring privacy and ease of access.
              </p>

              <p className="text-on-surface-variant leading-relaxed mb-6">
                The land is fully licensed for a basement, ground floor, first
                floor, and a roof annex. All primary infrastructure including
                water, electricity, and high-speed fiber internet are already
                connected to the boundary line. Located just 5 minutes from the
                central commercial hub and upcoming international school.
              </p>

              <h3 className="text-xl font-headline font-semibold text-on-surface mb-4">
                Key Features
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-on-surface-variant">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mr-2 text-xl mt-0.5" />
                  Premium corner plot location
                </li>

                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mr-2 text-xl mt-0.5" />
                  20m wide main street frontage
                </li>

                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mr-2 text-xl mt-0.5" />
                  Near commercial services
                </li>

                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mr-2 text-xl mt-0.5" />
                  All utilities connected
                </li>

                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mr-2 text-xl mt-0.5" />
                  Ready for immediate construction
                </li>

                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mr-2 text-xl mt-0.5" />
                  Clear title deed
                </li>
              </ul>
            </section>

            {/* Map */}
            <section className="mb-10">
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
                Location
              </h2>

              <p className="text-on-surface-variant mb-4">
                District 5, New Qena, Egypt
              </p>

              <div className="h-80 w-full rounded-xl overflow-hidden bg-surface-container relative border border-outline-variant/30">
                <div className="absolute inset-0 bg-secondary-container">
                  <div
                    className="w-full h-full opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #cbd5e1 25%, transparent 25%, transparent 75%, #cbd5e1 75%, #cbd5e1), repeating-linear-gradient(45deg, #cbd5e1 25%, #f1f5f9 25%, #f1f5f9 75%, #cbd5e1 75%, #cbd5e1)",
                      backgroundPosition: "0 0, 10px 10px",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                <Link
                  href="https://maps.google.com/?q=30.0444,31.2357"
                  target="_blank"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                >
                  <div className="bg-primary text-white p-2 rounded-full shadow-lg animate-bounce">
                    <MdLocationOn className="text-2xl" />
                  </div>
                </Link>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="w-full lg:w-1/3 self-start">
            <div className="lg:sticky lg:top-24 bg-surface rounded-2xl border border-outline-variant/30 p-6 shadow-sm flex flex-col gap-6">
              {/* Price */}
              <div>
                <p className="text-sm text-outline font-medium uppercase tracking-wider mb-1">
                  Asking Price
                </p>

                <h2 className="text-4xl font-headline font-black text-primary">
                  2,500,000{" "}
                  <span className="text-2xl text-on-surface font-bold">
                    EGP
                  </span>
                </h2>

                <p className="text-sm text-on-surface-variant mt-2">
                  ≈ 3,125 EGP / sqm
                </p>
              </div>

              <div className="w-full h-px bg-outline-variant/30"></div>

              {/* Seller */}
              <div>
                <p className="text-sm text-outline font-medium uppercase tracking-wider mb-4">
                  Listed By
                </p>

                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl mr-4 overflow-hidden border-2 border-surface relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAExTinzuiN60SZ3iNrVIKUs9opZ35F0Bc6h37MCH3QuaxGA3De6o6CU6WMmuv8pQ4RI1LVRuNYOT5rNG3TltqEAKfEmjpdP6gLIpWcIPAuvkYyu9Dp0bQpBlfry29n4XJKgXrM-cH_M7mDk0kbXVDGAZSOsm2-tHGsWDCTdjkgKV4VfkZyORmrqFALIc8XUjJPOL5H5YT-oah87qt7nxyTyWn-uI-9mLVqFMjGu821PAtdOpw58G7n48SHjJs9hOYZjTVjPCTiKQ7e"
                      alt="Agent Profile"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-on-surface text-lg flex items-center">
                      Ahmed Hassan
                      <MdVerified className="text-tertiary text-sm ml-1" />
                    </h3>

                    <p className="text-sm text-on-surface-variant">
                      Premier Realty Agency
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold">
                    Call Seller
                  </button>

                  <button className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold">
                    WhatsApp
                  </button>
                </div>
              </div>

              <div className="w-full h-px bg-outline-variant/30"></div>

              {/* Safety */}
              <div className="bg-surface-container-low p-4 rounded-xl flex items-start">
                <MdShield className="text-outline mr-3 mt-1 text-xl shrink-0" />

                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Never wire money or pay a deposit before meeting the seller
                  and signing a contract.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Similar Lands Grid */}
        <section className="mt-20 border-t border-outline-variant/30 pt-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-headline font-bold text-on-surface">
                Similar Lands
              </h2>
              <p className="text-on-surface-variant mt-1">
                Explore other residential plots in New Qena
              </p>
            </div>

            <button className="text-primary font-semibold hover:underline hidden md:block">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-lg transition-all duration-300">
              <div className="aspect-4/3 relative overflow-hidden bg-surface-variant group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI3vsPsOq8UVelwFpSFHvEVFNfqH9eEko-92pOFH7lBfohO2Ayze1DEVOskJ-h8Ta_qhEkeqEOjnmyB_-FLvuqcxwLsVIX3RJCPd0NG0EAxDe4n5al5_tkRTm6e3GsnegLVOWO_JZGQSEzGbsk8c0dZnV2Wel0Tc7Y1A08tkT5BUlEA-CpzmXjINb2dH-8d9o8Eymf2C8qk70phKaBmayP1UimKvnzTwabuiDqkm-vATupATouGpiUoNPoa4cagHgD929AZ_rlghB7"
                  alt="Similar land plot"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Favorite Icon */}
                <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm p-1.5 rounded-full text-outline hover:text-error cursor-pointer transition-colors">
                  <FaHeart className="text-xl" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-on-surface mb-1">
                  Residential Plot - District 4
                </h3>
                <p className="text-on-surface-variant text-sm mb-3">New Qena</p>
                <div className="flex gap-4 text-sm text-outline mb-4">
                  <span className="flex items-center">
                    <FaRulerCombined className="text-sm mr-1" />
                    600 sqm
                  </span>
                </div>
                <div className="text-xl font-bold text-primary">
                  1,800,000 EGP
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-lg transition-all duration-300">
              <div className="aspect-4/3 relative overflow-hidden bg-surface-variant group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDo5C13cn7bh9iX7LhTcjZ37dPjW_ict6JiaMxZncrGxhtwnm3xKQalwIsbR5QR91to-8QnmoggmnV-yMliq16AT-22O8zGuRLlWnQbx4qoG7xDaGR7D2Npiuhd3_UTJux-7Scc1ft1gfaqiVYGP2GuKas0hRpiG8kYLcGakBVHT1cc44pi339XIi_Lr3n9qFQiKOsO5cXO0rmfmZmWhhn1xXhDRrlMWZD8a1LHaowesMXi8nSJwgIO6hAcncaRX4UlSpKjtOTbeMK"
                  alt="Similar land plot"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-tertiary text-on-tertiary text-xs font-bold px-2 py-1 rounded shadow-sm">
                  NEW
                </div>
                <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm p-1.5 rounded-full text-outline hover:text-error cursor-pointer transition-colors">
                  <FaHeart className="text-xl" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-on-surface mb-1">
                  Villa Plot - Premium Zone
                </h3>
                <p className="text-on-surface-variant text-sm mb-3">
                  District 5, New Qena
                </p>

                <div className="flex gap-4 text-sm text-outline mb-4">
                  <span className="flex items-center">
                    <FaRulerCombined className="text-sm mr-1" />
                    600 sqm
                  </span>
                </div>

                <div className="text-xl font-bold text-primary">
                  3,100,000 EGP
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-lg transition-all duration-300 hidden md:block">
              <div className="aspect-4/3 relative overflow-hidden bg-surface-variant">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw8w9r-VEkqKPB1bnEnEYRS8HhDVYk6RBP-xsL2fbWYlfvLul-6VRRcmg9xPKp18aH5n1v7039oTrxTvks9R7WryAm18dtiMotbT6_rfKGOONjxFsakIYZ0QwIdxRP28lc3-g3mX0dTxgOgIdHZ9Uy8RVbrWFDhWkmE-VWgvSxZPyXekwKjuwO2z-_mCth2RMYBjQgfp7Zf68rnAURdvsZKV37I410yE0buUrcozbxtbpuQoZjsL4SD0x__v1ofJfifV9DDI1k6M5x"
                  alt="Similar land plot"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3 bg-surface/90 backdrop-blur-sm p-1.5 rounded-full text-outline hover:text-error cursor-pointer transition-colors">
                  <FaHeart className="text-xl" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-on-surface mb-1">
                  Standard Plot - District 6
                </h3>
                <p className="text-on-surface-variant text-sm mb-3">New Qena</p>

                <div className="flex gap-4 text-sm text-outline mb-4">
                  <span className="flex items-center">
                    <FaRulerCombined className="text-sm mr-1" />
                    600 sqm
                  </span>
                </div>

                <div className="text-xl font-bold text-primary">
                  1,400,000 EGP
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Contact */}
        <div className="lg:hidden fixed bottom-0 w-full bg-surface border-t border-outline-variant/30 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-3">
          <button className="flex-1 py-3.5 bg-primary text-on-primary rounded-xl font-bold hover:bg-primary/90 transition-colors flex justify-center items-center shadow-md">
            <span className="material-symbols-outlined mr-2">call</span>
            Call
          </button>

          <button className="flex-1 py-3.5 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-colors flex justify-center items-center shadow-md">
            WhatsApp
          </button>
        </div>
      </main>
    </>
  );
}
