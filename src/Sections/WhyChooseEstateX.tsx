import {
  MdSearch,
  MdShield,
  MdTrendingUp,
  MdVerifiedUser,
} from "react-icons/md";

export default function WhyChooseEstateX() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface font-headline mb-6 tracking-tight">
          Why Choose EstateX
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant font-body leading-relaxed">
          Your trusted platform for buying and selling land in New Qena
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-surface-variant hover:-translate-y-2 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.15)] transition-all duration-300 ease-out flex flex-col items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" />
          <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
            <MdShield className="text-3xl" />
          </div>

          <h3 className="text-xl font-bold text-on-surface font-headline mb-3 group-hover:text-primary transition-colors">
            Trusted Listings
          </h3>

          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            All lands are verified and accurate. We ensure that every listing on
            our platform goes through a rigorous vetting process.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-surface-variant hover:-translate-y-2 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.15)] transition-all duration-300 ease-out flex flex-col items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" />

          <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
            <MdVerifiedUser className="text-3xl" />
          </div>

          <h3 className="text-xl font-bold text-on-surface font-headline mb-3 group-hover:text-primary transition-colors">
            Verified Sellers
          </h3>

          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            Sellers are checked for safe transactions. Deal with confidence
            knowing our community is built on trust and transparency.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-surface-variant hover:-translate-y-2 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.15)] transition-all duration-300 ease-out flex flex-col items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" />

          <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
            <MdSearch className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-on-surface font-headline mb-3 group-hover:text-primary transition-colors">
            Easy & Fast Search
          </h3>

          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            Smart filters to find the perfect land quickly. Our intuitive search
            engine gets you to your ideal property in seconds.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-surface-variant hover:-translate-y-2 hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.15)] transition-all duration-300 ease-out flex flex-col items-start relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed opacity-20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" />
          <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
            <MdTrendingUp className="text-3xl" />
          </div>

          <h3 className="text-xl font-bold text-on-surface font-headline mb-3 group-hover:text-primary transition-colors">
            Smart Investment
          </h3>

          <p className="text-on-surface-variant font-body leading-relaxed text-sm">
            Great opportunities for land investment. Unlock the potential of
            growing neighborhoods and secure your financial future.
          </p>
        </div>
      </div>
    </main>
  );
}
