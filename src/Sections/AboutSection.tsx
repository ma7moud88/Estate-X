import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiTrendingUp, FiTool, FiDollarSign } from "react-icons/fi";

export default function About() {
  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto text-on-background">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          About New Qena
        </h1>
        <p className="text-xl text-on-surface-variant font-medium">
          A growing investment opportunity in Upper Egypt
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
        {/* Main large image */}
        <div className="md:col-span-2 aspect-video rounded-3xl overflow-hidden shadow-lg relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Qf_RTocXESLtTaMSsJfQIEIZGZIskagCVC8fkQMgPVy14sH-8R_sMOzgmsHT0E-W-hbfCsJWCZ43A-fnf9A27PwCl_ymdys-JfyuEanz8GBtug0GVIxCe0s4weT0HHTAVm1obZ06lLS6K6Wa9FTGOOw0tFzlVcZNiBCXpegT66DT_0yVcWXMKNLVC6-s9NX6T9f5IvA1zHUG4b1rWBF8r0ADumQ5aWFwBOLfaIwlfY3Na99PAl4RhNck-BAZI2CiJU5uCSbkDBei"
            alt="New Qena landscape"
            fill
            className="object-cover"
          />
        </div>

        {/* Right column images */}
        <div className="grid grid-rows-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden aspect-video md:h-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJaaAnBbhSxjmDAhrPm4M0N7tutzDbiuZEjz1IySpAI_AECPjBJj17aWj5zUrfwiWk_wqPvhN6UIvnt5WbEifYPmFNb48-SI3Olen1S8ZinMIZoVpEFRdBPPnZjf5eyqHOLInAzCney6CS4QHq2bKBvyY4J6Ii33vFaXVfUp_Um_MJzWz95kMX8GfIKxIhK0zt8vgkL2b_MZFg9rZltUdqF8Hh_OUfCpBOWUFpQIkbGmffuzUC4GbY6D7k39W1clihq4BZ1JsHhbxU"
              alt="Property view 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-video md:h-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfgrPYyXDgPHvQFKWcH6Ys9AwTeF57yZUAIqMhgeYiu4eMszwI8d3VuAcXVUnkT7VX0o2Aczt5LgpcQVj--4RlEVtIxdHZlPr3BfbG58pu8CjcAk3eNuQxpbrp0ijc_HhpdP2TOLvhc4hY6HNrLE8-60yBFSKrXz7dTFauskZvCGLYmt7lRM2nY1n3Doc33OODbk94-Uqmea8bvUmx5ah4bNyUwMIzAufUUuIwltMtKEY_6k9YCqDtxs_fnVSpDhlv66dcqJuOK778"
              alt="Property view 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Strategic Urban Expansion
          </h2>

          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            New Qena is a key development zone in Upper Egypt offering strong
            investment potential with modern infrastructure and planned urban
            expansion.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
              View Lots
            </button>
            <button className="border border-outline-variant px-6 py-3 rounded-xl font-bold">
              Download Plan
            </button>
          </div>
        </div>
        {/* Cards */}

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="text-xl text-primary-container">
              <FiMapPin />
            </div>
            <h3 className="font-semibold text-slate-900 mt-2">Location</h3>
            <p className="text-sm text-slate-500">New Qena</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="text-xl text-green-600">
              <FiTrendingUp />
            </div>
            <h3 className="font-semibold text-slate-900 mt-2">Growth</h3>
            <p className="text-sm text-slate-500">High potential</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="text-xl text-primary-container">
              <FiTool />
            </div>
            <h3 className="font-semibold text-slate-900 mt-2">Development</h3>
            <p className="text-sm text-slate-500">Ongoing expansion</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="text-xl text-orange-600">
              <FiDollarSign />
            </div>
            <h3 className="font-semibold text-slate-900 mt-2">Investment</h3>
            <p className="text-sm text-slate-500">Affordable lands</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <Link
        href="https://www.google.com/maps"
        target="_blank"
        className="block"
      >
        <div className="h-96 rounded-3xl overflow-hidden relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPDSNcjklVX6JJhCUlBati0QKU8H1cCYudfddw-Ji3vGxTb8j8NrX00F3logt1nGKh5MhaYFxEavKcKEFO9-03yTabatSK9OItF16ND5LspX5EeayZpOCCrzJHmG80k43k2STsDRFazkINhco6K2yDz_WZkGjkSLo9VYauJ5vR7ENyOvmeSU5OyHbcsRul7SqykIGFR3UmN8JXb2I_d8YE7W5UP84kzA0tAaahk0fVx-b4fvD6_EWfMJXSlC7BiuKfK54tVfDbYcdV"
            alt="Map location view"
            fill
            className="object-cover"
          />
        </div>
      </Link>
    </main>
  );
}
