"use client";

import Image from "next/image";
import {
  MdEdit,
  MdLockReset,
  MdPhotoCamera,
  MdVerifiedUser,
} from "react-icons/md";

export default function ProfilePage() {
  return (
    <>
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] overflow-hidden border border-slate-100">
          {/* Accent */}
          <div className="h-1.5 w-full bg-brand-accent" />

          <div className="p-8 sm:p-12">
            {/* Profile Header */}
            <div className="flex flex-col items-center text-center pb-10 border-b border-slate-100 mb-10">
              <div className="relative mb-5">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtxe_3H5KOAtkI1ACY3hiZ9ZpfMSFCv1jml4rm9apmbRTu2XyjwwopxNOAQpw-Sx3aD12DRLUP302eb53GRChfq1noEh7GdYG_rISG6Oipk3s7unt_t4dd9sE0AdJy0FVNyI-E6xMFPM62xzBgO98MgoGAZxU2dWUV1Pxa4pCn1jRqabfhOOe-Fy5H5c_lLFSxABvAhruCR7MASSJgJLWJSYRtxTM9ZtrAN8rE3RystE2AlyACyOSKZPCnLGnu8l_N7_CNbHjae-SN"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white"
                />

                <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90">
                  <MdPhotoCamera className="text-[18px]" />
                </button>
              </div>

              <h1 className="text-2xl font-bold text-on-surface mb-1">
                Real EState
              </h1>
              <p className="text-secondary">estate@estate.com</p>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-sm">
                <MdVerifiedUser className="text-[16px]" />
                Premium Buyer
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                ["Full Name", "ٌReal EState"],
                ["Email Address", "estate@estate.com"],
                ["Phone Number", "+1 (555) 284-9382"],
                ["National ID", "•••• •••• •••• 1234"],
                ["Account Type", "Buyer & Investor"],
                ["Member Since", "October 2021"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-secondary uppercase">
                    {label}
                  </label>
                  <div className="text-base font-medium text-on-surface border-b border-slate-100 pb-2 flex justify-between">
                    <span>{value}</span>
                    {label === "National ID" && (
                      <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer text-[18px]">
                        visibility
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-xl flex items-center gap-2">
                <MdEdit className="text-[20px]" />
                Edit Profile
              </button>

              <button className="px-8 py-3 bg-white border border-outline-variant rounded-xl flex items-center gap-2">
                <MdLockReset className="text-[20px]" />
                Change Password
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
